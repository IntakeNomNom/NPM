const c=async r=>{const t=r.split(`
`),e=t[0].split(",");return t.slice(1).map(o=>{const l=o.split(","),n={};for(let s=0;s<e.length;s++)n[e[s]]=l[s];return n})};var p=c;export{p as default};
