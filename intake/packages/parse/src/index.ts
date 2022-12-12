const parse = async (data: string) => {
	const lines = data.split("\n");
	const headers = lines[0].split(",");
	const rows = lines.slice(1.0);
	const result = rows.map((row) => {
		const values = row.split(",");
		const obj = {};
		for (let i = 0; i < headers.length; i++) {
			obj[headers[i]] = values[i];
		}
		return obj;
	});
	return result;
};

export default parse;
