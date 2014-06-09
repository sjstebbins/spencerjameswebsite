

$(function(){ $(document).foundation(); });

// Nav clicked variables
var contactClicked = false;
var aboutClicked = false;
var skillsClicked = false;
var portfolioClicked = false;

$(document).ready(function() {

$('#loading').fadeOut(2000);


// Mountain Animation

     TweenMax.to("#matterhorn", 2, {scale:1.2});
      $("#matterhorn").animate({"margin-top":'0px' } , 2000);

// Nav Animation
    $('nav').hide();
    $('nav').animate({"margin-top":'0px' } , 2000).fadeIn(5000);
    $('li').on('click', function(){
      $(this).toggleClass('clicked');
    });

    //Nav section animation
    var body = $("body");
    var top = body.scrollTop();
    $('#logo').on('click', function(){
      body.animate({
          scrollTop: 0,
        }, '500');
    });

    $("#nav-skills").on('click', function(){
        body.animate({
          scrollTop: 540,
        }, '500');
    });

     $("#nav-portfolio").on('click', function(){
        body.animate({
          scrollTop: 1640,
        }, '500');
    });

// Logo Animation

  $('#box').hide();
  $('.spencerjames').hide();
  $('#c').css("margin-left",'-80%');
  $('#c').css("margin-top",'+40%');
  $('#o').css("margin-left",'80%');
  $('#s').css("margin-top",'-80%');
  $('#s').css("margin-left",'-80%');
  $('#j').css("margin-top",'-80%');
  $('#j').css("margin-left",'80%');

  $('#box').slideDown(1000, function(){
    $('#c').animate({"margin-left":'0%',"margin-top":'0%' } , 2000);
    $('#o').animate({"margin-left":'0%' } , 2000);
    $('#s').animate({"margin-top":'0%', "margin-left":'0%'  } , 2000);
    $('#j').animate({"margin-top":'0%', "margin-left":'0%'  } , 2000, function(){
        $('.spencerjames').fadeIn(1000);
    });
  });


// About animation

  $('#nav-about').on('click', function(){
    if (aboutClicked === false) {
      $('#about').animate({"margin-top":'70px'}, 1000);
      aboutClicked = true;
      $('#nav-about').addClass('clicked');
      if (contactClicked === false) {
        $('#contact').slideToggle(1000);
        contactClicked = true;
        $('#nav-contact').addClass('clicked');
      };
    } else {
      $('#about').animate({"margin-top":'-150%' }, 1000);
      $('#nav-about').removeClass('clicked');
      aboutClicked = false;
      if (contactClicked === true) {
        $('#contact').slideToggle(1000);
        contactClicked = false;
        $('#nav-contact').removeClass('clicked');
      };
    }
    if (top < 70) {
        body.animate({
          scrollTop: 70,
        }, '500');
    }



  });
  $('#about-close').on('click', function(){
    $('#about').animate({"margin-top":'-150%'} , 1000);
    if (contactClicked === true) {
        $('#contact').slideToggle(1000);
        contactClicked = false;
        $('#nav-contact').removeClass('clicked');
      }
    aboutClicked = false;
    $('#nav-about').removeClass('clicked');
    $('#nav-contact').removeClass('clicked');
  });


// Contact Animation
  $('#contact').hide();
  $('#nav-contact').on('click', function(){
    $('#contact').slideToggle();
    if (contactClicked === false) {
      contactClicked = true;
    } else {
      contactClicked = false;
    };
  });
  $('#contact-close').on('click', function(){
    $('#contact').slideToggle();
    $('#nav-contact').removeClass('clicked');
    contactClicked = false;
  });

//Cloud Animation

  $('.clouds').animate({'margin-left': '50%'});
  $('.clouds').css({ '-webkit-transform': 'scale(3)'});

function clouds() {
  setInterval(cloudsOpacity, 100);
}
function cloudsOpacity(){
  $('#cloud1').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50}, 5000);
  $('#cloud1').animate({'margin-bottom': Math.random()*10}, 3000);
  $('#cloud2').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 4000);
  $('#cloud2').animate({'margin-bottom': Math.random()*10}, 4000);
  $('#cloud3').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 3000);
  $('#cloud3').animate({'margin-bottom': Math.random()*10}, 2000);
  $('#cloud4').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 5000);
  $('#cloud4').animate({'margin-bottom': Math.random()*10}, 5000);
  $('#cloud5').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 3000);
  $('#cloud5').animate({'margin-bottom': Math.random()*10}, 4000);
  $('#cloud6').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 5000);
  $('#cloud6').animate({'margin-bottom': Math.random()*10}, 4000);
  $('#cloud7').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 4000);
  $('#cloud7').animate({'margin-bottom': Math.random()*10}, 5000);
  $('#cloud8').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 2000);
  $('#cloud8').animate({'margin-bottom': Math.random()*10}, 3000);
  $('#cloud9').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 4000);
  $('#cloud9').animate({'margin-bottom': Math.random()*10}, 5000);
  $('#cloud10').animate({'opacity': Math.random()*.7, 'margin-left': Math.random()*50 }, 2000);
  $('#cloud10').animate({'margin-bottom': Math.random()*10}, 3000);
}

clouds();


//Technologies
// $('.meter').hover( function(){
//   $(this).css('background', 'white', 1000);
// },function(){
//     $(this).css("background","blue");
// });
// Report Card
 $('.report-card.codeschool').reportCard({
    userName: 'sjfstebbins',
    site: 'codeschool',
    badgesAmount: 7
  });



//Modals
$(document).on('opened', '[data-reveal]', function () {
var modal = $(this);
$(window).trigger('resize');
});
});



