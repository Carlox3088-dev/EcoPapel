import React from 'react';

// Subcomponente para cada grupo de causas
const CauseGroup = ({ title, subCauses, colors }: { title: string, subCauses: string[], colors: { main: string, sub: string, text: string } }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* Caja de la Causa Principal */}
      <div className={`px-5 py-2 rounded-lg font-bold shadow-sm ${colors.main} ${colors.text}`}>
        {title}
      </div>
      {/* Cajas de las Sub-causas */}
      <div className="flex flex-col gap-3">
        {subCauses.map((cause, index) => (
          <div key={index} className={`px-4 py-2 rounded-lg shadow-sm ${colors.sub} ${colors.text}`}>
            {cause}
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal del diagrama
const IshikawaDiagram = () => {
  // Datos con la nueva paleta de colores (verdes, azules, menta)
  const causes = {
    remuneracion: {
      title: "Remuneración Económica",
      subCauses: [
        "Solo es redituable en volúmenes altos",
        "Precios bajos por material recolectado",
        "Pocos centros de acopio con compra"
      ],
      colors: { main: "bg-green-200", sub: "bg-green-50", text: "text-green-800" }
    },
    desconocimiento: {
      title: "Desconocimiento",
      subCauses: ["Tipos de materiales", "¿Dónde llevar los residuos?", "Plantas de selección"],
      colors: { main: "bg-blue-200", sub: "bg-blue-50", text: "text-blue-800" }
    },
    concientizacion: {
      title: "Concientización",
      subCauses: ["¿Realmente necesito este producto?", "¿Lo puedo conseguir sin empaque?", "Falta de cultura de reutilizar"],
      colors: { main: "bg-teal-200", sub: "bg-teal-50", text: "text-teal-800" }
    },
    politicas: {
      title: "Políticas Institucionales",
      subCauses: ["Recolección sin separación", "Normas ambiguas", "Fiscalización inconsistente"],
      colors: { main: "bg-indigo-200", sub: "bg-indigo-50", text: "text-indigo-800" }
    }
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg animate-fade-in font-sans">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
       Problemática Principal Identificada
      </h2>

      {/* Contenedor de las causas superiores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-8">
        <CauseGroup {...causes.remuneracion} />
        <CauseGroup {...causes.desconocimiento} />
      </div>
      
      {/* Flecha central con el problema (con nuevos colores) */}
      <div className="flex items-center my-4">
        <div className="bg-green-700 text-white text-lg md:text-xl font-bold text-center flex-grow py-5 px-4 rounded-l-lg shadow-md">
          Desorganización en la Cultura de Reciclaje
        </div>
        <div className="w-0 h-0 
          border-t-[44px] border-t-transparent
          border-b-[44px] border-b-transparent
          border-l-[32px] border-l-green-700">
        </div>
      </div>

      {/* Contenedor de las causas inferiores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-8">
        <CauseGroup {...causes.concientizacion} />
        <CauseGroup {...causes.politicas} />
      </div>
    </div>
  );
};

export default IshikawaDiagram;