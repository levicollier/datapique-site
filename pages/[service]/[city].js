import { useRouter } from 'next/router';
import data from '../../../data/cost_data.json';

export default function CostPage() {
  const router = useRouter();
  const { service, city } = router.query;

  // Clean up the URL text for readability
  const displayService = service
    ? service.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : '';
  const displayCity = city
    ? city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : '';

  // Find a matching entry in the dataset
  const entry = data.find(
    (item) =>
      item.sub_category.toLowerCase().replace(/\s+/g, '-') === service &&
      item.city.toLowerCase().replace(/\s+/g, '-') === city
  );

  if (!entry) {
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h2>No data found for {displayService} in {displayCity}</h2>
        <p>Try another combination from the estimator tool.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>
        {entry.sub_category} Costs in {entry.city}
      </h1>
      <p>Average Cost: ${entry.avg_cost}</p>
      <p>
        Typical Range: ${entry.low_cost} - ${entry.high_cost}
      </p>
      <p>Confidence Score: {entry.confidence_score}%</p>
      <small>Data Source: {entry.data_source}</small>
    </main>
  );
}

// Tell Next.js to generate static pages for every record
export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: {
      service: item.sub_category.toLowerCase().replace(/\s+/g, '-'),
      city: item.city.toLowerCase().replace(/\s+/g, '-'),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
