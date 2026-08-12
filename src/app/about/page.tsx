import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Hotel Sunrise Sri Vijaya Puram Andaman",
  description:
    "Discover the story of Hotel Sunrise, a premium welcoming hotel in Sri Vijaya Puram (Port Blair), Andaman. Learn about our central Aberdeen Bazaar location, clean accommodations, and local hospitality.",
  alternates: {
    canonical: "https://hotelsunrise.com/about",
  },
  openGraph: {
    title: "About Us | Hotel Sunrise Sri Vijaya Puram Andaman",
    description:
      "Discover the story of Hotel Sunrise, a premium welcoming hotel in Sri Vijaya Puram (Port Blair), Andaman. Learn about our central Aberdeen Bazaar location, clean accommodations, and local hospitality.",
    url: "https://hotelsunrise.com/about",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}
