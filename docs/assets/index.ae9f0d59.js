import{d as g,r as b,o as i,c as u,a as t,t as m,F as h,p as y,b as $,e as c,f,g as d,h as k,i as x,w as v,j as H}from"./vendor.33b6f0ce.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}};V();var _=(o,s)=>{const a=o.__vccOpts||o;for(const[r,e]of s)a[r]=e;return a};const p=o=>(y("data-v-73220abf"),o=o(),$(),o),w=p(()=>t("p",null,[c(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),c(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),A=p(()=>t("p",null,[c("See "),t("code",null,"README.md"),c(" for more information.")],-1)),S=p(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),c(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),E=p(()=>t("p",null,[c(" Edit "),t("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1)),I=g({props:{msg:null},setup(o){const s=b(0);return(a,r)=>(i(),u(h,null,[t("h1",null,m(o.msg),1),w,A,S,t("button",{type:"button",onClick:r[0]||(r[0]=e=>s.value++)},"count is: "+m(s.value),1),E],64))}});var N=_(I,[["__scopeId","data-v-73220abf"]]),W="/vite-vue-router-tailwind-test/assets/logo.03d6d6da.png";const j={name:"Home",components:{HelloWorld:N}},C={class:"home"},D=t("img",{alt:"Vue logo",class:"mx-auto",src:W},null,-1);function L(o,s,a,r,e,n){const l=f("HelloWorld");return i(),u("div",C,[D,d(l,{msg:"Hello Vue 3 + TypeScript + Vite"})])}var O=_(j,[["render",L]]);const B={},F={class:"about"},R=t("h1",null,"This is About page",-1),T=[R];function M(o,s){return i(),u("div",F,T)}var P=_(B,[["render",M]]);const q=[{path:"/",component:O},{path:"/about",component:P}],K=k({history:x("/vite-vue-router-tailwind-test/"),routes:q});const z={},G={id:"nav"},J=c("Home"),Q=c(" | "),U=c("About");function X(o,s){const a=f("router-link"),r=f("router-view");return i(),u(h,null,[t("div",G,[d(a,{to:"/"},{default:v(()=>[J]),_:1}),Q,d(a,{to:"/about"},{default:v(()=>[U]),_:1})]),d(r)],64)}var Y=_(z,[["render",X]]);H(Y).use(K).mount("#app");
