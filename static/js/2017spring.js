$(function() {
  function orderedAnimation (objs, comm, time) {
    objs.eq(0).animate(comm, time || "normal", function() {
      if (objs.eq(1)) {
        orderedAnimation(objs.slice(1, objs.length), comm, time);
      }
    });
  }

  /*function timeline (listItem) {
    listItem.eq(0).fadeIn(100);
    listItem.eq(1).animate({
      width: "100%"
    }, 500, function() {
      if (listItem.next().length) {
        timeline(listItem.next());
      }
    });
  }*/

  $("#warpper").fullpage(
    {
      navigation: true,
      afterLoad: function (anchorLink, index) {
        if (index === 3) {
          var msgs = $(this).find("img").slice(1, 5).parent();
          orderedAnimation(msgs, { opacity: 1 }, 550);
        }

        if (index === 4) {
          var msgs_4 = $(this).find("img").slice(2, 5).parent(),
              msg_details_4 = $(this).find("img").slice(5, 11).parent();
          orderedAnimation(msgs_4, { opacity: 1 }, 600);
          setTimeout(function() {
            orderedAnimation(msg_details_4, {opacity: 1}, 300);
          }, 1650);
        }
      }
    });
});
