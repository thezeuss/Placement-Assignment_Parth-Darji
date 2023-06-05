import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className='previous-operand'></div>
        <div className='current-operand'></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>+</button>
      {/* <button className="span-two">AC</button> 
      <button>DEL</button>  
      <button>+</button> */}
              
    </div>
  );
}

export default App;
