import parse from "@intakenomnom/parse";
import { readFile } from "fs/promises";

export default async (file: string) => {
	const data = await readFile(file, "utf8");
	const csvData = await parse(data);
	return csvData;
};
