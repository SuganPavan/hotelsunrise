import { Metadata } from "next";
import WildlifeClient from "./WildlifeClient";

export const metadata: Metadata = {
  title: "Andaman Wildlife Guide | Hotel Sunrise Sri Vijaya Puram",
  description:
    "Explore the unique and endemic wildlife of the Andaman Islands. Find spotting locations and ecological information for Geckos, Sea Turtles, Pit Vipers, and Dugongs.",
  alternates: {
    canonical: "https://hotelsunrise.com/wildlife",
  },
  openGraph: {
    title: "Andaman Wildlife Guide | Hotel Sunrise Sri Vijaya Puram",
    description:
      "Explore the unique and endemic wildlife of the Andaman Islands. Find spotting locations and ecological information for Geckos, Sea Turtles, Pit Vipers, and Dugongs.",
    url: "https://hotelsunrise.com/wildlife",
    type: "website",
  },
};

export default function Page() {
  return <WildlifeClient />;
}
