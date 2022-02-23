import{r as g,w as T,d as u,c as e,a as d,b as p,e as f,f as c,v,g as b,h as x,F as C,i as k}from"./vendor.0b9f4ebf.js";const w=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};w();const A={todos:[]},m="my_todo_app",h={fetch(){const t=localStorage.getItem(m)||JSON.stringify(A);return JSON.parse(t)},save(t){localStorage.setItem(m,JSON.stringify(t))}},i={state:g(h.fetch()),addTodo(t){this.state.todos.splice(0,0,t)},removeTodo(t){this.state.todos.splice(this.state.todos.indexOf(t),1)}};T(i.state,t=>{h.save(t)},{deep:!0});var S="assets/logo.98839eb3.png",L=u({name:"AppHeader",setup(){return()=>e("h1",{class:"title"},[e("img",{class:"logo",src:S},null),e("br",null,null),d("Todo App")])}});function N(t=8){let s="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let l=0;l<t;l++)s+=r.charAt(Math.floor(Math.random()*r.length));return s}var O=u({setup(t,s){const r=i.state.todos,l=p("");function o(n){n.key!=="Enter"||l.value.trim()===""||(i.addTodo({uuid:N(),text:l.value.trim(),done:!1}),l.value="")}const a=f({get:()=>r.length>0&&r.filter(n=>n.done).length===r.length,set(n){r.forEach(y=>y.done=n)}});return()=>e("div",{class:"new-todo"},[c(e("input",{class:"toggle-all",type:"checkbox","onUpdate:modelValue":n=>a.value=n},null),[[v,a.value]]),c(e("input",{class:"new-todo-input",type:"text",autofocus:!0,autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":n=>l.value=n,onKeyup:o},null),[[b,l.value]])])}}),E=u({name:"TodoListItem",props:{todo:{type:Object,required:!0}},setup(t){const s=t.todo,r=p(null),l=n=>{r.value=s,setTimeout(()=>n.target.focus(),0)},o=n=>{(n.key=="Enter"||n.key=="Escape")&&(n.target.blur(),r.value=null,n.preventDefault())},a=n=>{r.value=null,s.text=n.target.innerText};return()=>e("li",{class:"todo-item"},[c(e("input",{"onUpdate:modelValue":n=>s.done=n,type:"checkbox",class:"toggle"},null),[[v,s.done]]),e("div",{class:s.done?"view done":"view"},[e("span",{class:"todo-text",onClick:l,onKeydown:o,onFocusout:a,contenteditable:r.value==s},[s.text])]),e("span",{onClick:()=>i.removeTodo(s),class:"destroy"},[d("\xD7")])])}}),D=u({name:"TodoList",props:{todos:{type:Array,required:!0}},setup(t,s){return()=>c(e("ul",{class:"todo-list"},[t.todos.map(r=>e(E,{key:r.uuid,todo:r},null))]),[[x,t.todos.length>0]])}}),F=u({name:"UnderBar",props:{filterType:{type:String,default:"all"},filteredCount:{type:Number,required:!0,default:0}},emits:["update:filterType"],setup(t,{emit:s}){let r=i.state.todos;const l=o=>s("update:filterType",o);return()=>e("div",{class:"footer"},[e("div",{class:"info"},[t.filteredCount,d("/"),r.length]),e("div",{class:"filters"},[e("button",{class:t.filterType==="all"?"selected":"",onClick:()=>l("all")},[d("All")]),e("button",{class:t.filterType==="active"?"selected":"",onClick:()=>l("active")},[d("Active")]),e("button",{class:t.filterType==="done"?"selected":"",onClick:()=>l("done")},[d("Done")])]),e("div",{class:"clear-all"},[e("button",{onClick:()=>i.state.todos=r.filter(o=>!o.done)},[d("Clear Done")])])])}}),I=u({name:"Copyright",render(){return e("div",{class:"copyright"},[e("p",null,[d("Created by "),e("a",{href:"https://github.com/hefengxian",target:"_blank"},[d("Frank")])]),e("p",null,[d("Powered by Vue 3 & TypeScript")])])}}),U=u({name:"App",setup(){const t=p("all"),s={all:l=>l,active:l=>l.filter(o=>!o.done),done:l=>l.filter(o=>o.done)},r=f(()=>s[t.value](i.state.todos));return()=>e(C,null,[e(L,null,null),e(O,null,null),e(D,{todos:r.value},null),e(F,{filteredCount:r.value.length,filterType:t.value,"onUpdate:filterType":l=>t.value=l},null),e(I,null,null)])}});k(U).mount("#app");