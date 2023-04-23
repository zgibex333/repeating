import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { classnames } from 'shared/lib/classnames/classnames'

interface SidebarProps {
  className?: string
}

const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="sidebar"
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
      <button data-testid='sidebar-toggler' type="button" onClick={onToggle}>
        {t('toggle')}
      </button>
    </div>
  )
})
export default Sidebar
