import './App.css';
import Buttons from './Buttons.jsx';
import { useState } from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState("black");
  
  
  
  return(
     <div className="main" style={{backgroundColor: bgColor}}>
       <div className='buttons'>
         <Buttons rung="Red"/>
         <Buttons rung="Green" />
         <Buttons rung="Blue" />
         <Buttons rung="Yellow" />
         <Buttons rung="Orange" />
        </div>
     </div>
    
  );
}
