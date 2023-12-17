var u = async (r) => {
	const t = r.split(`
`),
		e = t[0].split(",");
	return t.slice(1).map((l) => {
		const o = l.split(","),
			n = {};
		for (let s = 0; s < e.length; s++) n[e[s]] = o[s];
		return n;
	});
};
export { u as default };
