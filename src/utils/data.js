export const headers = [
	"rank",
	"name",
	"algorithms",
	"scripting",
	"sql",
	"total",
];
export const teamScores = [
	{
		name: "Algo Maniacs",
		algorithms: 27,
		scripting: 10,
		sql: 7,
	},
	{
		name: "Banzai Sharks",
		algorithms: 24,
		scripting: 31,
		sql: 6,
	},
	{
		name: "Carnivore Hurricanes",
		algorithms: 16,
		scripting: 39,
		sql: 8,
	},
	{
		name: "Dream Gangstaz",
		algorithms: 18,
		scripting: 49,
		sql: 6,
	},
	{
		name: "Extreme Slammers",
		algorithms: 20,
		scripting: 45,
		sql: 2,
	},
	{
		name: "Flying Predators",
		algorithms: 11,
		scripting: 3,
		sql: 1,
	},
	{
		name: "Grand Ninjas",
		algorithms: 0,
		scripting: 24,
		sql: 6,
	},
	{
		name: "Herculean Maestros",
		algorithms: 18,
		scripting: 28,
		sql: 8,
	},
	{
		name: "Indomitable Lions",
		algorithms: 29,
		scripting: 4,
		sql: 8,
	},
	{
		name: "Justice League",
		algorithms: 1,
		scripting: 47,
		sql: 4,
	},
	{
		name: "Krull Soldiers",
		algorithms: 12,
		scripting: 20,
		sql: 0,
	},
	{
		name: "Lambda Lions",
		algorithms: 15,
		scripting: 4,
		sql: 7,
	},
	{
		name: "Mathlete Jaws",
		algorithms: 27,
		scripting: 33,
		sql: 5,
	},
	{
		name: "Natural Conquerors",
		algorithms: 2,
		scripting: 33,
		sql: 4,
	},
	{
		name: "Obvious Victors",
		algorithms: 12,
		scripting: 14,
		sql: 2,
	},
	{
		name: "Pink Fighters",
		algorithms: 22,
		scripting: 11,
		sql: 4,
	},
	{
		name: "Quintessential Brigade",
		algorithms: 16,
		scripting: 16,
		sql: 6,
	},
	{
		name: "Rocky Agents",
		algorithms: 26,
		scripting: 11,
		sql: 10,
	},
	{
		name: "Shooting Spiders",
		algorithms: 18,
		scripting: 18,
		sql: 9,
	},
	{
		name: "The Piledrivers",
		algorithms: 10,
		scripting: 14,
		sql: 3,
	},
	{
		name: "Underground Menace",
		algorithms: 23,
		scripting: 46,
		sql: 1,
	},
	{
		name: "Victorious Army",
		algorithms: 14,
		scripting: 37,
		sql: 9,
	},
	{
		name: "Wild Bulls",
		algorithms: 23,
		scripting: 45,
		sql: 5,
	},
	{
		name: "Xanthosis Something",
		algorithms: 4,
		scripting: 16,
		sql: 3,
	},
	{
		name: "Young Justice",
		algorithms: 7,
		scripting: 25,
		sql: 4,
	},
	{
		name: "Zulu Sonics",
		algorithms: 8,
		scripting: 44,
		sql: 9,
	},
];

export const challengesData = [
	{
		id: "fall22#01",
		order: 1,
		algo: "binary search",
		scripting: "Create an alert message using client script",
		sql: "Write a SQL statement that displays all the information about all salespeople.",
		date: "27/07/2022",
	},
	{
		id: "fall22#02",
		order: 2,
		algo: "linear search",
		scripting: "Create a business rule to print Hello",
		sql: "Write a SQL statement to display a string",
		date: "03/08/2022",
	},
	{
		id: "fall22#03",
		order: 3,
		algo: "depth-first search",
		scripting:
			"Remove UI policy for Problem field and add same validation using client script",
		sql: "Write a SQL query to display three numbers in three columns.",
		date: "10/08/2022",
	},
	{
		id: "fall22#04",
		order: 4,
		algo: "an algo question",
		scripting:
			"When the category is Software, the assignment group will be Software. Use business rule.",
		sql: "Write a SQL query to display the sum of two numbers 10 and 15 from the RDBMS server.",
		date: "17/08/2022",
	},
	{
		id: "fall22#05",
		order: 5,
		algo: "breadth-first search",
		scripting:
			"Create a common script for emails that will contain INC number, short description, Priority and configuration item:",
		sql: "Write an SQL query to display the result of an arithmetic expression.",
		date: "24/08/2022",
	},
	{
		id: "fall22#06",
		order: 6,
		algo: "rabin-karp algorithm",
		scripting:
			"Auto-Populate user's email and user id when the user changes.",
		sql: "Write a SQL statement to display specific columns such as names and commissions for all salespeople.",
		date: "31/08/2022",
	},
	{
		id: "fall22#07",
		order: 7,
		algo: "z algorithm",
		scripting:
			"Create a new field Date and add validation for the date field so that it takes only future date.",
		sql: "Write a query to display the columns in a specific order, such as order date, salesman ID, order number, and purchase amount for all orders.",
		date: "07/09/2022",
	},
	{
		id: "fall22#08",
		order: 8,
		algo: "insertion sort",
		scripting:
			"Problem should get created when a 'is problem required?' checkbox is checked and when incident gets resolved and problem id will be stored in problem field. The incident should not get resolved until all incident tasks associated with it gets closed.",
		sql: "From the following table, write a SQL query to identify the unique salespeople ID. Return salesman_id.",
		date: "14/09/2022",
	},
	{
		id: "fall22#09",
		order: 9,
		algo: "heap sort",
		scripting:
			"Problem related to the incident should get displayed in a related list on the incident.",
		sql: "From the following table, write a SQL query to locate salespeople who live in the city of 'Paris'. Return salesperson's name, city.",
		date: "21/09/2022",
	},
	{
		id: "fall22#10",
		order: 10,
		algo: "selection sort",
		scripting:
			"When assigned to is filled, populate assignment groups in which assigned to is a member.",
		sql: "From the following table, write a SQL query to find customers whose grade is 200. Return customer_id, cust_name, city, grade, salesman_id.",
		date: "28/09/2022",
	},
	{
		id: "fall22#11",
		order: 11,
		algo: "merge sort",
		scripting:
			"Make assignment group and assigned to fields editable only to admin and incident manager. For others, these fields should be read-only",
		sql: "From the following table, write a SQL query to find orders that are delivered by a salesperson with ID. 5001. Return ord_no, ord_date, purch_amt.",
		date: "05/10/2022",
	},
	{
		id: "fall22#12",
		order: 12,
		algo: "quick sort",
		scripting:
			"There should be at least one incident, task associate, with an incident when state becomes work in progress and resolved.",
		sql: "From the following table, write a SQL query to find the Nobel Prize winner(s) for the year 1970. Return year, subject and winner.",
		date: "12/10/2022",
	},
];
