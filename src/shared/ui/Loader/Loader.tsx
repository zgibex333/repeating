import { memo } from 'react'
import { classNames } from 'shared/lib/classnames/classnames'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

const Loader = memo((props: LoaderProps) => {
  const { className } = props
  return (
    <div className={classNames(cls.ldsfacebook, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
})
export default Loader
