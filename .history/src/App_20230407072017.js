import logo from './logo.svg';
import './App.css';
// import Greetings from './components/pure/Greetings';
import GreetingsF from './components/pure/GreetingsF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greetings name="LOgan"></Greetings> */}
        <GreetingsF></GreetingsF>
      </header>
    </div>
  );
}

export default App;
