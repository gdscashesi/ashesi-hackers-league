export function sortTable(table, key) {
	if (key === "name") {
		table.sort();
	}
	table.sort((a, b) => {
		return b[key] - a[key];
	});
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
