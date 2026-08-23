import { Metadata } from "next";
import ExperiencesClient from "./ExperiencesClient";

export const metadata: Metadata = {
  title: "Things to Do in Port Blair | Port Blair Sightseeing & Attractions",
  description:
    "Plan your trip with the top things to do in Port Blair. Discover historic sightseeing landmarks, island attractions, and day tours near Hotel Sunrise.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/experiences",
  },
  openGraph: {
    title: "Things to Do in Port Blair | Port Blair Sightseeing & Attractions",
    description:
      "Plan your trip with the top things to do in Port Blair. Discover historic sightseeing landmarks, island attractions, and day tours near Hotel Sunrise.",
    url: "https://www.hotelsunriseandaman.com/experiences",
    type: "website",
  },
};

export default function Page() {
  return <ExperiencesClient />;
}
