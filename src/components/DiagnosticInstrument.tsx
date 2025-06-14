import React from 'react';
import { FileQuestion } from 'lucide-react'; // Usamos un ícono relevante

const DiagnosticInstrument = () => {
  return (
    // Contenedor con un borde izquierdo acentuado para destacarlo como una nota informativa
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <FileQuestion className="h-8 w-8 text-blue-500" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Instrumento Diagnóstico
          </h3>
          <p className="text-gray-700 leading-relaxed">
            El instrumento diagnóstico utilizado para la detección de las problemáticas que afectan a la localidad de San Pedro Tlaltizapan, Tianguistenco, fue un <strong>cuestionario digital de 25 preguntas cerradas</strong>. Se aplicó a alumnos, docentes, directivos, padres de familia y autoridades locales, con el objetivo de conocer sus opiniones a partir de sus experiencias diarias u observaciones de su entorno.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticInstrument;