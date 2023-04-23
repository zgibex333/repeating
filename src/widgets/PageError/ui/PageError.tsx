import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classnames } from 'shared/lib/classnames/classnames'
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
    <div className={classnames(cls.PageError, {}, [className])}>
      <p>{t('Unexpected Error')}</p>
      <Button onClick={reloadPage}>{t('Reload Page')}</Button>
    </div>
  )
})
export default PageError
