import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';
function App() {

  const fichaMedica = {
    nombre: 'Kevin',
    apellido: 'Abarca Gracia',
    tipoSangre: 'H+',
    estado: 'excelente'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventosComponente />
        <TercerComponente fichaPaciente={fichaMedica} />
        <SegundoComponente />
        <MiComponente />
      </header>
      { /**esto es un comentario */}
    </div>
  );
}

export default App;
