import { classnames } from "shared/lib/classnames/classnames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
export default App;
