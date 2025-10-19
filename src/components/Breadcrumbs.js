import Link from "next/link";

export default function Breadcrumbs({ service, city }) {
  const serviceSlug = service.toLowerCase().replace(/\s+/g, "-");
  const citySlug = city.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "");

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        fontSize: "0.9rem",
        color: "#6b7280",
        marginBottom: "1rem",
      }}
    >
      <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>
        Home
      </Link>{" "}
      ›{" "}
      <Link
        href={`/${serviceSlug}/${citySlug}`}
        style={{ color: "#2563eb", textDecoration: "none" }}
      >
        {service}
      </Link>{" "}
      › <span>{city}</span>
    </nav>
  );
}
