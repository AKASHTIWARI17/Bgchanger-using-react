import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     
     <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl">
     <button onClick={()=>setColor("red")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>setColor("green")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=>setColor("pink")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"Pink"}}>Pink</button>
      <button onClick={()=>setColor("blue")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=>setColor("violet")}  className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"violet"}}>violet</button>
      <button onClick={()=>setColor("white")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"white"}}>White</button>
      <button onClick={()=>setColor("black")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"black"}}>Black</button>
      <button onClick={()=>setColor("orange")}  className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"orange"}}>orange</button>
      <button onClick={()=>setColor("yellow")} className="outline-none px-5 py-3 rounded-full  text-white font-bold"
      style={{backgroundColor:"yellow"}}>yellow</button>
     </div>
      </div>
      </div>
    </>
  )
}

export default App
