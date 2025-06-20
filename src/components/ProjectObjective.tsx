import React from 'react';
import { Target, Sparkles, Leaf, Users, Recycle } from 'lucide-react';

const ProjectObjective = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 rounded-2xl shadow-2xl border border-green-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-24 h-24 bg-green-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-20 h-20 bg-blue-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-emerald-400 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Decorative top border with gradient */}
      <div className="h-2 bg-gradient-to-r from-green-400 via-blue-500 to-emerald-500"></div>
      
      <div className="relative z-10 p-8">
        {/* Header with icon and title */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Objetivo General del Proyecto
            </h2>
            <div className="flex items-center justify-center mt-2 space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>

        {/* Main content with enhanced styling */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-inner border border-white/50">
          <p className="text-lg leading-relaxed text-gray-800 text-center">
            <span className="font-bold text-green-600">Fortalecer</span> la cultura del reciclaje en la comunidad de{' '}
            <span className="font-semibold text-blue-600">San Pedro Tlaltizapán, Tianguistenco</span>, a través de la participación de los alumnos de segundo grado, familias y comunidad durante el{' '}
            <span className="font-semibold text-emerald-600">ciclo escolar 2024–2025</span>, mediante la recolección, clasificación y transformación de papel en desuso, en materiales útiles como{' '}
            <span className="font-bold text-purple-600">libretas, porta retratos y porta lapiceros</span>, promoviendo los principios de la{' '}
            <span className="font-bold text-green-600">economía circular</span>, el{' '}
            <span className="font-bold text-blue-600">compromiso ambiental</span>, con el fin de reducir el volumen de residuos sólidos, fortalecer el{' '}
            <span className="font-bold text-emerald-600">vínculo escuela comunidad</span>.
          </p>
        </div>

        {/* Key highlights with icons */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Recycle className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700 text-center">
              Economía Circular
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700 text-center">
              Vínculo Comunidad
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-emerald-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Leaf className="h-6 w-6 text-emerald-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700 text-center">
              Compromiso Ambiental
            </p>
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-4 left-4 text-yellow-400 opacity-60">
          <Sparkles className="h-5 w-5 animate-pulse" />
        </div>
        <div className="absolute top-6 right-8 text-yellow-400 opacity-60">
          <Sparkles className="h-4 w-4 animate-pulse delay-300" />
        </div>
        <div className="absolute bottom-4 right-4 text-yellow-400 opacity-60">
          <Sparkles className="h-6 w-6 animate-pulse delay-700" />
        </div>
      </div>
    </div>
  );
};

export default ProjectObjective;