import{v as u,a1 as n}from"./index.1c068c2f.js";function v(t=60){const e=u(0),{pause:s,resume:a}=n(()=>{e.value--,e.value<=0&&s()},1e3);return{start:()=>{e.value=t,a()},time:e}}export{v as u};
