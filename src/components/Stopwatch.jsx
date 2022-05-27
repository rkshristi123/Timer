import React from 'react'

const Stopwatch = ({value,endtime}) => {
const [timerid,SetTimerid] =React.useState(null)
const [watch,setWAtch]=React.useState(value)

const start=() =>{
if(!timerid){
    let id=setInterval(()=>{
        setWAtch((prev)=>prev+1)
    },1000)
    SetTimerid(id)
}
}

const pause=()=>{
    clearInterval(timerid)
    SetTimerid(null)
}

const reset=()=>{
    clearInterval(timerid)
     setWAtch(value)
}


  return (
      <>
      <br/>
    <div><h1>Stopwatch</h1></div>
    <h1>{watch}</h1>
    <button onClick={start}>start</button>
    <button onClick={pause}>pause</button>
    <button onClick={reset}>reset</button>
    </>
  )
  
}

export default Stopwatch