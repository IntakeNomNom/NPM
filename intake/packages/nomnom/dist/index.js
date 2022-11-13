import a from"@intakenomnom/read";const o=async t=>await Promise.all(Array.from(t).filter(r=>r.endsWith(".csv")).map(r=>a(r)));var i=o;export{i as default};
