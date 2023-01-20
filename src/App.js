import React,{useEffect,useState} from "react";
import "./style.css";

const App=()=> {
  const [count,setCount]=useState(1)
  useEffect(()=>{
    console.warn(count)
  },[count==5])
  return (
    <div>
      <h1>UseEffect Hooks in React...{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update State</button>
      
    </div>
  );
}
export default App;