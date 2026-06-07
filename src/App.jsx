import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <div>        
      <Navbar name='Tolu' />
       <Hero
            name="Doyin-Adenekan Toluwanimi"
            title="Frontend Developer & UI Designer"
            bio="I build beautiful, responsive web experiences that make users smile."
          />

    </div>
  )
}

export default App
