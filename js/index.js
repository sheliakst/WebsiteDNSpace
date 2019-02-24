$(document).ready(function() {

  $(window).scroll(function() {
    let scroll = $(this).scrollTop();
    $("#moon").css({ WebkitTransform: "rotate(" + scroll / 30 + "deg)" });
  });
  $(".navicon").on("click", function() {
    $("#mySidenav a").css("opacity", "1");
    $("#mySidenav").css("width", "100vw");
  });

  $(".sidenav").on("click", function() {
    $("#mySidenav a").css("opacity", "0");

    $("#mySidenav").css("width", "0");
  });

});
