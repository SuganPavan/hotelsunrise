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
      title: "Room Not Found | Hotel Sunrise Sri Vijaya Puram",
    };
  }

  const canonicalUrl = `https://hotelsunrise.com/rooms/${room.slug}`;

  return {
    title: `${room.name} | Hotel Sunrise Sri Vijaya Puram`,
    description: room.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${room.name} | Hotel Sunrise Sri Vijaya Puram`,
      description: room.description,
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
      title: `${room.name} | Hotel Sunrise Sri Vijaya Puram`,
      description: room.description,
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
        "item": "https://hotelsunrise.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Accommodations",
        "item": "https://hotelsunrise.com/rooms"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": room.name,
        "item": `https://hotelsunrise.com/rooms/${room.slug}`
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
