var t = async (a) =>
	await (await import("@intakenomnom/parse")).default(
		await (await import("fs/promises")).readFile(a, "utf8"),
	);
export { t as default };
