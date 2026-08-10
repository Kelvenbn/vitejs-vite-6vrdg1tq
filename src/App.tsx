import { useEffect, useState } from 'react';
import SensorCard from './SensorCard';
import './App.css';

function App() {
  const [sensores, setSensores] = useState([
    {
      id: 1,
      nome: 'Temperatura',
      valor: 24.5,
      unidade: '°C',
    },
    {
      id: 2,
      nome: 'Umidade',
      valor: 60,
      unidade: '%',
    },
    {
      id: 3,
      nome: 'Luminosidade',
      valor: 300,
      unidade: 'lux',
    },
    {
      id: 4,
      nome: 'CO₂',
      valor: 450,
      unidade: 'ppm',
    },
  ]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSensores((sensoresAtuais) =>
        sensoresAtuais.map((sensor) => {
          let novoValor;

          if (sensor.nome === 'Temperatura') {
            novoValor = (20 + Math.random() * 10).toFixed(1);
          } else if (sensor.nome === 'Umidade') {
            novoValor = Math.floor(40 + Math.random() * 40);
          } else if (sensor.nome === 'Luminosidade') {
            novoValor = Math.floor(200 + Math.random() * 400);
          } else if (sensor.nome === 'CO₂') {
            novoValor = Math.floor(350 + Math.random() * 500);
          }

          return {
            ...sensor,
            valor: novoValor,
          };
        })
      );
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="app">
      <header>
        <h1>🌐 Central de Sensores</h1>
        <p>Monitoramento IoT em tempo real</p>
      </header>

      <main className="sensores">
        {sensores.map((sensor) => (
          <SensorCard
            key={sensor.id}
            nome={sensor.nome}
            valor={sensor.valor}
            unidade={sensor.unidade}
          />
        ))}
      </main>

      <footer>
        <p>Os sensores são atualizados automaticamente a cada 2 segundos.</p>
      </footer>
    </div>
  );
}

export default App;
