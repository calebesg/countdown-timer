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
          -rotate-90 text-3xl md:text-[64px] text-softRed-400 w-full flex justify-center
          after:w-2 after:h-2 md:after:w-4 md:after:h-4 after:rounded-full after:bg-darkBlue-900 after:absolute after:top-1/2 after:-right-1 md:after:-right-2 after:-translate-y-1/2
          before:w-2 before:h-2 md:before:w-4 md:before:h-4 before:rounded-full before:bg-darkBlue-900 before:absolute before:top-1/2 before:-left-1 md:before:-left-2 before:-translate-y-1/2
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
        className="w-[70px] h-[70px] md:w-36 md:h-36 bg-darkBlue-600 rounded-[4px] md:rounded-lg rotate-90 overflow-hidden shadow-darkBorderSm md:shadow-darkBorder"
        slidesPerView={1}
        onSlideChange={() => {}}
        modules={[EffectFlip]}
        effect="flip"
        loop
      >
        {/* <SlideAuto intervalTime={intervalTime} /> */}
        {renderItems()}
      </Swiper>
      <span className="inline-block mt-4 md:mt-6 uppercase text-darkBlue-400 text-[8px] md:text-xs tracking-[0.15rem] md:tracking-[0.25rem]">
        {text}
      </span>
    </div>
  )
}

export default SwiperCard
