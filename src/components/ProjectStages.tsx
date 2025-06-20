import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Recycle, Search, Lightbulb, Hammer, Share2, BarChart3, Trophy, Calendar, Users, BookOpen, Camera, ExternalLink, Sparkles, Target, Layers } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  description: string;
  activities: Activity[];
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  operationalPlan?: OperationalPlan;
}

interface Activity {
  number: number;
  title: string;
  description: string;
  details?: string[];
}

interface OperationalPlan {
  uac: string;
  progression: string;
  didacticStrategy: string;
  timeline: string;
  participants: string;
}

const stages: Stage[] = [
  {
    id: 1,
    title: "INVESTIGACIÓN Y ANÁLISIS DE INFORMACIÓN",
    description: "Esta etapa constituye el punto de partida formativo, la finalidad es sensibilizar a los estudiantes sobre la importancia del reciclaje como una acción concreta para mitigar la problemática de cultura del reciclaje, a través de la búsqueda y análisis de información sobre el modelo de economía circular y las 3R (reducir, reciclar y reutilizar), los estudiantes desarrollan habilidades de comprensión lectora, pensamiento crítico y aprendizaje autónomo, además, se fomenta la conexión entre el conocimiento científico y la vida cotidiana, como base para un compromiso social responsable.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
    activities: [
      {
        number: 1,
        title: "Diagnóstico",
        description: "Indagar sobre el tipo de residuos (basura) que se genera en tu hogar.",
        details: [
          "¿En dónde la depositan?",
          "¿La separan?",
          "¿Qué hacen con ella?"
        ]
      },
      {
        number: 2,
        title: "Investigación",
        description: "Búsqueda de información sobre economía circular y 3R",
        details: [
          "Búsqueda de información que es economía circular, beneficios, porque es importante la economía circular, ventajas, ejemplos",
          "Búsqueda de información de 3R, que significa, porque es importante y como puedo aplicar en mi vida"
        ]
      },
      {
        number: 3,
        title: "Análisis de la información",
        description: "Elaborar organizadores gráficos a partir del análisis de la información investigada"
      }
    ],
    operationalPlan: {
      uac: "Conciencia Histórica",
      progression: "2.- Las y los estudiantes identifican los cambios ocurridos a través del tiempo para satisfacer las necesidades materiales, tecnológicas, las formas de organización social y las relaciones de poder para que comprenda las transformaciones históricas.",
      didacticStrategy: "Se aplicó un diagnóstico a los alumnos con el objetivo de evaluar sus conocimientos previos sobre los conceptos y características de la economía circular y las 3R. Con base en los resultados obtenidos, los estudiantes elaboraron organizadores gráficos que permitieron visualizar su nivel de comprensión. Posteriormente, se llevó a cabo una sesión plenaria en la que se analizaron y discutieron los conceptos principales, con el fin de fortalecer y consolidar el aprendizaje del tema.",
      timeline: "Febrero semana 1, 2 y 3",
      participants: "Docente y alumnos"
    }
  },
  {
    id: 2,
    title: "CAPTACIÓN DE MATERIA PRIMA",
    description: "Esta etapa permite la movilización comunitaria y pone en práctica lo aprendido. La recolección y clasificación del PET convierte a los estudiantes en agentes activos de cambio, mediante la elaboración y difusión de carteles (físicos y digitales), se integran herramientas comunicativas y tecnológicas con un propósito real: convocar a la comunidad, esto fortalece el vínculo escuela-comunidad y desarrolla habilidades de organización, trabajo en equipo y gestión de recursos, pilares fundamentales del aprendizaje basado en proyectos.",
    icon: <Recycle className="w-6 h-6" />,
    color: "bg-green-500",
    bgGradient: "from-green-50 to-green-100",
    activities: [
      {
        number: 1,
        title: "Organización de equipos de 6 estudiantes",
        description: "Elaboración de carteles (físicos y digitales) que se compartan en la comunidad de San Pedro Tlaltizapan y en las redes sociales con la intención de solicitar apoyo para la recolección del PET (mencionando las características que debe tener)"
      },
      {
        number: 2,
        title: "Se trae la materia prima al plantel para la reutilización",
        description: "Acopio, verificación y conteo del papel de acuerdo con las siguientes especificaciones:",
        details: [
          "Limpio",
          "Sin clips",
          "Sin resorte o algún objeto metálico"
        ]
      }
    ],
    operationalPlan: {
      uac: "Ciencias Sociales III / Actividades Artísticas y culturales",
      progression: "Identifica, analiza, reflexiona y cuestiona el papel de la juventud de las sociedades actuales, para identificarse como agente crítico y de transformación a partir de su formación académica, así como de sus características y potencialidades como grupo demográfico.",
      didacticStrategy: "Se realizó un análisis de las características de alumnos y como sus acciones son las que principalmente hacer cambios significativos en el mundo, asimismo se solicitó a los alumnos el apoyo para la recolección del papel. Se solicitó que fuera limpio, sin objetos metálicos y preferentemente de archivo muerto, con un mínimo de 2 kilos.",
      timeline: "Segunda semana de abril / 26 al 30 de mayo de 2025",
      participants: "Docentes, alumnos, padres de familia y comunidad"
    }
  },
  {
    id: 3,
    title: "DISEÑO",
    description: "En esta fase, los estudiantes articulan saberes técnicos y científicos para planear una solución concreta a un problema, a través de la transformación de materiales útiles, como libretas, porta lapiceros o porta retratos. Esta propuesta no solo responde a la necesidad urgente de reducir los residuos, sino que también busca generar una cultura ambiental basada en la economía circular, promoviendo entre los estudiantes y sus familias el valor de dar un segundo uso a los materiales.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-purple-500",
    bgGradient: "from-purple-50 to-purple-100",
    activities: [
      {
        number: 1,
        title: "Los alumnos investigarán",
        description: "¿Cómo se elabora el papel reciclado a partir de la reutilización de papel archivo? Considerando el tipo de papel y su estado"
      }
    ],
    operationalPlan: {
      uac: "Submódulo I",
      progression: "Soluciona problemas por medio de algoritmos.",
      didacticStrategy: "1.- El docente retoma competencias laborales desarrolladas con anterioridad, dejando ver que el desarrollo se algoritmos el clave dentro de la carrera e incluso en la vida cotidiana, con esta introducción el docente proporciona al alumno la manera efectiva y eficaz de cómo procesar el papel archivo para poder reutilizarlo en hojas. 2.- Se proporcionan a los alumnos las indicaciones y recomendaciones que debe tener el papel para poder ser procesado, dejando como alternativa que cada alumno indague y agregue o elimine pasos para ejecutar los pasos de forma efectiva. 3.- Se gráfica cada uno de los pasos en el algoritmo para poder comprender mejor la acción de cada uno de estos.",
      timeline: "Del 10 al 14 de marzo",
      participants: "Docente y alumnos"
    }
  },
  {
    id: 4,
    title: "CONSTRUCCIÓN",
    description: "Esta es la etapa de materialización del aprendizaje, donde los estudiantes aplican los conocimientos adquiridos en el diseño y elaboran los productos: como libretas, porta lapiceros o porta retratos. Esta fase enfatiza el trabajo colaborativo, la seguridad, el uso adecuado de herramientas, y el respeto por los procesos. Además, fomenta el sentido de logro y pertenencia al ver cómo sus ideas se transforman en acciones con impacto real, la participación de padres de familia fortalece el componente comunitario del proyecto.",
    icon: <Hammer className="w-6 h-6" />,
    color: "bg-orange-500",
    bgGradient: "from-orange-50 to-orange-100",
    activities: [
      {
        number: 1,
        title: "Elaboración de papel reciclado",
        description: "Con la información investigada los alumnos elaboran papel reciclado para ser reutilizado en libretas, diarios, porta lapiceros o porta retratos",
        details: [
          "En primer momento los alumnos eligieron 2 kilos de hojas archivo por cada uno de ellos, tomando en cuenta que no tuvieran clips, que no estuvieran engrapadas y sin espirales metálicos o de plástico.",
          "Posteriormente cortaron las hojas en tiras o trozos pequeños con ayuda de tijeras o guillotina.",
          "Una vez cortadas las hojas, se colocaron en un bote de 20 litros de agua por aproximadamente 24 a 72 horas con la intención de reblandecer las hojas.",
          "Ya que se tenían las hojas remojadas, se licuaron, hasta obtener una masilla, la cual se colocó dentro de una tina llena de agua y con apoyo de un cernidor se coló hasta lograr una capa de la pasta, se dejó escurrir y con ayuda de una manta se retiró el excedente de agua, por último, se aplano con un rodillo para lograr una hoja delgada, uniforme y resistente.",
          "Estas hojas se dejaron secar por aproximadamente 3 días.",
          "Una vez secas las hojas, se cortaron considerando las siguientes medidas: 20 cm de largo por 15 cm de ancho.",
          "Finalmente, se perforaron las hojas para colocar un arillo y formar una libreta de tareas con hojas de papel archivo."
        ]
      }
    ],
    operationalPlan: {
      uac: "Reacciones químicas",
      progression: "E1.La materia es necesaria estudiarla en términos de los tipos de átomos presentes y las interacciones entre ellos y dentro de ellos. Muchos de los fenómenos observados en los sistemas vivos e inertes son producto de reacciones químicas en las que se conserva el número de átomos de cada tipo, pero cambian su disposición.",
      didacticStrategy: "Una vez que se reunieron las hojas de papel archivo, se realizó el proceso completo de transformación del papel, aplicando conocimientos de reacciones químicas y conservación de la materia en la formación de nuevas sustancias.",
      timeline: "Abril y mayo",
      participants: "Docente y alumnos"
    }
  },
  {
    id: 5,
    title: "DIFUSIÓN",
    description: "La difusión promueve la explicación del aprendizaje y el impacto del proyecto, al crear un video y compartirlo en redes sociales y medios escolares, los estudiantes desarrollan habilidades digitales y comunicativas, fundamentales en la era actual, esta etapa también cumple una función social: inspirar a otras comunidades, sensibilizar sobre la problemática ambiental y posicionar a la escuela como un centro de innovación y responsabilidad social.",
    icon: <Share2 className="w-6 h-6" />,
    color: "bg-pink-500",
    bgGradient: "from-pink-50 to-pink-100",
    activities: [
      {
        number: 1,
        title: "Mostrar resultados a la comunidad",
        description: "Los estudiantes muestran a la comunidad los resultados del nuevo uso que se le dará al papel reciclado, a través de un video integrado por las fotografías de cada una de las etapas del proyecto, mismo que será publicado en la página de la institución."
      }
    ],
    operationalPlan: {
      uac: "Submódulo I",
      progression: "Diseñar los elementos visuales de la interfaz web, utilizando herramientas de diseño gráfico digital.",
      didacticStrategy: "1.- El docente proporciona al alumno información sobre los elementos de una página web 2.- El docente proporciona información con las diferencias entre una página web estática y una dinámica 3.- El docente proporciona al alumno información relevante sobre lenguaje de programación HTML 4.- El alumno atiende información, conoce la estructura y etiquetas del lenguaje de programación HTML 5.- El docente guía al alumno durante el desarrollo de ejercicios con este lenguaje de programación, considerando estructura, sintaxis y sentencias 6.- Con apoyo del docente el alumno elabora página web estática (informativa) sobre el proyecto PEC que se desarrolla en el grado, esto utilizando lenguaje de programación HTML.",
      timeline: "Mayo",
      participants: "Docente y alumnos"
    }
  },
  {
    id: 6,
    title: "EVALUACIÓN DE RESULTADOS",
    description: "En esta etapa se realiza una evaluación integral del proceso y del impacto del proyecto, permitiendo reflexionar críticamente sobre lo logrado, los desafíos enfrentados y las áreas de mejora, esta fase no solo mide el cumplimiento del objetivo, sino que fortalece la autoevaluación, la metacognición y la toma de decisiones informadas, se vincula directamente con el desarrollo de competencias transversales como el pensamiento crítico, la responsabilidad y la mejora continua.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-indigo-500",
    bgGradient: "from-indigo-50 to-indigo-100",
    activities: [
      {
        number: 1,
        title: "Análisis de resultados",
        description: "Analizar los resultados, impacto y procesos del proyecto para determinar si se cumplió el objetivo."
      }
    ],
    operationalPlan: {
      uac: "Subdirección y Dirección Escolar",
      progression: "",
      didacticStrategy: "Después de ejecutar el proyecto PEC se puede dar cuenta que el objetivo principal fue fomentar una cultura de reciclaje en la comunidad de San Pedro Tlaltizapán, mediante la participación de los alumnos de segundo grado del CBT y sus familias, reutilizando el papel reciclado para la elaboración de libretas, portarretratos, porta lapiceros.",
      timeline: "Mayo",
      participants: "Subdirección y Dirección Escolar"
    }
  },
  {
    id: 7,
    title: "DEMOSTRACIÓN DEL PEC",
    description: "La presentación pública del PEC constituye un momento de socialización del aprendizaje, permite valorar el esfuerzo colectivo, compartir los logros con la comunidad educativa y local, y generar un sentido de orgullo y pertenencia. Esta etapa es clave para fortalecer el liderazgo juvenil, la identidad comunitaria y para dar cierre a un proceso formativo significativo que trasciende el aula.",
    icon: <Trophy className="w-6 h-6" />,
    color: "bg-yellow-500",
    bgGradient: "from-yellow-50 to-yellow-100",
    activities: [
      {
        number: 1,
        title: "Exposición de resultados",
        description: "Exponer los resultados obtenidos durante el desarrollo del Proyecto Escolar Comunitario (PEC) para evidenciar el impacto en la comunidad escolar y local, promoviendo la conciencia sobre la economía circular"
      }
    ],
    operationalPlan: {
      uac: "Todos los involucrados",
      progression: "",
      didacticStrategy: "Presentar públicamente los resultados del trabajo realizado por los estudiantes, padres de familia y docentes y comunidad.",
      timeline: "Mayo",
      participants: "Todos los involucrados"
    }
  }
];

