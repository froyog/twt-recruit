$(function() {
  function orderedAnimation (objs, comm, time) {
    objs.eq(0).animate(comm, time || "normal", function() {
      if (objs.eq(1)) {
        orderedAnimation(objs.slice(1, objs.length), comm, time);
      }
    });
  }

  $("#warpper").fullpage(
    {
      navigation: true,
      afterLoad: function (anchorLink, index) {
        if (index === 2) {
          var dots = $(this).find("img").slice(0, 7).parent(),
              tl_items = $(this).find("img").slice(7, 14).parent();
          orderedAnimation(dots, {opacity: 1}, 500);
          orderedAnimation(tl_items, {opacity: 1}, 500);
        }

        if (index === 3) {
          var msgs = $(this).find("img").slice(1, 5).parent();
          orderedAnimation(msgs, { opacity: 1 }, 550);
        }

        if (index === 4) {
          var msgs_4 = $(this).find("img").slice(2, 5).parent(),
              msg_details_4 = $(this).find("img").slice(5, 11).parent();
          orderedAnimation(msgs_4, {opacity: 1}, 600);
          setTimeout(function() {
            orderedAnimation(msg_details_4, {opacity: 1}, 300);
          }, 1800);
        }

        if (index === 5) {
          var msgs_5 = $(this).find("img").slice(0, 2).parent(),
              msg_details_5 = $(this).find("img").slice(2, 8).parent();
          orderedAnimation(msgs_5, {opacity: 1}, 600);
          setTimeout(function() {
            orderedAnimation(msg_details_5, {opacity: 1}, 400);
          }, 1200);
          $(".coder-desc").css({
            "animation-name": "typing",
            "animation-duration": "4s",
            "animation-timing-function": "steps(11, end)"
          });
          $(".coder-desc-2").css({
            "animation-name": "typing",
            "animation-duration": "4s",
            "animation-timing-function": "steps(16, end)"
          });
          /*$(".coder-desc, .coder-desc-2").css({
            "animation-name": "blink-caret",
            "animation-duration": ".5s",
            "animation-timing-function": "step-end",
            "animation-itertaion-count": "infinite",
            "animation-direction": "alternate"
          });*/

        }
      }
    });
});
