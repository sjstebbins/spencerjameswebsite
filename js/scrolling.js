var navWide = false;
var pastSkills = false;
var pastTech = false;
var pastReport = false;
var pastTechnologies = false;
var pastTechnologies2 = false;
var pastPortfolio = false;
var pastPortfolio2 = false;


$(document).ready(function(){

// Setup hidden elements
  $('#report').hide();
  $('#logo').hide();
  $('#technological-know-how').hide();
  $('.technologies-box').hide();
  $('#ga').css('margin-right', '-100%');
  $('#relephant-title').hide();
  $('#relephant').css('margin-left', '-100%');
  $('#relephant2').css('margin-right', '-100%');
  $('#vogueabode-title').hide();
  $('#vogueabode').css('margin-left', '-100%');
  $('#vogueabode2').css('margin-right', '-100%');
  // $('.meter').hide();


  $(window).scroll(function(){

    var scroll = $(document).scrollTop();


// NAV
    if (scroll > 50) {
          if (!navWide) {
            $('#nav').css('background', 'rgba(255,255,255,.9)');
            $('#nav li').css('margin', '15px', 500);
            $('#nav ul').css('margin-top', '10px', 500);
            $('#nav').css('height', '70px');
            $('#entire-logo').fadeOut(500);
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
var report = $("#technologies").offset().top + 300;

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


// GA
var report = $("#skills").offset().top +100;

    if (scroll > report ) {
      if (!pastReport) {
       $('#ga').animate({'margin-right': '30px'}, 1000);
       $('#nav-skills').addClass('clicked');
       pastReport = true;
     }
    } else {
      if (pastReport) {
        $('#ga').animate({'margin-right': "-100%"}, 1000);
        $('#nav-skills').removeClass('clicked');
        pastReport = false;
      }
    }



//Portfolio
var portfolio = $("#portfolio").offset().top -70;
var portfolio2 = $("#portfolio").offset().top + 300;

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
        $('#relephant').animate({'margin-left': '-100%'});
        $('#relephant2').animate({'margin-right': '-100%'});
        pastPortfolio = false;
      }
    }

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
        $('#vogueabode').animate({'margin-left': '-100%'});
        $('#vogueabode2').animate({'margin-right': '-100%'});
        pastPortfolio2 = false;
      }
    }


  });
});

