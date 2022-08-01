export function sortTable(table, key) {
	//check for the presence of the key in the first object of the table array
	if (!(key in table[0]))
		throw new Error("Table does not contain key: " + key);
	else if (key === "name") {
		table.sort((a, b) => {
			const current = a.name.toLowerCase(),
				next = b.name.toLowerCase();

			if (current < next) return -1;
			else if (current > next) return 1;
			else return 0;
		});
	}
	table.sort((a, b) => {
		return b[key] - a[key];
	});
	console.log(table);
}

export function getOrdinal(number) {
	//spliting number in terms of ones and tens columns
	let ones = number % 10;
	let tens = number % 100;

	if (ones === 1 && tens !== 11) return number + "st";
	else if (ones === 2 && tens !== 12) return number + "nd";
	else if (ones === 3 && tens !== 13) return number + "rd";
	else return number + "th";
}
