import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hotel Sunrise Sri Vijaya Puram Andaman",
  description:
    "Get in touch with the reservations team at Hotel Sunrise in Sri Vijaya Puram (Port Blair), Andaman. Submit a secure booking inquiry, view our location map, and contact our concierge.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/contact",
  },
  openGraph: {
    title: "Contact Us | Hotel Sunrise Sri Vijaya Puram Andaman",
    description:
      "Get in touch with the reservations team at Hotel Sunrise in Sri Vijaya Puram (Port Blair), Andaman. Submit a secure booking inquiry, view our location map, and contact our concierge.",
    url: "https://www.hotelsunriseandaman.com/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}
