import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PACKAGES_DATA } from "@/data/packages";
import PackageDetailClient from "./PackageDetailClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(PACKAGES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = PACKAGES_DATA[slug];
  if (!pkg) {
    return {
      title: "Package Not Found | Hotel Sunrise Sri Vijaya Puram",
    };
  }

  const canonicalUrl = `https://www.hotelsunriseandaman.com/packages/${pkg.slug}`;

  return {
    title: `${pkg.title} | Hotel Sunrise | Andaman`,
    description: pkg.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${pkg.title} | Hotel Sunrise | Andaman`,
      description: pkg.description,
      url: canonicalUrl,
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | Hotel Sunrise | Andaman`,
      description: pkg.description,
      images: [pkg.image],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = PACKAGES_DATA[slug];
  if (!pkg) {
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
        "name": "Packages",
        "item": "https://www.hotelsunriseandaman.com/packages"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pkg.title,
        "item": `https://www.hotelsunriseandaman.com/packages/${pkg.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PackageDetailClient pkg={pkg} />
    </>
  );
}
