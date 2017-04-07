var nav_tabs_container_offset,
    navbar_offset,
    orderpanel_offset,
    top_offset,
    s,
    search_widget_height,
    dateNowStr;

var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};


$(document).ready(function() {
  $.validate({
    borderColorOnError : '#B9B9B9',
    language : { requiredFields : 'This field is required' }
  });

  $('.profile-btn').click(function(){
    $('.profile-left').slideToggle('fast');
  });

  if($('aside').is('.search-aside'))
    search_widget_height = $('.search-aside').height();

if(!isMobile.any()){
  $( "#datepicker").datepicker({
    defaultDate: 0,
    showOtherMonths: true,
    minDate: 0,
    onClose: function(){
      $( "#datepicker").removeAttr('show-datepicker');
    }
  });
  $( "#start-date").datepicker({
     defaultDate: 0,
     showOtherMonths: true,
     minDate: 0,
     onClose: function( selectedDate ) {
        $( "#end-date" ).datepicker( "option", "minDate", selectedDate );
        $( "#start-date").removeAttr('show-datepicker');
        datePickerChangeForMobile();
     }
  });
  $( "#end-date").datepicker({
    defaultDate: 0,
    showOtherMonths: true,
    minDate: 0,
    onClose: function( selectedDate ) {
      $( "#start-date" ).datepicker( "option", "maxDate", selectedDate );
      $( "#end-date").removeAttr('show-datepicker');
      datePickerChangeForMobile();
    }
  });
  $( "#datepicker1").datepicker({
    defaultDate: 0,
    showOtherMonths: true,
    minDate: 0,
    onClose: function( selectedDate ) {
        $("#datepicker2").datepicker( "option", "minDate", selectedDate );
        $("#datepicker1").removeAttr('show-datepicker');
        datePickerChangeForMobile();
    }
  });
   $( "#datepicker2").datepicker({
      defaultDate: 0,
      showOtherMonths: true,
      minDate: 0,
      onClose: function( selectedDate ) {
          $( "#datepicker1" ).datepicker( "option", "maxDate", selectedDate );
          $("#datepicker2").removeAttr('show-datepicker');
          datePickerChangeForMobile();
      }
   });
   $( "#datepicker3").datepicker({
      defaultDate: 0,
      showOtherMonths: true,
      minDate: 0,
      onClose: function( selectedDate ) {
          $( "#datepicker4" ).datepicker( "option", "minDate", selectedDate );
          $("#datepicker3").removeAttr('show-datepicker');
          datePickerChangeForMobile();
      }
   });
   $( "#datepicker4").datepicker({
      defaultDate: 0,
      showOtherMonths: true,
      minDate: 0,
      onClose: function( selectedDate ) {
          $( "#datepicker3" ).datepicker( "option", "maxDate", selectedDate );
          $("#datepicker4").removeAttr('show-datepicker');
          datePickerChangeForMobile();
      }
   });
   $( "#datepicker5").datepicker({
      defaultDate: 0,
      showOtherMonths: true,
      minDate: 0,
      onClose: function( selectedDate ) {
          $( "#datepicker6" ).datepicker( "option", "minDate", selectedDate );
          $("#datepicker5").removeAttr('show-datepicker');
          datePickerChangeForMobile();
      }
   });
   $( "#datepicker6").datepicker({
      defaultDate: 0,
      showOtherMonths: true,
      minDate: 0,
      onClose: function( selectedDate ) {
          $( "#datepicker5" ).datepicker( "option", "maxDate", selectedDate );
          $("#datepicker6").removeAttr('show-datepicker');
          datePickerChangeForMobile();
      }
   });

  $('#datepicker').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });

  $('#start-date').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });

  $('#end-date').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });

   $('#datepicker1').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });
  $('#datepicker2').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });
  $('#datepicker3').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });
  $('#datepicker4').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });
  $('#datepicker5').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });
  $('#datepicker6').click(function(){
    if($(this).attr('show-datepicker')=='1') {
      hideDatepicker();
      $(this).removeAttr('show-datepicker');
    }
    else {
      $(this).attr('show-datepicker','1');
    }
  });
}
  $("#back-to-top").hide();

  $("#price-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    // hide_from_to: true,
    hide_min_max: true,
    prefix: '$'
  });

  $("#distance-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    // hide_from_to: true,
    hide_min_max: true,
    postfix: 'km'
  });

  $('.tags').waypoint( function(dir) {
    if(dir === 'down') {
      $(this).addClass('stuck');
    }
  }, 
  { offset: 310 }).waypoint(function(dir) {
    if(dir === 'up') {
      $(this).removeClass('stuck')
    }
  }, { offset: 310 });
	
  $("#back-to-top").on('click', function() {
    $('body,html').animate({
		  scrollTop: 0
	  }, 800);
    return false;
  });

  $('#sbtn-email').click(function(){
    $(this).hide();
  	$('.email-reg').slideDown('fast');
  });

  $('.show-filters').on('click', function() {
  	if($(".filters-container").hasClass("hidden-sm")) {
		  $(".search-results-container").animate({"margin-top": "20px"}, 300);
		  $(".filters-container").css({"display": "none"});
  		$(".filters-container").removeClass("hidden-sm hidden-xs");
		  $(".filters-container").slideToggle('slow');
  	}    	
	  else
	  {
		  $(".filters-container").slideToggle('slow', function(){
			  $(".filters-container").addClass("hidden-sm hidden-xs");
			  $(".filters-container").css({"display": ""});
		  });
		  if($(document).width()>680)
			 $(".search-results-container").animate({"margin-top": "0"}, 300);
		  else
			 $(".search-results-container").animate({"margin-top": "0"}, 300);
	  }
  });

  $('.dropdown-toggle').click(function() { 
    $('.dropdown-menu').fadeOut(300);  
    if($(this).next('.dropdown-menu').is(':visible'))
    {
      $(this).next('.dropdown-menu').fadeOut(300);
    }
    else
    {
      $(this).next('.dropdown-menu').fadeIn(300);  
      $('.slide-search__input').animate(
      { width: "0%", padding: "0px" },
      300,
      function(){
        $('.slide-search__input').css({'opacity': '0'});
        $('.slide-search').removeClass('slide-search-open');
      });
    }
  });

  var dateNow = new Date();
  dateNowStr = (dateNow.getMonth()+1)+'/'+dateNow.getDate()+'/'+dateNow.getFullYear();
  $('#start-date').val(dateNowStr); 
  $('#end-date').val(dateNowStr); 
  $('#datepicker').val(dateNowStr); 

  // photo tabs start animation
  $('.btn-photo').click(function(){
    $('.photo-drop').fadeOut('fast');
    $('.photos-wrapper').fadeIn('fast');
  });
  // location animation     
  $('.map-start').click(function(){
    $(this).fadeOut('fast');
    $('.map-container').fadeIn('fast');
  });
  /*---------------------  custom-select  -------------------------*/
  $('.custom-select').selectBox();

  $('.i-star').click(function(){
    $(this).toggleClass('i-star-on');
  });

  $('.dash-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('.masked').readmore({
      maxHeight: 45,
      speed: 200,
      moreLink: '<a href="#0" class="rev-more">Read more <i class="sel-arr"></i></a>',
      lessLink: '<a href="#0" class="rev-more">Close <i class="sel-top-arr"></i></a>'
    });
  })

  $('.masked').readmore({
    maxHeight: 45,
    speed: 200,
    moreLink: '<a href="#0" class="rev-more">Read more <i class="sel-arr"></i></a>',
    lessLink: '<a href="#0" class="rev-more">Close <i class="sel-top-arr"></i></a>'
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.flash').tooltip({
      'template': '<div class="tooltip bottom fade in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  'title': 'You can immediately book this item!'
  });

  $('.slide-search').on('click', function() {   
    $(this).addClass('slide-search-open');
    $('.slide-search__input').css({'opacity': '1', 'line-height': '16px'});
    $('.slide-search__input').animate({ width: "100%", padding: "5px 20px"}, 300);
    $('.slide-search__input').focus();
  });

  $('.dropdown-menu').on('click', function(event) {
    event.stopPropagation();
  });

  $('.verify-submit').on('click', function() {
    $('.verify-slide-down').slideDown();
  });

  $('.review__text').readmore({
    maxHeight: 110,
    speed: 200,
    moreLink: '<a href="#0" class="review-read-more">Read more</a>',
    lessLink: '<a href="#0" class="review-close">Close</a>',
        afterToggle: function() {
            $('p.mask::after').css({
            'display': 'none'
        });
        }
  });

  if($('div').is('.header-pictures'))
    $('.header-pictures a').fancybox();

  $('.item-topbar a').click(function(){
    $('.item-topbar li').removeClass('active');
    $(this).parents('li').addClass('active');    
    var topItem;
    if ($('.nav-tabs-container').hasClass('nav-bar-stuck')) 
      topItem = -70;
    else
      topItem = -127;

    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top + topItem
    }, 500);
    return false;
  });

  $('.content-container aside .save span').on('click', function() {
    $(this).toggleClass("wishlist-checked");
  });

  if($(window).width() <= 880) {
    $('.review-bxslider').bxSlider({
      pager: false,
      nextText: '',
      prevText: ''
    });
  }

  $('.wishlist').click(function(){
    $(this).toggleClass('wishlist-active');
  });

  validate_order_form();
 /* $('#datepicker3, #datepicker4').keyup(validate_order_form);
  $('#datepicker3, #datepicker4').change(validate_order_form);
  $('#timepicker3, #timepicker4').keyup(validate_order_form);
  $('#timepicker3, #timepicker4').change(validate_order_form);
  $('#datepicker5, #datepicker6').keyup(validate_order_form1);
  $('#datepicker5, #datepicker6').change(validate_order_form1);
  $('#timepicker5, #timepicker6').keyup(validate_order_form1);
  $('#timepicker5, #timepicker6').change(validate_order_form1);*/

  var selectBoxes = $(".selectBox-label");
 
 function setSelectBoxColor() {
 selectBoxes.each(function() {
   if( $(this).html() === "Start time" || $(this).html() === "End time" || $(this).html() === "Month" || $(this).html() === "Year" || $(this).html() ==="Select your country" || $(this).html() ==="Select payment type") {
     $(this).css("color", "#B6B6B6");
   } else {
     $(this).css("color", "#4F7FB2");
   }
 });
 }
 setSelectBoxColor();
 $("select").selectBox().change(function() {
   setSelectBoxColor();
 });

  navbar_offset = $('.content-container').offset();
  orderpanel_offset = $('.order-panel').offset();
  s = $('.search-aside .order-panel');
  top_offset = $('header').outerHeight() - 115;
  
  if($('aside').is('.search-aside') && $(window).scrollTop()>0)
  {
    itemDetailsInit();
  }

  $("#gl-form").on('submit', function (e) {
    $('body,html').animate({ scrollTop: 0 }, 0);
    e.preventDefault();
  });

  $("#signForm").on('submit', function (e) {
    $('body,html').animate({ scrollTop: 0 }, 0);
    e.preventDefault();
  });

  if(isMobile.any()){
    $(".filter_datepicker").each(function(){ 
      $(this).attr("type", "date");
      $(this).val($(this).attr("placeholder"));
      $('#start-date').val(dateNowStr); 
      $('#end-date').val(dateNowStr); 
      $('#datepicker').val(dateNowStr); 
      if($(this).val().indexOf("/")==-1){
        $(this).css("color", "darkgrey");
      }
      else{
        $(this).css("color", "#4F7FB2");
      }
    });
  }  
});/*doc ready end*/   

