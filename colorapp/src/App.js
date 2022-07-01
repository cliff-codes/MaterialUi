import './App.css';
import DisplayColor from './DisplayColor';
import InputColor from './InputColor';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <DisplayColor 
        color = {color}
      />
      <InputColor
        color = {color}
        setColor = {setColor}
      />
    </div>
  );
}

export default App;
