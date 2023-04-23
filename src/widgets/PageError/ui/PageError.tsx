import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

const PageError = memo((props: PageErrorProps) => {
  const { className } = props
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Unexpected Error')}</p>
      <Button onClick={reloadPage}>{t('Reload Page')}</Button>
    </div>
  )
})
export default PageError
