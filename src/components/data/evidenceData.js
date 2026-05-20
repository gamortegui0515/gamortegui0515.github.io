/**
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
];
