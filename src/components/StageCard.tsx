import React from 'react';
import { Calendar, Users, GraduationCap, CheckCircle, Clock, PlayCircle, User, CalendarDays } from 'lucide-react';
import { ProjectStage, Teacher, StudentGroup } from '../types';
import { formatDate, calculateProgress, getStageStatus } from '../utils/dateUtils';
import { getSubjectIcon } from '../utils/subjectIcons';

interface StageCardProps {
  stage: ProjectStage;
  teachers: Teacher[];
  groups: StudentGroup[];
  isCurrentStage: boolean;
}

const StageCard: React.FC<StageCardProps> = ({ stage, teachers, groups, isCurrentStage }) => {
  const progress = calculateProgress(stage.start_date, stage.end_date);
  const status = getStageStatus(stage.start_date, stage.end_date);

  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in_progress':
        return <PlayCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'in_progress':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'Completada';
      case 'in_progress':
        return 'En Progreso';
      default:
        return 'Pendiente';
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${getStatusColor()} ${isCurrentStage ? 'ring-4 ring-green-300 ring-opacity-50' : ''}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${status === 'completed' ? 'bg-green-500' : status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-400'}`}>
              {stage.stage_number}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{stage.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                {isCurrentStage && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                    Etapa Actual
                  </span>
                )}
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                  status === 'completed' ? 'text-green-800 bg-green-200' :
                  status === 'in_progress' ? 'text-blue-800 bg-blue-200' :
                  'text-gray-800 bg-gray-200'
                }`}>
                  {getStatusText()}
                </span>
              </div>
            </div>
          </div>
          {getStatusIcon()}
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Descripción</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">Período:</span>
            </div>
            <div className="ml-6 text-sm text-gray-600">
              <div>Inicio: {formatDate(stage.start_date)}</div>
              <div>Fin: {formatDate(stage.end_date)}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">Responsable:</span>
            </div>
            <div className="ml-6 text-sm text-gray-600">
              {stage.responsible}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">Creada:</span>
            </div>
            <div className="ml-6 text-xs text-gray-500">
              {formatDateTime(stage.created_at)}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">Actualizada:</span>
            </div>
            <div className="ml-6 text-xs text-gray-500">
              {formatDateTime(stage.updated_at)}
            </div>
          </div>
        </div>

        {status !== 'pending' && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progreso del Período</span>
              <span className="text-sm font-medium text-gray-700">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Basado en las fechas de inicio y fin de la etapa
            </div>
          </div>
        )}

        {teachers.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Docentes Participantes ({teachers.length})
            </h4>
            <div className="space-y-3">
              {teachers.map((teacher) => {
                const IconComponent = getSubjectIcon(teacher.subject);
                return (
                  <div key={teacher.id} className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-100">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{teacher.name}</div>
                      <div className="text-sm text-gray-600">{teacher.subject}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {groups.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Grupos Participantes ({groups.length})
            </h4>
            <div className="space-y-2">
              {groups.map((group) => (
                <div key={group.id} className="p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-800">{group.name}</span>
                  </div>
                  {group.description && (
                    <p className="text-sm text-gray-600 mb-2">{group.description}</p>
                  )}
                  {group.members && (
                    <div className="flex flex-wrap gap-1">
                      {group.members.split(',').map((member, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 text-xs font-medium text-blue-800 bg-blue-50 rounded-full"
                        >
                          {member.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {teachers.length === 0 && groups.length === 0 && (
          <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
            <p className="text-sm">No hay docentes ni grupos asignados a esta etapa</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StageCard;