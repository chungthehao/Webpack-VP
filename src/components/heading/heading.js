import "./heading.scss";

class Heading {
  render(pageName) {
    const body = document.querySelector("body");

    const h1 = document.createElement("h1");
    h1.innerHTML = `Webpack is awesome. This is "${pageName}" page.`;

    body.appendChild(h1);
  }
}

export default Heading;
