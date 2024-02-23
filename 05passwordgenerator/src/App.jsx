import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllow,setnumberAllow] =useState(false);
  const [charAllow,setcharAllow] =useState(false);
  const [password,setpass]= useState("")
  const [buttonClicked, setButtonClicked] = useState(false);


  // useref hook
// hepls to get the refernce of any html compoment and to can do manipulation
  const passwordRef = useRef(null)
// 53 min usecallback helps to memorize the function sometimes whole fucn somtimes parts
  const copypasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[length,password])

  const handlebtnclick = ()=>{
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 1000); 

    copypasswordToClip();
  }

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*()_+-=[]{}|;:,.<>?"

    for(let i = 1;i<=length ; i++){
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
    }
  
     setpass(pass)
     

  },[length,numberAllow,charAllow,setpass])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])
  // if anything change in dependencies passwordgenerator fucn will re run
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-6
      text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-center text-white pt-3'>Password Generator</h1>
         <div className='flex shadow rounded-lg overflow-hidden mb-4 py-4'>
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button
          onClick={handlebtnclick}
          className={`outline-none px-3 py-0.5 ${
            buttonClicked ? 'bg-green-500' : 'bg-blue-700'
          } text-white shrink-0`}
        >
          {buttonClicked ? 'Copied!' : 'Copy'}
        </button>
    
         </div>

         <div className='flex text-sm gap-x-2 '>
            <div className='flex items-center gap-x-1'>
              <input
               type="range"
               min={6}
               max={100}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>{setlength(e.target.value)}}
              />
              <label>Length:{length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
               <input 
               type="checkbox"
               defaultChecked={numberAllow}
               id='numberInput'
               onChange={()=>{
                setnumberAllow((prev)=>!prev); // make prevoius value flip like true then false
               }}
               />
               <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
               <input 
               type="checkbox"
               defaultChecked={numberAllow}
               id='charInput'
               onChange={()=>{
                setcharAllow((prev)=>!prev); // 32 min imp make prevoius value flip like true then false
               }}
               />
               <label htmlFor="charInput">Characters</label>
            </div>
         </div>

         

      </div>
    </>
  )
}

export default App
