import React from 'react';

const CollectiveDiagnosis = () => {
  return (
    // Contenedor principal con sombra, bordes redondeados y animación de entrada
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-3">
        Diagnóstico Comunitario
      </h2>
      
      {/* Grid para organizar la información en tres columnas en pantallas medianas y grandes */}
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 text-sm sm:text-base">
        
        <section>
          <h3 className="font-semibold text-green-700 mb-2">
            Ubicación Geográfica
          </h3>
          <p className="text-gray-600 leading-relaxed">
            La comunidad de San Pedro Tlaltizapán pertenece al municipio de Tianguistenco, Estado de México. Colinda con Xalatlaco, Capulhuac y Chapultepec.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-green-700 mb-2">
            Demografía y Educación
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li><span className="font-semibold">Población:</span> 14,063 habitantes.</li>
            <li><span className="font-semibold">Población Indígena:</span> 1.10%.</li>
            <li><span className="font-semibold">Analfabetismo:</span> 2.12%.</li>
            <li><span className="font-semibold">Escolaridad Promedio:</span> Secundaria.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="font-semibold text-green-700 mb-2">
            Socioeconomía
          </h3>
          <p className="text-gray-600 leading-relaxed">
            La principal actividad productiva es el <strong>comercio minorista</strong>. Las fuentes de empleo industrial se localizan en el parque Industrial de Santiago Tianguistenco.
          </p>
        </section>

      </div>
    </div>
  );
};

export default CollectiveDiagnosis;