import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [password,setPassword] = useState("")
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [symbolAllowed,setSymbolAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const passwordRef  = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if (symbolAllowed) str+="!@#$%^&*()_+[]{}|;:,.<>?/~`"
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random()*str.length )
      pass+= str.charAt(char)
    }
    console.log(pass)
    setPassword(pass)
    },
    [length,numberAllowed,symbolAllowed]
  )

  useEffect(()=>{
    generatePassword()
  },
  [length,numberAllowed,symbolAllowed]
  )

  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  return (
    <>
      <div
      className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>
        Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className='cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>


        </div>

        
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>setLength(e.target.value)}
              name=""
              id="length"
              />
              <label htmlFor="length">Length: {length}</label>
            </div>
        
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              className='cursor-pointer'
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              name=""
              id="number"
              />
              <label htmlFor="number">Numbers</label>
            </div>
          
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              className='cursor-pointer'
              onChange={()=>{setSymbolAllowed((prev)=>!prev)}}
              name=""
              id="character"
              />
              <label htmlFor="character">Character</label>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