function datePickerChangeForMobile()
{
  $(".hasDatepicker").each(function(){
    if($(this).val()==""){
      $(this).val($(this).attr("placeholder"));
      $('#start-date').val(dateNowStr); 
      $('#end-date').val(dateNowStr); 
      $('#datepicker').val(dateNowStr); 
    }
    else{
      if($(this).val().indexOf("/")==-1){
        $(this).css("color", "darkgrey");
      }
      else{
        $(this).css("color", "#4F7FB2");
      }
    }
  }); 
}

function itemDetailsInit(){
  if($('div').is('.tabs-container'))
  {
    nav_tabs_container_offset = $('.tabs-container').offset();
    if(nav_tabs_container_offset) {
      if ($(this).scrollTop() > nav_tabs_container_offset.top+20) {
        $('.nav-tabs-container').addClass('nav-bar-stuck');
      }
      else {
        $('.nav-tabs-container').removeClass('nav-bar-stuck');
      }
    }
  }

  if($('.nav-tabs-container').length > 0) {
    if ($('.nav-tabs-container').hasClass('nav-bar-stuck')) {
      $('.content-container .tabs-container .nav-bar-stuck ul').css({
        'margin-left': navbar_offset.left
      });
    } else {   
      $('.content-container .tabs-container .nav-tabs').css({
        'margin-left': '0'
      });
    }
    $('.content-container .tabs-container .nav-bar-stuck ul').css({
      'margin-left': navbar_offset.left
    });
  }

  if($('div').is('.content-container')) {
    if ($(this).scrollTop() > $('.content-container').offset().top-40) 
    {
      if(($(this).scrollTop() + search_widget_height)>($('.content').height() + $('.content').offset().top)){
        $('.search-aside .order-panel').css({ 'position': 'relative', 'top': $('.content').height() - search_widget_height - 20 });
      }
      else{
        $('.search-aside .order-panel').css({ 'position': 'fixed', 'top': '0px', 'z-index': '10', 'width': '322px' });
      }
    }
    else{
      $('.search-aside .order-panel').css({ 'position': 'inherit' });
    }
  }

  var active_menu = false;
  var itemTopbar = $(".item-topbar a").get().reverse();
  $(itemTopbar).each(function() {
    $(this).parents('li').removeClass('active');
    var scrollTop = $($.attr(this, 'href')).offset().top;
    if($(window).scrollTop()>=scrollTop-70 && active_menu===false){
      $(this).parents('li').addClass('active');
      active_menu = true;
    }
  });
}

