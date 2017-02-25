$(function() {
  function orderedAnimation (objs, comm, time) {
    /*obj.animate(comm, time || "normal", function() {
      console.log(obj.next().length);
      if (obj.next().length) {
        console.log("log");
        orderedAnimation(obj.next(), comm, time);
      }
    });*/

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
          console.log("afterload");
          orderedAnimation(msgs, { opacity: 0.8 }, 650);
        }
      }
    });
});
