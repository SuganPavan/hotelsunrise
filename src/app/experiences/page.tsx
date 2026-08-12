import { Metadata } from "next";
import ExperiencesClient from "./ExperiencesClient";

export const metadata: Metadata = {
  title: "Andaman Local Sightseeing & Activities | Hotel Sunrise",
  description:
    "Plan your local Andaman excursions and sightseeing activities. Explore historic landmarks, island ruins, diving reefs, and nature parks from our centrally located hotel.",
  alternates: {
    canonical: "https://hotelsunrise.com/experiences",
  },
  openGraph: {
    title: "Andaman Local Sightseeing & Activities | Hotel Sunrise",
    description:
      "Plan your local Andaman excursions and sightseeing activities. Explore historic landmarks, island ruins, diving reefs, and nature parks from our centrally located hotel.",
    url: "https://hotelsunrise.com/experiences",
    type: "website",
  },
};

export default function Page() {
  return <ExperiencesClient />;
}
