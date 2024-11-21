import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ServicesState {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
  createService: (service: Omit<Service, 'id'>) => Promise<void>;
  updateService: (id: string, service: Partial<Service>) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
}

export const useServicesStore = create<ServicesState>((set, get) => ({
  services: [],
  loading: false,
  error: null,
  fetchServices: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ services: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  createService: async (service) => {
    try {
      const { error } = await supabase
        .from('services')
        .insert([service]);

      if (error) throw error;
      get().fetchServices();
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  updateService: async (id, service) => {
    try {
      const { error } = await supabase
        .from('services')
        .update(service)
        .eq('id', id);

      if (error) throw error;
      get().fetchServices();
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  deleteService: async (id) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;
      get().fetchServices();
    } catch (error: any) {
      set({ error: error.message });
    }
  }
}));