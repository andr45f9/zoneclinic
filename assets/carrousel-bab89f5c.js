import"./burgerMenu-6398dca8.js";let r=!1;window.addEventListener("DOMContentLoaded",s);function s(){i(),f(),updateUpaCarrouselInfo()}function i(t,e){if(!t||r)return;const n=300,c=t.scrollLeft,o=10;r=!0;let u=new Date().getTime(),a=setInterval(function(){let l=Math.min(1,(new Date().getTime()-u)/n);t.scrollLeft=l*e+c,l===1&&(clearInterval(a),r=!1)},o)}function f(t){const e=document.querySelector("#"+t+" #carrousel_flexbox");let n,c;function o(){n=document.querySelector("#"+t+" .card").offsetWidth,c=document.querySelectorAll("#"+t+" .card").length*n-document.querySelector("#"+t+" #carrousel_flexbox").clientWidth}document.querySelector("#"+t+" #scroll_left").addEventListener("click",function(){o(),e.scrollLeft>0&&i(e,-n*2)}),document.querySelector("#"+t+" #scroll_right").addEventListener("click",function(){o(),e.scrollLeft<c&&i(e,n*2)})}f("container");
