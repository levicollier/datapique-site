import data from '../data/cost_data.json';

export default function CostPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Cost Data Sample</h1>

      {data.map((item) => (
        <div
          key={`${item.sub_category}-${item.city}`}
          style={{
            marginBottom: '1rem',
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          <h3>
            {item.sub_category} in {item.city}
          </h3>
          <p>Average Cost: ${item.avg_cost}</p>
          <p>
            Typical Range: ${item.low_cost} - ${item.high_cost}
          </p>
          <p>Confidence Score: {item.confidence_score}%</p>
          <small>Source: {item.data_source}</small>
        </div>
      ))}
    </main>
  );
}
