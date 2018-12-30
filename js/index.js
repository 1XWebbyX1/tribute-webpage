


var lastScrollTop = 0; //last scroll position

//to toggle class active on scroll(highlight the current card)-------------------
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop(); //current position of scroll
  var offset = window.innerHeight/2; //position at which card is lit

  //media queries---------
  var x = window.matchMedia("(min-height: 900px)");
  var y = window.matchMedia("(max-width: 820px) and (min-height: 1200px)");
  //-----------------------

  //when scroll has reached end update offset and switch with media query cases--------
   if ((window.innerHeight + window.pageYOffset) >= 1.01* document.body.offsetHeight - offset) {
       if (x.matches) { // If media query matches
           offset = window.innerHeight/2 + window.innerHeight/6;
         if(y.matches){
            offset = window.innerHeight/2 + window.innerHeight/3;
           }
       }else{
         offset = window.innerHeight/2 +  window.innerHeight/4;
      }
    }
  //--------------------------------------------------------------------


  //to check which card is in view-----------------------------
 $('.card').each(function() {
    var top = $(this).offset().top - offset,
        bottom = top + $(this).innerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      //detect scrolling direction
      if(cur_pos > lastScrollTop){//scrolling down
         $('#'+$(this).attr('id')).find('svg').addClass('green');
         $('#'+$(this).attr('id')).find('#border').addClass('active');
      }
      else{//scrolling up
         $('#'+$(this).attr('id')).find('svg').removeClass('green');
         $('#'+$(this).attr('id')).find('#border').removeClass('active');
      }

      lastScrollTop = cur_pos;//last scroll pos updated to current scroll pos
    }
  });
});
