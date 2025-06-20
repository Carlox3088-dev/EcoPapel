import React, { useState } from 'react';
import { Leaf, Database, Image, Users, GraduationCap, BookOpen } from 'lucide-react';

// Components
import ProgressBar from './components/ProgressBar';
import StageCard from './components/StageCard';
import ImageGallery from './components/ImageGallery';
import TeacherManager from './components/TeacherManager';
import StudentGroupManager from './components/StudentGroupManager';
import RecyclingAlgorithm from './components/RecyclingAlgorithm';
import ProjectStages from './components/ProjectStages';
import ProjectObjective from './components/ProjectObjective';
import CollectiveDiagnosis from './components/CollectiveDiagnosis';
import DiagnosticInstrument from './components/DiagnosticInstrument';
import InformationAnalysis from './components/InformationAnalysis';
import SelectedProblem from './components/SelectedProblem';
import IshikawaDiagram from './components/IshikawaDiagram';

// Hooks and utilities
import { useProjectData } from './hooks/useProjectData';
import { getCurrentStage } from './utils/dateUtils';

function App() {
  const { stages, teachers, groups, images, loading, error } = useProjectData();
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'teachers' | 'students' | 'uacs'>('overview');
  const [selectedStageId, setSelectedStageId] = useState<number | null>(null);
  const [showAlgorithm, setShowAlgorithm] = useState(false);

  const currentStage = getCurrentStage(stages);

  const handleViewGallery = (stageId: number) => {
    setSelectedStageId(stageId);
    setActiveTab('gallery');
  };

  const handleViewAlgorithm = () => {
    setShowAlgorithm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando proyecto...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (showAlgorithm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <button
                onClick={() => setShowAlgorithm(false)}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Volver a Etapas
              </button>
            </div>
          </div>
        </div>
        <RecyclingAlgorithm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-20 h-20 bg-green-400 rounded-full blur-xl"></div>
          <div className="absolute top-12 right-8 w-16 h-16 bg-blue-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-6 left-1/3 w-12 h-12 bg-emerald-400 rounded-full blur-md"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-8 sm:py-12">
            <div className="text-center">
              {/* Logo and Title */}
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-2xl shadow-lg mr-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  EcoPapel
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 inline-block shadow-lg">
                <p className="text-lg sm:text-xl font-semibold text-gray-700">
                  Proyecto de Economía Circular
                </p>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  CBT San Pedro Tlaltizapán
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100/40 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto">
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
              <span className="hidden sm:inline">Etapas</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-md transition-colors text-sm lg:text-base whitespace-nowrap ${
                activeTab === 'gallery'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Image className="w-4 h-4" />
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
          </div>
        </div>
      </nav>

      {/* Title and Objective moved here from ProjectStages */}
      {activeTab === 'uacs' && (
        <>
          <ProjectStages
            onViewGallery={handleViewGallery}
            onViewAlgorithm={handleViewAlgorithm}
          />
        </>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <ProgressBar stages={stages} currentStage={currentStage} />
            <div className="mt-12 space-y-8">
              <ProjectObjective />
              <CollectiveDiagnosis />
              <DiagnosticInstrument />
              <InformationAnalysis />
              <SelectedProblem />
              <IshikawaDiagram />
            </div>
          

            <div className="grid gap-6">
              {stages.map((stage) => (
                <StageCard
                  key={stage.id}
                  stage={stage}
                  teachers={teachers.filter(t => t.stage_id === stage.id)}
                  groups={groups}
                  isActive={currentStage === stage.stage_number}
                />
              ))}
            </div>

            
          </div>
        )}

        {activeTab === 'gallery' && (
          <ImageGallery
            images={images}
            stages={stages}
            selectedStageId={selectedStageId}
            onStageChange={setSelectedStageId}
          />
        )}

        {activeTab === 'teachers' && (
          <TeacherManager
            teachers={teachers}
            stages={stages}
          />
        )}

        {activeTab === 'students' && (
          <StudentGroupManager
            groups={groups}
            stages={stages}
          />
        )}
      </main>
    </div>
  );
}

export default App;