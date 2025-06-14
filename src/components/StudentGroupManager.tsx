import React, { useState } from 'react';
import { Plus, X, Users, Edit2, Save, UserPlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { StudentGroup } from '../types';

interface StudentGroupManagerProps {
  groups: StudentGroup[];
  onGroupAdded: () => void;
}

const StudentGroupManager: React.FC<StudentGroupManagerProps> = ({ groups, onGroupAdded }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    members: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      if (editingId) {
        await supabase
          .from('student_groups')
          .update({
            name: formData.name,
            description: formData.description || null,
            members: formData.members || null
          })
          .eq('id', editingId);
        setEditingId(null);
      } else {
        await supabase
          .from('student_groups')
          .insert({
            name: formData.name,
            description: formData.description || null,
            members: formData.members || null
          });
        setIsAdding(false);
      }

      setFormData({ name: '', description: '', members: '' });
      onGroupAdded();
    } catch (error) {
      console.error('Error saving student group:', error);
    }
  };

  const handleEdit = (group: StudentGroup) => {
    setFormData({
      name: group.name,
      description: group.description || '',
      members: group.members || ''
    });
    setEditingId(group.id);
  };

  const handleDelete = async (groupId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este grupo?')) return;
    
    try {
      await supabase
        .from('student_groups')
        .delete()
        .eq('id', groupId);
      onGroupAdded();
    } catch (error) {
      console.error('Error deleting student group:', error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ name: '', description: '', members: '' });
  };

  const formatMembers = (members: string | null) => {
    if (!members) return [];
    return members.split(',').map(member => member.trim()).filter(member => member.length > 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Grupos de Estudiantes
        </h3>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Agregar Grupo
        </button>
      </div>

      {(isAdding || editingId) && (
        <div className="mb-6 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-4">
            {editingId ? 'Editar Grupo' : 'Agregar Nuevo Grupo'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Grupo *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Grupo 2A - Equipo 1"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descripción del grupo y sus responsabilidades"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Integrantes del Grupo
              </label>
              <textarea
                value={formData.members}
                onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombres de los integrantes separados por comas (Ej: Juan Pérez, María García, Carlos López)"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                Separa los nombres con comas para una mejor organización
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
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

      {groups.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Users className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>No hay grupos registrados</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group) => {
            const membersList = formatMembers(group.members);
            
            return (
              <div key={group.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{group.name}</h4>
                      {group.description && (
                        <p className="text-sm text-gray-600 mt-1">{group.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEdit(group)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                      title="Editar grupo"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(group.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                      title="Eliminar grupo"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {membersList.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <UserPlus className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Integrantes ({membersList.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {membersList.map((member, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 text-xs font-medium text-blue-800 bg-blue-50 rounded-full"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(!group.members || group.members.trim() === '') && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic">
                      No se han registrado integrantes para este grupo
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentGroupManager;