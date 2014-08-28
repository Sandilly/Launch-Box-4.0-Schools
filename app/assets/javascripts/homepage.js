$(function(){
  $('.right-btn').hover(function(){
    $(this).find('img').attr('src', '/assets/next-hover.png')
  },function(){
    $(this).find('img').attr('src', '/assets/next.png')
  })

  $('.left-btn').hover(function(){
    $(this).find('img').attr('src', '/assets/prev-hover.png')
  },function(){
    $(this).find('img').attr('src', '/assets/prev.png')
  })

  $(".tools-box .boxes").hover(function(){
    //alert("hi")
    $(this).find(".hover-text").show();
  },
  function(){
    //alert("bye")
    $(this).find(".hover-text").hide();
  });
});
