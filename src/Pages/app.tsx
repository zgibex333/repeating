import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutPageAsync from "./AboutPage/AboutPage.async";
import MainPageAsync from "./MainPage/MainPage.async";

const App = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
