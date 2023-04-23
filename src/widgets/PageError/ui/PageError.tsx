import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import createClassName from 'shared/lib/constructClassname/construct'
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
    <div className={createClassName(cls.PageError, {}, [className])}>
      <p>{t('Unexpected Error')}</p>
      <Button onClick={reloadPage}>{t('Reload Page')}</Button>
    </div>
  )
})
export default PageError
