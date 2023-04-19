import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "app/styles/index.scss";
import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
