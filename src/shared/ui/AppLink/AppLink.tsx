import { type FC, memo } from "react";
import { Link, type LinkProps } from "react-router-dom";
import createClassName from "shared/lib/constructClassname/construct";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={createClassName(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
export default AppLink;
