import './App.css';
import Timeboxgame from './Timeboxgame';
const grid=[["1","1","1"],["1","0","0"],["1","1","1"]]
function App() {
  return (
    <div className="App">
      <Timeboxgame grid={grid} />
      
    </div>
  );
}

export default App;
