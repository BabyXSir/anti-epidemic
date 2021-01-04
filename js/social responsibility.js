// 背景滚动
$(window).scroll(function () {
  var sign = 80; //定义默认的向上滚与向下滚的边界
  window.onscroll = window.onresize = function () {
    var oScrollTop = $(window).scrollTop();
    if (oScrollTop > 80) {
      //write your code
    }
    if (oScrollTop < 80) {
      //write your code
    }
    if (oScrollTop > sign) {
      sign = oScrollTop; //更新scrollTop
      //console.log('向下');
    }
    if (oScrollTop < sign) {
      sign = oScrollTop; //更新scrollTop
      //console.log('向上');
    }
  };

  if ($(window).scrollTop() >= 50) {
    $(".bg-ellipse-wrapper .bg-ellipse-1 ")
      .stop(true)
      .animate({ top: "120px" }, "slow");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $(".bg-ellipse-wrapper .bg-ellipse-2 ")
      .stop(true)
      .animate({ top: "500px" }, "slow");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 800) {
    $(".bg-ellipse-wrapper .bg-ellipse-3 ")
      .stop(true)
      .animate({ top: "1200px" }, "slow");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 1300) {
    $(".bg-ellipse-wrapper .bg-ellipse-4 ")
      .stop(true)
      .animate({ top: "1650px" }, "slow");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 2900) {
    $(".bg-ellipse-wrapper .bg-ellipse-6 ")
      .stop(true)
      .animate({ top: "3300px" }, "slow");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 3800) {
    $(".bg-ellipse-wrapper .bg-ellipse-7 ")
      .stop(true)
      .animate({ top: "4200px" }, "slow");
  }
});
