import r from"fs";import s from"@intakenomnom/parse";const o=async a=>{const t=await r.promises.readFile(a,"utf8");return await s(t)};var n=o;export{n as default};