interface ProjectStagesProps {
  onViewGallery?: (stageId: number) => void;
  onViewAlgorithm?: () => void;
}

const ProjectStages: React.FC<ProjectStagesProps> = ({ onViewGallery, onViewAlgorithm }) => {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const toggleStage = (stageId: number) => {
    setExpandedStage(expandedStage === stageId ? null : stageId);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {stages.map((stage) => (
        <div
          key={stage.id}
          className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
            expandedStage === stage.id ? 'scale-[1.02]' : ''
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stage.bgGradient} opacity-50`}></div>

          <div className="relative bg-white/90 backdrop-blur-sm p-6">
            <button
              onClick={() => toggleStage(stage.id)}
              className="w-full flex items-center justify-between hover:bg-white/50 transition-all duration-300 mb-4 px-4 py-3 rounded"
            >
              <div className="flex items-center gap-4">
                <div className={`${stage.color} text-white p-4 rounded-xl shadow-lg transform transition-transform ${
                  expandedStage === stage.id ? 'rotate-3 scale-110' : ''
                }`}>
                  {stage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{stage.title}</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                  expandedStage === stage.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedStage === stage.id && (
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">{stage.description}</p>

                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-gray-600" />
                    Actividades
                  </h4>
                  <div className="space-y-4">
                    {stage.activities.map((activity) => (
                      <div
                        key={activity.number}
                        className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`${stage.color} text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}>
                            {activity.number}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 mb-2">{activity.title}</h5>
                            <p className="text-gray-700 mb-3">{activity.description}</p>
                            {activity.details && (
                              <ul className="space-y-2">
                                {activity.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-green-500 mt-1">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {stage.operationalPlan && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Plan Operativo
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <span className="font-semibold text-blue-800 block mb-1">UAC/Submódulo:</span>
                        <p className="text-gray-700">{stage.operationalPlan.uac}</p>
                      </div>
                      {stage.operationalPlan.progression && (
                        <div className="bg-white/70 rounded-lg p-4">
                          <span className="font-semibold text-blue-800 block mb-1">Progresión:</span>
                          <p className="text-gray-700">{stage.operationalPlan.progression}</p>
                        </div>
                      )}
                      <div className="bg-white/70 rounded-lg p-4">
                        <span className="font-semibold text-blue-800 block mb-1">Estrategia Didáctica:</span>
                        <p className="text-gray-700">{stage.operationalPlan.didacticStrategy}</p>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-lg">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 font-medium">{stage.operationalPlan.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 font-medium">{stage.operationalPlan.participants}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-6">
                  {onViewGallery && (
                    <button
                      onClick={() => onViewGallery(stage.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                    >
                      <Camera className="w-4 h-4" />
                      Ver Galería de Imágenes
                    </button>
                  )}
                  {stage.id === 3 && onViewAlgorithm && (
                    <button
                      onClick={onViewAlgorithm}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Algoritmo de Reciclaje
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
        <h3 className="font-bold text-gray-800 mb-4 text-xl">Diseño General - Cuarto Semestre</h3>
        <p className="text-gray-700 mb-6">
          El abordaje de las UAC para el desarrollo del PEC incluye:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Currículum Fundamental
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Recursos sociocognitivos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Áreas de conocimiento
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Recursos socioemocionales
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-500" />
              Formación Laboral
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Competencias laborales básicas y extendidas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Submódulos especializados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStages;