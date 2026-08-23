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
      title: "Package Not Found | Hotel Sunrise Andaman",
    };
  }

  let title = `${pkg.title} | Hotel Sunrise | Andaman`;
  let description = pkg.description;

  if (slug === "honeymoon-package") {
    title = "Andaman Honeymoon Package | Romantic Getaway | Hotel Sunrise";
    description = "Book our romantic Andaman honeymoon package. Enjoy couples' rooms at Hotel Sunrise Port Blair, candlelit dinners, and excursions to Havelock & Neil Island.";
  } else if (slug === "family-package") {
    title = "Andaman Family Tour Package | Port Blair Vacation | Hotel Sunrise";
    description = "Create lasting memories with our Andaman family tour package. Hotel Sunrise offers family accommodation, private vehicle tours, and hassle-free ferry tickets.";
  } else if (slug === "explore-andaman") {
    title = "Andaman Tour Package | Explore Port Blair & Islands | Hotel Sunrise";
    description = "Explore the beauty of the islands with our custom Andaman tour package. Comfortable hotel stays in Port Blair and guided tours to historic Cellular Jail.";
  } else if (slug === "adventure-package") {
    title = "Andaman Adventure Package | Scuba, Snorkeling & Water Sports";
    description = "Thrill-seeking Andaman adventure package. Hotel Sunrise arranges water sports, scuba diving, snorkeling, and trekking excursions across Port Blair.";
  } else if (slug === "budget-traveller-package") {
    title = "Budget Andaman Package | Affordable Port Blair Tour | Hotel Sunrise";
    description = "Save on your island holiday with our budget Andaman package. Clean, comfortable rooms at Hotel Sunrise and affordable sightseeing tours.";
  }

  const canonicalUrl = `https://www.hotelsunriseandaman.com/packages/${pkg.slug}`;

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
      title: title,
      description: description,
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
