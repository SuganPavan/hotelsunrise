import { Metadata } from "next";
import AirportTransitClient from "./AirportTransitClient";

export const metadata: Metadata = {
  title: "Port Blair Airport to Jetty Guide | Transit & Stays | Hotel Sunrise",
  description:
    "Complete travel guide from Veer Savarkar Airport to Phoenix Bay Jetty & Haddo Wharf in Port Blair. Get taxi fares, distances, ferry tips, and budget transit stays.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/airport-to-jetty-transit",
  },
  openGraph: {
    title: "Port Blair Airport to Jetty Guide | Transit & Stays | Hotel Sunrise",
    description:
      "Complete travel guide from Veer Savarkar Airport to Phoenix Bay Jetty & Haddo Wharf in Port Blair. Get taxi fares, distances, ferry tips, and budget transit stays.",
    url: "https://www.hotelsunriseandaman.com/airport-to-jetty-transit",
    type: "website",
  },
};

export default function Page() {
  return <AirportTransitClient />;
}
