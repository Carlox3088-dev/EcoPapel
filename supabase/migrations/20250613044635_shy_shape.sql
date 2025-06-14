/*
  # Fix Database Schema Issues

  1. Storage Setup
    - Instructions for creating storage bucket (manual step required)
  
  2. Student Groups Schema Fix
    - Update student_groups table to match component expectations
    - Add members field for individual names
    - Remove stage_id to make groups global
  
  3. Teachers RLS Policies
    - Add missing UPDATE and DELETE policies for teachers
  
  4. Student Groups RLS
    - Enable RLS and add appropriate policies
*/

-- Fix student_groups table structure
DO $$
BEGIN
  -- Add members column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'student_groups' AND column_name = 'members'
  ) THEN
    ALTER TABLE student_groups ADD COLUMN members text;
  END IF;

  -- Remove stage_id column if it exists (making groups global)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'student_groups' AND column_name = 'stage_id'
  ) THEN
    ALTER TABLE student_groups DROP COLUMN stage_id;
  END IF;

  -- Remove student_count column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'student_groups' AND column_name = 'student_count'
  ) THEN
    ALTER TABLE student_groups DROP COLUMN student_count;
  END IF;

  -- Rename group_name to name if needed
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'student_groups' AND column_name = 'group_name'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'student_groups' AND column_name = 'name'
  ) THEN
    ALTER TABLE student_groups RENAME COLUMN group_name TO name;
  END IF;
END $$;

-- Enable RLS on student_groups if not already enabled
ALTER TABLE student_groups ENABLE ROW LEVEL SECURITY;

-- Add RLS policies for student_groups
DROP POLICY IF EXISTS "Public read access for student_groups" ON student_groups;
DROP POLICY IF EXISTS "Authenticated write access for student_groups" ON student_groups;

CREATE POLICY "Public read access for student_groups"
  ON student_groups
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated write access for student_groups"
  ON student_groups
  FOR ALL
  TO authenticated
  USING (true);

-- Add missing RLS policies for teachers
DROP POLICY IF EXISTS "Teachers can be updated by authenticated users" ON teachers;
DROP POLICY IF EXISTS "Teachers can be deleted by authenticated users" ON teachers;

CREATE POLICY "Teachers can be updated by authenticated users"
  ON teachers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Teachers can be deleted by authenticated users"
  ON teachers
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket instructions (this needs to be done manually in Supabase dashboard)
-- MANUAL STEP REQUIRED:
-- 1. Go to your Supabase project dashboard
-- 2. Navigate to Storage section
-- 3. Create a new bucket named 'project-images'
-- 4. Set it to public or configure appropriate RLS policies