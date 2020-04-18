import Hao from "./Hao.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "Handsome Boy";
  img.width = 300;
  img.src = Hao;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
