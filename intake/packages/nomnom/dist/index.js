import n from"@intakenomnom/read";const o=async s=>{const a=s.filter(t=>t.endsWith(".csv"));return await Promise.all(a.map(t=>n(t)))};var e=o;export{e as default};
