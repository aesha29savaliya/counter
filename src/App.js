import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


function App() {

     const [count, setCount] = useState(0);
     const plus = () => {
          setCount(count + 1)
     }
     const minus = () => {
          setCount(count - 1)
     }
     useEffect(() => {
     })
     return (
          <div className="App">

               <>
                    <center>
                         <br /><br />
                         <button className='count' onClick={plus}>+</button>
                         <br /><br />
                         <p>count the number : {count}</p>
                         <br />
                         <button className='count' onClick={minus}>-</button>
                    </center>

               </>
          </div>
     );
}

export default App;
