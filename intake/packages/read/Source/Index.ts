export default async (file: string) =>
	await (await import("@intakenomnom/parse")).default(
		await (await import("node:fs/promises")).readFile(file, "utf8"),
	);
