var navWide = false;
var pastSkills = false;
var pastTech = false;
var pastReport = false;
var pastTechnologies = false;
var pastTechnologies2 = false;
var pastPortfolio = false;
var pastPortfolio2 = false;
var pastPortfolio3 = false;
var pastPortfolio4 = false;

$(document).ready(function(){

// Setup hidden elements
  $('#logo').hide();
  $('.codeschool').hide();
  $('#technological-know-how').hide();
  $('.technologies-box').hide();
  $('#ga').css('margin-left', '-100%');
  $('#ga2').css('margin-right', '-100%');
  $('#relephant-title').hide();
  $('#relephant').css('margin-left', '-150%');
  $('#relephant2').css('margin-right', '-150%');
  $('#vogueabode-title').hide();
  $('#vogueabode').css('margin-left', '-150%');
  $('#vogueabode2').css('margin-right', '-150%');
  $('#planned-title').hide();
  $('#trunkmonkey').css('margin-left', '-150%');
  $('#rinfret').css('margin-right', '-150%');
  $('#tucan-title').hide();
  $('#tucan').css('margin-left', '-150%');
  $('#tucan2').css('margin-right', '-150%');
  // $('.meter').hide();


  $(window).scroll(function(){

    var scroll = $(document).scrollTop();

// About

 if (scroll < 60 && $('#nav-about').hasClass('clicked')) {
      $('#about').animate({"margin-top":'-150%' }, 1000);
      $('#nav-about').removeClass('clicked');
      aboutClicked = false;
      if (contactClicked === true) {
        $('#contact').slideToggle(1000);
        contactClicked = false;
        $('#nav-contact').removeClass('clicked');
      };
    }


// NAV
    if (scroll > 50) {
          if (!navWide) {
            $('#entire-logo').fadeOut(500);
            $('#nav').css('background', 'rgba(255,255,255,.9)');
            $('#nav li').css('margin', '15px', 500);
            $('#nav ul').css('margin-top', '10px', 500);
            $('#nav').css('height', '70px');
            $('#logo').show();
            navWide = true;
          }
        } else {
          if (navWide) {
            $('#nav').css('background', 'rgba(255,255,255,0)', 1000);
            $('#nav li').css('margin', '10px');
            $('#nav').css('height', '50px');
            $('#entire-logo').fadeIn(1000);
            $('#logo').hide();
            navWide = false;
          }
        }


// Skills
var skills = $("#skills").offset().top - 50;
var portfolio = $("#portfolio").offset().top - 50;

    if (scroll > skills && scroll < portfolio) {
      if (!pastSkills) {
       $('#nav-skills').addClass('clicked');
       pastSkills = true;
     }
    } else {
      if (pastSkills) {
        $('#nav-skills').removeClass('clicked');
        pastSkills = false;
      }
    }

// Technologies
var technologies = $("#technologies").offset().top - 400;

    if (scroll > technologies ) {
      if (!pastTechnologies) {
       $('#technological-know-how').fadeIn();
       $('.technologies-box').fadeIn();
       pastTechnologies = true;
     }
    } else {
      if (pastTechnologies) {
        $('#technological-know-how').fadeOut();
        $('.technologies-box').fadeOut();
        $('#nav-skills').removeClass('clicked');
        pastTechnologies = false;
      }
    }

// Codeschool Report
var report = $("#technologies").offset().top + 500;

    if (scroll > report ) {
      if (!pastTechnologies2) {
       $('#report').fadeIn();
       pastTechnologies2 = true;
     }
    } else {
      if (pastTechnologies2) {
        $('#report').fadeOut();
        pastTechnologies2 = false;
      }
    }


// // GA
// var ga = $("#technologies").offset().top + 300;

//     if (scroll > ga ) {
//       if (!pastReport) {
//        $('#ga').animate({'margin-left': '0px'});
//        $('#ga2').animate({'margin-right': '0px'});
//        pastReport = true;
//      }
//     } else {
//       if (pastReport) {
//         $('#ga').animate({'margin-left': '-100%'});
//         $('#ga2').animate({'margin-right': '-100%'});
//         pastReport = false;
//       }
//     }



//Portfolio
var portfolio = $("#portfolio").offset().top -70;

    if (scroll > portfolio ) {
      if (!pastPortfolio) {
       $('#nav-portfolio').addClass('clicked');
       $('#relephant-title').fadeIn();
       $('#relephant').animate({'margin-left': '0px'});
       $('#relephant2').animate({'margin-right': '0px'});
       pastPortfolio = true;
     }
    } else {
      if (pastPortfolio) {
        $('#nav-portfolio').removeClass('clicked');
        $('#relephant-title').fadeOut();
        $('#relephant').animate({'margin-left': '-150%'});
        $('#relephant2').animate({'margin-right': '-150%'});
        pastPortfolio = false;
      }
    }

var portfolio2 = $("#portfolio").offset().top + 250;

  if (scroll > portfolio2 ) {
      if (!pastPortfolio2) {
       $('#vogueabode-title').fadeIn();
       $('#vogueabode').animate({'margin-left': '0px'});
       $('#vogueabode2').animate({'margin-right': '0px'});
       pastPortfolio2 = true;
     }
    } else {
      if (pastPortfolio2) {
        $('#vogueabode-title').fadeOut();
        $('#vogueabode').animate({'margin-left': '-150%'});
        $('#vogueabode2').animate({'margin-right': '-150%'});
        pastPortfolio2 = false;
      }
    }

  // if (scroll > portfolio3 ) {
  //     if (!pastPortfolio3) {
  //      $('#tucan-title').fadeIn();
  //      $('#tucan').animate({'margin-left': '0px'});
  //      $('#tucan2').animate({'margin-right': '0px'});
  //      pastPortfolio3 = true;
  //    }
  //   } else {
  //     if (pastPortfolio3) {
  //       $('#tucan-title').fadeOut();
  //       $('#tucan').animate({'margin-left': '-100%'});
  //       $('#tucan2').animate({'margin-right': '-100%'});
  //       pastPortfolio3 = false;
  //     }
  //   }

var portfolio4 = $("#portfolio").offset().top + 600;

  if (scroll > portfolio4 ) {
      if (!pastPortfolio4) {
       $('#planned-title').fadeIn();
       $('#trunkmonkey').animate({'margin-left': '0px'});
       $('#rinfret').animate({'margin-right': '0px'});
       pastPortfolio4 = true;
     }
    } else {
      if (pastPortfolio4) {
        $('#planned-title').fadeOut();
        $('#trunkmonkey').animate({'margin-left': '-150%'});
        $('#rinfret').animate({'margin-right': '-150%'});
        pastPortfolio4 = false;
      }
    }

  });
});

