$(".menu > ul > li").click(function (e) {
  // remove active from already active
  $(this).siblings().removeClass("active");
  // add active to clicked
  $(this).toggleClass("active");
  // if has sub menu open it
  $(this).find("ul").slideToggle();
  // close other sub menu if any open
  $(this).siblings().find("ul").slideUp();
  // remove active class of sub menu items
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
  $(".hideNotification").fadeToggle(100); // Smoothly toggle the hideNotification element with a 300ms duration
});