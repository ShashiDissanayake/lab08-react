import { useState } from 'react'
import './App.css'
import Greeting from "./components/Greeting";
import NavBar from './components/NavBar'
import Banner from './components/Banner';
import Card from './components/Card';
import Button from './components/Button';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

// pages
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <NavBar setPage={setPage} />

      {page === "home" && (
        <>
          <Greeting />
          <Banner />
          <Card />
          <Button label="Click Me" />
          <Testimonial />
        </>
      )}

      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      <Footer />
    </>
  )
}

export default App