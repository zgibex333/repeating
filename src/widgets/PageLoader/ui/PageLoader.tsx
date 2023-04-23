import { memo } from 'react'
import Loader from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'
import { classnames } from 'shared/lib/classnames/classnames'

interface PageLoaderProps {
  className?: string
}

const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  return (
    <div className={classnames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
})
export default PageLoader
