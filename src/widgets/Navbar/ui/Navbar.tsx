import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { classnames } from 'shared/lib/CLASSNAMES/CLASSNAMES'

interface NavbarProps {
  className?: string
}

const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classnames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
          {t('About')}
        </AppLink>
      </div>
    </div>
  )
})
export default Navbar
