import { memo } from 'react'
import createClassName from 'shared/lib/constructClassname/construct'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

const Loader = memo((props: LoaderProps) => {
  const { className } = props
  return (
    <div className={createClassName(cls.ldsfacebook, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
})
export default Loader
