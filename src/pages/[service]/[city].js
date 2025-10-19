import Layout from "../../components/Layout";
import data from "../../data/cost_data.json";

export default function CityServicePage({ item }) {
  if (!item) {
    return (
      <Layout title="Not Found">
        <main style={{ padding: "2rem" }}>
          <h2>Service not found</h2>
          <p>
            Sorry — we couldn’t find cost data for this service and city.
          </p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${item.sub_category} in ${item.city}`}
      description={`Average ${item.sub_category.toLowerCase()} cost in ${item.city}: $${item.avg_cost}. Typical range $${item.low_cost}–$${item.high_cost}.`}
    >
      <article>
        <h2 style={{ marginBottom: "1rem" }}>
          {item.sub_category} in {item.city}
        </h2>
        <p>
          <strong>Average Cost:</strong> ${item.avg_cost}
        </p>
        <p>
          <strong>Typical Range:</strong> ${item.low_cost} – $
          {item.high_cost}
        </p>
