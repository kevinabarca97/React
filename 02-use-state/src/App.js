import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado.js';
import { Ejercicio1 } from './components/Ejercicio1.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El Estado en React</h1>
        <Ejercicio1 anoActual={parseInt(new Date().getFullYear())}></Ejercicio1>
        <MiPrimerEstado></MiPrimerEstado>
      </header>
    </div>
  );
}

export default App;
