import React, { useEffect } from 'react'

const Timer = ({value,endtime}) => {
    
    const [timer,setTimer]=React.useState(value)
    
    
    useEffect(() =>{

        let id=setInterval(()=>{
            if(timer==endtime){
                clearInterval(id)
            }else{
            setTimer((prev)=>prev+1)
            }
        },1000)
        return () =>{
            clearInterval(id)
    
        }
     
    },[timer])
    
    
    
    
      return (
          <>
          <br/>
        <div> <h1> Timer:  {timer}</h1></div>
       

      
      
      
        </>
      )
  
}

export default Timer