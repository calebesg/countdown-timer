import classNames from 'classnames'

interface ISocialButtonProps {
  children: React.ReactNode
  activeColor: 'pink' | 'blue' | 'red'
  aria: string
}

function SocialButton({ children, activeColor, aria }: ISocialButtonProps) {
  return (
    <button
      type="button"
      aria-label={aria}
      className={classNames('text-2xl text-darkBlue-400 transition-colors', {
        'hover:text-blue-500': activeColor === 'blue',
        'hover:text-red-500': activeColor === 'red',
        'hover:text-softRed-400': activeColor === 'pink',
      })}
    >
      {children}
    </button>
  )
}

export default SocialButton
