import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchComponent from './searchbar/searchComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchComponent />
    </>
  )
}

export default App
