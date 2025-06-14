import React, { useState } from 'react';
import { Plus, X, GraduationCap, Edit2, Save } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Teacher, ProjectStage } from '../types';
import { getSubjectIcon } from '../utils/subjectIcons';

interface TeacherManagerProps {
  teachers: Teacher[];
  stages: ProjectStage[];
  onTeacherAdded: () => void;
}

const TeacherManager: React.FC<TeacherManagerProps> = ({ teachers, stages, onTeacherAdded }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    stage_id: ''
  });

  const subjects = [
    'Conciencia Histórica',
    'Ciencias Sociales III',
    'Reacciones Químicas',
    'Actividades Artísticas y Culturales',
    'Desarrolla Aplicaciones Web',
    'Sistematiza y Gestiona Proyectos I',
    'Dirección Escolar',
    'Subdirección Escolar'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.subject || !formData.stage_id) return;

    try {
      if (editingId) {
        await supabase
          .from('teachers')
          .update({
            name: formData.name,
            subject: formData.subject,
            stage_id: formData.stage_id,
            icon: formData.subject.toLowerCase().replace(/\s+/g, '-')
          })
          .eq('id', editingId);
      } else {
        await supabase
          .from('teachers')
          .insert({
            name: formData.name,
            subject: formData.subject,
            stage_id: formData.stage_id,
            icon: formData.subject.toLowerCase().replace(/\s+/g, '-')
          });
      }

      // CORRECCIÓN: Limpiar el estado de forma centralizada después de agregar o editar
      cancelEdit(); 
      onTeacherAdded();

    } catch (error) {
      console.error('Error saving teacher:', error);
    }
  };

  const handleEdit = (teacher: Teacher) => {
    setFormData({
      name: teacher.name,
      subject: teacher.subject,
      stage_id: teacher.stage_id || ''
    });
    setEditingId(teacher.id);
    // CORRECCIÓN: Se activa la visibilidad del formulario al editar
    setIsAdding(true); 
  };

  const handleDelete = async (teacherId: string) => {
    try {
      await supabase
        .from('teachers')
        .delete()
        .eq('id', teacherId);
      onTeacherAdded();
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ name: '', subject: '', stage_id: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Docentes Participantes
        </h3>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Agregar Docente
        </button>
      </div>

      {isAdding && ( // Condición simplificada a solo isAdding, ya que ahora se activa en ambos casos
        <div className="mb-6 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-4">
            {editingId ? 'Editar Docente' : 'Agregar Nuevo Docente'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Docente
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nombre completo del docente"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UAC / Submódulo o Área
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Seleccionar UAC / Submódulo</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Etapa del Proyecto
              </label>
              <select
                value={formData.stage_id}
                onChange={(e) => setFormData({ ...formData, stage_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Seleccionar etapa</option>
                {stages.map((stage) => (
                  <option key={stage.id} value={stage.id}>
                    Etapa {stage.stage_number}: {stage.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {editingId ? 'Actualizar' : 'Agregar'}
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {teachers.length === 0 && !isAdding ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>No hay docentes registrados</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teachers.map((teacher) => {
            const IconComponent = getSubjectIcon(teacher.subject);
            const stage = stages.find(s => s.id === teacher.stage_id);
            
            return (
              <div key={teacher.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{teacher.name}</h4>
                      <p className="text-sm text-gray-600">{teacher.subject}</p>
                      {stage && (
                        <p className="text-xs text-green-600 mt-1">
                          Etapa {stage.stage_number}: {stage.title}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEdit(teacher)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TeacherManager;