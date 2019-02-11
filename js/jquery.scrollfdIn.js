$(function(){
  $('#cThemaNav .scrollfdIn').css("opacity","0");
  $(window).scroll(function(){
    $('#cThemaNav ').each(function(){
      var textPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > textPos - windowHeight + windowHeight/1.3){
        console.log("called!");
        $(".scrollfdIn" , this).css("opacity","1");
      } else {
        $(".scrollfdIn" , this).css("opacity","0");
      }
    });
  });
});
