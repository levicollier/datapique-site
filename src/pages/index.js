import Head from "next/head";
import Link from "next/link";
import data from "../data/cost_data.json";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Datapique | Cost Benchmarks</title>
        <meta
          name="description"
          content="Average cost benchmarks for home repairs and services across major US cities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://datapique.com" />
      </Head>

      {/* Global Header */}
      <header
        style={{
          background: "#111827",
          color: "#fff",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "1.5rem" }}>Datapique</h1>
        <nav>
          <Link href="/" style={{ color: "#fff", marginRight: "1.5rem" }}>
            Home
          </Link>
          <Link href="/tools/estimator" style={{ color: "#fff" }}>
            Estimator Tool
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
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
                  <strong>Typical Range:</strong> ${item.low_cost} – $
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
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#f3f4f6",
          padding: "1.5rem 2rem",
          marginTop: "2rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#4b5563",
        }}
      >
        <p>
          © {new Date().getFullYear()} Datapique. All rights reserved. | Built with {" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            Next.js
          </a>{" "}
          + Netlify
        </p>
      </footer>
    </>
  );
}
