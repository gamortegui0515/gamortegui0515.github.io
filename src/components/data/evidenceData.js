/**
 * @typedef EvidenceFile
 * @property {string} name
 * @property {string} file
 * @property {string} type
 */

/**
 * @typedef EvidenceCategory
 * @property {string} category
 * @property {EvidenceFile[]} files
 */

/**
 * @type {EvidenceCategory[]}
 */
export const evidenceData = [
	{
		category: "Modeling",
		files: [
			{
				name: "ER Diagram",
				file: "/evidence/modeling/er-diagram.pdf",
				type: "PDF"
			},
			{
				name: "Logical Model",
				file: "/evidence/modeling/logical-model.pdf",
				type: "PDF"
			}
		]
	},
	{
		category: "Normalization",
		files: [
			{
				name: "Normalization Process",
				file: "/evidence/normalization/normalization.pdf",
				type: "PDF"
			}
		]
	},
	{
		category: "SQL",
		files: [
			{
				name: "Basic Queries",
				file: "/evidence/sql/basic-queries.sql",
				type: "SQL"
			}
		]
	},
	{
		category: "Project",
		files: [
			{
				name: "Final Project",
				file: "/evidence/project/final-project.zip",
				type: "ZIP"
			}
		]
	}
];
