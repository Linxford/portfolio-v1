import { useEffect, useState } from 'react';
import { useContentStore } from '../store/contentStore';

export function useContent(section: string) {
  const { contents, fetchContents } = useContentStore();
  const [sectionContent, setSectionContent] = useState<Record<string, any>>({});

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  useEffect(() => {
    const sectionData = contents
      .filter(content => content.section === section)
      .reduce((acc, content) => {
        try {
          acc[content.key] = content.type === 'json' 
            ? JSON.parse(content.value)
            : content.value;
        } catch (e) {
          acc[content.key] = content.value;
        }
        return acc;
      }, {} as Record<string, any>);

    setSectionContent(sectionData);
  }, [contents, section]);

  return sectionContent;
}