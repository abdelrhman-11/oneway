/*start menue*/
$('.list').on('click',function(){
$(this).toggleClass('.navbar i').next('.navbar ul').slideToggle();
  });

  /*scroll top */
  $("#last-ic").hide();
  $("#last-ic").click(function() {
    $("html, body").animate({scrollTop:0},2000);
  });

/*hide scroll*/
$(window).scroll(function()
{  
    if($(this).scrollTop()>1000) $('#last-ic').fadeIn(1000).top;
    else $('#last-ic').fadeOut(1000);      
});

//when click on navbar//
$('.navbar li').click(function(e){
e.preventDefault();
$('html,body').animate({
scrollTop: $('#' + $(this).data('scroll')).offset().top 
},1000);
});
