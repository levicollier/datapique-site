import data from '../../data/cost_data.json';
import Head from 'next/head';

export default function CityServicePage({ item }) {
  if (!item) {
    return <main style={{ padding: '2rem' }}>Service not found.</main>;
  }

  return (
    <>
      <Head>
        <title>{item.sub_category} in {item.city} | datapique.com</title>
        <meta name="description" content={`Average ${item.sub_category.toLowerCase()} cost in ${item.city}: $${item.avg_cost}. Typical range ${item.low_cost}–${item.high_cost}.`} />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>{item.sub_category} in {item.city}</h1>
        <p><strong>Average Cost:</strong> ${item.avg_cost}</p>
        <p><strong>Typical Range:</strong> ${item.low_cost} – ${item.high_cost}</p>
        <p><strong>Confidence Score:</strong> {item.confidence_score}%</p>
        <p><small>Source: {item.data_source}</small></p>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = data.map(item => ({
    params: {
      service: item.sub_category.toLowerCase().replace(/\s+/g, '-'),
      city: item.city.toLowerCase().replace(/\s+/g, '-'),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = data.find(
    i =>
      i.sub_category.toLowerCase().replace(/\s+/g, '-') === params.service &&
      i.city.toLowerCase().replace(/\s+/g, '-') === params.city
  );

  return { props: { item: item || null } };
}
