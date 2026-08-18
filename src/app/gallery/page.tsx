import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery | Hotel Sunrise Sri Vijaya Puram Andaman",
  description:
    "Browse through our photo gallery showcasing comfortable rooms, clean bathroom setups, local sightseeing attractions, white sand beaches, and exotic Andaman wildlife.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Hotel Sunrise Sri Vijaya Puram Andaman",
    description:
      "Browse through our photo gallery showcasing comfortable rooms, clean bathroom setups, local sightseeing attractions, white sand beaches, and exotic Andaman wildlife.",
    url: "https://www.hotelsunriseandaman.com/gallery",
    type: "website",
  },
};

export default function Page() {
  return <GalleryClient />;
}
