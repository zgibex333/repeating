import { memo } from 'react'
import { classnames } from 'shared/lib/CLASSNAMES/CLASSNAMES'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

const Loader = memo((props: LoaderProps) => {
  const { className } = props
  return (
    <div className={classnames(cls.ldsfacebook, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
})
export default Loader
