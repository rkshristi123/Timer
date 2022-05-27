import logo from './logo.svg';
import React from "react"
import './App.css';

import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  const [show,setShow] = React.useState(true)
  return (
    <div className="App">
      
      <button onClick={()=>setShow(!show)}> {show?"show timer":"show stopwatch"}</button>
      {show? <Stopwatch value={0} endtime={10}/> : <Timer value={0} endtime={10}/>}
     
      
    </div>
  );
}

export default App;
