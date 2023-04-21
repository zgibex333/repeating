import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classnames } from 'shared/lib/classnames/classnames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classnames(cls.NotFoundPage, {}, [className])}>
      {t('Page not found')}
    </div>
  )
})
export default NotFoundPage
