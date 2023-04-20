import { classnames } from "shared/lib/classnames/classnames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Navbar/>
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};
export default App;
