!function(e,n,o,t,i){"use strict";var a="fullpage-wrapper",l="."+a,s="fp-scrollable",r="."+s,c=".slimScrollBar",d=".slimScrollRail",f="fp-responsive",u="fp-notransition",h="fp-destroyed",p="fp-enabled",v="fp-viewing",g="active",m="."+g,S=".section",w="fp-section",x="."+w,y=x+m,b=x+":first",T=x+":last",C="fp-tableCell",k="."+C,E="fp-nav",L="#"+E,A="fp-tooltip",B="fp-show-active",M=".slide",R="fp-slide",z="."+R,I=z+m,F="fp-slides",P="."+F,H="fp-slidesContainer",D="."+H,V="fp-table",q="fp-slidesNav",N="."+q,U=N+" a",Y="fp-controlArrow",O="."+Y,W="fp-prev",X="."+W,K=Y+" "+W,j=O+X,Q="fp-next",$="."+Q,G=Y+" "+Q,J=O+$,Z=e(n),_=e(o);e.fn.fullpage=function(Y){function X(e){e.find(P).after('<div class="'+K+'"></div><div class="'+G+'"></div>'),"#fff"!=Y.controlArrowColor&&(e.find(J).css("border-color","transparent transparent transparent "+Y.controlArrowColor),e.find(j).css("border-color","transparent "+Y.controlArrowColor+" transparent transparent")),Y.loopHorizontal||e.find(j).hide()}function Q(){cn.append('<div id="'+E+'"><ul></ul></div>'),hn=e(L),hn.addClass(function(){return Y.showActiveTooltip?B+" "+Y.navigationPosition:Y.navigationPosition});for(var n=0;n<e(x).length;n++){var o="";Y.anchors.length&&(o=Y.anchors[n]);var t='<li><a href="#'+o+'"><span></span></a>',i=Y.navigationTooltips[n];"undefined"!=typeof i&&""!==i&&(t+='<div class="'+A+" "+Y.navigationPosition+'">'+i+"</div>"),t+="</li>",hn.find("ul").append(t)}}function $(){e(x).each(function(){var n=e(this).find(z);n.length?n.each(function(){Fe(e(this))}):Fe(e(this))}),e.isFunction(Y.afterRender)&&Y.afterRender.call(this)}function ee(){var n;if(!Y.autoScrolling||Y.scrollBar){for(var i=Z.scrollTop(),a=0,l=t.abs(i-o.querySelectorAll(x)[0].offsetTop),s=o.querySelectorAll(x),r=0;r<s.length;++r){var c=s[r],d=t.abs(i-c.offsetTop);l>d&&(a=r,l=d)}n=e(s).eq(a)}if(!Y.autoScrolling||Y.scrollBar){if(!n.hasClass(g)){En=!0;var f=e(y),u=f.index(x)+1,h=ze(n),p=n.data("anchor"),v=n.index(x)+1,m=n.find(I);if(m.length)var S=m.data("anchor"),w=m.index();xn&&(n.addClass(g).siblings().removeClass(g),e.isFunction(Y.onLeave)&&Y.onLeave.call(f,u,v,h),e.isFunction(Y.afterLoad)&&Y.afterLoad.call(n,p,v),Me(p,v-1),Y.anchors.length&&(fn=p,Ye(w,S,p,v))),clearTimeout(Cn),Cn=setTimeout(function(){En=!1},100)}Y.fitToSection&&(clearTimeout(kn),kn=setTimeout(function(){xn&&(e(y).is(n)&&(wn=!0),fe(n),wn=!1)},1e3))}}function ne(e){return e.find(P).length?e.find(I).find(r):e.find(r)}function oe(e,n){if(bn[e]){var o,t;"down"==e?(o="bottom",t=dn.moveSectionDown):(o="top",t=dn.moveSectionUp);var i=(new Date).getTime(),a=i-Ln;if(Ln=i,n.length>0){if(!Re(o,n))return!0;a>350&&t()}else t()}}function te(n){var o=n.originalEvent;if(!ie(n.target)&&ae(o)){Y.autoScrolling&&n.preventDefault();var i=e(y),a=ne(i);if(xn&&!pn){var l=Ze(o);Mn=l.y,Rn=l.x,i.find(P).length&&t.abs(Bn-Rn)>t.abs(An-Mn)?t.abs(Bn-Rn)>Z.width()/100*Y.touchSensitivity&&(Bn>Rn?bn.right&&dn.moveSlideRight():bn.left&&dn.moveSlideLeft()):Y.autoScrolling&&t.abs(An-Mn)>Z.height()/100*Y.touchSensitivity&&(An>Mn?oe("down",a):Mn>An&&oe("up",a))}}}function ie(n,o){o=o||0;var t=e(n).parent();return o<Y.normalScrollElementTouchThreshold&&t.is(Y.normalScrollElements)?!0:o==Y.normalScrollElementTouchThreshold?!1:ie(t,++o)}function ae(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function le(e){var n=e.originalEvent;if(Y.fitToSection&&rn.stop(),ae(n)){var o=Ze(n);An=o.y,Bn=o.x}}function se(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),a=0;a<i.length;a++)o+=i[a];return t.ceil(o/n)}function re(o){var i=(new Date).getTime();if(Y.autoScrolling){o=n.event||o;var a=o.wheelDelta||-o.deltaY||-o.detail,l=t.max(-1,t.min(1,a));yn.length>149&&yn.shift(),yn.push(t.abs(a)),Y.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var s=e(y),r=ne(s),c=i-zn;if(zn=i,c>200&&(yn=[]),xn){var d=se(yn,10),f=se(yn,70),u=d>=f;u&&(0>l?oe("down",r):oe("up",r))}return!1}Y.fitToSection&&rn.stop()}function ce(n){var o=e(y),t=o.find(P);if(t.length&&!pn){var i=t.find(I),a=null;if(a="prev"===n?i.prev(z):i.next(z),!a.length){if(!Y.loopHorizontal)return;a=i.siblings("prev"===n?":last":":first")}pn=!0,be(t,a)}}function de(){e(I).each(function(){_e(e(this))})}function fe(n,o,t){var i=n.position();if("undefined"!=typeof i){var a={element:n,callback:o,isMovementUp:t,dest:i,dtop:i.top,yMovement:ze(n),anchorLink:n.data("anchor"),sectionIndex:n.index(x),activeSlide:n.find(I),activeSection:e(y),leavingSection:e(y).index(x)+1,localIsResizing:wn};if(!(a.activeSection.is(n)&&!wn||Y.scrollBar&&Z.scrollTop()===a.dtop)){if(a.activeSlide.length)var l=a.activeSlide.data("anchor"),s=a.activeSlide.index();Y.autoScrolling&&Y.continuousVertical&&"undefined"!=typeof a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||a.isMovementUp&&"down"==a.yMovement)&&(a=pe(a)),n.addClass(g).siblings().removeClass(g),xn=!1,Ye(s,l,a.anchorLink,a.sectionIndex),e.isFunction(Y.onLeave)&&!a.localIsResizing&&Y.onLeave.call(a.activeSection,a.leavingSection,a.sectionIndex+1,a.yMovement),ue(a),fn=a.anchorLink,Me(a.anchorLink,a.sectionIndex)}}}function ue(n){if(Y.css3&&Y.autoScrolling&&!Y.scrollBar){var o="translate3d(0px, -"+n.dtop+"px, 0px)";Ve(o,!0),setTimeout(function(){ge(n)},Y.scrollingSpeed)}else{var t=he(n);e(t.element).animate(t.options,Y.scrollingSpeed,Y.easing).promise().done(function(){ge(n)})}}function he(e){var n={};return Y.autoScrolling&&!Y.scrollBar?(n.options={top:-e.dtop},n.element=l):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function pe(n){return n.isMovementUp?e(y).before(n.activeSection.nextAll(x)):e(y).after(n.activeSection.prevAll(x).get().reverse()),en(e(y).position().top),de(),n.wrapAroundElements=n.activeSection,n.dest=n.element.position(),n.dtop=n.dest.top,n.yMovement=ze(n.element),n}function ve(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(b).before(n.wrapAroundElements):e(T).after(n.wrapAroundElements),en(e(y).position().top),de())}function ge(n){ve(n),e.isFunction(Y.afterLoad)&&!n.localIsResizing&&Y.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),xn=!0,setTimeout(function(){e.isFunction(n.callback)&&n.callback.call(this)},600)}function me(){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];o&&qe(o,t)}function Se(){if(!En){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];if(o.length){var i="undefined"==typeof fn,a="undefined"==typeof fn&&"undefined"==typeof t&&!pn;(o&&o!==fn&&!i||a||!pn&&un!=t)&&qe(o,t)}else qe(1)}}function we(n){clearTimeout(In);var t=e(o.activeElement);if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&Y.keyboardScrolling&&Y.autoScrolling){var i=n.which,a=[40,38,32,33,34];e.inArray(i,a)>-1&&n.preventDefault(),In=setTimeout(function(){xe(n)},150)}}function xe(n){var o=n.shiftKey;switch(n.which){case 38:case 33:dn.moveSectionUp();break;case 32:if(o){dn.moveSectionUp();break}case 40:case 34:dn.moveSectionDown();break;case 36:dn.moveTo(1);break;case 35:dn.moveTo(e(x).length);break;case 37:dn.moveSlideLeft();break;case 39:dn.moveSlideRight();break;default:return}}function ye(e){xn&&(e.pageY<Fn?dn.moveSectionUp():e.pageY>Fn&&dn.moveSectionDown()),Fn=e.pageY}function be(n,o){var t=o.position(),i=o.index(),a=n.closest(x),l=a.index(x),s=a.data("anchor"),r=a.find(N),c=We(o),d=wn;if(Y.onSlideLeave){var f=a.find(I),u=f.index(),h=Ie(u,i);d||"none"===h||e.isFunction(Y.onSlideLeave)&&Y.onSlideLeave.call(f,s,l+1,u,h)}o.addClass(g).siblings().removeClass(g),!Y.loopHorizontal&&Y.controlArrows&&(a.find(j).toggle(0!==i),a.find(J).toggle(!o.is(":last-child"))),a.hasClass(g)&&Ye(i,c,s,l);var p=function(){d||e.isFunction(Y.afterSlideLoad)&&Y.afterSlideLoad.call(o,s,l+1,c,i),pn=!1};if(Y.css3){var v="translate3d(-"+t.left+"px, 0px, 0px)";ke(n.find(D),Y.scrollingSpeed>0).css(nn(v)),setTimeout(function(){p()},Y.scrollingSpeed,Y.easing)}else n.animate({scrollLeft:t.left},Y.scrollingSpeed,Y.easing,function(){p()});r.find(m).removeClass(g),r.find("li").eq(i).find("a").addClass(g)}function Te(){if(Ce(),vn){var n=e(o.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=Z.height();t.abs(i-Hn)>20*t.max(Hn,i)/100&&(dn.reBuild(!0),Hn=i)}}else clearTimeout(Pn),Pn=setTimeout(function(){dn.reBuild(!0)},500)}function Ce(){if(Y.responsive){var n=mn.hasClass(f);Z.width()<Y.responsive?n||(dn.setAutoScrolling(!1,"internal"),dn.setFitToSection(!1,"internal"),e(L).hide(),mn.addClass(f)):n&&(dn.setAutoScrolling(Tn.autoScrolling,"internal"),dn.setFitToSection(Tn.autoScrolling,"internal"),e(L).show(),mn.removeClass(f))}}function ke(e){var n="all "+Y.scrollingSpeed+"ms "+Y.easingcss3;return e.removeClass(u),e.css({"-webkit-transition":n,transition:n})}function Ee(e){return e.addClass(u)}function Le(e,n){var o=825,i=900;if(o>e||i>n){var a=100*e/o,l=100*n/i,s=t.min(a,l),r=s.toFixed(2);cn.css("font-size",r+"%")}else cn.css("font-size","100%")}function Ae(n,o){Y.navigation&&(e(L).find(m).removeClass(g),n?e(L).find('a[href="#'+n+'"]').addClass(g):e(L).find("li").eq(o).find("a").addClass(g))}function Be(n){Y.menu&&(e(Y.menu).find(m).removeClass(g),e(Y.menu).find('[data-menuanchor="'+n+'"]').addClass(g))}function Me(e,n){Be(e),Ae(e,n)}function Re(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0}function ze(n){var o=e(y).index(x),t=n.index(x);return o==t?"none":o>t?"up":"down"}function Ie(e,n){return e==n?"none":e>n?"left":"right"}function Fe(e){e.css("overflow","hidden");var n,o=e.closest(x),t=e.find(r);t.length?n=t.get(0).scrollHeight:(n=e.get(0).scrollHeight,Y.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var i=Sn-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top"));n>i?t.length?t.css("height",i+"px").parent().css("height",i+"px"):(Y.verticalCentered?e.find(k).wrapInner('<div class="'+s+'" />'):e.wrapInner('<div class="'+s+'" />'),e.find(r).slimScroll({allowPageScroll:!0,height:i+"px",size:"10px",alwaysVisible:!0})):Pe(e),e.css("overflow","")}function Pe(e){e.find(r).children().first().unwrap().unwrap(),e.find(c).remove(),e.find(d).remove()}function He(e){e.addClass(V).wrapInner('<div class="'+C+'" style="height:'+De(e)+'px;" />')}function De(e){var n=Sn;if(Y.paddingTop||Y.paddingBottom){var o=e;o.hasClass(w)||(o=e.closest(x));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=Sn-t}return n}function Ve(e,n){n?ke(mn):Ee(mn),mn.css(nn(e)),setTimeout(function(){mn.removeClass(u)},10)}function qe(n,o){var t;"undefined"==typeof o&&(o=0),t=isNaN(n)?e('[data-anchor="'+n+'"]'):e(x).eq(n-1),n===fn||t.hasClass(g)?Ne(t,o):fe(t,function(){Ne(t,o)})}function Ne(e,n){if("undefined"!=typeof n){var o=e.find(P),t=o.find('[data-anchor="'+n+'"]');t.length||(t=o.find(z).eq(n)),t.length&&be(o,t)}}function Ue(e,n){e.append('<div class="'+q+'"><ul></ul></div>');var o=e.find(N);o.addClass(Y.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(g)}function Ye(e,n,o,t){var i="";Y.anchors.length&&(e?("undefined"!=typeof o&&(i=o),"undefined"==typeof n&&(n=e),un=n,Oe(i+"/"+n)):"undefined"!=typeof e?(un=n,Oe(o)):Oe(o)),Xe()}function Oe(e){if(e==Y.anchors[0]&&(e=""),Y.recordHistory)location.hash=e;else if(vn||gn)history.replaceState(i,i,"#"+e);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+e)}}function We(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function Xe(){var n=e(y),o=n.find(I),t=n.data("anchor"),i=We(o),a=n.index(x),l=String(a);Y.anchors.length&&(l=t),o.length&&(l=l+"-"+i),l=l.replace("/","-").replace("#","");var s=new RegExp("\\b\\s?"+v+"-[^\\s]+\\b","g");cn[0].className=cn[0].className.replace(s,""),cn.addClass(v+"-"+l)}function Ke(){var e,t=o.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.body.insertBefore(t,null);for(var l in a)t.style[l]!==i&&(t.style[l]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(a[l]));return o.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}function je(){o.addEventListener?(o.removeEventListener("mousewheel",re,!1),o.removeEventListener("wheel",re,!1)):o.detachEvent("onmousewheel",re)}function Qe(){o.addEventListener?(o.addEventListener("mousewheel",re,!1),o.addEventListener("wheel",re,!1)):o.attachEvent("onmousewheel",re)}function $e(){if(vn||gn){var n=Je();e(l).off("touchstart "+n.down).on("touchstart "+n.down,le),e(l).off("touchmove "+n.move).on("touchmove "+n.move,te)}}function Ge(){if(vn||gn){var n=Je();e(l).off("touchstart "+n.down),e(l).off("touchmove "+n.move)}}function Je(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Ze(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,gn&&ae(e)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function _e(e){dn.setScrollingSpeed(0,"internal"),be(e.closest(P),e),dn.setScrollingSpeed(Tn.scrollingSpeed,"internal")}function en(e){if(Y.scrollBar)mn.scrollTop(e);else if(Y.css3){var n="translate3d(0px, -"+e+"px, 0px)";Ve(n,!1)}else mn.css("top",-e)}function nn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function on(e,n){switch(n){case"up":bn.up=e;break;case"down":bn.down=e;break;case"left":bn.left=e;break;case"right":bn.right=e;break;case"all":dn.setAllowScrolling(e)}}function tn(){en(0),e(L+", "+N+", "+O).remove(),e(x).css({height:"","background-color":"",padding:""}),e(z).css({width:""}),mn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),e(x+", "+z).each(function(){Pe(e(this)),e(this).removeClass(V+" "+g)}),Ee(mn),mn.find(k+", "+D+", "+P).each(function(){e(this).replaceWith(this.childNodes)}),rn.scrollTop(0)}function an(e,n,o){Y[e]=n,"internal"!==o&&(Tn[e]=n)}function ln(){Y.continuousVertical&&(Y.loopTop||Y.loopBottom)&&(Y.continuousVertical=!1,sn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),Y.continuousVertical&&Y.scrollBar&&(Y.continuousVertical=!1,sn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(Y.anchors,function(n,o){(e("#"+o).length||e('[name="'+o+'"]').length)&&sn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function sn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var rn=e("html, body"),cn=e("body"),dn=e.fn.fullpage;Y=e.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:S,slideSelector:M,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},Y),ln(),e.extend(e.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),e.extend(e.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),dn.setAutoScrolling=function(n,o){an("autoScrolling",n,o);var t=e(y);Y.autoScrolling&&!Y.scrollBar?(rn.css({overflow:"hidden",height:"100%"}),dn.setRecordHistory(Y.recordHistory,"internal"),mn.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&en(t.position().top)):(rn.css({overflow:"visible",height:"initial"}),dn.setRecordHistory(!1,"internal"),mn.css({"-ms-touch-action":"","touch-action":""}),en(0),t.length&&rn.scrollTop(t.position().top))},dn.setRecordHistory=function(e,n){an("recordHistory",e,n)},dn.setScrollingSpeed=function(e,n){an("scrollingSpeed",e,n)},dn.setFitToSection=function(e,n){an("fitToSection",e,n)},dn.setMouseWheelScrolling=function(e){e?Qe():je()},dn.setAllowScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){on(n,o)})):n?(dn.setMouseWheelScrolling(!0),$e()):(dn.setMouseWheelScrolling(!1),Ge())},dn.setKeyboardScrolling=function(e){Y.keyboardScrolling=e},dn.moveSectionUp=function(){var n=e(y).prev(x);n.length||!Y.loopTop&&!Y.continuousVertical||(n=e(x).last()),n.length&&fe(n,null,!0)},dn.moveSectionDown=function(){var n=e(y).next(x);n.length||!Y.loopBottom&&!Y.continuousVertical||(n=e(x).first()),n.length&&fe(n,null,!1)},dn.moveTo=function(n,o){var t="";t=isNaN(n)?e('[data-anchor="'+n+'"]'):e(x).eq(n-1),"undefined"!=typeof o?qe(n,o):t.length>0&&fe(t)},dn.moveSlideRight=function(){ce("next")},dn.moveSlideLeft=function(){ce("prev")},dn.reBuild=function(n){if(!mn.hasClass(h)){wn=!0;var o=Z.width();Sn=Z.height(),Y.resize&&Le(Sn,o),e(x).each(function(){var n=e(this).find(P),o=e(this).find(z);Y.verticalCentered&&e(this).find(k).css("height",De(e(this))+"px"),e(this).css("height",Sn+"px"),Y.scrollOverflow&&(o.length?o.each(function(){Fe(e(this))}):Fe(e(this))),o.length>1&&be(n,n.find(I))});var t=e(y);t.index(x)&&fe(t),wn=!1,e.isFunction(Y.afterResize)&&n&&Y.afterResize.call(mn),e.isFunction(Y.afterReBuild)&&!n&&Y.afterReBuild.call(mn)}};var fn,un,hn,pn=!1,vn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),gn="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,mn=e(this),Sn=Z.height(),wn=!1,xn=!0,yn=[],bn={up:!0,down:!0,left:!0,right:!0},Tn=e.extend(!0,{},Y);e(this).length?(mn.css({height:"100%",position:"relative"}),mn.addClass(a),e("html").addClass(p)):sn("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),Y.css3&&(Y.css3=Ke()),dn.setAllowScrolling(!0),mn.removeClass(h),e(Y.sectionSelector).each(function(){e(this).addClass(w)}),e(Y.slideSelector).each(function(){e(this).addClass(R)}),Y.navigation&&Q(),e(x).each(function(n){var o=e(this),t=e(this).find(z),i=t.length;if(n||0!==e(y).length||e(this).addClass(g),e(this).css("height",Sn+"px"),Y.paddingTop&&e(this).css("padding-top",Y.paddingTop),Y.paddingBottom&&e(this).css("padding-bottom",Y.paddingBottom),"undefined"!=typeof Y.sectionsColor[n]&&e(this).css("background-color",Y.sectionsColor[n]),"undefined"!=typeof Y.anchors[n]&&(e(this).attr("data-anchor",Y.anchors[n]),e(this).hasClass(g)&&Me(Y.anchors[n],n)),i>0){var a=100*i,l=100/i;t.wrapAll('<div class="'+H+'" />'),t.parent().wrap('<div class="'+F+'" />'),e(this).find(D).css("width",a+"%"),Y.controlArrows&&i>1&&X(e(this)),Y.slidesNavigation&&Ue(e(this),i),t.each(function(n){e(this).css("width",l+"%"),Y.verticalCentered&&He(e(this))});var s=o.find(I);s.length?_e(s):t.eq(0).addClass(g)}else Y.verticalCentered&&He(e(this))}).promise().done(function(){dn.setAutoScrolling(Y.autoScrolling,"internal");var t=e(y).find(I);if(t.length&&(0!==e(y).index(x)||0===e(y).index(x)&&0!==t.index())&&_e(t),Y.fixedElements&&Y.css3&&e(Y.fixedElements).appendTo(cn),Y.navigation&&(hn.css("margin-top","-"+hn.height()/2+"px"),hn.find("li").eq(e(y).index(x)).find("a").addClass(g)),Y.menu&&Y.css3&&e(Y.menu).closest(l).length&&e(Y.menu).appendTo(cn),Y.scrollOverflow?("complete"===o.readyState&&$(),Z.on("load",$)):e.isFunction(Y.afterRender)&&Y.afterRender.call(mn),Ce(),!Y.animateAnchor){var i=n.location.hash.replace("#","").split("/"),a=i[0];if(a.length){var s=e('[data-anchor="'+a+'"]');s.length&&(Y.autoScrolling?en(s.position().top):(en(0),rn.scrollTop(s.position().top)),Me(a,null),e.isFunction(Y.afterLoad)&&Y.afterLoad.call(s,a,s.index(x)+1),s.addClass(g).siblings().removeClass(g))}}Xe(),Z.on("load",function(){me()})});var Cn,kn,En=!1;Z.on("scroll",ee);var Ln=0,An=0,Bn=0,Mn=0,Rn=0,zn=(new Date).getTime();Z.on("hashchange",Se),_.keydown(we);var In;mn.mousedown(function(e){2==e.which&&(Fn=e.pageY,mn.on("mousemove",ye))}),mn.mouseup(function(e){2==e.which&&mn.off("mousemove")});var Fn=0;_.on("click touchstart",L+" a",function(n){n.preventDefault();var o=e(this).parent().index();fe(e(x).eq(o))}),_.on("click touchstart",U,function(n){n.preventDefault();var o=e(this).closest(x).find(P),t=o.find(z).eq(e(this).closest("li").index());be(o,t)}),Y.normalScrollElements&&(_.on("mouseenter",Y.normalScrollElements,function(){dn.setMouseWheelScrolling(!1)}),_.on("mouseleave",Y.normalScrollElements,function(){dn.setMouseWheelScrolling(!0)})),e(x).on("click touchstart",O,function(){e(this).hasClass(W)?dn.moveSlideLeft():dn.moveSlideRight()}),Z.resize(Te);var Pn,Hn=Sn;dn.destroy=function(n){dn.setAutoScrolling(!1,"internal"),dn.setAllowScrolling(!1),dn.setKeyboardScrolling(!1),mn.addClass(h),Z.off("scroll",ee).off("hashchange",Se).off("resize",Te),_.off("click",L+" a").off("mouseenter",L+" li").off("mouseleave",L+" li").off("click",U).off("mouseover",Y.normalScrollElements).off("mouseout",Y.normalScrollElements),e(x).off("click",O),n&&tn()}}}(jQuery,window,document,Math);