import * as fs from "fs";

import parse from "@intakenomnom/parse";

export default async (file: string) => {
	const data = await fs.promises.readFile(file, "utf8");
	const csvData = await parse(data);
	return csvData;
};
