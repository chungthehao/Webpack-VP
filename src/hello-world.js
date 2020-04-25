import "./index.scss";

// library: specify which icons we want to use
// dom: replace any existing <i></i> with svg
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

library.add(faSpinner);
dom.watch(); // watch các thẻ i để thay bằng svg (observer)

const heading = new Heading();
heading.render("hello world");

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION MODE");
} else if (process.env.NODE_ENV === "development") {
  console.log("DEVELOPMENT MODE");
}
