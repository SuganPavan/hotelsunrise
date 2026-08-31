import { Metadata } from "next";
import BazaarGuideClient from "./BazaarGuideClient";

export const metadata: Metadata = {
  title: "Aberdeen Bazaar Port Blair Guide | Shops & Restaurants | Hotel Sunrise",
  description:
    "Explore Aberdeen Bazaar in Port Blair (Sri Vijaya Puram). Our neighborhood guide covers local handicraft shopping, Annapurna cafeteria dining, and transit tips.",
  alternates: {
    canonical: "https://www.hotelsunriseandaman.com/aberdeen-bazaar-guide",
  },
  openGraph: {
    title: "Aberdeen Bazaar Port Blair Guide | Shops & Restaurants | Hotel Sunrise",
    description:
      "Explore Aberdeen Bazaar in Port Blair (Sri Vijaya Puram). Our neighborhood guide covers local handicraft shopping, Annapurna cafeteria dining, and transit tips.",
    url: "https://www.hotelsunriseandaman.com/aberdeen-bazaar-guide",
    type: "website",
  },
};

export default function Page() {
  return <BazaarGuideClient />;
}