$(window).load(function(){
  $('.bxslider').bxSlider({
    pager: false,
    nextText: '',
    prevText: ''
  });
});

$(window).scroll(function () {   
    if ($(this).scrollTop() > 300) {
      $('.header-search').addClass('sticky-search');
    } else {
      $('.header-search').removeClass('sticky-search');
    }
    if ($(this).scrollTop() > 1) {
      $('#back-to-top').fadeIn(); 
    }else{
      $('#back-to-top').fadeOut();
    }

    if(!isMobile.any()){
      hideDatepicker();
    }

    if($('.map #google-container').length > 0) {
      if($(window).scrollTop() >= 0) {
       $('#cd-google-map').css({
        'height': '310px',
        // 'width': '100%',
        'z-index': '99'
       });
      }
      if($(window).scrollTop() < 59) {
        $('#cd-google-map').css({
          'height': '370px',
          'z-index': '3',
          'overflow': 'hidden'
        })
      }
    }

    itemDetailsInit();

    /*if($('.search-aside .order-panel').length > 0) {
      var stickermax = $(document).outerHeight() - $('.footer').outerHeight() - $('#location').outerHeight() - s.outerHeight() - 40;
      var windowpos = $(window).scrollTop();
      if (windowpos >= top_offset && windowpos < stickermax) {
        s.attr("style", ""); //kill absolute positioning
        s.addClass("stuck"); //stick it
      } else if (windowpos >= stickermax) {
        s.removeClass("stuck"); //un-stick
        s.css({position: "absolute", top: stickermax - top_offset + 59 + "px", "z-index": "99"}); //set sticker right above the footer
        
      } else {
        s.removeClass("stuck"); //top of page
      }
    }*/
  });

  $(window).resize(function(){
    navbar_offset = $('.content-container').offset();
    orderpanel_offset = $('.order-panel').offset();
    s = $('.search-aside .order-panel');
    top_offset = $('header').outerHeight() - 115;

    if($('.nav-tabs-container').length > 0) {
      if ($('.nav-tabs-container').hasClass('nav-bar-stuck')) {
        $('.content-container .tabs-container .nav-bar-stuck ul').css({
          'margin-left': navbar_offset.left
        });
      } else {   
        $('.content-container .tabs-container .nav-tabs').css({
          'margin-left': '0'
        });
      }
      $('.content-container .tabs-container .nav-bar-stuck ul').css({
        'margin-left': navbar_offset.left
      });
    }

    if($('div').is('.nav-tabs-container'))
    {
      $('.nav-tabs-container').removeClass('nav-bar-stuck');
      nav_tabs_container_offset = $('.nav-tabs-container').offset();
      if ($(this).scrollTop() > nav_tabs_container_offset.top) {
        $('.nav-tabs-container').addClass('nav-bar-stuck');
      }
      else {
        $('.nav-tabs-container').removeClass('nav-bar-stuck');
      }
    }

    if($(document).width()>680)
      $(".search-results-container").css({"margin-top": "0"});
    else 
      $(".search-results-container").css({"margin-top": "0"});
      
    if($(document).width()>974)
      $(".search-results-container").css({"margin-top": "0px"});

    if($(document).width()>1129)
      $('.profile-left').show();
    else
      $('.profile-left').hide();
  });

