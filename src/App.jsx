import { useRef, useState } from 'react'

function App() {
  const [value,setValue] = useState(0);
  const inputRef = useRef(null);
  return (
    <>
      <input type='number' ref={inputRef}></input>
      Sum is {value}
      <button onClick={()=>{
        let number = parseInt(inputRef.current.value);
        let sum = (number*(number+1))/2;
        setValue(sum);
      }}>Count</button>
    </>
  )
}

export default App
