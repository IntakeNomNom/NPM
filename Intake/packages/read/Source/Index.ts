export default async (file: string) =>
	await (await import("@intakenomnom/parse")).default(
		await (await import("fs/promises")).readFile(file, "utf8"),
	);
