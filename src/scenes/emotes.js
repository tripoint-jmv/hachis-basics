import gsap from "gsap";
import { Sprite } from "../classes/sprite";

export const emotes = (context, rightAnswer) => {
  const timeline = gsap.timeline();

  const starImg = new Image();
  starImg.src = "gold-star.svg";

  const star = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    image: starImg,
    imgW: 100,
    imgH: 100,
  });

  const redXImg = new Image();
  redXImg.src = "red-x.svg";

  const redX = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    image: redXImg,
    imgW: 100,
    imgH: 100,
  });

  timeline
    .to(context.canvas, {
      x: 750,
      y: -280,
      width: 470,
    })
    .to(context.canvas, { backgroundColor: "#1A202C" })
    .to(
      context.canvas,
      (starImg.onload = function () {
        if (rightAnswer) star.draw(context);
        else if (!rightAnswer) redX.draw(context);
        setTimeout(() => {
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }, "1500");
      })
    );
};
