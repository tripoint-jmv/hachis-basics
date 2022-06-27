export class Sprite {
  constructor({ position, image, imgW, imgH }) {
    this.position = position;
    this.image = image;
    this.imgW = imgW;
    this.imgH = imgH;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.imgW,
      this.imgH
    );
  }
}
