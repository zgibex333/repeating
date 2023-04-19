import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./app";
import ThemeProvider from "./theme/ThemeProvider";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
