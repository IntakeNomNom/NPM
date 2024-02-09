var r=async t=>await Promise.all(Array.from(t).filter(a=>a.endsWith(".csv")).map(async a=>(await import("@intakenomnom/read")).default(a)));export{r as default};
