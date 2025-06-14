export interface ProjectStage {
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
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  icon: string;
  stage_id: string | null;
  created_at: string;
}

export interface StudentGroup {
  id: string;
  name: string;
  description: string | null;
  members: string | null;
  created_at: string;
}

export interface ProjectImage {
  id: string;
  title: string;
  description: string;
  image_url: string;
  stage_id: string;
  created_at: string;
}

export interface SubjectIcon {
  [key: string]: string;
}