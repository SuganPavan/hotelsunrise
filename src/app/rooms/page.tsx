import { Metadata } from "next";
import RoomsClient from "./RoomsClient";

export const metadata: Metadata = {
  title: "Comfortable Hotel Rooms & Rates | Hotel Sunrise Sri Vijaya Puram",
  description:
    "Explore our range of clean and budget-friendly accommodations at Hotel Sunrise, Sri Vijaya Puram. Check amenities and competitive rates for Double Non-AC, Double AC, and Family rooms.",
  alternates: {
    canonical: "https://hotelsunrise.com/rooms",
  },
  openGraph: {
    title: "Comfortable Hotel Rooms & Rates | Hotel Sunrise Sri Vijaya Puram",
    description:
      "Explore our range of clean and budget-friendly accommodations at Hotel Sunrise, Sri Vijaya Puram. Check amenities and competitive rates for Double Non-AC, Double AC, and Family rooms.",
    url: "https://hotelsunrise.com/rooms",
    type: "website",
  },
};

export default function Page() {
  return <RoomsClient />;
}
