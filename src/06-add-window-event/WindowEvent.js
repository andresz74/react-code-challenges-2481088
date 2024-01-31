import { useEffect } from "react"

export default function WindowEvent () {
  useEffect(()=>{
    const activeAlert = () => alert('Hey there!');
    window.addEventListener('dblclick', activeAlert);

    return ()=> window.removeEventListener('dblclick', activeAlert);
    
  },[])
  return (
    <h2>Window event active</h2>
  )
}
