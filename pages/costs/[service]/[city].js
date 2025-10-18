import { useRouter } from 'next/router';
import data from '../../../data/cost_data.json';

export default function CostPage() {
  const router = useRouter();
  const { service, city } = router.query;

  const formattedService = service
    ? service.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : '';
  const formattedCity = city
    ? city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : '';

  const entry = data.find(
    (item) =>
      item.sub_category.toLowerCase().replace(/\s+/g, '-') === service &&
      item.city.toLowerCase().replace(/\s+/g, '-') === city
  );

  if (!entry)
    return (
      <main style={{padding:"2rem"}}>
        <h2>No data found for {formattedService} in {formattedCity}</h2>
        <p>Try another service or city from our estimator.</p>
      </main>
    );

  return (
    <main style={{padding:"2rem"}}>
      <h1>{entry.sub_category} Costs in {entry.city}</h1>
      <p>Average Cost: ${entry.avg_cost}</p>
      <p>Typical Range: ${entry.low_cost} – ${entry.high_cost}</p>
      <p>Confidence Score: {entry.confidence_score}%</p>
      <small>Data Source: {entry.data_source}</small>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: {
      service: item.sub_category.toLowerCase().replace(/\s+/g, '-'),
      city: item.city.toLowerCase().replace(/\s+/g, '-')
    }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
