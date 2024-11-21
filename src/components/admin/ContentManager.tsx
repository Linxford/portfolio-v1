import React, { useEffect, useState } from 'react';
import { Save, Loader2, AlertCircle } from 'lucide-react';
import { useContentStore } from '../../store/contentStore';

export default function ContentManager() {
  const { contents, loading, error, fetchContents, updateContent } = useContentStore();
  const [editedValues, setEditedValues] = useState<Record<string, string>>({});
  const [savingStates, setSavingStates] = useState<Record<string, boolean>>({});
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const validateValue = (value: string, type: string) => {
    if (type === 'json') {
      try {
        JSON.parse(value);
        return '';
      } catch (e) {
        return 'Invalid JSON format';
      }
    }
    return '';
  };

  const handleChange = (id: string, value: string, type: string) => {
    setEditedValues(prev => ({ ...prev, [id]: value }));
    const error = validateValue(value, type);
    setValidationErrors(prev => ({
      ...prev,
      [id]: error
    }));
  };

  const handleSave = async (id: string, type: string) => {
    const value = editedValues[id];
    const error = validateValue(value, type);
    if (error) {
      setValidationErrors(prev => ({ ...prev, [id]: error }));
      return;
    }

    setSavingStates(prev => ({ ...prev, [id]: true }));
    try {
      await updateContent(id, value);
      setEditedValues(prev => {
        const newValues = { ...prev };
        delete newValues[id];
        return newValues;
      });
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    } catch (err) {
      console.error('Failed to save:', err);
    } finally {
      setSavingStates(prev => ({ ...prev, [id]: false }));
    }
  };

  const sections = Array.from(new Set(contents.map(content => content.section)));

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="animate-spin text-blue-500" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Content Management</h1>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg flex items-center gap-2">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {sections.map(section => (
        <div key={section} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-lg font-semibold capitalize">{section}</h2>
          </div>
          <div className="p-6 space-y-6">
            {contents
              .filter(content => content.section === section)
              .map(content => (
                <div key={content.id} className="space-y-2">
                  <label className="block text-sm font-medium capitalize">
                    {content.key.replace(/_/g, ' ')}
                  </label>
                  {content.type === 'textarea' ? (
                    <textarea
                      value={editedValues[content.id] ?? content.value}
                      onChange={(e) => handleChange(content.id, e.target.value, content.type)}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    />
                  ) : content.type === 'json' ? (
                    <textarea
                      value={editedValues[content.id] ?? JSON.stringify(JSON.parse(content.value), null, 2)}
                      onChange={(e) => handleChange(content.id, e.target.value, content.type)}
                      rows={8}
                      className={`w-full px-4 py-2 rounded-lg border font-mono text-sm ${
                        validationErrors[content.id]
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700`}
                    />
                  ) : (
                    <input
                      type={content.type}
                      value={editedValues[content.id] ?? content.value}
                      onChange={(e) => handleChange(content.id, e.target.value, content.type)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    />
                  )}
                  
                  {validationErrors[content.id] && (
                    <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {validationErrors[content.id]}
                    </p>
                  )}

                  {editedValues[content.id] !== undefined && !validationErrors[content.id] && (
                    <button
                      onClick={() => handleSave(content.id, content.type)}
                      disabled={savingStates[content.id]}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                    >
                      {savingStates[content.id] ? (
                        <Loader2 className="animate-spin" size={16} />
                      ) : (
                        <Save size={16} />
                      )}
                      Save Changes
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}