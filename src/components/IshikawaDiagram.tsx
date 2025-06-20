import React from 'react';

const IshikawaDiagram = () => {
  const topCauses = [
    {
      title: 'Remuneración Económica',
      items: ['Aceptable (solo en volúmenes altos)'],
      color: 'green',
      isCompact: true
    },
    {
      title: 'Desconocimiento',
      items: [
        'Tipos de vidrio, cartón o plásticos que existen',
        '¿Dónde llevar los residuos?',
        'Plantas de compostaje',
        'Plantas de selección',
        'Residuos de manejo especial'
      ],
      color: 'blue'
    }
  ];

  const bottomCauses = [
    {
      title: 'Concientización',
      items: [
        '¿Realmente necesitas ese producto?',
        '¿Lo puedo conseguir sin empaque?',
        '¿Lo puedo pedir prestado, rentar o comprar?',
        '¿Está hecho a partir de material reciclado?'
      ],
      color: 'teal'
    },
    {
      title: 'Recolección',
      items: [
        'Basura orgánica',
        'Basura inorgánica',
        'Camión que tenga separador de residuos'
      ],
      color: 'purple'
    }
  ];

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Diagrama de Ishikawa - Análisis de Causas
      </h2>

      <div className="max-w-5xl mx-auto">
        {/* Causas superiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Remuneración Económica - Diseño especial */}
          <div className="text-center flex flex-col justify-center">
            <div className="inline-block px-4 py-2 rounded-lg border-2 font-bold mb-3 bg-green-200 border-green-600 text-green-900">
              Remuneración Económica
            </div>
            <div className="mx-auto max-w-xs space-y-2">
              <div className="px-4 py-3 rounded-lg border-2 bg-green-50 border-green-400 text-green-800">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span>💰</span>
                  <span>Aceptable solo en volúmenes altos</span>
                </div>
              </div>
              <div className="px-3 py-2 rounded border bg-green-50/50 border-green-300 text-green-700 text-xs">
                📊 Baja rentabilidad en pequeña escala
              </div>
              <div className="px-3 py-2 rounded border bg-green-50/50 border-green-300 text-green-700 text-xs">
                ⚖️ Desequilibrio costo-beneficio
              </div>
            </div>
          </div>

          {/* Desconocimiento */}
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-lg border-2 font-bold mb-3 bg-blue-200 border-blue-600 text-blue-900">
              Desconocimiento
            </div>
            <div className="space-y-2">
              {topCauses[1].items.map((item, itemIndex) => (
                <div key={itemIndex} className="mx-auto max-w-xs px-3 py-1 rounded border text-sm bg-blue-50 border-blue-400 text-blue-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Línea central con problema */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-4 border-gray-400"></div>
          </div>
          <div className="relative flex justify-end">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
              Falta de Cultura del Reciclaje →
            </div>
          </div>
        </div>

        {/* Causas inferiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomCauses.map((cause, index) => (
            <div key={index} className="text-center">
              <div className={`inline-block px-4 py-2 rounded-lg border-2 font-bold mb-3
                ${cause.color === 'teal' ? 'bg-teal-200 border-teal-600 text-teal-900' : ''}
                ${cause.color === 'purple' ? 'bg-purple-200 border-purple-600 text-purple-900' : ''}`}>
                {cause.title}
              </div>
              <div className="space-y-2">
                {cause.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`mx-auto max-w-xs px-3 py-1 rounded border text-sm
                    ${cause.color === 'teal' ? 'bg-teal-50 border-teal-400 text-teal-800' : ''}
                    ${cause.color === 'purple' ? 'bg-purple-50 border-purple-400 text-purple-800' : ''}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de conexión visual */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>↑ Las causas superiores e inferiores confluyen en el problema principal →</p>
        </div>
      </div>
    </div>
  );
};

export default IshikawaDiagram;