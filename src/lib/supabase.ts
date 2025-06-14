import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Database = {
  public: {
    Tables: {
      project_stages: {
        Row: {
          id: string;
          stage_number: number;
          title: string;
          description: string;
          start_date: string;
          end_date: string;
          responsible: string;
          status: 'pending' | 'in_progress' | 'completed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          stage_number: number;
          title: string;
          description: string;
          start_date: string;
          end_date: string;
          responsible: string;
          status?: 'pending' | 'in_progress' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          stage_number?: number;
          title?: string;
          description?: string;
          start_date?: string;
          end_date?: string;
          responsible?: string;
          status?: 'pending' | 'in_progress' | 'completed';
          updated_at?: string;
        };
      };
      teachers: {
        Row: {
          id: string;
          name: string;
          subject: string;
          icon: string;
          stage_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          subject: string;
          icon: string;
          stage_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          subject?: string;
          icon?: string;
          stage_id?: string | null;
        };
      };
      student_groups: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          members: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          members?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          members?: string | null;
        };
      };
      project_images: {
        Row: {
          id: string;
          title: string;
          description: string;
          image_url: string;
          stage_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image_url: string;
          stage_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image_url?: string;
          stage_id?: string;
        };
      };
    };
  };
};