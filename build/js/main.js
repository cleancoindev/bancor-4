$(document).ready(function(){function e(e){var t=e<0?"-":"",n=String(parseInt(e=Math.abs(Number(e)||0).toFixed(0))),i=(i=n.length)>3?i%3:0;return t+(i?n.substr(0,i)+",":"")+n.substr(i).replace(/(\d{3})(?=\d)/g,"$1,")}$(".header_wrap__icon").on("click",function(){$(".header_mobile").addClass("nav_active")}),$(".header_mobile__top .icon").on("click",function(){$(".header_mobile").removeClass("nav_active")});new Swiper(".swiper-container",{slidesPerView:4,speed:1e3,freeMode:!0,freeModeMomentum:!0,mousewheelSensitivity:.02,simulateTouch:!0,direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{direction:"vertical",slidesPerView:2,speed:1e3,freeMode:!0,freeModeMomentum:!0,mousewheelSensitivity:.02,simulateTouch:!0}}}),new Swiper(".protocol_slider",{slidesPerView:1,speed:1e3,noSwiping:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".home_slider",{slidesPerView:1,speed:500,autoplay:{delay:7e3,disableOnInteraction:!1},effect:"fade",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".blog-slider",{spaceBetween:30,effect:"fade",loop:!0,mousewheel:{invert:!1},pagination:{el:".blog-slider__pagination",clickable:!0}}),new Swiper(".foundation_slider",{slidesPerView:1,speed:1e3,autoplay:{delay:4e3,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(window).scroll(function(){$(this).scrollTop()>=500?$("#return-to-top").fadeIn(200):$("#return-to-top").fadeOut(200)}),$("#return-to-top").click(function(){$("body,html").animate({scrollTop:0},500)}),$.get("https://api.bancor.network/0.1/currencies/BNT/ticker?fromCurrencyCode=ETH&displayCurrencyCode=USD",function(e,t){$("#bnt_price").html(e.data.price.toFixed(2))}),$(".spu-open-2135").on("click",function(e){$("#video")[0].src=$(this).attr("href")+"&autoplay=1",e.preventDefault()});var t=$(".press_cat_wrap .blog_item "),n=$("#next"),i=t.length;t.hide(),i>6&&n.show(),t.slice(0,6).show(),n.click(function(){var e=t.filter(":visible").length;t.slice(e-1,e+6).fadeIn(),t.filter(":visible").length>=i&&n.hide()}),$(function(){$("#video").click(function(){$(".video").modal("show")}),$(".test").modal({closable:!0})});var o=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"#roadmap"}).on("start",function(){TweenMax.staggerTo(".bancorx_roadmap_wrap .line",1,{className:"+=white_line"},1),TweenMax.staggerTo(".bancorx_roadmap_wrap__item:nth-child(-n+3)",5,{className:"+=white",transformOrigin:"bottom right",ease:Power4.easeOut},2)}).addTo(o);$(".network_numbers__item.conversions")&&($.get("https://api.bancor.network/0.1/currencies/convertiblePairs",function(e){var t=Object.keys(e.data).filter(function(e){return e.length<6}).length;$(".network_numbers__item.tokens > p").html(t),$(".network_numbers__item.token_pairs > p").html(t*(t-1)/2)}),setInterval(function(){$(".network_numbers__item.conversions > p").html("$"+e(1225162480+(Date.now()-1540401281596)/1e3*36))},200))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmb3JtYXRNb25leSIsIm4iLCJzIiwiaSIsIlN0cmluZyIsInBhcnNlSW50IiwiTWF0aCIsImFicyIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwibGVuZ3RoIiwic3Vic3RyIiwicmVwbGFjZSIsIm9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGVlZCIsImZyZWVNb2RlIiwiZnJlZU1vZGVNb21lbnR1bSIsIm1vdXNld2hlZWxTZW5zaXRpdml0eSIsInNpbXVsYXRlVG91Y2giLCJkaXJlY3Rpb24iLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiNzY4Iiwibm9Td2lwaW5nIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiZWZmZWN0IiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3BhY2VCZXR3ZWVuIiwibW91c2V3aGVlbCIsImludmVydCIsIndpbmRvdyIsInNjcm9sbCIsInRoaXMiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2xpY2siLCJhbmltYXRlIiwiZ2V0IiwiYSIsImIiLCJodG1sIiwiZSIsInNyYyIsImF0dHIiLCJwcmV2ZW50RGVmYXVsdCIsImxpc3QiLCJidXR0b24iLCJudW1Jbkxpc3QiLCJoaWRlIiwic2hvdyIsInNsaWNlIiwic2hvd2luZyIsImZpbHRlciIsIm1vZGFsIiwiY2xvc2FibGUiLCJjb250cm9sbGVyIiwiU2Nyb2xsTWFnaWMiLCJDb250cm9sbGVyIiwiU2NlbmUiLCJ0cmlnZ2VyRWxlbWVudCIsIlR3ZWVuTWF4Iiwic3RhZ2dlclRvIiwiY2xhc3NOYW1lIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsIlBvd2VyNCIsImVhc2VPdXQiLCJhZGRUbyIsInRfY291bnQiLCJPYmplY3QiLCJr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QU0sVUFFdEJyRSxFQUFFLFNBQVNxRSxPQUNQQyxVQUFVLE1BTWxCLElBQUlDLEVBQWEsSUFBSUMsWUFBWUMsV0FFckIsSUFBSUQsWUFBWUUsT0FDeEJDLGVBQWdCLGFBRWYxRCxHQUFHLFFBQVMsV0FPVDJELFNBQVNDLFVBRlksOEJBRWMsR0FBSUMsVUFBVyxnQkFBeUIsR0FDM0VGLFNBQVNDLFVBTFcsOENBRk4sR0FPK0JDLFVBQVcsVUFBdUJDLGdCQUFpQixlQUFnQkMsS0FBTUMsT0FBT0MsU0FOL0csS0FVakJDLE1BQU1aLEdBSVB2RSxFQUFFLHdDQUVGQSxFQUFFcUQsSUFBSSw2REFBOEQsU0FBU0MsR0FDekUsSUFBSThCLEVBQVVDLE9BQU9DLEtBQUtoQyxFQUFFaUMsTUFBTW5CLE9BQU8sU0FBUzlELEdBQUcsT0FBT0EsRUFBRVEsT0FBUyxJQUFJQSxPQUMzRWQsRUFBRSxxQ0FBcUN3RCxLQUFLNEIsR0FDNUNwRixFQUFFLDBDQUEwQ3dELEtBQU00QixHQUFTQSxFQUFRLEdBQUksS0FFM0VJLFlBQVksV0FDUnhGLEVBQUUsMENBQTBDd0QsS0FBSyxJQUFJckQsRUFBWSxZQUFhc0YsS0FBS0MsTUFBTSxlQUFlLElBQU8sTUFDakgiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDdXN0b21cbiAqL1xuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIE1vYmlsZSBtZW51XG5cbiAgICAkKCcuaGVhZGVyX3dyYXBfX2ljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkKCcuaGVhZGVyX21vYmlsZScpLmFkZENsYXNzKCduYXZfYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuaGVhZGVyX21vYmlsZV9fdG9wIC5pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmhlYWRlcl9tb2JpbGUnKS5yZW1vdmVDbGFzcygnbmF2X2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy9TbGlkZXJcblxuICAgIHZhciBTbGlkZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgICAgICBtb3VzZXdoZWVsU2Vuc2l0aXZpdHk6IDAuMDIsXG4gICAgICAgIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZXdoZWVsU2Vuc2l0aXZpdHk6IDAuMDIsXG4gICAgICAgICAgICAgICAgc2ltdWxhdGVUb3VjaDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gJCh3aW5kb3cpLm9uKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIHZhciB3dyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAvLyAgICAgJGVsID0gJChTbGlkZXIuJGVsKTtcbiAgICAvLyAgICAgaWYgKHd3ID4gNzY4KSAkZWwucmVtb3ZlQ2xhc3MoXCJzd2lwZXItY29udGFpbmVyLXZlcnRpY2FsXCIpLmFkZENsYXNzKFwic3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsXCIpO1xuICAgIC8vICAgICBlbHNlICRlbC5yZW1vdmVDbGFzcyhcInN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbFwiKS5hZGRDbGFzcyhcInN3aXBlci1jb250YWluZXItdmVydGljYWxcIik7XG4gICAgLy8gICAgIFNsaWRlci51cGRhdGUoKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIFByb3RvY29sIHNsaWRlclxuXG4gICAgdmFyIFNsaWRlcjEgPSBuZXcgU3dpcGVyKCcucHJvdG9jb2xfc2xpZGVyJywge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgbm9Td2lwaW5nOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBIb21lIHNsaWRlclxuXG4gICAgdmFyIFNsaWRlcjEgPSBuZXcgU3dpcGVyKCcuaG9tZV9zbGlkZXInLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogNzAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuYmxvZy1zbGlkZXInLCB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgICAgICBpbnZlcnQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAvLyBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5ibG9nLXNsaWRlcl9fcGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEZvdW5kYXRpb24gc2xpZGVyXG5cbiAgICB2YXIgU2xpZGVyMSA9IG5ldyBTd2lwZXIoJy5mb3VuZGF0aW9uX3NsaWRlcicsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogNDAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2Nyb2xsIHRvIHRvcFxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gNTAwKSB7XG4gICAgICAgICAgICAkKCcjcmV0dXJuLXRvLXRvcCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3JldHVybi10by10b3AnKS5mYWRlT3V0KDIwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcjcmV0dXJuLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA6IDBcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9KTtcblxuICAgIC8vIFByaWNlXG5cbiAgICAkLmdldChcImh0dHBzOi8vYXBpLmJhbmNvci5uZXR3b3JrLzAuMS9jdXJyZW5jaWVzL0JOVC90aWNrZXI/ZnJvbUN1cnJlbmN5Q29kZT1FVEgmZGlzcGxheUN1cnJlbmN5Q29kZT1VU0RcIiwgZnVuY3Rpb24oYSxiKSB7XG4gICAgICAgICQoJyNibnRfcHJpY2UnKS5odG1sKGFbJ2RhdGEnXVsncHJpY2UnXS50b0ZpeGVkKDIpKTtcbiAgICB9KTtcblxuICAgIC8vIFZpZGVvIHBsYXlcblxuICAgICQoJy5zcHUtb3Blbi0yMTM1Jykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgJCgnI3ZpZGVvJylbMF0uc3JjID0gJCh0aGlzKS5hdHRyKCdocmVmJykgKyAnJmF1dG9wbGF5PTEnO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBMb2FkIG1vcmVcblxuICAgIHZhciBsaXN0ID0gJChcIi5wcmVzc19jYXRfd3JhcCAuYmxvZ19pdGVtIFwiKTtcbiAgICB2YXIgbnVtVG9TaG93ID0gNjtcbiAgICB2YXIgYnV0dG9uID0gJChcIiNuZXh0XCIpO1xuICAgIHZhciBudW1Jbkxpc3QgPSBsaXN0Lmxlbmd0aDtcbiAgICBsaXN0LmhpZGUoKTtcbiAgICBpZiAobnVtSW5MaXN0ID4gbnVtVG9TaG93KSB7XG4gICAgICAgIGJ1dHRvbi5zaG93KCk7XG4gICAgfVxuICAgIGxpc3Quc2xpY2UoMCwgbnVtVG9TaG93KS5zaG93KCk7XG5cbiAgICBidXR0b24uY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHNob3dpbmcgPSBsaXN0LmZpbHRlcignOnZpc2libGUnKS5sZW5ndGg7XG4gICAgICAgIGxpc3Quc2xpY2Uoc2hvd2luZyAtIDEsIHNob3dpbmcgKyBudW1Ub1Nob3cpLmZhZGVJbigpO1xuICAgICAgICB2YXIgbm93U2hvd2luZyA9IGxpc3QuZmlsdGVyKCc6dmlzaWJsZScpLmxlbmd0aDtcbiAgICAgICAgaWYgKG5vd1Nob3dpbmcgPj0gbnVtSW5MaXN0KSB7XG4gICAgICAgICAgICBidXR0b24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPcGVuIHZpZGVvXG5cbiAgICAkKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjdmlkZW9cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoXCIudmlkZW9cIikubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIudGVzdFwiKS5tb2RhbCh7XG4gICAgICAgICAgICBjbG9zYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFJvYWRtYXBcblxuICAgIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcblxuICAgIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNyb2FkbWFwXCJcbiAgICB9KVxuICAgICAgICAub24oJ3N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID01O1xuICAgICAgICAgICAgdmFyIHN0YWdnZXIgPSAyO1xuICAgICAgICAgICAgdmFyIHNvbWVDbGFzc05hbWUgPSAnLmJhbmNvcnhfcm9hZG1hcF93cmFwX19pdGVtOm50aC1jaGlsZCgtbiszKSc7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uQ2xhc3MgPSAnd2hpdGUnO1xuICAgICAgICAgICAgdmFyIHNvbWVDbGFzc05hbWUyID0gJy5iYW5jb3J4X3JvYWRtYXBfd3JhcCAubGluZSc7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uQ2xhc3MyID0gJ3doaXRlX2xpbmUnO1xuICAgICAgICAgICAgVHdlZW5NYXguc3RhZ2dlclRvKHNvbWVDbGFzc05hbWUyLCAxLCB7Y2xhc3NOYW1lOiAnKz0nICsgYW5pbWF0aW9uQ2xhc3MyfSwgMSk7XG4gICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8oc29tZUNsYXNzTmFtZSwgZHVyYXRpb24sIHtjbGFzc05hbWU6ICcrPScgKyBhbmltYXRpb25DbGFzcywgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JywgZWFzZTogUG93ZXI0LmVhc2VPdXR9LCBzdGFnZ2VyKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcblxuICAgIC8vIE5ldHdvcmsgbnVtYmVyc1xuXG4gICAgaWYgKCQoJy5uZXR3b3JrX251bWJlcnNfX2l0ZW0uY29udmVyc2lvbnMnKSlcbiAgICB7XG4gICAgICAgICQuZ2V0KFwiaHR0cHM6Ly9hcGkuYmFuY29yLm5ldHdvcmsvMC4xL2N1cnJlbmNpZXMvY29udmVydGlibGVQYWlyc1wiLCBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICB2YXIgdF9jb3VudCA9IE9iamVjdC5rZXlzKGEuZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGkpe3JldHVybiBpLmxlbmd0aCA8IDZ9KS5sZW5ndGg7XG4gICAgICAgICAgICAkKCcubmV0d29ya19udW1iZXJzX19pdGVtLnRva2VucyA+IHAnKS5odG1sKHRfY291bnQpO1xuICAgICAgICAgICAgJCgnLm5ldHdvcmtfbnVtYmVyc19faXRlbS50b2tlbl9wYWlycyA+IHAnKS5odG1sKCh0X2NvdW50Kih0X2NvdW50LTEpKS8yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLm5ldHdvcmtfbnVtYmVyc19faXRlbS5jb252ZXJzaW9ucyA+IHAnKS5odG1sKCckJytmb3JtYXRNb25leSgxMjI1MTYyNDgwKygoRGF0ZS5ub3coKS0xNTQwNDAxMjgxNTk2KS8xMDAwICogMzYpKSk7XG4gICAgICAgIH0sMjAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXRNb25leShuKSB7XG4gICAgICAgIHZhciBjID0gMCxcbiAgICAgICAgICAgIGQgPSBcIi5cIixcbiAgICAgICAgICAgIHQgPSBcIixcIixcbiAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuXG4gICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgfTtcblxufSk7Il19
