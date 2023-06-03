import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div id="header" class="px-28 py-5">
          <nav class="flex items-center">
            <img src="images/ferrari.png" class="max-h-20 max-w-20 "></img>
            <ul class="flex-1 text-center">
              <li class="list-none inline-block px-4"><a href="index.html">Ferari Enzo</a></li>
              <li class="list-none inline-block px-4"><a href="index2.html">Ferari California</a></li>
              <li class="list-none inline-block px-4"><a href="index3.html">Ferari 458 Italia</a></li>
            </ul>
            <img src="images/ferrari.png" class="max-h-20 max-w-20 "></img>
          </nav>
        </div>
    </>
  )
}

export default App
