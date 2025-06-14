import React from 'react';
import { calculateProgress } from '../utils/dateUtils';

interface ProgressBarProps {
  stages: any[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ stages }) => {
  const overallProgress = stages.reduce((acc, stage) => {
    return acc + calculateProgress(stage.start_date, stage.end_date);
  }, 0) / stages.length;

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Progreso del Proyecto EcoPapel</h2>
        <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
          {Math.round(overallProgress)}% Completado
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div 
          className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${overallProgress}%` }}
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="text-center">
          <div className="font-semibold text-gray-700">Inicio</div>
          <div className="text-green-600">Febrero 2025</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-gray-700">Construcción</div>
          <div className="text-blue-600">Abril - Mayo</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-gray-700">Difusión</div>
          <div className="text-purple-600">Mayo 2025</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-gray-700">Finalización</div>
          <div className="text-orange-600">Mayo 2025</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;