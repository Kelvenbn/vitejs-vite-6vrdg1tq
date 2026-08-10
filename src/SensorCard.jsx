function SensorCard({ nome, valor, unidade }) {
  return (
    <div className="sensor-card">
      <h2>{nome}</h2>

      <div className="valor">
        {valor}
        <span>{unidade}</span>
      </div>

      <p>● Sensor ativo</p>
    </div>
  );
}

export default SensorCard;
