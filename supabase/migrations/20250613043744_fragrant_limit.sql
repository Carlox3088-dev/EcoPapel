/*
  # Add initial project data

  1. Project Stages
    - Insert all 7 stages of the EcoPapel project with proper dates and responsibilities
  
  2. Teachers
    - Add teachers with their subjects and stage assignments
    - Rubí (Conciencia Histórica - Stage 1)
    - Saúl (Ciencias Sociales III - Stage 2)
    - Irvin (Actividades Artísticas y Culturales - Stage 2)
    - Monserrat Zepeda Ruiz (Desarrolla Aplicaciones Web - Stages 3 & 5)
    - Dra. Miriam González Delgadillo (Reacciones Químicas - Stage 4)
  
  3. Student Groups
    - Add sample student groups for the project
*/

-- Insert project stages
INSERT INTO project_stages (stage_number, title, description, start_date, end_date, responsible, status) VALUES
(1, 'Investigación y Análisis', 'Investigación sobre economía circular y análisis de residuos domésticos. Los estudiantes indagan sobre tipos de residuos, separación y manejo de basura en sus hogares.', '2025-02-01', '2025-02-21', 'Rubí', 'completed'),
(2, 'Captación de Materia Prima', 'Organización de equipos de trabajo y recolección de papel archivo. Análisis del papel de la juventud como agente de transformación social.', '2025-04-07', '2025-05-30', 'Saúl e Irvin', 'completed'),
(3, 'Diseño', 'Investigación y diseño del proceso de elaboración de papel reciclado. Desarrollo de algoritmos para el procesamiento efectivo del papel archivo.', '2025-03-10', '2025-03-14', 'Monserrat Zepeda Ruiz', 'completed'),
(4, 'Construcción', 'Elaboración práctica de papel reciclado utilizando reacciones químicas. Proceso completo desde la preparación hasta el secado y corte de hojas.', '2025-04-01', '2025-05-31', 'Dra. Miriam González Delgadillo', 'in_progress'),
(5, 'Difusión', 'Promoción del aprendizaje y creación de página web informativa sobre el proyecto. Desarrollo de elementos visuales y contenido digital.', '2025-05-01', '2025-05-31', 'Monserrat Zepeda Ruiz', 'pending'),
(6, 'Evaluación de Resultados', 'Análisis de resultados, impacto y procesos del proyecto para determinar el cumplimiento de objetivos de cultura de reciclaje.', '2025-05-15', '2025-05-31', 'Subdirección y Dirección Escolar', 'pending'),
(7, 'Demostración del PEC', 'Presentación pública de los resultados del trabajo realizado por estudiantes, padres de familia y docentes.', '2025-05-25', '2025-05-31', 'Todos los involucrados', 'pending');

-- Get stage IDs for teacher assignments
DO $$
DECLARE
    stage1_id uuid;
    stage2_id uuid;
    stage3_id uuid;
    stage4_id uuid;
    stage5_id uuid;
BEGIN
    SELECT id INTO stage1_id FROM project_stages WHERE stage_number = 1;
    SELECT id INTO stage2_id FROM project_stages WHERE stage_number = 2;
    SELECT id INTO stage3_id FROM project_stages WHERE stage_number = 3;
    SELECT id INTO stage4_id FROM project_stages WHERE stage_number = 4;
    SELECT id INTO stage5_id FROM project_stages WHERE stage_number = 5;

    -- Insert teachers
    INSERT INTO teachers (name, subject, icon, stage_id) VALUES
    ('Rubí', 'Conciencia Histórica', 'clock', stage1_id),
    ('Saúl', 'Ciencias Sociales III', 'users', stage2_id),
    ('Irvin', 'Actividades Artísticas y Culturales', 'palette', stage2_id),
    ('Monserrat Zepeda Ruiz', 'Desarrolla Aplicaciones Web', 'computer', stage3_id),
    ('Monserrat Zepeda Ruiz', 'Desarrolla Aplicaciones Web', 'computer', stage5_id),
    ('Dra. Miriam González Delgadillo', 'Reacciones Químicas', 'flask-conical', stage4_id);

    -- Insert sample student groups
    INSERT INTO student_groups (name, description) VALUES
    ('Grupo 2A - Equipo 1', 'Primer equipo de trabajo del grupo 2A, enfocado en recolección de papel archivo'),
    ('Grupo 2A - Equipo 2', 'Segundo equipo de trabajo del grupo 2A, especializado en procesamiento químico'),
    ('Grupo 2A - Equipo 3', 'Tercer equipo de trabajo del grupo 2A, responsable de diseño y difusión'),
    ('Grupo 2B - Equipo 1', 'Primer equipo de trabajo del grupo 2B, enfocado en investigación histórica'),
    ('Grupo 2B - Equipo 2', 'Segundo equipo de trabajo del grupo 2B, especializado en análisis social');
END $$;