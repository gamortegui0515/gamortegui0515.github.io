/**
<<<<<<< HEAD
 * Evidencias organizadas para el portafolio academico de Bases de Datos 1.
 */
export const evidenceData = [
  {
    category: "Casos integradores",
    icon: "carbon:application",
    color: "#8664ee",
    description: "Casos aplicados donde se justifican decisiones de diseno y modelado para sistemas reales.",
    files: [
      {
        group: "Caso integrador Biblioteca",
        name: "Justificacion diseno sistema de gestion",
        file: "/evidence/casos/biblioteca/justificacion-diseno-sistema-gestion.pdf",
        type: "PDF",
        date: "2025-02-10",
        description: "Documento de justificacion para el sistema de gestion de biblioteca.",
        details: "Se presenta la necesidad del sistema, el alcance funcional, las entidades principales y las decisiones de modelado tomadas para representar prestamos, usuarios, recursos bibliograficos y procesos administrativos.",
        contents: ["Analisis del problema", "Justificacion del sistema", "Elementos principales del modelo", "Criterios de diseno"],
        tags: ["Biblioteca", "Diseno", "Gestion"]
      },
      {
        group: "Caso integrador Biblioteca",
        name: "Repositorio Biblioteca - Grupo de 4",
        file: "https://github.com/gamortegui0515/Sistema-De-Gestion-Biblioteca.git",
        type: "LINK",
        linkKind: "Repositorio",
        date: "2025-02-10",
        description: "Repositorio del sistema de gestion de biblioteca trabajado por el grupo.",
        details: "Enlace al repositorio GitHub del caso integrador de biblioteca desarrollado en grupo. Sirve como soporte tecnico del trabajo y permite revisar codigo, estructura del proyecto y avances implementados.",
        contents: ["Repositorio GitHub", "Trabajo grupal", "Sistema de gestion de biblioteca"],
        tags: ["Repositorio", "GitHub", "Biblioteca"]
      },
      {
        group: "Caso integrador Biblioteca",
        name: "Repositorio Biblioteca - Curso completo",
        file: "https://github.com/mmolinasdev/LibraryApp.git",
        type: "LINK",
        linkKind: "Repositorio",
        date: "2025-02-10",
        description: "Repositorio de referencia del caso de biblioteca trabajado por el curso.",
        details: "Enlace al repositorio GitHub del caso de biblioteca del curso completo. Se conserva junto al repositorio grupal para diferenciar el trabajo por equipos y el material general de referencia.",
        contents: ["Repositorio GitHub", "Curso completo", "LibraryApp"],
        tags: ["Repositorio", "GitHub", "Curso"]
      },
      {
        group: "Caso Integrador El Bosque Shop",
        name: "Modelo Draw.io El Bosque Shop",
        file: "https://app.diagrams.net/#G15gaFQ7VNCBYZTSmHg5r9dzgMZmx_keEX#%7B%22pageId%22%3A%227gDV6j_MNjlS6idsnBXv%22%7D",
        type: "LINK",
        linkKind: "Modelo",
        date: "2025-02-10",
        description: "Modelo del caso integrador El Bosque Shop en Draw.io.",
        details: "Enlace al diagrama del caso integrador El Bosque Shop elaborado en Draw.io. Permite abrir el modelo conceptual para revisar la organizacion de entidades, relaciones y estructura general del caso.",
        contents: ["Modelo Draw.io", "Diagrama del caso integrador", "Revision en linea"],
        tags: ["Modelo", "Draw.io", "El Bosque Shop"]
      }
    ]
  },
  {
    category: "Modelo ER y MER",
    icon: "carbon:data-relationship",
    color: "#c93978",
    description: "Talleres de modelado entidad-relacion, modelo extendido y ejercicios de analisis conceptual.",
    files: [
      {
        group: "Ejercicios base MER",
        name: "Modelo ER Aerolinea",
        file: "/evidence/modelo-er-mer/modelo-er-ejercicio-aerolinea.pdf",
        type: "PDF",
        date: "2025-02-15",
        description: "Ejercicio de modelado para una aerolinea.",
        details: "Modelo entidad-relacion enfocado en la gestion de vuelos, rutas, reservas, pasajeros y recursos asociados a la operacion de una aerolinea. Evidencia identificacion de entidades, relaciones, cardinalidades y restricciones.",
        contents: ["Entidades del dominio aerolinea", "Relaciones y cardinalidades", "Atributos relevantes", "Modelo ER final"],
        tags: ["ER", "Aerolinea", "Cardinalidades"]
      },
      {
        group: "Ejercicios base MER",
        name: "Taller Practica 1 MER",
        file: "/evidence/modelo-er-mer/taller-practica-1-mer.pdf",
        type: "PDF",
        date: "2025-02-20",
        description: "Practica base de modelo entidad-relacion.",
        details: "Taller introductorio donde se aplican conceptos de entidades, atributos, relaciones, claves y reglas de cardinalidad para construir diagramas MER coherentes a partir de enunciados.",
        contents: ["Lectura de enunciados", "Identificacion de entidades", "Relaciones entre entidades", "Construccion del diagrama MER"],
        tags: ["MER", "Practica", "Modelado"]
      },
      {
        group: "Modelo Entidad-Relacion Extendido",
        name: "Taller MERE v3",
        file: "/evidence/modelo-er-mer/taller-mere-v3.pdf",
        type: "PDF",
        date: "2025-02-24",
        description: "Ejercicios de modelo entidad-relacion extendido.",
        details: "Entrega centrada en MERE, incluyendo especializacion, generalizacion, herencia y estructuras conceptuales mas avanzadas para representar reglas de negocio con mayor precision.",
        contents: ["Generalizacion y especializacion", "Jerarquias de entidades", "Restricciones de participacion", "Diagramas extendidos"],
        tags: ["MERE", "Herencia", "Especializacion"]
      },
      {
        group: "Modelo Entidad-Relacion Extendido",
        name: "Taller MER v4",
        file: "/evidence/modelo-er-mer/taller-mer-v4.pdf",
        type: "PDF",
        date: "2025-02-28",
        description: "Taller de refuerzo y profundizacion en MER.",
        details: "Documento de practica avanzada que consolida el modelado conceptual, revisando entidades fuertes y debiles, relaciones complejas, atributos multivaluados y restricciones de participacion.",
        contents: ["Entidades fuertes y debiles", "Relaciones complejas", "Atributos multivaluados", "Restricciones del modelo"],
        tags: ["MER", "Entidades", "Relaciones"]
      },
      {
        group: "Taller Modelado Avanzado",
        name: "MERE Taller Modelado Avanzado",
        file: "/evidence/modelo-er-mer/taller-modelado-avanzado/mere-taller-modelado-avanzado.pdf",
        type: "PDF",
        date: "2025-03-05",
        description: "Documento principal del taller de modelado avanzado.",
        details: "Taller de mayor complejidad donde se analizan escenarios con reglas de negocio amplias. Se documentan decisiones de diseno, estructuras extendidas y relaciones necesarias para representar correctamente cada caso.",
        contents: ["Casos de estudio avanzados", "Modelado conceptual", "Aplicacion de MERE", "Justificacion de relaciones y restricciones"],
        tags: ["Avanzado", "MERE", "Casos"]
      },
      {
        group: "Taller Modelado Avanzado",
        name: "Software Taller Avanzado",
        file: "/evidence/modelo-er-mer/taller-modelado-avanzado/software-taller-avanzado.zip",
        type: "ZIP",
        date: "2025-03-05",
        description: "Archivos fuente del modelo avanzado.",
        details: "Paquete comprimido con los archivos de trabajo usados para construir o respaldar el taller de modelado avanzado, conservando la evidencia tecnica asociada al desarrollo del diagrama.",
        contents: ["Archivo comprimido del software", "Recursos de modelado", "Soporte tecnico del taller"],
        tags: ["Software", "Modelo", "ZIP"]
      }
    ]
  },
  {
    category: "Normalizacion y algebra relacional",
    icon: "carbon:function",
    color: "#F7DF1E",
    description: "Ejercicios sobre formas normales, dependencias funcionales y operaciones de algebra relacional.",
    files: [
      {
        group: "Normalizacion",
        name: "Taller 1 y 2 Practica Normalizacion",
        file: "/evidence/normalizacion/taller-1-y-2-practica-normalizacion.xlsx",
        type: "XLSX",
        date: "2025-03-18",
        description: "Practicas iniciales de normalizacion en hoja de calculo.",
        details: "Archivo de trabajo con ejercicios de normalizacion donde se identifican dependencias funcionales, anomalias y pasos de descomposicion para llevar relaciones hacia formas normales.",
        contents: ["Ejercicios 1 y 2", "Dependencias funcionales", "Descomposicion de relaciones", "Aplicacion de formas normales"],
        tags: ["Normalizacion", "1FN", "2FN", "3FN"]
      },
      {
        group: "Normalizacion",
        name: "Taller Avanzado Normalizacion Corregido",
        file: "/evidence/normalizacion/taller-avanzado-normalizacion-corregido.xlsx",
        type: "XLSX",
        date: "2025-03-26",
        description: "Version corregida del taller avanzado de normalizacion.",
        details: "Entrega avanzada que profundiza en dependencias funcionales, claves candidatas y descomposiciones mas rigurosas. La version corregida muestra ajustes y mejoras sobre la solucion inicial.",
        contents: ["Correcciones del taller", "Claves candidatas", "Dependencias complejas", "Normalizacion avanzada"],
        tags: ["Normalizacion", "Avanzado", "Correccion"]
      },
      {
        group: "Algebra relacional",
        name: "Taller Algebra Relacional",
        file: "/evidence/algebra-relacional/taller-algebra-relacional.docx",
        type: "DOCX",
        date: "2025-04-02",
        description: "Ejercicios de consultas usando algebra relacional.",
        details: "Documento con operaciones de seleccion, proyeccion, union, diferencia, producto cartesiano y joins, aplicadas a problemas de consulta antes de llevarlos a SQL.",
        contents: ["Seleccion y proyeccion", "Operaciones de conjuntos", "Joins", "Traduccion conceptual hacia consultas SQL"],
        tags: ["Algebra relacional", "Consultas", "Operadores"]
      }
    ]
  },
  {
    category: "Sentencias SQL",
    icon: "carbon:code",
    color: "#47A248",
    description: "Scripts SQL de conexion, definicion, manipulacion y consultas desarrollados durante el curso.",
    files: [
      {
        group: "Primera conexion",
        name: "Datos Curso SQL Primera Conexion",
        file: "/evidence/sentencias-sql/datos-curso-sql-primera-conexion.sql",
        type: "SQL",
        date: "2025-04-10",
        description: "Script inicial de conexion y datos del curso.",
        details: "Archivo SQL usado para las primeras practicas de conexion con el gestor de base de datos, preparacion del entorno y ejecucion de comandos basicos.",
        contents: ["Preparacion de datos", "Comandos iniciales", "Validacion de conexion"],
        tags: ["SQL", "Conexion", "Practica"]
      },
      {
        group: "Practicas SQL",
        name: "Sentencia SQL 1",
        file: "/evidence/sentencias-sql/sentencia-sql-1.sql",
        type: "SQL",
        date: "2025-04-12",
        description: "Primer conjunto de sentencias SQL.",
        details: "Practica con instrucciones SQL iniciales para crear, consultar o manipular datos, reforzando la sintaxis basica y el uso del gestor.",
        contents: ["Sentencias iniciales", "Consultas basicas", "Manipulacion de datos"],
        tags: ["SQL", "DML", "DDL"]
      },
      {
        group: "Practicas SQL",
        name: "Sentencias SQL 2",
        file: "/evidence/sentencias-sql/sentencias-sql-2.sql",
        type: "SQL",
        date: "2025-04-14",
        description: "Segundo conjunto de ejercicios SQL.",
        details: "Archivo con sentencias de practica orientadas a consultas, filtros, ordenamientos y validacion de resultados sobre tablas de ejemplo.",
        contents: ["Consultas SELECT", "Filtros", "Ordenamiento", "Validacion de resultados"],
        tags: ["SQL", "SELECT", "Filtros"]
      },
      {
        group: "Practicas SQL",
        name: "Sentencias SQL 3",
        file: "/evidence/sentencias-sql/sentencias-sql-3.sql",
        type: "SQL",
        date: "2025-04-16",
        description: "Tercer conjunto de ejercicios SQL.",
        details: "Practica que avanza hacia consultas con relaciones entre tablas, condiciones compuestas y operaciones para obtener informacion desde diferentes entidades.",
        contents: ["Relaciones entre tablas", "Condiciones compuestas", "Consultas con joins"],
        tags: ["SQL", "JOIN", "Consultas"]
      },
      {
        group: "Practicas SQL",
        name: "Sentencias SQL 4",
        file: "/evidence/sentencias-sql/sentencias-sql-4.sql",
        type: "SQL",
        date: "2025-04-18",
        description: "Cuarto conjunto de ejercicios SQL.",
        details: "Entrega final de la serie de sentencias SQL, enfocada en reforzar consultas mas completas, agrupaciones, condiciones y preparacion para la implementacion del proyecto.",
        contents: ["Consultas avanzadas", "Agrupaciones", "Condiciones", "Preparacion para proyecto"],
        tags: ["SQL", "GROUP BY", "Practica"]
      }
    ]
  },
  {
    category: "Proyecto final BD1 - UB Deporte",
    icon: "carbon:trophy",
    color: "#ff9500",
    description: "Evidencias completas del proyecto final: gestion, analisis, modelado, implementacion y scripts.",
    links: [
      {
        label: "Modelo Entidad-Relacion Extendido",
        url: "https://lucid.app/lucidchart/6eb6e986-3399-4164-9a79-b51431519506/edit?viewport_loc=539%2C-1301%2C4977%2C2255%2C0_0&invitationId=inv_7b55cb96-c8a3-47bb-bd8e-b229bf82fba8",
        kind: "Modelo"
      },
      {
        label: "Repositorio Backend",
        url: "https://github.com/MarianaDuran2903/BD-Final.git",
        kind: "Repositorio"
      },
      {
        label: "Repositorio Frontend",
        url: "https://github.com/dsantiagogduran7/BD-Front.git",
        kind: "Repositorio"
      },
      {
        label: "Video del proyecto",
        url: "https://youtu.be/d-I0SLjs_gE",
        kind: "Video"
      }
    ],
    files: [
      {
        group: "Entregables transversales",
        name: "Acta de Constitucion UB Deporte",
        file: "/evidence/proyecto-final-bd1/entregables-transversales/acta-constitucion-ub-deporte.pdf",
        type: "PDF",
        date: "2025-04-20",
        description: "Inicio formal del proyecto UB Deporte.",
        details: "Documento transversal que define la justificacion, objetivos, alcance, interesados y lineamientos iniciales del proyecto de base de datos UB Deporte.",
        contents: ["Objetivo del proyecto", "Alcance", "Interesados", "Lineamientos iniciales"],
        tags: ["Proyecto", "Acta", "Gestion"]
      },
      {
        group: "Entregables transversales",
        name: "EDT WBS UB Deporte",
        file: "/evidence/proyecto-final-bd1/entregables-transversales/edt-wbs-ub-deporte.pdf",
        type: "PDF",
        date: "2025-04-21",
        description: "Estructura de desglose del trabajo del proyecto.",
        details: "Evidencia de planeacion que organiza el proyecto por entregables, fases y actividades, facilitando el seguimiento del trabajo realizado durante el desarrollo de UB Deporte.",
        contents: ["Fases del proyecto", "Entregables", "Actividades", "Estructura WBS"],
        tags: ["EDT", "WBS", "Planeacion"]
      },
      {
        group: "Entregables transversales",
        name: "Acta de Cierre Proyecto UB Deporte",
        file: "/evidence/proyecto-final-bd1/entregables-transversales/acta-cierre-proyecto-ub-deporte.pdf",
        type: "PDF",
        date: "2025-05-20",
        description: "Cierre y formalizacion de resultados del proyecto.",
        details: "Documento final de cierre donde se registra la culminacion del proyecto, entregables desarrollados, resultados obtenidos y estado final del trabajo academico.",
        contents: ["Resultados", "Entregables completados", "Aceptacion del cierre", "Conclusiones"],
        tags: ["Cierre", "Proyecto", "Resultados"]
      },
      {
        group: "Fase 1",
        name: "Documento de Propuesta del Proyecto",
        file: "/evidence/proyecto-final-bd1/fase-1/documento-propuesta-proyecto.pdf",
        type: "PDF",
        date: "2025-04-25",
        description: "Propuesta inicial del sistema UB Deporte.",
        details: "Documento de fase 1 donde se plantea el problema, alcance, objetivos, requerimientos iniciales y vision general del sistema de base de datos para UB Deporte.",
        contents: ["Problema", "Objetivos", "Alcance", "Requerimientos iniciales"],
        tags: ["Fase 1", "Propuesta", "Requerimientos"]
      },
      {
        group: "Fase 1",
        name: "Documento de Supuestos",
        file: "/evidence/proyecto-final-bd1/fase-1/documento-supuestos.pdf",
        type: "PDF",
        date: "2025-04-26",
        description: "Supuestos y restricciones del proyecto.",
        details: "Entrega que documenta condiciones asumidas, limites del sistema, restricciones operativas y criterios usados para orientar el analisis y el modelado de la base de datos.",
        contents: ["Supuestos del sistema", "Restricciones", "Criterios de analisis", "Limites del proyecto"],
        tags: ["Fase 1", "Supuestos", "Restricciones"]
      },
      {
        group: "Fase 1",
        name: "Diccionario de Datos UB Deporte",
        file: "/evidence/proyecto-final-bd1/fase-1/diccionario-datos-ub-deporte.pdf",
        type: "PDF",
        date: "2025-04-28",
        description: "Definicion detallada de datos del sistema.",
        details: "Documento que describe entidades, atributos, tipos de datos, dominios, llaves y observaciones necesarias para comprender la estructura de informacion del proyecto UB Deporte.",
        contents: ["Entidades", "Atributos", "Tipos de datos", "Llaves y dominios"],
        tags: ["Diccionario", "Datos", "Fase 1"]
      },
      {
        group: "Fase 1",
        name: "Algebra Relacional UB Deportes",
        file: "/evidence/proyecto-final-bd1/fase-1/algebra-relacional-ub-deportes.pdf",
        type: "PDF",
        date: "2025-04-30",
        description: "Consultas del proyecto expresadas en algebra relacional.",
        details: "Evidencia donde se formulan operaciones de consulta del proyecto antes de su implementacion en SQL, demostrando el razonamiento formal sobre el modelo relacional.",
        contents: ["Consultas del proyecto", "Operadores relacionales", "Expresiones formales", "Preparacion para SQL"],
        tags: ["Algebra relacional", "Fase 1", "Consultas"]
      },
      {
        group: "Fase 1",
        name: "Modelo Software PBD1",
        file: "/evidence/proyecto-final-bd1/fase-1/modelos-software-pbd1.zip",
        type: "ZIP",
        date: "2025-05-02",
        description: "Archivos del modelo desarrollado en software de modelado.",
        details: "Paquete con el modelo de software del proyecto final, incluyendo archivos logicos, relacionales y de configuracion generados por la herramienta de modelado. La carpeta original tambien se conserva dentro de public/evidence.",
        contents: ["Modelo_software_PBD1.dmd", "Carpeta Modelo_software_PBD1", "Archivos logical", "Archivos rel/rdbms", "Configuracion y metadatos del modelo"],
        tags: ["Modelo", "Oracle Data Modeler", "Fase 1"]
      },
      {
        group: "Fase 2",
        name: "Analisis de Seleccion de RDBMS",
        file: "/evidence/proyecto-final-bd1/fase-2/analisis-seleccion-rdbms.pdf",
        type: "PDF",
        date: "2025-05-08",
        description: "Comparacion y seleccion del gestor de base de datos.",
        details: "Documento de fase 2 que evalua alternativas de RDBMS, criterios tecnicos, ventajas y justificacion de la seleccion para implementar la solucion del proyecto.",
        contents: ["Criterios de comparacion", "Alternativas RDBMS", "Analisis tecnico", "Seleccion justificada"],
        tags: ["Fase 2", "RDBMS", "Analisis"]
      },
      {
        group: "Fase 2",
        name: "Analisis Sistema Operativo Seleccionado",
        file: "/evidence/proyecto-final-bd1/fase-2/analisis-sistema-operativo.pdf",
        type: "PDF",
        date: "2025-05-09",
        description: "Evaluacion del sistema operativo para la implementacion.",
        details: "Entrega que analiza el sistema operativo elegido para alojar el RDBMS, considerando compatibilidad, estabilidad, recursos y facilidad de administracion.",
        contents: ["Comparacion de sistemas", "Criterios de seleccion", "Compatibilidad", "Justificacion final"],
        tags: ["Fase 2", "Sistema operativo", "Infraestructura"]
      },
      {
        group: "Fase 2",
        name: "Implementacion de la VM",
        file: "/evidence/proyecto-final-bd1/fase-2/implementacion-vm.pdf",
        type: "PDF",
        date: "2025-05-10",
        description: "Configuracion de la maquina virtual del proyecto.",
        details: "Documento que evidencia la preparacion de la maquina virtual, instalacion, configuracion basica y ambiente necesario para desplegar el gestor y la base de datos.",
        contents: ["Creacion de VM", "Configuracion inicial", "Recursos asignados", "Validacion del ambiente"],
        tags: ["VM", "Fase 2", "Implementacion"]
      },
      {
        group: "Fase 2",
        name: "Implementacion del RDBMS",
        file: "/evidence/proyecto-final-bd1/fase-2/implementacion-rdbms.pdf",
        type: "PDF",
        date: "2025-05-11",
        description: "Instalacion y puesta en marcha del gestor de base de datos.",
        details: "Documento de implementacion del RDBMS, con pasos de instalacion, configuracion, validacion del servicio y preparacion para ejecutar los scripts del proyecto.",
        contents: ["Instalacion del RDBMS", "Configuracion", "Validacion del servicio", "Preparacion para scripts"],
        tags: ["RDBMS", "Implementacion", "Fase 2"]
      },
      {
        group: "Fase 2",
        name: "Script DDL UB Deporte",
        file: "/evidence/proyecto-final-bd1/fase-2/scripts/ub-deporte-ddl.sql",
        type: "SQL",
        date: "2025-05-12",
        description: "Creacion de estructura de la base de datos UB Deporte.",
        details: "Script DDL con sentencias para crear tablas, claves primarias, claves foraneas y restricciones necesarias para implementar el modelo relacional del proyecto final.",
        contents: ["CREATE TABLE", "Claves primarias", "Claves foraneas", "Restricciones"],
        tags: ["DDL", "SQL", "Tablas"]
      },
      {
        group: "Fase 2",
        name: "Script Inserts UB Deporte",
        file: "/evidence/proyecto-final-bd1/fase-2/scripts/ub-deporte-inserts.sql",
        type: "SQL",
        date: "2025-05-12",
        description: "Insercion de datos de prueba para UB Deporte.",
        details: "Script DML con registros de prueba para poblar la base de datos, validar relaciones, probar integridad referencial y permitir consultas sobre informacion representativa.",
        contents: ["INSERT INTO", "Datos de prueba", "Validacion de relaciones", "Carga inicial"],
        tags: ["DML", "INSERT", "Datos"]
      }
    ]
  }
=======
 * @typedef EvidenceFile
 * @property {string} name - Nombre del entregable
 * @property {string} file - Ruta del archivo para descargar
 * @property {string} type - Tipo: PDF | SQL | ZIP | IMG
 * @property {string} date - Fecha de entrega (YYYY-MM-DD)
 * @property {string} description - Descripción corta visible en la tarjeta
 * @property {string} details - Descripción larga para el modal
 * @property {string[]} [tags] - Etiquetas temáticas
 * @property {string} [preview] - Ruta a imagen preview (opcional)
 */

/**
 * @typedef EvidenceCategory
 * @property {string} category
 * @property {string} icon
 * @property {string} color  - color acento de la categoría
 * @property {string} description
 * @property {EvidenceFile[]} files
 */

/** @type {EvidenceCategory[]} */
export const evidenceData = [
	{
		category: "Aplicaciones Integradoras",
		icon: "carbon:application",
		color: "#8664ee",
		description: "Primeras aplicaciones del semestre: modelado conceptual de sistemas reales.",
		files: [
			{
				name: "Aerolínea App",
				file: "/evidence/apps/aerolinea-app.pdf",
				type: "PDF",
				date: "2025-02-03",
				description: "Modelado de un sistema de gestión de aerolíneas.",
				details: "Diseño conceptual de una base de datos para una aerolínea, incluyendo entidades como vuelos, pasajeros, tripulación, rutas y reservas. Desarrollado como parte del material UEB-C1 – Bases de Datos 1 (20251).",
				tags: ["MER", "Conceptual", "Aerolínea"]
			},
			{
				name: "Hospital App",
				file: "/evidence/apps/hospital-app.pdf",
				type: "PDF",
				date: "2025-02-10",
				description: "Modelado de un sistema hospitalario completo.",
				details: "Base de datos para gestión hospitalaria con entidades de pacientes, médicos, citas, historiales clínicos y áreas del hospital. UEB-C1 – Bases de Datos 1 (20251).",
				tags: ["MER", "Conceptual", "Hospital"]
			},
			{
				name: "University Champions League",
				file: "/evidence/individual/university-champions-league.pdf",
				type: "PDF",
				date: "2025-01-25",
				description: "Trabajo individual: diseño BD para torneo universitario.",
				details: "Modelado de una base de datos para un torneo de fútbol universitario. Incluye entidades de equipos, jugadores, partidos, resultados y estadísticas. Material teórico C1_25012025.",
				tags: ["Individual", "MER", "Deporte"]
			},
			{
				name: "Plataforma de Streaming",
				file: "/evidence/individual/plataforma-streaming.pdf",
				type: "PDF",
				date: "2025-01-25",
				description: "Trabajo individual: diseño BD para plataforma de streaming.",
				details: "Diseño de base de datos para una plataforma de streaming de contenido multimedia. Contempla usuarios, suscripciones, contenido, géneros, recomendaciones y reproducción. Material teórico C1_25012025.",
				tags: ["Individual", "MER", "Streaming"]
			}
		]
	},
	{
		category: "Modelo Entidad-Relación",
		icon: "carbon:data-relationship",
		color: "#c93978",
		description: "Talleres de modelado MER y MERE: diagramas, entidades, atributos y cardinalidades.",
		files: [
			{
				name: "Taller MER – ER",
				file: "/evidence/modelado/taller-mer-er.pdf",
				type: "PDF",
				date: "2025-02-20",
				description: "7 ejercicios de modelado entidad-relación.",
				details: "Serie de 7 ejercicios prácticos de modelado entidad-relación. Se trabajan entidades, atributos simples y compuestos, relaciones binarias, ternarias y las distintas cardinalidades (1:1, 1:N, N:M).",
				tags: ["MER", "ER", "Cardinalidad"]
			},
			{
				name: "Taller MERE v3",
				file: "/evidence/modelado/taller-mere-v3.pdf",
				type: "PDF",
				date: "2025-02-24",
				description: "3 ejercicios de Modelo Entidad-Relación Extendido.",
				details: "Taller con 3 ejercicios del Modelo Entidad-Relación Extendido (MERE), incorporando conceptos de especialización, generalización y herencia entre entidades.",
				tags: ["MERE", "Especialización", "Herencia"]
			},
			{
				name: "Taller MER v4",
				file: "/evidence/modelado/taller-mer-v4.pdf",
				type: "PDF",
				date: "2025-02-28",
				description: "4 ejercicios avanzados de modelado ER.",
				details: "Cuatro ejercicios de mayor complejidad que integran entidades débiles, relaciones recursivas y atributos multivaluados en diagramas entidad-relación.",
				tags: ["MER", "Entidades débiles", "Recursivo"]
			},
			{
				name: "Taller Modelado Avanzado",
				file: "/evidence/modelado/taller-modelado-avanzado.pdf",
				type: "PDF",
				date: "2025-03-05",
				description: "Residuos Tóxicos, Comidas a Domicilio y Nómina.",
				details: "Taller de modelado avanzado con tres casos de estudio: (1) Gestión de residuos tóxicos, (2) Sistema de comidas a domicilio, y (3) Sistema de nómina empresarial. Cada caso exige modelado completo desde entidades hasta relaciones complejas.",
				tags: ["Avanzado", "Casos de estudio", "MERE"]
			}
		]
	},
	{
		category: "Caso Integrador – El Bosque Shop",
		icon: "carbon:store",
		color: "#48ff86",
		description: "Modelado entidad-relación del caso integrador de librería desarrollado en clase.",
		files: [
			{
				name: "Librería Salón Completo",
				file: "/evidence/caso-integrador/libreria-salon-completo.pdf",
				type: "PDF",
				date: "2025-01-20",
				description: "MER completo desarrollado en clase con todo el salón.",
				details: "Modelo Entidad-Relación del sistema de librería El Bosque Shop construido colaborativamente con todo el salón. Incluye entidades de libros, autores, clientes, ventas, empleados e inventario.",
				tags: ["Caso Integrador", "MER", "Colaborativo"]
			},
			{
				name: "Librería Grupos 4",
				file: "/evidence/caso-integrador/libreria-grupos-4.pdf",
				type: "PDF",
				date: "2025-01-27",
				description: "MER desarrollado en grupos de 4 estudiantes.",
				details: "Segunda iteración del caso integrador de librería, realizada en grupos de 4 personas. Se refinó el diagrama MER, se discutieron alternativas de diseño y se justificaron las decisiones tomadas.",
				tags: ["Caso Integrador", "MER", "Grupal"]
			}
		]
	},
	{
		category: "Modelo Relacional y Reducción a Tablas",
		icon: "carbon:table",
		color: "#00D1FF",
		description: "Transformación del modelo conceptual al modelo relacional y reducción a tablas.",
		files: [
			{
				name: "Modelo Relacional v2 – Company",
				file: "/evidence/modelado/modelo-relacional-company.pdf",
				type: "PDF",
				date: "2025-03-10",
				description: "Reducción a tablas del modelo relacional Company.",
				details: "Aplicación del proceso de reducción a tablas sobre el esquema Company. Se definen claves primarias, foráneas, restricciones de integridad referencial y se documenta la correspondencia con el modelo ER de origen.",
				tags: ["Modelo Relacional", "Reducción", "Tablas", "Llaves"]
			},
			{
				name: "Taller para Practicar",
				file: "/evidence/modelado/taller-para-practicar.pdf",
				type: "PDF",
				date: "2025-03-12",
				description: "Taller de práctica de reducción a tablas.",
				details: "Taller de práctica sobre el proceso de reducción del modelo ER al modelo relacional, aplicando las reglas de transformación para entidades, relaciones y atributos multivaluados.",
				tags: ["Modelo Relacional", "Práctica", "Reducción"]
			}
		]
	},
	{
		category: "Normalización",
		icon: "carbon:function",
		color: "#F7DF1E",
		description: "Dependencias funcionales, formas normales y optimización de esquemas relacionales.",
		files: [
			{
				name: "Guía de Ejercicios",
				file: "/evidence/normalizacion/guia-ejercicios.pdf",
				type: "PDF",
				date: "2025-03-19",
				description: "Guía base de ejercicios de normalización.",
				details: "Guía introductoria de normalización que cubre dependencias funcionales, 1FN, 2FN y 3FN. Incluye ejercicios guiados con paso a paso del proceso de normalización.",
				tags: ["Normalización", "1FN", "2FN", "3FN"]
			},
			{
				name: "Taller Normalización",
				file: "/evidence/normalizacion/taller-normalizacion.pdf",
				type: "PDF",
				date: "2025-03-26",
				description: "Ejercicios de normalización hasta 3FN.",
				details: "Taller práctico con múltiples ejercicios de normalización de esquemas relacionales. Se identifican dependencias funcionales, se detectan anomalías y se normalizan hasta la Tercera Forma Normal.",
				tags: ["Normalización", "Dependencias funcionales", "3FN"]
			},
			{
				name: "Taller Avanzado Normalización B",
				file: "/evidence/normalizacion/taller-avanzado-normalizacion-b.pdf",
				type: "PDF",
				date: "2025-04-02",
				description: "Nivel avanzado: BCNF y dependencias complejas.",
				details: "Taller avanzado de normalización que trabaja la Forma Normal de Boyce-Codd (BCNF) y casos con dependencias funcionales complejas. Se analizan esquemas con múltiples claves candidatas.",
				tags: ["BCNF", "Avanzado", "Dependencias complejas"]
			}
		]
	},
	{
		category: "Scripts SQL",
		icon: "carbon:code",
		color: "#47A248",
		description: "Scripts de creación de tablas, inserción de datos y consultas desarrollados en el curso.",
		files: [
			{
				name: "DDL – Creación de Tablas",
				file: "/evidence/sql/ddl-tablas.sql",
				type: "SQL",
				date: "2025-04-10",
				description: "Scripts CREATE TABLE con llaves y restricciones.",
				details: "Scripts DDL (Data Definition Language) para la creación de las tablas del proyecto, incluyendo definición de claves primarias, foráneas, restricciones NOT NULL, UNIQUE y CHECK.",
				tags: ["DDL", "CREATE", "Restricciones"]
			},
			{
				name: "DML – Inserción de Datos",
				file: "/evidence/sql/dml-inserts.sql",
				type: "SQL",
				date: "2025-04-14",
				description: "Scripts INSERT con datos de prueba.",
				details: "Scripts DML (Data Manipulation Language) con datos de prueba para poblar las tablas del proyecto. Incluye validación de integridad referencial y casos borde.",
				tags: ["DML", "INSERT", "Datos de prueba"]
			},
			{
				name: "Consultas SQL",
				file: "/evidence/sql/consultas.sql",
				type: "SQL",
				date: "2025-04-18",
				description: "Consultas SELECT con JOINs, GROUP BY y subconsultas.",
				details: "Colección de consultas SQL que incluyen SELECT básico, JOINs (INNER, LEFT, RIGHT), funciones de agregación (COUNT, SUM, AVG), GROUP BY, HAVING y subconsultas correlacionadas.",
				tags: ["SELECT", "JOIN", "Agregación", "Subconsultas"]
			}
		]
	},
	{
		category: "Proyecto Final",
		icon: "carbon:trophy",
		color: "#ff9500",
		description: "Proyecto integrador final que consolida todos los temas del semestre.",
		files: [
			{
				name: "Proyecto Final – Bases de Datos 1",
				file: "/evidence/proyecto-final/proyecto-final-bd1.pdf",
				type: "PDF",
				date: "2025-05-10",
				description: "Proyecto integrador final del semestre.",
				details: "Proyecto final que integra todos los temas del curso: modelado ER, modelo relacional, normalización y scripts SQL. Se desarrolló un sistema completo de base de datos desde el análisis de requerimientos hasta la implementación en MySQL.",
				tags: ["Final", "Integrador", "MySQL", "Completo"]
			}
		]
	}
>>>>>>> 3a6a620ebd77103a16b46e7cf685d7adb5efba43
];
