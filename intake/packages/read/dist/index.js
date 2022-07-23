import s from"fs";const r=async a=>{const t=await s.promises.readFile(a,"utf8");return await parse(t)};var c=r;export{c as default};
