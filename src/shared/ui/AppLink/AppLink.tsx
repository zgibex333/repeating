import { type FC, memo } from "react";
import { Link, type LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { classnames } from "shared/lib/classnames/classnames";

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
      className={classnames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
export default AppLink;
