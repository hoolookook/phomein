$(function () {
  // fullpage.js------------------------------------------------

  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    // scrollHorizontally: true,

    //접근성
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    //접근성
    // slidesNavigation: true,
    // slidesNavPosition: "bottom",
    // verticalCentered: true,
    //navigation
    navigation: false,
    navigationPosition: "left",
    anchors: [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
      "section7",
      "section8",
    ],
    menu: "#rightMenu",

    afterLoad: function (anchorLink, index) {
      console.log("현재 섹션번호는  " + index);
      // nav Hover

      function hovering() {
        $(".firstUi>li>a").mouseenter(function () {
          hoverIn();
        });

        $(".headerNav").mouseleave(function () {
          hoverOut();
        });
        function hoverIn() {
          $(".hideMenu").stop().slideDown();
          $(".headerNav").addClass("on");
          $("header").addClass("bottomLine");
          if (index == 8) {
            $("#header").css({ backgroundColor: "transparent" });
          } else {
            $("#header").css({ backgroundColor: "transparent" });
          }
        }
        function hoverOut() {
          $(".hideMenu").stop().slideUp();
          $(".headerNav").removeClass("on");
          $("header").removeClass("bottomLine");
          if (index == 8) {
            $("#header").css({ backgroundColor: "#000" });
          } else {
            $("#header").css({ backgroundColor: "transparent" });
          }
        }

        if (index == 8) {
          $("#header").css({ backgroundColor: "#000" });
        } else {
          $("#header").css({ backgroundColor: "transparent" });
        }
      }

      function countUp() {
        if (index == 2) {
          $(".counter").counterUp({ delay: 10, time: 600 });
        }
        if (index == 3) {
          $(".counter2").counterUp({ delay: 10, time: 800 });
        }
      }

      // nav Hover
      hovering();
      countUp();
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log("현재 슬라이드 번호는" + slideIndex);
    },
    sectionsColor: [
      "#000",
      "#000",
      "#000",
      "#000",
      "#000",
      "#000",
      "#000",
      "#000",
    ],
  });

  // fullpage.js------------------------------------------------

  // swiper
  var pagiName = [
    "쌀국수 창업의<br>새로운 패러다임<br>포메인 RED",
    "쌀국수는<br>포메인",
    "쌀 한 톨부터 다른<br>포메인다움",
    "매일매일 까다로운<br>포메인다움",
    "재료부터 건강한<br>포메인다움",
  ];

  var $upSlTitle = $(".upSlideTitle");
  var $downSlTitle = $(".downSlideTitle");

  // $(".upSlideTitle").addClass("active");
  function myPlugin({ swiper, on }) {
    on("slideChange", function () {
      var i = swiper.activeIndex;

      $(".upSlideTitle").removeClass("active");
      $(".upSlideTitle").eq(i).addClass("active");
    });
  }

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    // autoplay: {
    //   delay: 7000,
    // },
    autoplay: false,
    navigation: false,
    modules: [myPlugin],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '">' +
          '<div class="paginame"' +
          'title="' +
          pagiName[index] +
          '">' +
          "<p class='innerName'>" +
          pagiName[index] +
          "</p>" +
          "</div>" +
          "</div>"
        );
      },
    },
  });
  $(".swiper-pagination-bullet").hover(function () {
    $(this).trigger("click");
  });

  // slide마다 번호 줌
  var slide = $(".swiper-slide");
  var leng = slide.length;
  var pagi = $(".paginame");
  var pLeng = pagi.length;
  console.log(slide.eq(1).index());

  for (var i = 0; i < leng; i++) {
    var AddId = "swiper-slide" + "0" + [i];
    slide.eq(i).addClass(AddId);
  }
});
