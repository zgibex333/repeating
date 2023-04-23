import { type ButtonHTMLAttributes, type FC, memo } from 'react'
import createClassName from 'shared/lib/constructClassname/construct'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props
  return (
    <button
      className={createClassName(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
})
export default Button
