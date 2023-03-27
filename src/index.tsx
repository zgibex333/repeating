import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Pages/app";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
