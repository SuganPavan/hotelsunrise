import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Hotel Sunrise Port Blair Photos | Room & Property Gallery",
  description:
    "Browse Hotel Sunrise Port Blair photos. View images of our clean accommodations, guest rooms, modern bathrooms, and close proximity to key Port Blair attractions.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/gallery",
  },
  openGraph: {
    title: "Hotel Sunrise Port Blair Photos | Room & Property Gallery",
    description:
      "Browse Hotel Sunrise Port Blair photos. View images of our clean accommodations, guest rooms, modern bathrooms, and close proximity to key Port Blair attractions.",
    url: "https://www.hotelsunriseandaman.com/gallery",
    type: "website",
  },
};

export default function Page() {
  return <GalleryClient />;
}
