import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Loader from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
})
export default PageLoader
