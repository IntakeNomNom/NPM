import fs from "fs";

import parse from "@intakenomnom/parse";

/**
 * It takes a file path as an argument, reads the file, parses the data, and returns the parsed data
 * @param {string} file - string - The file path to the CSV file.
 * @returns An array of objects
 */
const read = async (file: string) => {
	const data = await fs.promises.readFile(file, "utf8");
	const csvData = await parse(data);
	return csvData;
};

export default read;
