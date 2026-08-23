import { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Andaman Tour Packages | Port Blair Holiday Packages | Hotel Sunrise",
  description:
    "Discover curated Andaman tour packages and Port Blair holiday itineraries. Hotel Sunrise provides comfortable accommodation and complete travel planning.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/packages",
  },
  openGraph: {
    title: "Andaman Tour Packages | Port Blair Holiday Packages | Hotel Sunrise",
    description:
      "Discover curated Andaman tour packages and Port Blair holiday itineraries. Hotel Sunrise provides comfortable accommodation and complete travel planning.",
    url: "https://www.hotelsunriseandaman.com/packages",
    type: "website",
  },
};

export default function Page() {
  return <PackagesClient />;
}
