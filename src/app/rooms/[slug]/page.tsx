import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { ROOMS_DATA, RoomData } from "@/data/rooms";
import RoomDetailClient from "./RoomDetailClient";

export const dynamic = "force-dynamic";

function getRoomBySlug(slug: string): RoomData | undefined {
  try {
    const filePath = path.join(process.cwd(), 'src/data/rooms.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const rooms = JSON.parse(fileData);
    return rooms[slug];
  } catch (error) {
    return ROOMS_DATA[slug];
  }
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(ROOMS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) {
    return {
      title: "Room Not Found | Hotel Sunrise Andaman",
    };
  }

  let title = `${room.name} | Hotel Sunrise Sri Vijaya Puram`;
  let description = room.description;

  if (slug === "double-bedroom-ac") {
    title = "AC Double Room in Port Blair | Hotel Sunrise Andaman";
    description = "Book our comfortable AC double room in Port Blair. Hotel Sunrise offers clean, modern amenities, private bathroom, and free Wi-Fi near Aberdeen Bazaar.";
  } else if (slug === "double-bedroom-non-ac") {
    title = "Non-AC Double Room in Port Blair | Hotel Sunrise Andaman";
    description = "Stay in our budget-friendly Non-AC double room in Port Blair. Ideal for couples and travellers seeking clean, comfortable lodging at affordable rates.";
  } else if (slug === "family-room-ac") {
    title = "Family Room in Port Blair | Family Accommodation | Hotel Sunrise";
    description = "Spacious AC family room in Port Blair. Hotel Sunrise provides clean, comfortable family accommodation for up to 4 adults near Aberdeen Bazaar.";
  }

  const canonicalUrl = `https://www.hotelsunriseandaman.com/rooms/${room.slug}`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      images: [
        {
          url: room.image,
          width: 1200,
          height: 630,
          alt: room.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [room.image],
    },
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.hotelsunriseandaman.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Accommodations",
        "item": "https://www.hotelsunriseandaman.com/rooms"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": room.name,
        "item": `https://www.hotelsunriseandaman.com/rooms/${room.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RoomDetailClient room={room} />
    </>
  );
}
