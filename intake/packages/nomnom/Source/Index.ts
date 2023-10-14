export default async (files: string[] | Set<string>) =>
	await Promise.all(
		Array.from(files)
			.filter((file) => file.endsWith(".csv"))
			.map(async (file) =>
				(await import("@intakenomnom/read")).default(file)
			)
	);
