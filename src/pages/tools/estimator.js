import { useState } from 'react';
import costData from '../../data/cost_data.json';

export default function TrueCostEstimator() {
  const [city, setCity] = useState('');
  const [service, setService] = useState('');
  const [result, setResult] = useState(null);

  const handleEstimate = () => {
    const match = costData.find(
      (item) => item.city === city && item.sub_category === service
    );
    setResult(match || null);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h2>True‑Cost Estimator</h2>

      <label>Service:</label>
      <select onChange={(e) => setService(e.target.value)}>
        <option value="">Select…</option>
        {[...new Set(costData.map((i) => i.sub_category))].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <label>City:</label>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Select…</option>
        {[...new Set(costData.map((i) => i.city))].map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button onClick={handleEstimate} style={{ marginLeft: '1rem' }}>
        Estimate Cost
      </button>

      {result && (
        <div style={{ marginTop: '1em' }}>
          <h3>
            {result.sub_category} in {result.city}
          </h3>
          <p>Average Cost: ${result.avg_cost}</p>
          <p>
            Typical Range: ${result.low_cost} - ${result.high_cost}
          </p>
          <p>Confidence: {result.confidence_score}%</p>
          <small>Source: {result.data_source}</small>
        </div>
      )}
    </div>
  );
}
