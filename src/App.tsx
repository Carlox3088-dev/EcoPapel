import React, { useState } from 'react';
import { Leaf, Database, Image as ImageIcon, Users, GraduationCap, FlaskConical, BookOpen } from 'lucide-react';

// Importación de componentes desde archivos separados
import ProgressBar from './components/ProgressBar';
import StageCard from './components/StageCard';
import ImageGallery from './components/ImageGallery';
import TeacherManager from './components/TeacherManager';
import StudentGroupManager from './components/StudentGroupManager';
import RecyclingAlgorithm from './components/RecyclingAlgorithm';
import TeacherContributionManager from './components/TeacherContributionsManager';
import ProjectObjective from './components/ProjectObjective';
import CollectiveDiagnosis from './components/CollectiveDiagnosis';
import DiagnosticInstrument from './components/DiagnosticInstrument';
import InformationAnalysis from './components/InformationAnalysis';
import SelectedProblem from './components/SelectedProblem';
import IshikawaDiagram from './components/IshikawaDiagram';

// Hooks y utilidades
import { useProjectData } from './hooks/useProjectData';
import { getCurrentStage } from './utils/dateUtils';

function App() {
  const { stages, teachers, groups, images, loading, error, refetch } = useProjectData();
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'teachers' | 'students' | 'algorithm' | 'uacs'>('overview');
  const [selectedStageId, setSelectedStageId] = useState<string>('');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Cargando proyecto EcoPapel...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <Database className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error de Conexión</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">
            Asegúrate de conectar tu proyecto a Supabase haciendo clic en "Connect to Supabase" en la esquina superior derecha.
          </p>
        </div>
      </div>
    );
  }

  const currentStageNumber = getCurrentStage(stages);
  
  const getTeachersForStage = (stageId: string) => {
    return teachers.filter(teacher => teacher.stage_id === stageId);
  };

  const getImagesForStage = (stageId: string) => {
    return images.filter(image => image.stage_id === stageId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      // Reemplaza el header en App.tsx con esta versión responsiva
<header className="bg-white shadow-sm border-b border-green-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 lg:py-6 gap-4">
      {/* Logo y título */}
      <div className="flex items-center gap-3">
        <div className="bg-green-600 p-2 lg:p-3 rounded-xl">
          <Leaf className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">EcoPapel</h1>
          <p className="text-green-600 font-medium text-sm lg:text-base">Proyecto de Economía Circular</p>
        </div>
      </div>
      
      {/* Navegación */}
      <nav className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
            activeTab === 'overview' 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">Resumen</span>
        </button>
        <button
          onClick={() => setActiveTab('uacs')}
          className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
            activeTab === 'uacs' 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">UACS</span>
        </button>
        <button
          onClick={() => setActiveTab('algorithm')}
          className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
            activeTab === 'algorithm' 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <FlaskConical className="w-4 h-4" />
          <span className="hidden sm:inline">Algoritmo</span>
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
            activeTab === 'gallery' 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Galería</span>
        </button>
        <button
          onClick={() => setActiveTab('teachers')}
          className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
            activeTab === 'teachers' 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span className="hidden sm:inline">Docentes</span>
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
            activeTab === 'students' 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">Estudiantes</span>
        </button>
      </nav>
    </div>
  </div>
</header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <ProgressBar stages={stages} />
            <CollectiveDiagnosis />
            <DiagnosticInstrument />
            <InformationAnalysis />
            <SelectedProblem />
            <IshikawaDiagram />
            <ProjectObjective />
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Etapas del Proyecto</h2>
              <p className="text-gray-600">
                El proyecto EcoPapel consta de 7 etapas diseñadas para fomentar una cultura de reciclaje 
                en la comunidad de San Pedro Tlaltizapán.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {stages.map((stage) => (
                <StageCard
                  key={stage.id}
                  stage={stage}
                  teachers={getTeachersForStage(stage.id)}
                  groups={groups}
                  isCurrentStage={stage.stage_number === currentStageNumber}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'uacs' && (
          <TeacherContributionManager />
        )}

        {activeTab === 'algorithm' && (
          <RecyclingAlgorithm />
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Galería de Imágenes</h2>
              <select
                value={selectedStageId}
                onChange={(e) => setSelectedStageId(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Todas las etapas</option>
                {stages.map((stage) => (
                  <option key={stage.id} value={stage.id}>
                    Etapa {stage.stage_number}: {stage.title}
                  </option>
                ))}
              </select>
            </div>

            <ImageGallery
              images={selectedStageId ? getImagesForStage(selectedStageId) : images}
              stageId={selectedStageId}
              onImageAdded={refetch}
            />
          </div>
        )}

        {activeTab === 'teachers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Gestión de Docentes</h2>
            <TeacherManager
              teachers={teachers}
              stages={stages}
              onTeacherAdded={refetch}
            />
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Gestión de Grupos de Estudiantes</h2>
            <StudentGroupManager
              groups={groups}
              onGroupAdded={refetch}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
