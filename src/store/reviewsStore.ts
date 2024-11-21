import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image_url: string;
}

interface ReviewsState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
  fetchReviews: () => Promise<void>;
  createReview: (review: Omit<Review, 'id'>) => Promise<void>;
  updateReview: (id: string, review: Partial<Review>) => Promise<void>;
  deleteReview: (id: string) => Promise<void>;
}

export const useReviewsStore = create<ReviewsState>((set, get) => ({
  reviews: [],
  loading: false,
  error: null,
  fetchReviews: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ reviews: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  createReview: async (review) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([review]);

      if (error) throw error;
      get().fetchReviews();
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  updateReview: async (id, review) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update(review)
        .eq('id', id);

      if (error) throw error;
      get().fetchReviews();
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  deleteReview: async (id) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      get().fetchReviews();
    } catch (error: any) {
      set({ error: error.message });
    }
  }
}));