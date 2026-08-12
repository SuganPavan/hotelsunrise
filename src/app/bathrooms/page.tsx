import { Metadata } from "next";
import BathroomsClient from "./BathroomsClient";

export const metadata: Metadata = {
  title: "Ensuite Bathroom Facilities | Hotel Sunrise Sri Vijaya Puram",
  description:
    "View our clean, well-maintained ensuite bathroom setups at Hotel Sunrise. Features include modern sanitation fittings, continuous hot water geysers, and large wall mirrors.",
  alternates: {
    canonical: "https://hotelsunrise.com/bathrooms",
  },
  openGraph: {
    title: "Ensuite Bathroom Facilities | Hotel Sunrise Sri Vijaya Puram",
    description:
      "View our clean, well-maintained ensuite bathroom setups at Hotel Sunrise. Features include modern sanitation fittings, continuous hot water geysers, and large wall mirrors.",
    url: "https://hotelsunrise.com/bathrooms",
    type: "website",
  },
};

export default function Page() {
  return <BathroomsClient />;
}
