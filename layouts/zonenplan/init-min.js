!function($,o){$("img[usemap]").rwdImageMaps()}(jQuery),function($,o){var n=[];$(".zoomies").on("click",".button",function(){$(this).hasClass("button-in")?$(".svg-holder").addClass("zoomedin"):$(this).hasClass("button-out")&&$(".svg-holder").removeClass("zoomedin")}),$(document).ready(function(){var o=$("#zonenplan-svg"),n=$(".tx-frpzonemaplibero");o.panzoom({$zoomIn:n.find(".zoom-in"),$zoomOut:n.find(".zoom-out"),$zoomRange:n.find(".zoom-range"),startTransform:"scale(1.5)",increment:.1,minScale:1,contain:"invert"})})}(jQuery);