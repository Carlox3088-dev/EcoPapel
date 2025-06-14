import React from 'react';
import { ListChecks } from 'lucide-react'; // Ícono para representar resultados o una lista de verificación

const InformationAnalysis = () => {
  return (
    // Contenedor principal estilo tarjeta, consistente con los otros componentes
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <ListChecks className="h-8 w-8 text-green-600" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Análisis de la Información
          </h3>
          <p className="text-gray-700 mb-4">
            A partir de los resultados obtenidos, se logran identificar <strong>cinco problemáticas prioritarias</strong> en la comunidad de San Pedro Tlaltizapan, Tianguistenco:
          </p>
          {/* Lista ordenada para las problemáticas identificadas */}
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Suministro intermitente del servicio de agua potable</li>
            <li>Poca cultura de reciclaje</li>
            <li>Inseguridad</li>
            <li>Escasos servicios de salud</li>
            <li>Rehabilitación de lugares de esparcimiento</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InformationAnalysis;