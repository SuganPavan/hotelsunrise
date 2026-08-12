import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelsunrise.com"),
  title: "Hotel Sunrise | Comfort & Convenience | Sri Vijayapuram, Andaman",
  description:
    "Experience a premium, comfortable stay at Hotel Sunrise in Sri Vijayapuram, Andaman. Located at Babu Lane, Aberdeen Bazaar near ferry terminals and major attractions.",
  keywords: [
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
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-pearl text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}

