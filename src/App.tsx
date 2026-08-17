import PainelClima from './PainelClima';
import PainelResumo from './PainelResumo';
import './App.css';

function App() {
  return (
    <div>
      <h1>🌐 Painel de Dados Externos</h1>

      <PainelClima />

      <hr />

      <PainelResumo />
    </div>
  );
}

export default App;