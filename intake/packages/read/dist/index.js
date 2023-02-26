import*as r from"fs";import s from"@intakenomnom/parse";var i=async a=>{const t=await r.promises.readFile(a,"utf8");return await s(t)};export{i as default};
