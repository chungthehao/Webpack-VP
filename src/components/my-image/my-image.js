import Hao from "./Hao.jpg";
import "./my-image.scss";

class MyImage {
  render() {
    const img = document.createElement("img");
    img.alt = "Handsome Boy";
    img.classList.add("my-image");
    img.src = Hao;

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default MyImage;
