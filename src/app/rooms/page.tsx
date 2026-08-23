import { Metadata } from "next";
import RoomsClient from "./RoomsClient";

export const metadata: Metadata = {
  title: "Hotel Rooms in Port Blair | Hotel Sunrise Rooms & Rates",
  description:
    "Explore our hotel rooms in Port Blair. Hotel Sunrise offers clean, budget-friendly Double AC, Double Non-AC, and Family rooms near Aberdeen Bazaar.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/rooms",
  },
  openGraph: {
    title: "Hotel Rooms in Port Blair | Hotel Sunrise Rooms & Rates",
    description:
      "Explore our hotel rooms in Port Blair. Hotel Sunrise offers clean, budget-friendly Double AC, Double Non-AC, and Family rooms near Aberdeen Bazaar.",
    url: "https://www.hotelsunriseandaman.com/rooms",
    type: "website",
  },
};

export default function Page() {
  return <RoomsClient />;
}
