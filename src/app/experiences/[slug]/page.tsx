import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ATTRACTIONS } from "@/data/experiences";
import ExperienceDetailClient from "./ExperienceDetailClient";
import fs from "fs";
import path from "path";

// Helper to copy uploaded images in server context
function copyImages() {
  try {
    const srcDir = "C:\\Users\\sugan\\.gemini\\antigravity\\brain\\de305fed-f56e-4524-aebc-1b4f44d9e403";
    const destDir = path.join(process.cwd(), "public", "images", "experiences");
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    const filesToCopy = [
      { src: "media__1784797055514.jpg", dest: "mahatma-gandhi-marine-national-park.jpg" },
      { src: "media__1784799335242.jpg", dest: "mahatma-gandhi-marine-national-park.jpg" },
      { src: "media__1784798453023.jpg", dest: "north-bay.jpg" },
      { src: "media__1784797055515.jpg", dest: "cellular-jail.jpg" },
      { src: "media__1784797517457.jpg", dest: "cellular-jail.jpg" },
      { src: "media__1784797055529.jpg", dest: "ross-island.jpg" },
      { src: "media__1784797550049.jpg", dest: "ross-island.jpg" },
      { src: "media__1784798359112.jpg", dest: "chidiya-tapu.jpg" },
      { src: "media__1784801318825.jpg", dest: "cellular-jail-night.jpg" },
      { src: "media__1784801318849.jpg", dest: "cellular-jail-gallows.jpg" },
      { src: "media__1784801318947.jpg", dest: "cellular-jail-courtyard.jpg" },
      { src: "media__1784801319038.jpg", dest: "cellular-jail-cells.jpg" },
      { src: "media__1784801622896.jpg", dest: "cellular-jail-oilmill.jpg" },
      { src: "media__1784801622917.jpg", dest: "cellular-jail-flogging.jpg" }
    ];

    filesToCopy.forEach(item => {
      const srcPath = path.join(srcDir, item.src);
      const destPath = path.join(destDir, item.dest);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  } catch (e) {
    console.error("Temp image copy failed:", e);
  }
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(ATTRACTIONS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  copyImages();
  const { slug } = await params;
  const attraction = ATTRACTIONS[slug];
  if (!attraction) {
    return {
      title: "Experience Not Found | Hotel Sunrise Sri Vijaya Puram",
    };
  }

  const canonicalUrl = `https://www.hotelsunriseandaman.com/experiences/${attraction.slug}`;

  return {
    title: attraction.seo.title,
    description: attraction.seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: attraction.seo.title,
      description: attraction.seo.description,
      url: canonicalUrl,
      images: [
        {
          url: attraction.image,
          width: 1200,
          height: 630,
          alt: attraction.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: attraction.seo.title,
      description: attraction.seo.description,
      images: [attraction.image],
    },
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  copyImages();
  const { slug } = await params;
  const attraction = ATTRACTIONS[slug];
  if (!attraction) {
    notFound();
  }

  // Generate Breadcrumb and Tourist Attraction structured JSON-LD schemas
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
        "name": "Experiences",
        "item": "https://www.hotelsunriseandaman.com/experiences"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": attraction.name,
        "item": `https://www.hotelsunriseandaman.com/experiences/${attraction.slug}`
      }
    ]
  };

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": attraction.name,
    "description": attraction.description,
    "image": attraction.image,
    "touristType": attraction.quickInfo.suitableFor.join(", "),
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sri Vijaya Puram",
        "addressRegion": "Andaman & Nicobar Islands",
        "addressCountry": "IN"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": attraction.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <ExperienceDetailClient attraction={attraction} />
    </>
  );
}
