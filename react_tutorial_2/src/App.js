import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Carms">
        <p>This is a children prop</p>
      </Greet>
      <Greet name="Maj"></Greet>
      <Greet name="Marco"></Greet> 
      <Welcome name="Carms"></Welcome>
      <Welcome name="Maj"></Welcome>
      <Welcome name="Marco"></Welcome>
    </div>
  );
}

export default App;
