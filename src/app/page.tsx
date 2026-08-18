import { Metadata } from "next";
import HomePage from "./HomeClient";

export const metadata: Metadata = {
  title: "Hotel Sunrise | Central Hotel in Sri Vijaya Puram, Andaman",
  description:
    "Experience a warm, comfortable stay at Hotel Sunrise in Sri Vijaya Puram (Port Blair), Andaman. Located centrally at Babu Lane, Aberdeen Bazaar, close to ferry terminals and top attractions.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com",
  },
  openGraph: {
    title: "Hotel Sunrise | Central Hotel in Sri Vijaya Puram, Andaman",
    description:
      "Experience a warm, comfortable stay at Hotel Sunrise in Sri Vijaya Puram (Port Blair), Andaman. Located centrally at Babu Lane, Aberdeen Bazaar, close to ferry terminals and top attractions.",
    url: "https://www.hotelsunriseandaman.com",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
