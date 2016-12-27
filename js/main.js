"use strict";function handleDotNav(){var t=window.innerWidth>768,e=about.offsetTop-about.offsetTop/4,o=window.scrollY>e;t&&o?dotNav.classList.add("active"):dotNav.classList.remove("active")}function switchNavs(){var t=window.innerWidth>768,e=overlay.classList.contains("open");t?(dotNav.classList.add("active"),e&&(hamburger.classList.remove("active"),overlay.classList.remove("open"))):dotNav.classList.remove("active")}function toggleMenu(){this.classList.toggle("active"),overlay.classList.toggle("open"),document.body.classList.toggle("noScroll")}function focusInput(){this.parentElement.classList.add("is-active","is-completed")}function blurInput(){this.parentElement.classList.remove("is-active","is-completed")}function autoExpand(){textarea.style.height="",textarea.style.height=Math.min(textarea.scrollHeight,limit)+"px"}$(function(){function t(){o.each(function(){var t=$(this),e=$('#dot-nav a[href="#'+t.attr("id")+'"]').data("number")-1;t.offset().top-$(window).height()/2<$(window).scrollTop()&&t.offset().top+t.height()-$(window).height()/2>$(window).scrollTop()?n.eq(e).addClass("is-selected"):n.eq(e).removeClass("is-selected")})}function e(t){$("body,html").animate({scrollTop:t.offset().top+50},600)}var o=$(".section"),n=$("#dot-nav a"),i=$("#overlay a");t(),$(window).on("scroll",function(){t()}),n.on("click",function(t){t.preventDefault(),e($(this.hash))}),i.on("click",function(t){t.preventDefault(),e($(this.hash)),$("#toggle").click()}),$(".scroll-down").on("click",function(t){t.preventDefault(),e($(this.hash))}),$(".touch #dot-nav a").on("click",function(){$(".touch #dot-nav").removeClass("open")})});var dotNav=document.querySelector("#dot-nav"),about=document.querySelector("#about-section");window.addEventListener("scroll",handleDotNav);var hamburger=document.querySelector("#toggle"),overlay=document.querySelector("#overlay");window.addEventListener("resize",switchNavs),hamburger.addEventListener("click",toggleMenu);var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()||skrollr.init({render:function(t){},smoothScrolling:!1,forceHeight:!1});var contactInput=document.querySelectorAll(".contact-input");contactInput.forEach(function(t){return t.addEventListener("focus",focusInput)}),contactInput.forEach(function(t){return t.addEventListener("blur",blurInput)});var textarea=document.querySelector("#message"),limit=300;textarea.addEventListener("input",autoExpand);