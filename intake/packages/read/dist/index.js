import r from"@intakenomnom/parse";import s from"fs";const o=async a=>{const t=await s.promises.readFile(a,"utf8");return await r(t)};var n=o;export{n as default};
