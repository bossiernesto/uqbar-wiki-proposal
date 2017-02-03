!function(t,e){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.2",settings:{start:0,end:100,step:1,precision:null,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(t,e,n){Foundation.inherit(this,"throttle"),this.bindings(e,n),this.reflow()},events:function(){var n=this;t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(e){n.cache.active||(e.preventDefault(),n.set_active_slider(t(e.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(a){if(n.cache.active)if(a.preventDefault(),t.data(n.cache.active[0],"settings").vertical){var i=0;a.pageY||(i=e.scrollY),n.calculate_position(n.cache.active,n.get_cursor_position(a,"y")+i)}else n.calculate_position(n.cache.active,n.get_cursor_position(a,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(){n.remove_active_slider()}).on("change.fndtn.slider",function(){n.settings.on_change()}),n.S(e).on("resize.fndtn.slider",n.throttle(function(){n.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var e=t(this),a=e.children(".range-slider-handle")[0],i=n.initialize_settings(a);""!=i.display_selector&&t(i.display_selector).each(function(){this.hasOwnProperty("value")&&t(this).change(function(){e.foundation("slider","set_value",t(this).val())})})})},get_cursor_position:function(t,e){var n,a="page"+e.toUpperCase(),i="client"+e.toUpperCase();return"undefined"!=typeof t[a]?n=t[a]:"undefined"!=typeof t.originalEvent[i]?n=t.originalEvent[i]:t.originalEvent.touches&&t.originalEvent.touches[0]&&"undefined"!=typeof t.originalEvent.touches[0][i]?n=t.originalEvent.touches[0][i]:t.currentPoint&&"undefined"!=typeof t.currentPoint[e]&&(n=t.currentPoint[e]),n},set_active_slider:function(t){this.cache.active=t},remove_active_slider:function(){this.cache.active=null},calculate_position:function(e,n){var a=this,i=t.data(e[0],"settings"),r=(t.data(e[0],"handle_l"),t.data(e[0],"handle_o"),t.data(e[0],"bar_l")),s=t.data(e[0],"bar_o");requestAnimationFrame(function(){var t;t=Foundation.rtl&&!i.vertical?a.limit_to((s+r-n)/r,0,1):a.limit_to((n-s)/r,0,1),t=i.vertical?1-t:t;var o=a.normalized_value(t,i.start,i.end,i.step,i.precision);a.set_ui(e,o)})},set_ui:function(e,n){var a=t.data(e[0],"settings"),i=t.data(e[0],"handle_l"),r=t.data(e[0],"bar_l"),s=this.normalized_percentage(n,a.start,a.end),o=s*(r-i)-1,l=100*s,c=e.parent(),d=e.parent().children("input[type=hidden]");Foundation.rtl&&!a.vertical&&(o=-o),o=a.vertical?-o+r-i+1:o,this.set_translate(e,o,a.vertical),a.vertical?e.siblings(".range-slider-active-segment").css("height",l+"%"):e.siblings(".range-slider-active-segment").css("width",l+"%"),c.attr(this.attr_name(),n).trigger("change.fndtn.slider"),d.val(n),a.trigger_input_change&&d.trigger("change.fndtn.slider"),e[0].hasAttribute("aria-valuemin")||e.attr({"aria-valuemin":a.start,"aria-valuemax":a.end}),e.attr("aria-valuenow",n),""!=a.display_selector&&t(a.display_selector).each(function(){this.hasAttribute("value")?t(this).val(n):t(this).text(n)})},normalized_percentage:function(t,e,n){return Math.min(1,(t-e)/(n-e))},normalized_value:function(t,e,n,a,i){var r=n-e,s=t*r,o=(s-s%a)/a,l=s%a,c=l>=.5*a?a:0;return(o*a+c+e).toFixed(i)},set_translate:function(e,n,a){a?t(e).css("-webkit-transform","translateY("+n+"px)").css("-moz-transform","translateY("+n+"px)").css("-ms-transform","translateY("+n+"px)").css("-o-transform","translateY("+n+"px)").css("transform","translateY("+n+"px)"):t(e).css("-webkit-transform","translateX("+n+"px)").css("-moz-transform","translateX("+n+"px)").css("-ms-transform","translateX("+n+"px)").css("-o-transform","translateX("+n+"px)").css("transform","translateX("+n+"px)")},limit_to:function(t,e,n){return Math.min(Math.max(t,e),n)},initialize_settings:function(e){var n,a=t.extend({},this.settings,this.data_options(t(e).parent()));return null===a.precision&&(n=(""+a.step).match(/\.([\d]*)/),a.precision=n&&n[1]?n[1].length:0),a.vertical?(t.data(e,"bar_o",t(e).parent().offset().top),t.data(e,"bar_l",t(e).parent().outerHeight()),t.data(e,"handle_o",t(e).offset().top),t.data(e,"handle_l",t(e).outerHeight())):(t.data(e,"bar_o",t(e).parent().offset().left),t.data(e,"bar_l",t(e).parent().outerWidth()),t.data(e,"handle_o",t(e).offset().left),t.data(e,"handle_l",t(e).outerWidth())),t.data(e,"bar",t(e).parent()),t.data(e,"settings",a)},set_initial_position:function(e){var n=t.data(e.children(".range-slider-handle")[0],"settings"),a="number"!=typeof n.initial||isNaN(n.initial)?Math.floor(.5*(n.end-n.start)/n.step)*n.step+n.start:n.initial,i=e.children(".range-slider-handle");this.set_ui(i,a)},set_value:function(e){var n=this;t("["+n.attr_name()+"]",this.scope).each(function(){t(this).attr(n.attr_name(),e)}),t(this.scope).attr(n.attr_name())&&t(this.scope).attr(n.attr_name(),e),n.reflow()},reflow:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var n=t(this).children(".range-slider-handle")[0],a=t(this).attr(e.attr_name());e.initialize_settings(n),a?e.set_ui(t(n),parseFloat(a)):e.set_initial_position(t(this))})}}}(jQuery,window,window.document);