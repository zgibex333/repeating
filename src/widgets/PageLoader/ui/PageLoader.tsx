import { memo } from 'react'
import { classnames } from 'shared/lib/classnames/classnames'
import Loader from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

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
