import { useState } from 'react'
import './App.css'
import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Greeting />
    </>
  )
}

export default App