import{j as e,P as f}from"./Product.f377f7da.js";import{r as t}from"./index.ed373d49.js";function x(){const[c,l]=t.useState("... collecting Data");return t.useEffect(()=>{setTimeout(()=>{l("... looking for best offer")},3e3)},[]),e.jsxs("div",{className:"flex items-center justify-center flex-col p-8",children:[e.jsx("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-black",role:"status",style:{borderTopColor:"rgba(0, 0, 0, 0.1)"},children:e.jsx("span",{className:"visually-hidden"})}),e.jsx("span",{className:"text-sm text-zinc-300 text-center mt-4",children:c})]})}const h=({id:c,searchPhrase:l})=>{const[n,i]=t.useState(!1),[r,d]=t.useState(0),[s,m]=t.useState({offset:r,items:[],total:null}),u=async()=>{try{i(!0);const a=await(await fetch("/api/category",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,query:l,offset:r})})).json();m({offset:r,total:a.total,items:[...s.items,...a.items]}),i(!1)}catch(o){console.log(o)}};return t.useEffect(()=>{u()},[r]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-4 mt-4",children:s.items.map((o,a)=>e.jsx(f,{product:o},a))}),n?e.jsx(x,{}):e.jsx("div",{className:"flex items-center justify-center my-8",children:e.jsxs("button",{className:"inline-block py-3 px-16 text-center hover:bg-black uppercase text-sm rounded-full border-2 border-black text-black hover:text-white",onClick:()=>{d(25+s.offset)},children:[e.jsx("span",{className:"block font-medium tracking-wider",children:"load more"}),e.jsx("small",{children:`(${s?.total-s?.items.length} available)`})]})})]})};export{h as default};
