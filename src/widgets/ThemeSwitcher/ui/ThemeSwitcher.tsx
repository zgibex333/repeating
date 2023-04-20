import { memo } from "react";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import IconDark from "shared/assets/icons/theme-dark.svg";
import IconLight from "shared/assets/icons/theme-light.svg";
import Button from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {theme === Theme.dark ? <IconDark /> : <IconLight />}
    </Button>
  );
});
export default ThemeSwitcher;
