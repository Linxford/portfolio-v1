import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Content {
  id: string;
  section: string;
  key: string;
  value: string;
  type: 'text' | 'textarea' | 'url' | 'json';
}

interface ContentState {
  contents: Content[];
  loading: boolean;
  error: string | null;
  fetchContents: () => Promise<void>;
  updateContent: (id: string, value: string) => Promise<void>;
}

export const useContentStore = create<ContentState>((set, get) => ({
  contents: [],
  loading: false,
  error: null,
  fetchContents: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('contents')
        .select('*')
        .order('section', { ascending: true });

      if (error) throw error;
      set({ contents: data || [], loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  updateContent: async (id: string, value: string) => {
    try {
      const { error } = await supabase
        .from('contents')
        .update({ value })
        .eq('id', id);

      if (error) throw error;
      
      // Update local state immediately for better UX
      set(state => ({
        contents: state.contents.map(content =>
          content.id === id ? { ...content, value } : content
        )
      }));
    } catch (error: any) {
      set({ error: error.message });
      throw error;
    }
  }
}));