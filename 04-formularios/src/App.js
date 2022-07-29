import logo from './logo.svg';
import './App.css';
import { FormularioComponent } from './componentes/FormularioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioComponent></FormularioComponent>
      </header>
    </div>
  );
}

export default App;
