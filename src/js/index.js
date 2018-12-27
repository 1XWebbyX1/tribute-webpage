import $ from 'jquery';


//jQuery for animations_______________________________________________

var card = $('.card'); //all cards
console.log(card);
var lastScrollTop = 0; //last scroll position

//to toggle class active on scroll(highlight the current card)-------------------
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop(); //current position of scroll


  //to check which card is in view-----------------------------
 card.each(function() {
    var top = $(this).offset().top -400,
        bottom = top + $(this).outerHeight();

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
