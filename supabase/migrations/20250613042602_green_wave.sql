/*
  # Add missing tables for project management

  1. New Tables
    - `teachers`
      - `id` (uuid, primary key)
      - `name` (text, teacher name)
      - `subject` (text, subject they teach)
      - `icon` (text, icon identifier)
      - `stage_id` (uuid, foreign key to project_stages)
      - `created_at` (timestamp)
    - `project_images`
      - `id` (uuid, primary key)
      - `title` (text, image title)
      - `description` (text, image description)
      - `image_url` (text, URL to the image)
      - `stage_id` (uuid, foreign key to project_stages)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access and authenticated write access
*/

-- Create teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  subject text NOT NULL,
  icon text NOT NULL DEFAULT 'user',
  stage_id uuid REFERENCES project_stages(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Create project_images table
CREATE TABLE IF NOT EXISTS project_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  image_url text NOT NULL,
  stage_id uuid REFERENCES project_stages(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;

-- Add policies for teachers table
CREATE POLICY "Public read access for teachers"
  ON teachers
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated write access for teachers"
  ON teachers
  FOR ALL
  TO authenticated
  USING (true);

-- Add policies for project_images table
CREATE POLICY "Public read access for project_images"
  ON project_images
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated write access for project_images"
  ON project_images
  FOR ALL
  TO authenticated
  USING (true);