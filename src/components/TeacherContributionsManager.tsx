import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  ChevronDown, 
  ChevronRight,
  Award,
  Calendar,
  MapPin,
  Plus,
  Edit2,
  X,
  Save,
  Users
} from 'lucide-react';

// Tipos de datos definidos localmente para el componente
interface StaticTeacher {
    id: string;
    name: string;
    subject: string;
}

interface StaticStage {
    id: string;
    stage_number: number;
    title: string;
}

interface StaticContribution {
    id: string;
    teacher_id: string;
    teacher_name: string;
    uac: string;
    module: string;
    stage_id: string;
    stage_number: number;
    stage_title: string;
    progression: string;
    description: string;
    activities: string[];
    timeframe: string;
    objectives: string[];
}

const TeacherContributionManager = () => {
  // --- INICIO: Datos Estáticos Actualizados ---

  const staticStagesData: StaticStage[] = [
    { id: 'stage-1', stage_number: 1, title: 'Investigación y Análisis' },
    { id: 'stage-2', stage_number: 2, title: 'Captación de Materia Prima' },
    { id: 'stage-3', stage_number: 3, title: 'Diseño del Proceso' },
    { id: 'stage-4', stage_number: 4, title: 'Construcción del Papel' },
    { id: 'stage-5', stage_number: 5, title: 'Difusión' },
    { id: 'stage-6', stage_number: 6, title: 'Evaluación de Resultados' },
    { id: 'stage-7', stage_number: 7, title: 'Demostración del PEC' },
  ];

  const staticTeachersData: StaticTeacher[] = [
    { id: 'teacher-rubi', name: 'Mtra. Rubí Corrales Ávila', subject: 'Conciencia Histórica' },
    // AÑADIDO: Nueva docente
    { id: 'teacher-rocio', name: 'Mtra. Rocío Ornelas Garnica', subject: 'Submódulo IV: Sistematiza y gestiona proyectos I' },
    { id: 'teacher-saul', name: 'Mtro. Omar Saúl Espinosa Soriano', subject: 'Ciencias Sociales III' },
    { id: 'teacher-irvin', name: 'Mtro. Irvin Garcés Solano', subject: 'Actividades Artísticas y Culturales' },
    { id: 'teacher-monserrat', name: 'Ing. Monserrat Zepeda Ruíz', subject: 'Desarrolla Aplicaciones Web' },
    { id: 'teacher-miriam', name: 'Dra. Miriam González Delgadillo', subject: 'Reacciones Químicas' },
    { id: 'teacher-ady', name: 'Mtra. Ady Ruth Flores Martínez', subject: 'Dirección Escolar' },
    { id: 'teacher-reyna', name: 'Mtra. Reyna Serrano Arriaga', subject: 'Subdirección Escolar' },
    { id: 'teacher-all', name: 'Todos los Docentes', subject: 'Presentación Final' },
  ];

  const staticContributionsData: StaticContribution[] = [
    {
        id: 'contrib-1',
        teacher_id: 'teacher-rubi', teacher_name: 'Mtra. Rubí Corrales Ávila',
        uac: 'Conciencia Histórica', module: 'Recursos sociocognitivos',
        stage_id: 'stage-1', stage_number: 1, stage_title: 'Investigación y Análisis',
        progression: "Las y los estudiantes identifican los cambios ocurridos a través del tiempo para satisfacer las necesidades materiales, tecnológicas, las formas de organización social y las relaciones de poder para que comprenda las transformaciones históricas. ",
        description: "Diagnóstico inicial e investigación sobre los conceptos de 'Economía Circular'.",
        activities: [
            "Actividad 1. Diagnóstico: Indagar sobre el tipo de residuos (basura) que se genera en tu hogar. ",
            "Actividad 2. Investigación: Búsqueda de información sobre que es la economía circular, características, importancia, ventajas, ejemplos y como aplicarla en la vida diaria. "
        ],
        timeframe: "Febrero, semana 1, 2 y 3",
        objectives: ["Comprender las transformaciones históricas en la gestión de recursos.", "Analizar el concepto de Economía Circular."]
    },
    // AÑADIDO: Nueva contribución para la Mtra. Rocío
    {
        id: 'contrib-1b',
        teacher_id: 'teacher-rocio', teacher_name: 'Mtra. Rocío Ornelas Garnica',
        uac: 'Submódulo IV: Sistematiza y gestiona proyectos I', module: 'Formación laboral',
        stage_id: 'stage-1', stage_number: 1, stage_title: 'Investigación y Análisis',
        progression: "Los estudiantes adquieren los conocimientos esenciales y herramientas básicas, para comprender el ciclo de vida de un proyecto (inicio, planificación, ejecución, monitoreo, cierre), definiendo los objetivos SMART y el alcance. ",
        description: "Análisis y organización de la información investigada para la planeación del proyecto.",
        activities: [
            "Actividad 3. Análisis de la información: Elaborar organizadores gráficos a partir del análisis de la información investigada. "
        ],
        timeframe: "Febrero",
        objectives: ["Sistematizar la información recolectada.", "Definir los objetivos del proyecto."]
    },
    {
        id: 'contrib-2',
        teacher_id: 'teacher-saul', teacher_name: 'Mtro. Omar Saúl Espinosa Soriano',
        uac: 'Ciencias Sociales III', module: 'Áreas de conocimiento',
        stage_id: 'stage-2', stage_number: 2, stage_title: 'Captación de Materia Prima',
        progression: "Identifica, analiza, reflexiona y cuestiona el papel de la juventud de las sociedades actuales, para identificarse como agente crítico y de transformación. ",
        description: "Organización de los equipos de trabajo y captación de la materia prima (papel de archivo). ",
        activities: [
            "Actividad 1. La organización de equipos de trabajo para segundo grado será de 4 estudiantes, se solicitó a los alumnos que durante el primer parcial recopilaran todo el papel que pudieran, solicitando un mínimo de 2 kilos. "
        ],
        timeframe: "Segunda semana de abril",
        objectives: ["Fomentar el trabajo en equipo.", "Recolectar la materia prima necesaria para el proyecto."]
    },
    {
        id: 'contrib-3',
        teacher_id: 'teacher-irvin', teacher_name: 'Mtro. Irvin Garcés Solano',
        uac: 'Actividades Artísticas y Culturales', module: 'Recursos socioemocionales',
        stage_id: 'stage-2', stage_number: 2, stage_title: 'Captación de Materia Prima',
        progression: "Crea conciencia social a través de las expresiones artísticas que se han desarrollado en contextos históricos, sociales, económicos, políticos para visibilizar y denunciar alguna problemática. ",
        description: "Acopio y verificación del papel recolectado.",
        activities: [
            "Actividad 2. Acopio, verificación y conteo del papel de acuerdo con las siguientes especificaciones: Limpio, Sin clips, Sin resorte o algún objeto metálico. "
        ],
        timeframe: "26 al 30 de mayo",
        objectives: ["Clasificar y preparar el papel para su procesamiento."]
    },
    {
        id: 'contrib-4',
        teacher_id: 'teacher-monserrat', teacher_name: 'Ing. Monserrat Zepeda Ruíz',
        uac: 'Desarrolla Aplicaciones Web', module: 'Formación laboral',
        stage_id: 'stage-3', stage_number: 3, stage_title: 'Diseño del Proceso',
        progression: "Soluciona problemas por medio de algoritmos. ",
        description: "Se establece el procedimiento para obtener hojas nuevas a partir de papel reciclado, documentando los pasos en un algoritmo. ",
        activities: [
            "Actividad 1. Los alumnos investigarán ¿cómo se elabora el papel reciclado a partir de la reutilización de papel archivo? "
        ],
        timeframe: "Del 10 al 14 de marzo",
        objectives: ["Definir un algoritmo claro para la creación de papel reciclado."]
    },
    {
        id: 'contrib-5',
        teacher_id: 'teacher-miriam', teacher_name: 'Dra. Miriam González Delgadillo',
        uac: 'Reacciones Químicas', module: 'Áreas de conocimiento',
        stage_id: 'stage-4', stage_number: 4, stage_title: 'Construcción del Papel',
        progression: "Las sustancias reaccionan químicamente de formas características. ",
        description: "Proceso práctico de elaboración de papel reciclado. ",
        activities: [
            "Remojar las hojas de papel de 24 a 72 horas. ",
            "Licuar el papel remojado para obtener una masilla. ",
            "Formar una capa de pasta con un cernidor y escurrir el agua. ",
            "Aplanar con rodillo y dejar secar por 3 días. ",
            "Cortar las hojas secas a 20cm x 15cm y perforar para encuadernar. "
        ],
        timeframe: "Abril y mayo",
        objectives: ["Ejecutar el proceso de transformación del papel.", "Obtener un producto final."]
    },
    {
        id: 'contrib-6',
        teacher_id: 'teacher-monserrat', teacher_name: 'Ing. Monserrat Zepeda Ruíz',
        uac: 'Desarrolla Aplicaciones Web', module: 'Formación laboral',
        stage_id: 'stage-5', stage_number: 5, stage_title: 'Difusión',
        progression: "Diseñar los elementos visuales de la interfaz web, utilizando herramientas de diseño gráfico digital. ",
        description: "Desarrollo de una página web estática para difundir los resultados del proyecto. ",
        activities: [
            "Actividad 1. Los estudiantes promueven su aprendizaje, difundiendo los resultados del proyecto. ",
            "Elaborar página web estática (informativa) sobre el proyecto utilizando lenguaje de programación HTML. "
        ],
        timeframe: "Mayo",
        objectives: ["Crear un producto digital para la difusión del proyecto."]
    },
    {
        id: 'contrib-7a',
        teacher_id: 'teacher-ady', teacher_name: 'Mtra. Ady Ruth Flores Martínez',
        uac: 'Dirección Escolar', module: 'Administración educativa',
        stage_id: 'stage-6', stage_number: 6, stage_title: 'Evaluación de Resultados',
        progression: "Analizar los resultados, impacto y procesos del proyecto para determinar si se cumplió el objetivo. ",
        description: "La dirección escolar lidera el análisis final para determinar el cumplimiento de los objetivos del proyecto.",
        activities: ["Análisis del cumplimiento del objetivo principal."],
        timeframe: "Mayo",
        objectives: ["Evaluar el impacto general del proyecto."]
    },
    {
        id: 'contrib-7b',
        teacher_id: 'teacher-reyna', teacher_name: 'Mtra. Reyna Serrano Arriaga',
        uac: 'Subdirección Escolar', module: 'Administración educativa',
        stage_id: 'stage-6', stage_number: 6, stage_title: 'Evaluación de Resultados',
        progression: "Verificar la participación y el desarrollo de competencias en los estudiantes.",
        description: "La subdirección apoya en la evaluación, enfocándose en los procesos y la participación de la comunidad.",
        activities: ["Recopilación de evidencias de participación.", "Análisis de procesos y logística del proyecto."],
        timeframe: "Mayo",
        objectives: ["Determinar la efectividad de los procesos."]
    },
    {
        id: 'contrib-8',
        teacher_id: 'teacher-all', teacher_name: 'Todos los Docentes',
        uac: 'Presentación Final del PEC', module: 'Competencias transversales',
        stage_id: 'stage-7', stage_number: 7, stage_title: 'Demostración del PEC',
        progression: "Comunicar de manera efectiva los resultados y aprendizajes del proyecto a una audiencia diversa.",
        description: "Presentación pública de los resultados a padres de familia y a la comunidad escolar.",
        activities: [
            "Demostración del PEC: Presentar públicamente los resultados del trabajo realizado por los estudiantes, padres de familia y docentes. "
        ],
        timeframe: "Final de Mayo",
        objectives: ["Presentar los resultados del proyecto.", "Involucrar a la comunidad en los logros."]
    }
  ];
  
  // --- FIN: Datos Estáticos ---

  const [contributions, setContributions] = useState<StaticContribution[]>(staticContributionsData);
  const [teachers, setTeachers] = useState<StaticTeacher[]>(staticTeachersData);
  const [stages, setStages] = useState<StaticStage[]>(staticStagesData);
  const [loading, setLoading] = useState(false);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [expandedTeacher, setExpandedTeacher] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    teacher_id: '', uac: '', module: '', stage_id: '', progression: '',
    description: '', activities: [''], timeframe: '', objectives: ['']
  });

  const modules = [
    'Recursos sociocognitivos', 'Áreas de conocimiento', 'Recursos socioemocionales',
    'Formación laboral', 'Administración educativa', 'Competencias transversales'
  ];

  const resetForm = () => {
    setFormData({
      teacher_id: '', uac: '', module: '', stage_id: '', progression: '',
      description: '', activities: [''], timeframe: '', objectives: ['']
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filteredActivities = formData.activities.filter(activity => activity.trim() !== '');
    const filteredObjectives = formData.objectives.filter(objective => objective.trim() !== '');
    
    if (!formData.teacher_id || !formData.uac || !formData.stage_id || !formData.description || filteredActivities.length === 0) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const selectedTeacher = teachers.find(t => t.id === formData.teacher_id);
    const selectedStageData = stages.find(s => s.id === formData.stage_id);

    if (!selectedTeacher || !selectedStageData) {
        alert('Docente o etapa no válidos.');
        return;
    }

    const contributionData = {
        teacher_id: formData.teacher_id,
        teacher_name: selectedTeacher.name,
        uac: formData.uac,
        module: formData.module,
        stage_id: formData.stage_id,
        stage_number: selectedStageData.stage_number,
        stage_title: selectedStageData.title,
        progression: formData.progression,
        description: formData.description,
        activities: filteredActivities,
        timeframe: formData.timeframe,
        objectives: filteredObjectives
    };

    if (editingId) {
      setContributions(contributions.map(c => c.id === editingId ? { ...c, ...contributionData } : c));
    } else {
      const newContribution = { ...contributionData, id: `contrib-${Date.now()}` };
      setContributions([...contributions, newContribution]);
    }
    
    cancelEdit();
  };

  const handleEdit = (contribution: StaticContribution) => {
    setFormData({
      teacher_id: contribution.teacher_id,
      uac: contribution.uac,
      module: contribution.module,
      stage_id: contribution.stage_id,
      progression: contribution.progression,
      description: contribution.description,
      activities: contribution.activities.length > 0 ? contribution.activities : [''],
      timeframe: contribution.timeframe,
      objectives: contribution.objectives.length > 0 ? contribution.objectives : ['']
    });
    setEditingId(contribution.id);
    setIsAdding(true);
  };

  const handleDelete = (contributionId: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta contribución?')) return;
    setContributions(contributions.filter(contrib => contrib.id !== contributionId));
  };
  
  const addActivity = () => setFormData(prev => ({ ...prev, activities: [...prev.activities, ''] }));
  const removeActivity = (index: number) => setFormData(prev => ({ ...prev, activities: prev.activities.filter((_, i) => i !== index) }));
  const updateActivity = (index: number, value: string) => {
    const newActivities = [...formData.activities];
    newActivities[index] = value;
    setFormData({ ...formData, activities: newActivities });
  };
  
  const addObjective = () => setFormData(prev => ({ ...prev, objectives: [...prev.objectives, ''] }));
  const removeObjective = (index: number) => setFormData(prev => ({ ...prev, objectives: prev.objectives.filter((_, i) => i !== index) }));
  const updateObjective = (index: number, value: string) => {
    const newObjectives = [...formData.objectives];
    newObjectives[index] = value;
    setFormData({ ...formData, objectives: newObjectives });
  };


  const getStageColor = (stageNumber: number) => {
    const colors = [
      'bg-blue-100 text-blue-800 border-blue-200', 'bg-green-100 text-green-800 border-green-200',
      'bg-purple-100 text-purple-800 border-purple-200', 'bg-orange-100 text-orange-800 border-orange-200',
      'bg-teal-100 text-teal-800 border-teal-200', 'bg-red-100 text-red-800 border-red-200',
      'bg-indigo-100 text-indigo-800 border-indigo-200'
    ];
    return colors[stageNumber - 1] || colors[0];
  };

  const filteredContributions = selectedStage 
    ? contributions.filter(contrib => contrib.stage_number === selectedStage) 
    : contributions;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-green-600" />
              Aportes de Maestros por UAC/Submódulo
            </h1>
            <p className="text-gray-600 text-lg">Contribuciones de cada docente al Proyecto EcoPapel.</p>
          </div>
          <button onClick={() => setIsAdding(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Agregar Contribución
          </button>
        </div>
      </div>
      
      {isAdding && (
        <div className="mb-6 bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-gray-300">
          <h4 className="font-semibold text-gray-700 mb-4 text-xl">{editingId ? 'Editar Contribución' : 'Agregar Nueva Contribución'}</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Docente *</label>
                    <select value={formData.teacher_id} onChange={(e) => setFormData({ ...formData, teacher_id: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required>
                        <option value="">Seleccionar docente</option>
                        {teachers.map((teacher) => (<option key={teacher.id} value={teacher.id}>{teacher.name}</option>))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">UAC/Submódulo *</label>
                    <input type="text" value={formData.uac} onChange={(e) => setFormData({ ...formData, uac: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Módulo</label>
                    <select value={formData.module} onChange={(e) => setFormData({ ...formData, module: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option value="">Seleccionar módulo</option>
                        {modules.map((module) => (<option key={module} value={module}>{module}</option>))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Etapa del Proyecto *</label>
                    <select value={formData.stage_id} onChange={(e) => setFormData({ ...formData, stage_id: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required>
                        <option value="">Seleccionar etapa</option>
                        {stages.map((stage) => (<option key={stage.id} value={stage.id}>Etapa {stage.stage_number}: {stage.title}</option>))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
                    <input type="text" value={formData.timeframe} onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Progresión de Aprendizaje</label>
                <textarea value={formData.progression} onChange={(e) => setFormData({ ...formData, progression: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" rows={3}/>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción del Aporte *</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" rows={3} required/>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Actividades *</label>
                {formData.activities.map((activity, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                        <input type="text" value={activity} onChange={(e) => updateActivity(index, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"/>
                        {formData.activities.length > 1 && (<button type="button" onClick={() => removeActivity(index)} className="p-2 text-red-600 hover:bg-red-50 rounded"><X className="w-4 h-4" /></button>)}
                    </div>
                ))}
                <button type="button" onClick={addActivity} className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1"><Plus className="w-4 h-4" />Agregar actividad</button>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Objetivos Específicos</label>
                {formData.objectives.map((objective, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                        <input type="text" value={objective} onChange={(e) => updateObjective(index, e.target.value)} className="flex-1 px-3 py-2 border border-ray-300 rounded-lg"/>
                        {formData.objectives.length > 1 && (<button type="button" onClick={() => removeObjective(index)} className="p-2 text-red-600 hover:bg-red-50 rounded"><X className="w-4 h-4" /></button>)}
                    </div>
                ))}
                <button type="button" onClick={addObjective} className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1"><Plus className="w-4 h-4" />Agregar objetivo</button>
             </div>
            <div className="flex gap-2 pt-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"><Save className="w-4 h-4" />{editingId ? 'Actualizar' : 'Guardar'}</button>
              <button type="button" onClick={cancelEdit} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400">Cancelar</button>
            </div>
          </form>
        </div>
      )}

      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Filtrar por Etapa:</label>
        <select value={selectedStage || ''} onChange={(e) => setSelectedStage(e.target.value ? parseInt(e.target.value) : null)} className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Todas las etapas</option>
            {stages.map(stage => (<option key={stage.id} value={stage.stage_number}>Etapa {stage.stage_number}: {stage.title}</option>))}
        </select>
      </div>
      <div className="space-y-4">
        {filteredContributions.map((contribution) => (
            <div key={contribution.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 cursor-pointer hover:bg-gray-50" onClick={() => setExpandedTeacher(expandedTeacher === contribution.id ? null : contribution.id)}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><GraduationCap className="w-6 h-6 text-green-600" /></div>
                            <div className="flex-grow min-w-0">
                                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900 truncate">{contribution.teacher_name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStageColor(contribution.stage_number)}`}>Etapa {contribution.stage_number}</span>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                                    <div className="flex items-center gap-1"><BookOpen className="w-4 h-4" /><strong>{contribution.uac}</strong></div>
                                    {contribution.module && <div className="flex items-center gap-1"><Target className="w-4 h-4" /><span>{contribution.module}</span></div>}
                                    {contribution.timeframe && <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{contribution.timeframe}</span></div>}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <button onClick={(e) => { e.stopPropagation(); handleEdit(contribution); }} className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Edit2 className="w-4 h-4" /></button>
                            <button onClick={(e) => { e.stopPropagation(); handleDelete(contribution.id); }} className="p-1 text-red-600 hover:bg-red-50 rounded"><X className="w-4 h-4" /></button>
                            <div className="ml-2">{expandedTeacher === contribution.id ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}</div>
                        </div>
                    </div>
                </div>
                {expandedTeacher === contribution.id && (
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                {contribution.progression && <div><h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2"><Award className="w-4 h-4 text-green-600"/>Progresión de Aprendizaje</h4><p className="text-sm text-gray-700 bg-white p-3 rounded-md border">{contribution.progression}</p></div>}
                                <div><h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600"/>Descripción del Aporte</h4><p className="text-sm text-gray-700 bg-white p-3 rounded-md border">{contribution.description}</p></div>
                                {contribution.objectives.length > 0 && <div><h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-purple-600"/>Objetivos Específicos</h4><ul className="space-y-2">{contribution.objectives.map((o, i) => <li key={i} className="text-sm text-gray-700 bg-white p-2 rounded-md border flex items-start gap-2"><span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>{o}</li>)}</ul></div>}
                            </div>
                            <div><h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2"><Users className="w-4 h-4 text-orange-600"/>Actividades Desarrolladas</h4><ul className="space-y-2">{contribution.activities.map((a, i) => <li key={i} className="text-sm text-gray-700 bg-white p-3 rounded-md border flex items-start gap-3"><span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">{i + 1}</span>{a}</li>)}</ul></div>
                        </div>
                    </div>
                )}
            </div>
        ))}
      </div>
      {filteredContributions.length === 0 && !loading && (
          <div className="text-center py-12"><BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" /><p className="text-gray-500 text-lg">{selectedStage ? 'No se encontraron contribuciones para la etapa seleccionada' : 'No hay contribuciones registradas'}</p></div>
      )}
    </div>
  );
};

export default TeacherContributionManager;