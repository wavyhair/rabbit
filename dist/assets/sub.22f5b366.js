import{G as x}from"./goods-item.e1afd3bc.js";import{d as C,u as j,a as F,w as S,r as f,o as e,c as a,e as t,f as d,g,h as u,F as n,i,n as E,q as w,p as A,j as I,k as _,l as v,t as r,_ as N}from"./index.c89aa650.js";const h=c=>(A("data-v-9e2b0df6"),c=c(),I(),c),X={class:"sub-category"},V={class:"container"},D=v("\u9996\u9875"),G={class:"sub-filter"},P={class:"item"},q=h(()=>t("div",{class:"head"},"\u54C1\u724C\uFF1A",-1)),L={class:"body"},R=h(()=>t("a",{href:"javascript:;"},"\u5168\u90E8",-1)),T={class:"head"},$={class:"body"},z=h(()=>t("a",{href:"javascript:;"},"\u5168\u90E8",-1)),H={class:"goods-list"},J=w('<div class="sub-sort" data-v-9e2b0df6><div class="sort" data-v-9e2b0df6><a href="javascript:;" class="active" data-v-9e2b0df6>\u9ED8\u8BA4\u6392\u5E8F</a><a href="javascript:;" data-v-9e2b0df6>\u6700\u65B0\u5546\u54C1</a><a href="javascript:;" data-v-9e2b0df6>\u6700\u9AD8\u4EBA\u6C14</a><a href="javascript:;" data-v-9e2b0df6>\u8BC4\u8BBA\u6700\u591A</a><a href="javascript:;" data-v-9e2b0df6> \u4EF7\u683C\u6392\u5E8F <i class="arrow up" data-v-9e2b0df6></i><i class="arrow down" data-v-9e2b0df6></i></a></div></div>',1),K={key:0},M=C({name:"SubCategory"}),O=C({...M,setup(c){const{category:o}=j(),l=F();return S(()=>{l.fullPath===`/category/sub/${l.params.id}`&&o.getSubFilter(l.params.id)}),(Q,U)=>{var b,m;const p=f("XtxBreadItem"),B=f("XtxBread"),k=f("XtxSkeleton");return e(),a("div",X,[t("div",V,[d(o).subCategory.parentName?(e(),g(B,{key:0},{default:u(()=>[_(p,{to:"/"},{default:u(()=>[D]),_:1}),_(p,{to:"/"},{default:u(()=>[v(r(d(o).subCategory.parentName),1)]),_:1}),_(p,null,{default:u(()=>[v(r(d(o).subCategory.name),1)]),_:1})]),_:1})):(e(),g(k,{key:1,fade:"",animated:"",bg:"#515151",width:100,height:24})),t("div",G,[t("div",P,[q,t("div",L,[R,(e(!0),a(n,null,i(d(o).subCategory.brands,s=>(e(),a("a",{href:"javascript:;",key:s.id},r(s.name),1))),128))])]),(e(!0),a(n,null,i(d(o).subCategory.saleProperties,s=>(e(),a("div",{class:"item",key:s.id},[t("div",T,r(s.name)+"\uFF1A",1),t("div",$,[z,(e(!0),a(n,null,i(s.properties,y=>(e(),a("a",{href:"javascript:;",key:y.id},r(y.name),1))),128))])]))),128))]),t("div",H,[J,((m=(b=d(o).subCategory)==null?void 0:b.goods)==null?void 0:m.length)>0?(e(),a("ul",K,[(e(!0),a(n,null,i(d(o).subCategory.goods,s=>(e(),a("li",{key:s.id},[_(x,{goods:s},null,8,["goods"])]))),128))])):E("",!0)])])])}}});const Z=N(O,[["__scopeId","data-v-9e2b0df6"]]);export{Z as default};