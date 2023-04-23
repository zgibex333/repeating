import { memo } from 'react'
import createClassName from 'shared/lib/constructClassname/construct'
import Loader from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  return (
    <div className={createClassName(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
})
export default PageLoader
