import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Content from './sections/Content'
import Contact from './sections/Contact'

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Content />
        <Contact />
      </div>
    </ParallaxProvider>
  )
}

export default App


