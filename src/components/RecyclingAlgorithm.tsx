import React, { useState } from 'react';
import { FlaskConical } from 'lucide-react';

const RecyclingAlgorithm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const algorithmSteps = [
    {
      id: 1,
      title: "Recolección y Clasificación",
      description: "Recoger papel usado y clasificarlo por tipo (periódico, revistas, papel blanco, cartón)",
      materials: ["Papel usado", "Contenedores", "Guantes"],
      time: "30 minutos",
      safety: "Usar guantes para evitar cortes con papel",
      tips: "Separar papeles con tinta de colores fuertes de los papeles blancos"
    },
    {
      id: 2,
      title: "Limpieza y Preparación",
      description: "Remover grapas, clips, cintas adhesivas y otros materiales no deseados",
      materials: ["Tijeras", "Pinzas", "Agua limpia"],
      time: "45 minutos",
      safety: "Revisar cuidadosamente para evitar objetos cortantes",
      tips: "El papel con mucha tinta puede necesitar lavado previo"
    },
    {
      id: 3,
      title: "Triturado",
      description: "Cortar o rasgar el papel en trozos pequeños (2-3 cm aproximadamente)",
      materials: ["Tijeras", "Papel clasificado"],
      time: "20 minutos",
      safety: "Supervisar el uso de objetos punzocortantes",
      tips: "Trozos más pequeños se procesan más fácilmente"
    },
    {
      id: 4,
      title: "Remojo",
      description: "Sumergir los trozos de papel en agua tibia durante varias horas",
      materials: ["Agua tibia", "Recipiente grande", "Papel triturado"],
      time: "2-4 horas",
      safety: "Usar agua tibia, no caliente",
      tips: "Cambiar el agua si se ve muy sucia"
    },
    {
      id: 5,
      title: "Licuado",
      description: "Mezclar el papel remojado con agua para formar una pulpa homogénea",
      materials: ["Licuadora", "Agua", "Papel remojado"],
      time: "15 minutos",
      safety: "Supervisión adulta obligatoria con licuadora",
      tips: "No llenar mucho la licuadora, trabajar en lotes pequeños"
    },
    {
      id: 6,
      title: "Colado y Formación",
      description: "Usar un tamiz para formar la hoja de papel reciclado",
      materials: ["Tamiz o colador fino", "Tela o malla", "Recipiente ancho"],
      time: "30 minutos",
      safety: "Trabajar en superficie antideslizante",
      tips: "Mover el tamiz suavemente para distribuir la pulpa uniformemente"
    },
    {
      id: 7,
      title: "Prensado y Secado",
      description: "Presionar suavemente y dejar secar al aire libre",
      materials: ["Paños absorbentes", "Superficie plana"],
      time: "24-48 horas",
      safety: "Colocar en lugar ventilado sin sol directo",
      tips: "Cambiar los paños si están muy húmedos para acelerar el secado"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <FlaskConical className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Algoritmo de Reciclaje de Papel</h2>
        </div>
        <p className="text-green-100">
          Proceso paso a paso para crear hojas de papel reciclado de manera segura y efectiva
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de pasos */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Pasos del Proceso</h3>
          <div className="space-y-2">
            {algorithmSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  activeStep === index
                    ? 'bg-green-100 border-2 border-green-500 text-green-800'
                    : 'bg-white border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step.id}
                  </div>
                  <span className="font-medium">{step.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detalle del paso activo */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center font-bold">
                  {algorithmSteps[activeStep].id}
                </div>
                <h3 className="text-xl font-bold">{algorithmSteps[activeStep].title}</h3>
              </div>
              <p className="text-green-100">{algorithmSteps[activeStep].description}</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Materiales */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Materiales Necesarios
                </h4>
                <div className="flex flex-wrap gap-2">
                  {algorithmSteps[activeStep].materials.map((material, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tiempo */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Tiempo Estimado
                </h4>
                <p className="text-gray-600 bg-orange-50 px-3 py-2 rounded-lg inline-block">
                  {algorithmSteps[activeStep].time}
                </p>
              </div>

              {/* Seguridad */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Medidas de Seguridad
                </h4>
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                  <p className="text-red-800">{algorithmSteps[activeStep].safety}</p>
                </div>
              </div>

              {/* Consejos */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Consejos Útiles
                </h4>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                  <p className="text-green-800">{algorithmSteps[activeStep].tips}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Anterior
            </button>
            <button
              onClick={() => setActiveStep(Math.min(algorithmSteps.length - 1, activeStep + 1))}
              disabled={activeStep === algorithmSteps.length - 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeStep === algorithmSteps.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/* Resumen final */}
      <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl border border-teal-200">
        <h3 className="text-lg font-semibold text-teal-800 mb-3">💡 Resumen del Proceso</h3>
        <p className="text-teal-700 mb-4">
          El reciclaje de papel es un proceso que puede tomar entre 3-5 días considerando los tiempos de remojo y secado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-lg">
            <div className="font-semibold text-gray-800">Tiempo Total Activo</div>
            <div className="text-teal-600">~2.5 horas</div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="font-semibold text-gray-800">Tiempo de Espera</div>
            <div className="text-teal-600">24-48 horas</div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="font-semibold text-gray-800">Dificultad</div>
            <div className="text-teal-600">Intermedio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingAlgorithm;