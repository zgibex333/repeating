import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import createClassName from 'shared/lib/constructClassname/construct'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={createClassName(cls.LangSwitcher, {}, [className])}
      onClick={toggleLang}
    >
      {t('Current lang')}
    </Button>
  )
})
export default LangSwitcher
