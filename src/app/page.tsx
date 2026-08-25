import { Metadata } from "next";
import HomePage from "./HomeClient";

export const metadata: Metadata = {
  title: "Hotel in Port Blair | Budget Hotel in Sri Vijaya Puram | Hotel Sunrise",
  description:
    "Hotel Sunrise is a comfortable budget hotel in Port Blair, Sri Vijaya Puram, near Aberdeen Bazaar, offering convenient accommodation for Andaman travellers.",
  keywords: [
    "Hotel Sunrise Port Blair",
    "Hotel Sunrise Andaman",
    "Hotel in Port Blair",
    "Hotel in Sri Vijaya Puram",
    "Hotel near Aberdeen Bazaar",
    "Hotels in Port Blair",
    "Affordable hotel in Port Blair",
    "Family hotel in Port Blair",
    "sri vijaya puram hotel"
  ],
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/",
  },
  openGraph: {
    title: "Hotel in Port Blair | Budget Hotel in Sri Vijaya Puram | Hotel Sunrise",
    description:
      "Hotel Sunrise is a comfortable budget hotel in Port Blair, Sri Vijaya Puram, near Aberdeen Bazaar, offering convenient accommodation for Andaman travellers.",
    url: "https://www.hotelsunriseandaman.com/",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
