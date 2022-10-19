import read from "@intakenomnom/read";

const nomnom = async (files: string[]) => {
	const csvFiles = files.filter((file) => file.endsWith(".csv"));
	const csvData = await Promise.all(csvFiles.map((file) => read(file)));
	return csvData;
};

export default nomnom;
