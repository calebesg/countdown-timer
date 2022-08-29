import classNames from 'classnames'

interface ISocialButtonProps {
  children: React.ReactNode
  activeColor: 'pink' | 'blue' | 'red'
}

function SocialButton({ children, activeColor }: ISocialButtonProps) {
  return (
    <button
      type="button"
      className={classNames('text-2xl text-darkBlue-400 transition-colors', {
        'hover:text-blue-500': activeColor === 'blue',
        'hover:text-red-500': activeColor === 'red',
        'hover:text-pink-600': activeColor === 'pink',
      })}
    >
      {children}
    </button>
  )
}

export default SocialButton
