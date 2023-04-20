import { memo } from "react";
import { classnames } from "shared/lib/classnames/classnames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classnames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
});
export default Navbar;
