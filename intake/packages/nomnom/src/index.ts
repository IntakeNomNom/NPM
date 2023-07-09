import read from "@intakenomnom/read";

export default async (files: string[] | Set<string>) =>
	await Promise.all(
		Array.from(files)
			.filter((file) => file.endsWith(".csv"))
			.map((file) => read(file)),
	);
