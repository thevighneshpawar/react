import {useState} from 'react';


function App() {
 const [color,setColor] = useState("olive")

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor: color}}>
       
       <div className='fixed flex flex-wrap justify-center bottom-12
       inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-3 rounded-3xl'>
           <button onClick={()=>setColor("red")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"red"}}
           >Red</button>

           <button onClick={()=>setColor("Orange")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"Orange"}}
           >Orange</button>

          <button onClick={()=>setColor("blue")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"blue"}}
           >blue</button>

          <button onClick={()=>setColor("lavender")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"lavender"}}
           >lavender</button>


           <button onClick={()=>setColor("Black")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"Black"}}
           >Black</button>

           <button onClick={()=>setColor("gray")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"gray"}}
           >gray</button>

          <button onClick={()=>setColor("yellow")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"yellow"}}
           >yellow</button>

          <button onClick={()=>setColor("Pink")}
           className='outline-none px-4 py-1 rounded-full text-white
            shadow-lg'
           style={{backgroundColor:"pink"}}
           >Pink</button>

        </div>
       </div>
   </div>
  )
}

export default App
