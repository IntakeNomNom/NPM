import read from "@intakenomnom/read";

const nomnom = async (files: string[] | Set<string>) =>
	await Promise.all(
		Array.from(files)
			.filter((file) => file.endsWith(".csv"))
			.map((file) => read(file))
	);

export default nomnom;
