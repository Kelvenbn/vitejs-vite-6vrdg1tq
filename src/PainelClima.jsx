import useFetch from './useFetch';

function PainelClima() {
  const url =
  'https://api.open-meteo.com/v1/forecast?latitude=-22.97&longitude=-49.87&current=temperature_2m,relative_humidity_2m,wind_speed_10m';

  const { dados, carregando, erro } = useFetch(url);

  if (carregando) {
    return <p>Carregando dados do clima...</p>;
  }

  if (erro) {
    return <p>Erro ao buscar dados: {erro}</p>;
  }

  return (
    <div>
      <h2>🌤️ Estação Climática</h2>

      <p>
        🌡️ Temperatura: {dados.current.temperature_2m} °C
      </p>

      <p>
        💧 Umidade: {dados.current.relative_humidity_2m}%
      </p>

      <p>
        🌬️ Vento: {dados.current.wind_speed_10m} km/h
      </p>
    </div>
  );
}

export default PainelClima;