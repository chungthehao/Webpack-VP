import "bootstrap"; // js part
// import "bootstrap/dist/css/bootstrap.min.css"; // ready to use css

import "./index.scss"; // include bootstrap scss for further custom

import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

const heading = new Heading();
heading.render("hello world");

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION MODE");
} else if (process.env.NODE_ENV === "development") {
  console.log("DEVELOPMENT MODE");
}
