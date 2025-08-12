import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('white')

  
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg shadow-black bg-white px-3 py-2 rounded-2xl'>
            <button onClick={()=>setColor("red")}
            className='text-black shadow-lg shadow-black hover:bg-red-600 transition rounded-2xl p-3'>red</button>
            
            <button onClick={()=>setColor("green")}
            className='text-black shadow-lg shadow-black hover:bg-green-600 transition rounded-2xl p-3'>green</button>
            
            <button onClick={()=>setColor("yellow")}
            className='text-black shadow-lg shadow-black hover:bg-yellow-300 transition rounded-2xl p-3'>yellow</button>
            
            
          </div>
      </div>
    </div>
  )
}

export default App
