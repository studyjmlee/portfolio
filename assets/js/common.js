$(document).ready(function () {

    /* header */
  function gnbScroll() {
    var sectionOffset = [];
    var nowSection = 0;
    var $section=$(".section-wrap").find(".section");
    $section.each(function (index, item) {
        sectionOffset[index] = $(this).offset().top;
      });
    for (var i = 0; i < $section.length; i++) {
      if ($(window).scrollTop() >= sectionOffset[i]) {
        nowSection = i;
      }
    }
    /* header bgColor 세팅 [S] */
    /* if($(this).hasClass("type2")){
                    $(".header-wrap").removeClass("bgBeige");
                    $(".header-wrap").addClass("bgWhite");
                }
                else{
                    $(".header-wrap").addClass("bgBeige");
                    $(".header-wrap").removeClass("bgWhite");
                } */
    /* header bgColor 세팅 [E] */

    if ($(`.header-list>li`).eq(nowSection).find("a").hasClass("active") == 1) {
        
    } else {
      $(`.header-list>li`).find("a").removeClass("active");
      $(`.header-list>li`).eq(nowSection).find("a").addClass("active");
    }
  }

    /* 초기화 */
    gnbScroll();

  /* 햄버거 btn */
  $(".hamBtn").click(function () {
    $(this).toggleClass("active");
  });

  

  $(window).on("scroll", function () {
    gnbScroll();
  });
});
