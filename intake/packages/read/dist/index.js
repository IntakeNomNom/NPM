import r from"fs";import s from"@intakenomnom/parse";var c=async a=>{const t=await r.promises.readFile(a,"utf8");return await s(t)};export{c as default};