/*---------------------  click out dropdown-menu  -------------------------*/
$(document).click( function(event){
    if( $(event.target).closest(".dropdown-menu").length ) 
       return;
    $(".dropdown-menu").fadeOut("slow");
    
    if ($(event.target).parents().filter('.slide-search').length != 1) {
      $('.slide-search__input').animate(
      { width: "0%", padding: "0px" },
      300,
      function(){
        $('.slide-search__input').css({'opacity': '0'});
        $('.slide-search').removeClass('slide-search-open');
      });
    }
    if ($(event.target).parents().filter('.gr-block-top').length != 1 && $(event.target).parents().filter('.profile-left').length != 1) {
      if($(document).width()<1130){
        $('.profile-left').slideUp('fast');
      }
    }
    event.stopPropagation();
});
/*---------------------  hidden modal  -------------------------*/
$(function() {
  $('.forgot').click(function() {
    $('#login-modal').modal('hide');
    $('body').addClass('mymodal-open');
  });
});
  /*---------------------  close modal-dialog close out  -------------------------*/
$(document).click( function(event){
  if( $(event.target).closest(".modal-dialog").length ) 
    return;
  $("body").removeClass("mymodal-open");
  event.stopPropagation();
});
  /*---------------------  period animate -------------------------*/
$(function() {
   $('.period-top').click(function() {
      $('.period-top').each(function(){
        $(this).removeClass('pt-non-active');
      });
      var open = $(this).hasClass('pt-active');
      $('.tab-pane').find('.period-top').each(function() {
        if($(this).hasClass("pt-active"))
        {
          $(this).next('.period-content').slideUp('fast');
          $(this).toggleClass('pt-active');
        }
      });
      if(open)
      {
        $(this).removeClass('pt-active');
      }
      else
      {
        $(".period-bot .check span").click(function(){
          if($(this).parent().find(".styled").prop("checked"))
            $(this).parent().parent().find(".period-time").slideDown('fast');
          else
            $(this).parent().parent().find(".period-time").slideUp('fast');
        });

        $(".period-bot .check .check-label").click(function(){
          if($(this).parent().find(".styled").prop("checked"))              
            $(this).parent().parent().find(".period-time").slideUp('fast');
          else
            $(this).parent().parent().find(".period-time").slideDown('fast');
        });
                 
        $(this).addClass('pt-active');
        $(this).next('.period-content').slideDown('fast');
      }    

      var isActive = false;
      $('.period-top').each(function(){          
        if($(this).hasClass("pt-active"))
          isActive = true;
      });    
      $('.period-top').each(function(){          
        if(isActive)
        {
          if(!$(this).hasClass("pt-active"))
            $(this).addClass('pt-non-active');
        }
        else
        {
          $(this).removeClass('pt-non-active');
        }
      }); 
  });
});
/*--------------------- rules   -------------------------*/
$(function() {
     $('.rule-open-wrap').click(function() {
        $(this).next('.rule-cont').slideDown('fast');
        $(this).children('.rule-open').fadeOut('fast');
    });
});

