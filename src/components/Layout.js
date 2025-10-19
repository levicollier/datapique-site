import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, description, children }) {
  const pageTitle = title
    ? `${title} | Datapique`
    : "Datapique | Cost Benchmarks";
  const metaDescription =
    description ||
    "Accurate cost benchmarks for trades, repairs, and services across major US cities.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://datapique.com" />
      </Head>

      {/* Header */}
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
        <h1 style={{ fontSize: "1.25rem" }}>Datapique</h1>
        <nav>
          <Link href="/" style={{ color: "#fff", marginRight: "1.5rem" }}>
            Home
          </Link>
          <Link href="/tools/estimator" style={{ color: "#fff" }}>
            Estimator Tool
          </Link>
        </nav>
      </header>

      {/* Main page content */}
      <main
        style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {children}
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
