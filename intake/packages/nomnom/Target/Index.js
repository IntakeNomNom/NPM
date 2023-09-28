import a from"@intakenomnom/read";var i=async t=>await Promise.all(Array.from(t).filter(r=>r.endsWith(".csv")).map(r=>a(r)));export{i as default};
