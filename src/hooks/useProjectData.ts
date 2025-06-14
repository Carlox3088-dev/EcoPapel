import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ProjectStage, Teacher, StudentGroup, ProjectImage } from '../types';

export const useProjectData = () => {
  const [stages, setStages] = useState<ProjectStage[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch stages first as other tables depend on it
      const stagesResult = await supabase
        .from('project_stages')
        .select('*')
        .order('stage_number');

      if (stagesResult.error) throw stagesResult.error;
      setStages(stagesResult.data || []);

      // Fetch other data in parallel
      const [teachersResult, groupsResult, imagesResult] = await Promise.all([
        supabase.from('teachers').select('*'),
        supabase.from('student_groups').select('*'),
        supabase.from('project_images').select('*').order('created_at', { ascending: false })
      ]);

      // Handle teachers result
      if (teachersResult.error) {
        console.warn('Teachers table not found or error:', teachersResult.error);
        setTeachers([]);
      } else {
        setTeachers(teachersResult.data || []);
      }

      // Handle groups result
      if (groupsResult.error) {
        console.warn('Student groups error:', groupsResult.error);
        setGroups([]);
      } else {
        setGroups(groupsResult.data || []);
      }

      // Handle images result
      if (imagesResult.error) {
        console.warn('Project images table not found or error:', imagesResult.error);
        setImages([]);
      } else {
        setImages(imagesResult.data || []);
      }

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      console.error('Error fetching project data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    stages,
    teachers,
    groups,
    images,
    loading,
    error,
    refetch: fetchData
  };
};