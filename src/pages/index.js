import Layout from "../components/Layout";
import Link from "next/link";
import data from "../data/cost_data.json";

export default function HomePage() {
  return (
    <Layout
      title="Cost Benchmarks"
      description="Explore average cost benchmarks for home repairs and services across major US cities."
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Cost Data Sample</h2>

      {data.map((item) => {
        const serviceSlug = item.sub_category
          .toLowerCase()
          .replace(/\s+/g, "-");
        const citySlug = item.city.toLowerCase().replace(/\s+/g, "-");

        return (
          <Link
            key={`${serviceSlug}-${citySlug}`}
            href={`/${serviceSlug}/${citySlug}`}
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              transition: "box-shadow 0.2s",
            }}
          >
            <article>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>
                {item.sub_category} in {item.city}
              </h3>
              <p style={{ margin: "0.25rem 0" }}>
                <strong>Average Cost:</strong> ${item.avg_cost}
              </p>
              <p style={{ margin: "0.25rem 0" }}>
                <strong>Typical Range:</strong> ${item.low_cost} – $
                {item.high_cost}
              </p>
              <p style={{ margin: "0.25rem 0" }}>
                <strong>Confidence Score:</strong> {item.confidence_score}%
              </p>
              <small>Source: {item.data_source}</small>
            </article>
          </Link>
        );
      })}
    </Layout>
  );
}
