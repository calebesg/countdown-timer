import { FaFacebookSquare, FaPinterest, FaInstagram } from 'react-icons/fa'
import SocialButton from './components/SocialButton'

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl uppercase tracking-[0.3rem]">
        We're launching soon
      </h1>

      <main></main>

      <footer className="flex gap-3">
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
