import React from 'react';
import { Recycle } from 'lucide-react'; // Un ícono representativo para el reciclaje

const SelectedProblem = () => {
  return (
    // Contenedor con un borde superior acentuado para darle prominencia
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-amber-500 animate-fade-in">
      
      <div className="flex items-center gap-4 mb-4">
        <Recycle className="h-10 w-10 text-amber-600 flex-shrink-0" aria-hidden="true" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Problemática Seleccionada
          </h3>
          <p className="text-2xl font-bold text-amber-700">
            FALTA DE CULTURA DE RECICLAJE
          </p>
        </div>
      </div>
      
      <div className="space-y-4 pl-14"> {/* Alineado con el texto del título */}
        <div>
          <h4 className="font-semibold text-gray-800">Impacto Ambiental</h4>
          <p className="text-gray-600">
            La acumulación de papel y cartón en los vertederos contribuye a la deforestación y al alto consumo de agua y energía. Además, su descomposición genera metano, un potente gas de efecto invernadero perjudicial para el ecosistema y la salud.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800">Responsabilidad Comunitaria</h4>
          <p className="text-gray-600">
            Se detecta un bajo nivel de conciencia ambiental en las prácticas cotidianas para la disposición de residuos.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800">Viabilidad de Intervención Escolar</h4>
          <p className="text-gray-600">
            A través del trabajo con estudiantes, es posible diseñar y ejecutar estrategias para la recolección y transformación del papel, como parte de un proyecto sustentable que fortalece el sentido de pertenencia, cooperación y compromiso social.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">Participación Comunitaria</h4>
          <p className="text-gray-600">
            Se contempla la participación activa de madres y padres de familia en el acopio de papel y cartón, reforzando así el lazo entre la escuela y la comunidad.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SelectedProblem;