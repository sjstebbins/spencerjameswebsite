
$(function() {
  $(document).mousemove(function(e) {
    moveDiv(e, 'cloud1', 70, 52, 1);
    moveDiv(e, 'cloud3', 10, 55, 2);
    moveDiv(e, 'cloud2', 13, 57, 3);
    moveDiv(e, 'cloud4', 60, 52, 4);
    moveDiv(e, 'cloud5', 15, 50, 3);
    moveDiv(e, 'cloud6', 80, 60, 4);
    moveDiv(e, 'cloud7', 40, 55, 1);
    moveDiv(e, 'cloud8', 0, 60, 2);
    // moveDiv(e, 'cloud9', 70, 60, 1);
    // moveDiv(e, 'cloud10', 0, 60, 2);
    backgroundMove(e);
  });
});

// Move a div around with mouse input
function moveDiv(e, id, left, bottom, sensitivity) {
  pointerDeltaX = e.pageX - window.innerWidth/2;
  pointerDeltaY = e.pageY - window.innerHeight/2;

  elDeltaX = pointerDeltaX * sensitivity / (window.innerWidth/2);
  elDeltaY = -1 * pointerDeltaY * sensitivity / (window.innerHeight/2);

  elPosX = left + elDeltaX;
  elPosY = bottom + elDeltaY;


  document.getElementById(id).style.left = elPosX + "%";
  document.getElementById(id).style.bottom = elPosY + "%";
}

// Move the positioning of the body's background with mouse input
function backgroundMove(e) {


  sensitivity = 1.1;
  pointerDeltaX = e.pageX - window.innerWidth/2;
  pointerDeltaY = e.pageY - window.innerHeight/2;

  imgDeltaX = -1 * pointerDeltaX * sensitivity / (window.innerWidth/2);
  imgDeltaY = pointerDeltaY * sensitivity / (window.innerHeight/2);

  imgBgPosX = -50 + imgDeltaX;
  imgBgPosY = -50 + imgDeltaY;

  // var currentXpos = $('body').find('#entire-logo').css('margin-left');
  // var currentYpos = $('body').find('#entire-logo').css('margin-top');
  $('#entire-logo').css('margin-left', 89 + imgBgPosX + "%" );
  $('#entire-logo').css('margin-top', 100 + imgBgPosY + "px" );
  // document.body.style.backgroundPosition = imgBgPosX + "px " + imgBgPosY + "px";
}

