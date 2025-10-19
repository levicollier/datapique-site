import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
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

  return
