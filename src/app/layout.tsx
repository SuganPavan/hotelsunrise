import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelsunriseandaman.com"),
  title: "Hotel Sunrise | Comfort & Convenience | Sri Vijayapuram, Andaman",
  description:
    "Experience a premium, comfortable stay at Hotel Sunrise in Sri Vijayapuram, Andaman. Located at Babu Lane, Aberdeen Bazaar near ferry terminals and major attractions.",
  keywords: [
    "Hotel Sunrise Port Blair",
    "Hotel Sunrise Andaman",
    "Hotel in Port Blair",
    "Hotel in Sri Vijaya Puram",
    "Hotel near Aberdeen Bazaar",
    "Hotels in Port Blair",
    "Affordable hotel in Port Blair",
    "Family hotel in Port Blair",
    "luxury hotel sri vijaya puram",
    "premium hotel andaman",
    "best hotel in sri vijaya puram",
    "andaman comfortable stay",
    "hotel sunrise",
    "sri vijaya puram hotel",
  ],
  openGraph: {
    title: "Hotel Sunrise | Comfort & Convenience | Sri Vijaya Puram",
    description:
      "Your comfortable Andaman stay begins here. Escape to a welcoming city hotel in Sri Vijaya Puram.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-pearl text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
