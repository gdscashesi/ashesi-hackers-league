/**
 * sort an array of objects by a specified key in descending order
 *
 *  @param { Array <Objects> } table - The array of objects to be sorted
 *  @param { string } key - The key to sort according to
 *
 *  @return Array <Objects>
 */
export function sortTable(table, key) {
  const table_ = [...table];

  if (!(key in table_[0]))
    throw new Error("Table does not contain key: " + key);

  if (key === "name") {
    table_.sort((a, b) => {
      const current = a.name.toLowerCase();
      const next = b.name.toLowerCase();

      if (current < next) return -1;
      else if (current > next) return 1;
      else return 0;
    });
  }

  table_.sort((a, b) => b[key] - a[key]);

  return table_;
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


/**
 * It returns a string that is either "spring" or "fall" followed by the current year.
 * @returns A string.
 */
export function getCurrentSeason(){
  const date = new Date();
  if (date.getMonth() <= 4) return "spring" + date.getFullYear();
  if (date.getMonth() >= 8 && date.getMonth() <=11) return "fall" + date.getFullYear();

}