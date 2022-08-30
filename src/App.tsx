import { FaFacebookSquare, FaPinterest, FaInstagram } from 'react-icons/fa'
import SocialButton from './components/SocialButton'
import SwiperCard from './components/SwiperCard'

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center pt-32 md:pt-[20vh] pb-8">
      <h1 className="text-white text-xl max-w-[300px] md:max-w-full text-center md:text-2xl uppercase tracking-[0.4rem]">
        We're launching soon
      </h1>

      <main className="flex gap-4 md:gap-8 my-14 md:my-20">
        <SwiperCard text="days" countSlides={8} intervalTime={10} />
        <SwiperCard text="hours" countSlides={23} intervalTime={8} />
        <SwiperCard text="minutes" countSlides={59} intervalTime={22} />
        <SwiperCard text="seconds" countSlides={59} intervalTime={0.1} />
      </main>

      <footer className="flex gap-3 mt-auto">
        <SocialButton activeColor="blue">
          <FaFacebookSquare />
        </SocialButton>
        <SocialButton activeColor="red">
          <FaPinterest />
        </SocialButton>
        <SocialButton activeColor="pink">
          <FaInstagram />
        </SocialButton>
      </footer>
    </div>
  )
}

export default App
