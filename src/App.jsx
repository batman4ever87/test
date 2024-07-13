import "./global.scss"
import './app.scss'
import { Header, Hero, Preloader } from "../src/containers/index"

function App() {


  return (
    <>
     <Preloader />
     <Header />
     <Hero />
    </>
  )
}

export default App
