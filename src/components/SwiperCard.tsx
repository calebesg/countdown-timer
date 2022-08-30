import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip } from 'swiper'
import SlideAuto from './SlideAuto'

import 'swiper/css'
import 'swiper/css/effect-flip'

interface ISwiperCardProps {
  intervalTime: number // value in seconds
  countSlides: number
  text: string
}

function SwiperCard({ intervalTime, countSlides, text }: ISwiperCardProps) {
  const renderItems = () => {
    const item = (text: string) => (
      <SwiperSlide
        key={text}
        className="flex items-center justify-center relative before:top-0 before:left-0 before:right-1/2 before:bottom-0 before:bg-darkBlue-800 before:opacity-40 before:absolute before:z-10"
      >
        <span
          className={`
          -rotate-90 text-[64px] text-softRed-400 w-full flex justify-center
          after:w-4 after:h-4 after:rounded-full after:bg-darkBlue-900 after:absolute after:top-1/2 after:-right-2 after:-translate-y-1/2
          before:w-4 before:h-4 before:rounded-full before:bg-darkBlue-900 before:absolute before:top-1/2 before:-left-2 before:-translate-y-1/2
        `}
        >
          {text}
        </span>
      </SwiperSlide>
    )

    let slides = []

    for (let i = 0; i < countSlides; i++) {
      const text =
        countSlides - i < 10 ? `0${countSlides - i}` : `${countSlides - i}`
      slides.push(item(text))
    }

    return slides
  }

  return (
    <div className="text-center">
      <Swiper
        className="w-36 h-36 bg-darkBlue-600 rounded-lg rotate-90 overflow-hidden shadow-lg"
        slidesPerView={1}
        onSlideChange={() => {}}
        modules={[EffectFlip]}
        effect="flip"
        loop
      >
        {/* <SlideAuto intervalTime={intervalTime} /> */}
        {renderItems()}
      </Swiper>
      <span className="inline-block mt-2 uppercase text-darkBlue-400 text-sm tracking-[0.25rem]">
        {text}
      </span>
    </div>
  )
}

export default SwiperCard
