import { memo, useState } from "react";
import { classnames } from "shared/lib/classnames/classnames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
      <button onClick={onToggle}>toggle</button>
    </div>
  );
});
export default Sidebar;
