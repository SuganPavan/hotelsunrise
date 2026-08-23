import { Metadata } from "next";
import HomePage from "./HomeClient";

export const metadata: Metadata = {
  title: "Hotel Sunrise Port Blair | Hotel in Sri Vijaya Puram, Andaman",
  description:
    "Book your stay at Hotel Sunrise Port Blair, a comfortable family hotel in Sri Vijaya Puram near Aberdeen Bazaar, with clean rooms for your Andaman trip.",
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
    title: "Hotel Sunrise Port Blair | Hotel in Sri Vijaya Puram, Andaman",
    description:
      "Book your stay at Hotel Sunrise Port Blair, a comfortable family hotel in Sri Vijaya Puram near Aberdeen Bazaar, with clean rooms for your Andaman trip.",
    url: "https://www.hotelsunriseandaman.com/",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
