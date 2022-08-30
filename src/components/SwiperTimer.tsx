import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip } from 'swiper'
import SlideAuto from './SlideAuto'

interface ISwiperTimerProps {
  intervalTime: number
}

function SwiperTimer({ intervalTime }: ISwiperTimerProps) {
  return (
    <Swiper
      className="w-24 h-24 bg-gray-600 rounded-lg rotate-90 overflow-hidden"
      slidesPerView={1}
      onSlideChange={() => console.log('Hello')}
      modules={[EffectFlip]}
      effect="flip"
      loop
    >
      <SlideAuto intervalTime={intervalTime} />
      <SwiperSlide></SwiperSlide>
    </Swiper>
  )
}

export default SwiperTimer
