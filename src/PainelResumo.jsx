import useFetch from './useFetch';

function PainelResumo() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=-22.97&longitude=-49.87&current=temperature_2m,relative_humidity_2m,wind_speed_10m';

  const { dados, carregando, erro } = useFetch(url);

  if (carregando) {
    return <p>Carregando resumo...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <div>
      <h2>📊 Resumo</h2>

      <p>
        Temperatura atual: {dados.current.temperature_2m} °C
      </p>

      <p>
        Umidade atual: {dados.current.relative_humidity_2m}%
      </p>
    </div>
  );
}

export default PainelResumo;