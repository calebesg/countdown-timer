import { useEffect } from 'react'
import { useSwiper } from 'swiper/react'

interface ISlideControlProps {
  currentSlide: number
}

function SlideControl({ currentSlide }: ISlideControlProps) {
  const swiper = useSwiper()

  useEffect(() => {
    if (currentSlide) {
      swiper.slideNext(500)
    }
  }, [currentSlide])

  return null
}

export default SlideControl
