import React, { useEffect } from "react";
import { TweenMax } from "gsap/gsap-core";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(MotionPathPlugin);

function CustomCurser() {
  useEffect(() => {
    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(".cursor-follower", {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });
        TweenMax.set(".f2", {
          css: {
            left: posX - 4,
            top: posY - 4,
          },
        });

        TweenMax.set(".cursor", {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    TweenMax.to({}, 0.34, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(".f2", {
          css: {
            left: posX - 4,
            top: posY - 4,
          },
        });
      },
    });
    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, []);
  return (
    <div>
      <div className="cursor"></div>
      <div className="f2"></div>
      <div className="cursor-follower"></div>
    </div>
  );
}

export default CustomCurser;