$(function() {
     $('.rule-close').click(function() {
        $(this).parent('.rule-cont').slideUp('fast');
        $(this).parents('.rules-block').find('.rule-open').fadeIn('fast');
    });
});  

function validate_order_form() {
 	if($("#datepicker3").length>0 && $("#datepicker4").length>0 && $("#timepicker3").val() != '1' && $("#timepicker4").val() != '1')
 	{
	    if($('#datepicker3').val().length > 0 && $('#datepicker4').val().length > 0) {
	        $('.aside__details').slideDown();
	        $('.aside__table').slideDown();
	    }
	}
}
function validate_order_form1() {
  if($("#datepicker5").length>0 && $("#datepicker6").length>0 && $("#timepicker5").val() != '1' && $("#timepicker6").val() != '1')
  {
      if($('#datepicker5').val().length > 0 && $('#datepicker6').val().length > 0) {
          $('.aside__details').slideDown();
          $('.aside__table').slideDown();
      }
  }
}

function hideDatepicker() {
  $('#datepicker').datepicker('hide');  
  $('#start-date').datepicker('hide');
  $('#end-date').datepicker('hide');
  $('#datepicker1').datepicker('hide');
  $('#datepicker2').datepicker('hide');
  $('#datepicker3').datepicker('hide');
  $('#datepicker4').datepicker('hide');
  $('#datepicker5').datepicker('hide');
  $('#datepicker6').datepicker('hide'); 
  $('#hidden-text').focus();
}