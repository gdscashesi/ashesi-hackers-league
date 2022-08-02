/**
 * sort an array of objects by a specified key in descending order
 *
 *  @param { Array <Objects> } table - The array of objects to be sorted
 *  @param { string } key - The key to sort according to
 *
 *  @return Array <Objects>
 */
export function sortTable(table, key) {
  if (!(key in table[0])) throw new Error("Table does not contain key: " + key);

  if (key === "name") {
    table.sort((a, b) => {
      const current = a.name.toLowerCase();
      const next = b.name.toLowerCase();

      if (current < next) return -1;
      else if (current > next) return 1;
      else return 0;
    });
  }

  table.sort((a, b) => b[key] - a[key]);

  return table;
}

/**
 * generates the ordinal of a number
 *
 *  @param {number} number - the number whose ordinal is to be generate
 *
 *  @return string
 */

export function getOrdinal(number) {
  let ones = number % 10;
  let tens = number % 100;

  if (ones === 1 && tens !== 11) return number + "st";
  else if (ones === 2 && tens !== 12) return number + "nd";
  else if (ones === 3 && tens !== 13) return number + "rd";
  else return number + "th";
}
