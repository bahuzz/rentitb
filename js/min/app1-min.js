$(document).ready(function(){function t(){$("#datepicker3").length>0&&$("#datepicker4").length>0&&$("#datepicker3").val().length>0&&$("#datepicker4").val().length>0&&($(".aside__details").slideDown(),$(".aside__table").slideDown())}$("#back-to-top").hide();var e=$(".content-container").offset(),o=$(".order-panel").offset(),n=$(".order-panel"),i=$("header").outerHeight()-115;$(function(){$(window).scroll(function(){$(this).scrollTop()>1?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()})}),$("#back-to-top").on("click",function(){return $("body,html").animate({scrollTop:0},800),!1}),$(window).scroll(function(){if($(".map #google-container").length>0&&($(".map #google-container").css({height:"310px",position:"fixed","z-index":"99"}),$(window).scrollTop()<2&&$(".map #google-container").css({height:"370px",position:"relative","z-index":"0"})),$(".nav-tabs-container").length>0&&($(".nav-tabs-container").hasClass("nav-bar-stuck")?$(".content-container .tabs-container .nav-bar-stuck ul").css({"margin-left":e.left}):$(".content-container .tabs-container .nav-tabs").css({"margin-left":"0"}),$(".content-container .tabs-container .nav-bar-stuck ul").css({"margin-left":e.left})),$(".search-aside .order-panel").length>0){var t=$(document).outerHeight()-$(".footer").outerHeight()-$("#location").outerHeight()-n.outerHeight()-40,o=$(window).scrollTop();o>=i&&t>o?(n.attr("style",""),n.addClass("stuck")):o>=t?(n.removeClass("stuck"),n.css({position:"absolute",top:t-i+59+"px","z-index":"99"})):n.removeClass("stuck")}}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$(".flash").tooltip({template:'<div class="tooltip bottom fade in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"You can immediately book this item!"})}),$(".slide-search").on("click",function(){$(this).addClass("slide-search-open"),$(".slide-search-input").focus()}),$(document).click(function(t){1!=$(t.target).parents().filter(".slide-search").length&&$(".slide-search").removeClass("slide-search-open"),t.stopPropagation()}),$(function(){$("#datepicker1").datepicker({defaultDate:0,showOtherMonths:!0,minDate:0,onClose:function(t){$("#datepicker2").datepicker("option","minDate",t)}})}),$(function(){$("#datepicker2").datepicker({defaultDate:0,showOtherMonths:!0,minDate:0,onClose:function(t){$("#datepicker1").datepicker("option","maxDate",t)}})}),$(function(){$("#datepicker3").datepicker({defaultDate:0,showOtherMonths:!0,minDate:0,onClose:function(t){$("#datepicker4").datepicker("option","minDate",t)}})}),$(function(){$("#datepicker4").datepicker({defaultDate:0,showOtherMonths:!0,minDate:0,onClose:function(t){$("#datepicker3").datepicker("option","maxDate",t)}})}),$(".dropdown-menu").on("click",function(t){t.stopPropagation()}),$(".verify-submit").on("click",function(){$(".verify-slide-down").slideDown()}),$("ul.nav-tabs a").click(function(){return $("ul.nav-tabs li").removeClass("active"),$(this).parents("li").addClass("active"),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-70},500),!1}),t(),$("#datepicker3, #datepicker4").keyup(t),$("#datepicker3, #datepicker4").change(t)});