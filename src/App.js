import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';

function App() {

  
  const buttoncolor = "#f2a33c";

  
  const [text,setText] = useState("");
  const [result,setResult] = useState("");

  const addToText = (val)=>{
     setText((text)=>[...text ,val])
  }

  const resulttextclear = ()=>{
    setResult("");
    setText("");
  }

  const calculateResult = ()=>{
    const ans = text.join("")
    setResult(math.evaluate(ans))
}

  return (
    
    <div className="App">
       
      <div className='calc-wrapper'>
          
        <div>
          <Input text={text} result={result}/>
        </div>
        <div className='row'>
           <Button data="7" handleClick={addToText}/>
           <Button data="8"  handleClick={addToText}/>
           <Button data="9"  handleClick={addToText}/>
           <Button data="/" color={buttoncolor}  handleClick={addToText}/>
        </div>
        <div className='row'>
           <Button data="4" handleClick={addToText}/>
           <Button data="5" handleClick={addToText}/>
           <Button data="6" handleClick={addToText}/>
           <Button data="*" color={buttoncolor} handleClick={addToText}/>
        </div>
        <div className='row'>
           <Button data="3" handleClick={addToText}/>
           <Button data="2" handleClick={addToText}/>
           <Button data="1" handleClick={addToText}/>
           <Button data="-" color={buttoncolor} handleClick={addToText}/>
        </div>
        <div className='row'>
           <Button data="0" handleClick={addToText}/>
           <Button data="." handleClick={addToText}/>
           <Button data="=" handleClick={calculateResult}/>
           <Button data="+" color={buttoncolor} handleClick={addToText}/>
        </div>
        <Button data="clear" color="red" handleClick={resulttextclear}/>
      </div>
       
    </div>
  );
}

export default App;
