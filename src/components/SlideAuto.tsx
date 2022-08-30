import { useEffect } from 'react'
import { useSwiper } from 'swiper/react'

interface ISlideAuto {
  intervalTime: number
}

function SlideAuto({ intervalTime }: ISlideAuto) {
  const swiper = useSwiper()

  useEffect(() => {
    const timer = setInterval(() => {
      swiper.slideNext()
    }, intervalTime)

    return () => clearInterval(timer)
  }, [swiper, intervalTime])

  return null
}

export default SlideAuto
