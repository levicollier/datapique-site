import Layout from "../../components/Layout";
import data from "../../data/cost_data.json";

export default function CityServicePage({ item }) {
  if (!item) {
    return (
      <Layout title="Not Found">
        <main style={{ padding: "2rem" }}>
          <h2>Service not found</h2>
          <p>
            Sorry — we couldn’t find data for this particular service and city.
          </p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${item.sub_category} in ${item.city}`}
      description={`Average ${item.sub_category.toLowerCase()} cost in ${
        item.city
      } is around $${item.avg_cost}. Typical range $${item.low_cost} – $${item.high_cost}. Confidence score ${item.confidence_score}%.`}
    >
      <article>
        <h2 style={{ marginBottom: "1rem" }}>
          {item.sub_category} in {item.city}
        </h2>
        <p>
          <strong>Average Cost:</strong> ${item.avg_cost}
        </p>
        <p>
          <strong>Typical Range:</strong> ${item.low_cost} – $ {item.high_cost}
        </p>
        <p>
          <strong>Confidence Score:</strong> {item.confidence_score}%
        </p>
        <p>
          <small>Source: {item.data_source}</small>
        </p>
      </article>
    </Layout>
  );
}

/* --- Static generation --- */
export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: {
      service: item.sub_category.toLowerCase().replace(/\s+/g, "-"),
      city: item.city.toLowerCase().replace(/\s+/g, "-"),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const match = data.find(
    (i) =>
      i.sub_category.toLowerCase().replace(/\s+/g, "-") === params.service &&
      i.city.toLowerCase().replace(/\s+/g, "-") === params.city
  );

  return { props: { item: match || null } };
}
