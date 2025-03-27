import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <div className='w-96 h-96 bg-amber-400 flex justify-center items-center' >
        <h1 className='text-black'>Happy for this project </h1>
      </div>
    </section>
  )
}

export default App
