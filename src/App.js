
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const options = ["Yes","Probably Not"];
  return (
    <div className="App">
      <Dropdown options = {options}/>
    </div>
  );
}

export default App;