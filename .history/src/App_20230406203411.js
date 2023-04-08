import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/Greetings';

function App() {

  constructor(props){

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings></Greetings>
      </header>
    </div>
  );
}

export default App;
