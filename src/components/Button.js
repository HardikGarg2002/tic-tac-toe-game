import './Button.css'
import { useState,useEffect } from "react";

export default function Button({currPlayer,nextPlayer,position,name}){
    
    const [value,setvalue]=useState(null);
    const [count, setCount] = useState(0);
    if(name==='X' || name==='O') return <button> </button> ;

    function updateValue(){
        // if(name !== '' || ) return;
        if(count===1) return;
      setCount((count)=>(count + 1));
      setvalue(currPlayer);
      

      console.log('back in update value function')
      console.log("update value called","current player is",currPlayer,"value is",value,count);
      
      nextPlayer(position);
    }


    return <button onClick={updateValue}>{value} </button>
  }