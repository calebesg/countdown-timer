import { useEffect } from 'react'
import { useSwiper } from 'swiper/react'

interface ISlideAutoProps {
  intervalTime: number // value in seconds
}

function SlideAuto({ intervalTime }: ISlideAutoProps) {
  const swiper = useSwiper()

  useEffect(() => {
    const timer = setInterval(() => {
      swiper.slideNext()
    }, intervalTime * 1000)

    return () => clearInterval(timer)
  }, [swiper, intervalTime])

  return null
}

export default SlideAuto
