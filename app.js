var main = function() {
  /* Push the body and the nav over by 200px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "200px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

$( "li" ).mouseenter(function() {
    $( this ).fadeTo( "fast", 0.25 );
  }
);

$( "li" ).mouseout(function() {
    $( this ).fadeTo( "fast", 1.0 );
}
);

$(document).ready(main);