import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c="/goit-js-hw-11/assets/err-4f06a8ee.svg";function h(r,o){return fetch(`https://pixabay.com/api/?key=${r}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`)}function f(r){return r.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:s,comments:n,downloads:p})=>`<li class="item">
          <a href="${i}"><img class="image" src="${o}" alt="${t}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${e}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${s}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${n}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${p}</p>
            </li>
          </ul>
        </li>`).join("")}const d="45255874-ab91a5ee76ea0557bb7dbd079",l=document.querySelector(".form"),u=document.querySelector(".list");l.addEventListener("submit",g);function g(r){u.innerHTML="";const o=r.target.elements.input.value.trim();if(r.preventDefault(),o!=0){l.insertAdjacentHTML("afterend",'<span class="loader"></span>');const i=document.querySelector(".loader");h(d,o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{const e=t.hits;e.length!==0?(u.insertAdjacentHTML("beforeend",f(e)),new m(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):a.show({class:"toast",position:"topRight",icon:"icon",iconUrl:c,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{a.show({class:"toast",position:"topRight",icon:"icon",iconUrl:c,iconColor:"white",messageColor:"white",title:"Error",titleColor:"white",message:"Please try again!"}),t.response?console.error("Server error:",t.response.status):t.request?console.error("No response from server"):console.error("Unknown error:",t.message)}).finally(()=>i.style.display="none"),l.reset()}}
//# sourceMappingURL=commonHelpers.js.map
