import{A as g,m as A,B as S,r as l,p as j,g as F,o,c as n,a as t,x as V,D as z,F as C,s as E,q as T,d as p,b as u,w as f,u as B,t as b,v as I,_ as U,E as Y}from"./BQcZhiqi.js";import{_ as R}from"./CIlYagjG.js";const q=g("/images/moovietime-logo.svg"),G=g("/images/movie-icon.svg"),O=g("/images/search-icon.svg"),P=g("/images/grid-icon.svg"),Q={class:"container mx-auto text-white p-4 flex justify-between items-center"},H={class:"search-bar relative w-1/3 flex items-center bg-gray-800 rounded"},J={key:0,class:"absolute top-full mt-0 w-full bg-black-90 rounded-b-lg shadow-lg"},K=["onClick"],W={class:"flex gap-6 space-x-4 text-sm font-semibold uppercase"},X={key:0,class:"absolute top-10 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"},Z=A({__name:"Navbar",setup(m){const r=I(),_=S(),d=l(!1),c=l(""),i=l([]),x=l(null),v=l(!1),w=l([]),y=l(null),k=()=>{d.value=window.scrollY>0},L=async()=>{if(c.value.length<3){i.value=[];return}try{const e=await(await fetch(`https://api.themoviedb.org/3/search/movie?query=${c.value}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${r.public.tmdbAccessToken}`}})).json();i.value=e.results.slice(0,5)}catch(s){console.error("Error fetching movie suggestions:",s)}},N=async()=>{try{const e=await(await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${r.public.tmdbAccessToken}`}})).json();w.value=e.genres}catch(s){console.error("Error fetching movie categories:",s)}},D=s=>{i.value=[],c.value="",_.push(`/movies/${s}`)},M=()=>{v.value=!v.value},$=s=>{x.value&&!x.value.contains(s.target)&&(i.value=[]);const e=y.value;e&&!e.contains(s.target)&&(v.value=!1)};return j(()=>{N(),window.addEventListener("scroll",k),document.addEventListener("mousedown",$)}),F(()=>{window.removeEventListener("scroll",k),document.removeEventListener("mousedown",$)}),(s,e)=>{const h=R;return o(),n("div",{ref_key:"navbar",ref:x,class:"fixed w-full top-0 z-50"},[t("nav",{class:B(["transition-all duration-300",d.value?"bg-darkgrey":"bg-background-transparent"])},[t("div",Q,[e[8]||(e[8]=t("img",{src:q},null,-1)),t("div",H,[e[1]||(e[1]=t("img",{src:G,alt:"Movie Icon",class:"absolute left-3 h-5 w-5 text-gray-500"},null,-1)),V(t("input",{type:"text",placeholder:"Find movie","onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a),onInput:L,class:"bg-background-accent3 text-text-heading placeholder-gray-500 rounded px-4 py-2 pl-10 w-full focus:outline-none"},null,544),[[z,c.value]]),e[2]||(e[2]=t("img",{src:O,alt:"Search Icon",class:"absolute right-3 h-5 w-5 text-gray-500"},null,-1)),i.value.length?(o(),n("div",J,[t("ul",null,[(o(!0),n(C,null,E(i.value,a=>(o(),n("li",{key:a.id,onClick:ce=>D(a.id),class:"p-2 hover:bg-darkgrey cursor-pointer"},b(a.title),9,K))),128))])])):T("",!0)]),t("div",W,[t("div",{ref_key:"categoriesDropdown",ref:y,class:"flex gap-1 text-text-heading hover:text-gray-300 cursor-pointer",onClick:M},[e[3]||(e[3]=t("img",{src:P,alt:"categories Icon",class:""},null,-1)),e[4]||(e[4]=p(" Categories ")),v.value?(o(),n("div",X,[t("ul",null,[(o(!0),n(C,null,E(w.value,a=>(o(),n("li",{key:a.id,class:"p-2 text-darkgrey hover:bg-darkgrey hover:text-white cursor-pointer"},b(a.name),1))),128))])])):T("",!0)],512),u(h,{to:"",class:"text-text-heading hover:text-gray-300"},{default:f(()=>e[5]||(e[5]=[p("Movies")])),_:1}),u(h,{to:"",class:"text-text-heading hover:text-gray-300"},{default:f(()=>e[6]||(e[6]=[p("TV Shows")])),_:1}),u(h,{to:"",class:"text-text-heading hover:text-gray-300"},{default:f(()=>e[7]||(e[7]=[p("Login")])),_:1})])])],2)],512)}}}),ee=A({name:"Footer",data(){return{currentYear:new Date().getFullYear()}}}),te=g("/images/moovietime-logo-grey.svg"),se={class:"bg-background-dark text-text-subheading p-4"},oe={class:"container mx-auto flex justify-between items-center"},ne={class:"text-xs"};function re(m,r,_,d,c,i){return o(),n("nav",se,[t("div",oe,[t("div",ne,"© "+b(m.currentYear)+" Moovietime. All rights reserved.",1),r[0]||(r[0]=t("img",{src:te},null,-1)),r[1]||(r[1]=t("div",{class:"text-xs"},"Made width Nuxt",-1))])])}const ae=U(ee,[["render",re]]),ie={class:"bg-darkgrey"},le={class:"min-h-screen"},ge={__name:"default",setup(m){return(r,_)=>{const d=Y;return o(),n("div",ie,[u(Z),t("div",le,[u(d)]),u(ae)])}}};export{ge as default};
