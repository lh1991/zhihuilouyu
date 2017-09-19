"use strict";

function sequenceImgFun(num, bool, pic, name) {
  var i = 0;
  name = window.setInterval(function () {
    var src1;
    if (i < 10) {
      src1 = "../image/light/VRV_2_000" + i;
    } else if (i >= 10 && i < 100) {
      src1 = "../image/light/VRV_2_00" + i;
    } else {
      src1 = "../image/light/VRV_2_0" + i;
    }
    if (i < num) {
      var src = src1 + pic;
      var esrc = $('#lightIMG').attr('src');
      if (src != esrc) {
        $('#lightIMG').attr('src', src);
      }
      i++;
    } else {
      if (bool) {
        i = 0;
      } else {
        window.clearInterval(name);
      }
    }
  }, 50);
  return name;
}

sequenceImgFun(290, true, '.jpg', 'guangImg');