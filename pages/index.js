// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{padding:"2rem", fontFamily:"sans-serif"}}>
      <h1>Welcome to DataPique</h1>
      <p>
        Explore real cost benchmarks and price data across cities.
      </p>
      <Link href="/tools/estimator">
        <button style={{marginTop:"1rem", padding:"0.5rem 1rem"}}>
          🧮 Try the True‑Cost Estimator
        </button>
      </Link>
    </main>
  );
}
