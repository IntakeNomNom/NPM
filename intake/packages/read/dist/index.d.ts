/**
 * It takes a file path as an argument, reads the file, parses the data, and returns the parsed data
 * @param {string} file - string - The file path to the CSV file.
 * @returns An array of objects
 */
declare const read: (file: string) => Promise<any>;
export default read;
