import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Hotel Sunrise Port Blair Contact & Booking Enquiries",
  description:
    "Contact Hotel Sunrise Port Blair for direct room bookings, holiday inquiries, and travel planning. Get in touch with our local Andaman reception desk.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/contact",
  },
  openGraph: {
    title: "Hotel Sunrise Port Blair Contact & Booking Enquiries",
    description:
      "Contact Hotel Sunrise Port Blair for direct room bookings, holiday inquiries, and travel planning. Get in touch with our local Andaman reception desk.",
    url: "https://www.hotelsunriseandaman.com/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}
