import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Hotel Sunrise Andaman | Our Story & Hotel in Port Blair",
  description:
    "Learn about Hotel Sunrise Andaman. Centrally located in Port Blair near Aberdeen Bazaar, we offer comfortable family-friendly rooms for your island vacation.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/about",
  },
  openGraph: {
    title: "Hotel Sunrise Andaman | Our Story & Hotel in Port Blair",
    description:
      "Learn about Hotel Sunrise Andaman. Centrally located in Port Blair near Aberdeen Bazaar, we offer comfortable family-friendly rooms for your island vacation.",
    url: "https://www.hotelsunriseandaman.com/about",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}
