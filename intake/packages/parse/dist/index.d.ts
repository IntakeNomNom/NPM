/**
 * It takes a string of comma separated values, splits it into lines, splits the first line into
 * headers, splits the remaining lines into values, and then creates an object for each row with the
 * headers as keys and the values as values
 * @param {string} data - The CSV data to parse.
 * @returns An array of objects.
 */
declare const parse: (data: string) => Promise<{}[]>;
export default parse;
