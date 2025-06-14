/*
  # Add INSERT policy for teachers table

  1. Security Changes
    - Add policy to allow anonymous users to insert new teachers
    - This enables the frontend to add teachers without authentication
    - Maintains existing read/write policies for authenticated users

  Note: This allows public insertion of teacher records. In a production environment,
  you may want to restrict this to authenticated users only.
*/

-- Add policy to allow anonymous users to insert teachers
CREATE POLICY "Allow anonymous insert for teachers"
  ON teachers
  FOR INSERT
  TO anon
  WITH CHECK (true);