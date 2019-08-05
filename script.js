// When the user scrolls down 50px from the top of the document, show the button
$(window).scroll(function() {
    if ($(this).scrollTop() >= 46) {      // If page is scrolled more than 46px
        $('#return_top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return_top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return_top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                    // Scroll to top of body
    }, 500);
});

//Smooth scrolling to the clicked navigation name
$(".navbar-nav a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
 
    // store the hash
    var hash = this.hash;
 
    // animate smooth to top
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000, function(){

        // default click behaviour
        window.location.hash = hash;
      });
 });

 // we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var arrowBounce = function() {
    var arrow = $(".arrow_down");
    
    if (arrow.hasClass("lift")) {
      arrow.removeClass("lift");
    } else {
      arrow.addClass("lift");
    }
  };
  
  // run the arrowBounce function every 800ms
  setInterval(arrowBounce, 800);

// When you click on an icon under the tablet, the active icon changes its style
$('.tablet_icons').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});
//When you click on a feature, some text appears below it
$(document).ready(function(){
    $("#categories_tablet, #prices_tablet, #sms_tablet, #printer_tablet").hide();
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function (a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function (a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });
});
//When clicking on one of icons under tablet, show the platfrom image that correponds to icons
$("#hours_icon").on('click', function() {
    $("#categories_tablet, #prices_tablet, #sms_tablet, #printer_tablet").hide();
    $("#hours_tablet").fadeIn(1500);  
 });
 $("#categories_icon").on('click', function() {
    $("#hours_tablet, #prices_tablet, #sms_tablet, #printer_tablet").hide();
    $("#categories_tablet").fadeIn(1500);  
 });
 $("#prices_icon").on('click', function() {
    $("#categories_tablet, #hours_tablet, #sms_tablet, #printer_tablet").hide();
    $("#prices_tablet").fadeIn(1500);  
 });
 $("#sms_icon").on('click', function() {
    $("#categories_tablet, #prices_tablet, #hours_tablet, #printer_tablet").hide();
    $("#sms_tablet").fadeIn(1500);  
 });
 $("#printer_icon").on('click', function() {
    $("#categories_tablet, #prices_tablet, #sms_tablet, #hours_tablet").hide();
    $("#printer_tablet").fadeIn(1500);  
 });
