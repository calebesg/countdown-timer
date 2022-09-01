import { useCallback, useEffect, useState } from 'react'
import { FaFacebookSquare, FaPinterest, FaInstagram } from 'react-icons/fa'

import SocialButton from './components/SocialButton'
import SwiperCard from './components/SwiperCard'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    const timeOut = setInterval(() => {
      setSeconds(oldState => {
        const updatedSecond = oldState === 60 ? 1 : oldState + 1
        return updatedSecond
      })
    }, 1000) /// timer

    return () => clearInterval(timeOut)
  }, [])

  useEffect(() => {
    console.log(seconds)
    if (seconds === 60) {
      setMinutes(oldState => {
        const updatedMinutes = oldState === 60 ? 1 : oldState + 1
        return updatedMinutes
      })
    }
  }, [seconds])

  useEffect(() => {
    if (seconds === 60 && minutes === 60) {
      setHours(oldState => {
        const updatedHours = oldState === 24 ? 1 : oldState + 1
        return updatedHours
      })
    }
  }, [seconds, minutes])

  useEffect(() => {
    if (seconds === 60 && minutes === 60 && hours === 24) {
      setDays(oldState => {
        const updatedDays = oldState === 9 ? 1 : oldState + 1
        return updatedDays
      })
    }
  }, [seconds, minutes])

  const handleChange = useCallback((index: number) => {}, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center pt-32 md:pt-[20vh] pb-8">
      <header>
        <h1 className="text-white text-xl max-w-[300px] md:max-w-full text-center md:text-2xl uppercase tracking-[0.4rem]">
          We're launching soon
        </h1>
      </header>

      <main className="flex gap-4 md:gap-8 my-14 md:my-20">
        <SwiperCard text="days" countSlides={9} currentSlide={days} />
        <SwiperCard text="hours" countSlides={24} currentSlide={hours} />
        <SwiperCard text="minutes" countSlides={60} currentSlide={minutes} />
        <SwiperCard
          text="seconds"
          countSlides={60}
          currentSlide={seconds}
          onUpdateSlide={handleChange}
        />
      </main>

      <footer className="flex gap-3 mt-auto">
        <SocialButton activeColor="blue" aria="facebook">
          <FaFacebookSquare />
        </SocialButton>
        <SocialButton activeColor="red" aria="pinterest">
          <FaPinterest />
        </SocialButton>
        <SocialButton activeColor="pink" aria="instagram">
          <FaInstagram />
        </SocialButton>
      </footer>
    </div>
  )
}

export default App
