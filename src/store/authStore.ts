import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: any;
  session: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },
  checkAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      set({ 
        user: session?.user ?? null,
        session,
        loading: false
      });
    } catch (error) {
      set({ loading: false });
    }
  }
}));