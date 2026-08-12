import { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Andaman Travel Packages & Itineraries | Hotel Sunrise",
  description:
    "Discover curated Andaman tour packages with comfortable hotel stays. Explore detailed itineraries for Honeymoon, Family, Adventure, and Budget travellers in Port Blair.",
  alternates: {
    canonical: "https://hotelsunrise.com/packages",
  },
  openGraph: {
    title: "Andaman Travel Packages & Itineraries | Hotel Sunrise",
    description:
      "Discover curated Andaman tour packages with comfortable hotel stays. Explore detailed itineraries for Honeymoon, Family, Adventure, and Budget travellers in Port Blair.",
    url: "https://hotelsunrise.com/packages",
    type: "website",
  },
};

export default function Page() {
  return <PackagesClient />;
}
