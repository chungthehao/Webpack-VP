import $ from "jquery";

import "./heading.scss";

class Heading {
  render(pageName) {
    const body = $("body");

    const h1 = $("<h1>");
    h1.text(`Webpack is awesome. This is "${pageName}" page.`);

    body.append(h1);
  }
}

export default Heading;
