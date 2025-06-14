import React from 'react';
import { Target } from 'lucide-react'; // Un ícono adecuado para un objetivo

const ProjectObjective = () => {
  return (
    // Contenedor estilo tarjeta con un borde superior para destacarlo
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 animate-fade-in">
      <div className="flex">
        <div className="flex-shrink-0">
          <Target className="h-10 w-10 text-green-600" aria-hidden="true" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Objetivo General del Proyecto
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Fomentar la <strong>cultura del reciclaje</strong> en los habitantes de la comunidad de San Pedro Tlaltizapan, Tianguistenco, mediante la implementación del modelo de <strong>economía circular</strong> para generar un emprendimiento y nuevas ideas de reciclaje, y así disminuir la contaminación ambiental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectObjective;