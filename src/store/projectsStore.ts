import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
  technologies: string[];
  status: string;
}

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  createProject: (project: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (id: string, project: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
  projects: [],
  loading: false,
  error: null,
  fetchProjects: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ projects: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  createProject: async (project) => {
    try {
      const { error } = await supabase
        .from('projects')
        .insert([project]);

      if (error) throw error;
      get().fetchProjects();
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  updateProject: async (id, project) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update(project)
        .eq('id', id);

      if (error) throw error;
      get().fetchProjects();
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  deleteProject: async (id) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      get().fetchProjects();
    } catch (error: any) {
      set({ error: error.message });
    }
  }
}));