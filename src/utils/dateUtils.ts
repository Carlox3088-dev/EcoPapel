export const calculateProgress = (startDate: string, endDate: string): number => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (now < start) return 0;
  if (now > end) return 100;
  
  const totalDuration = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  
  return Math.round((elapsed / totalDuration) * 100);
};

export const getStageStatus = (startDate: string, endDate: string): 'pending' | 'in_progress' | 'completed' => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (now < start) return 'pending';
  if (now > end) return 'completed';
  return 'in_progress';
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getCurrentStage = (stages: any[]): number => {
  const now = new Date();
  
  for (let i = 0; i < stages.length; i++) {
    const stage = stages[i];
    const endDate = new Date(stage.end_date);
    
    if (now <= endDate) {
      return stage.stage_number;
    }
  }
  
  return stages.length; // Si ya pasaron todas las fechas, estamos en la última etapa
};