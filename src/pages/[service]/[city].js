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
          <strong>Typical Range:</strong> ${item.low_cost} – ${item.high_cost}
        </p>
        <p>
          <strong>Confidence Score:</strong> {item.confidence_score}%
        </p>
        <p>
          <small>Source: {item.data_source}</small>
        </p>
      </article>
    </Layout>
  );
}

/* 🧭 Helpers for safe slug generation */
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/,/g, "") // remove commas
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ""); // remove all non-alphanumeric chars
}

/* 🏗️ Generate paths at build time */
export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: {
      service: normalize(item.sub_category),
      city: normalize(item.city),
    },
  }));
  return { paths, fallback: false };
}

/* 🔍 Provide data to each dynamic page */
export async function getStaticProps({ params }) {
  const match = data.find(
    (i) =>
      normalize(i.sub_category) === params.service &&
      normalize(i.city) === params.city
  );
  return { props: { item: match || null } };
}
