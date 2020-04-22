import Heading from "./components/heading/heading";
import MyImage from "./components/my-image/my-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("my image"));

const myImage = new MyImage();
myImage.render();
