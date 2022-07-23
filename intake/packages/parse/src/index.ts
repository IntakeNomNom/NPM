/**
 * It takes a string of comma separated values, splits it into lines, splits the first line into
 * headers, splits the remaining lines into values, and then creates an object for each row with the
 * headers as keys and the values as values
 * @param {string} data - The CSV data to parse.
 * @returns An array of objects.
 */
const parse = async (data: string) => {
	const lines = data.split("\n");
	const headers = lines[0].split(",");
	const rows = lines.slice(1);
	const result = rows.map((row) => {
		const values = row.split(",");
		const obj = {};
		for (let i = 0; i < headers.length; i++) {
			// @ts-ignore
			obj[headers[i]] = values[i];
		}
		return obj;
	});
	return result;
};

export default parse;
