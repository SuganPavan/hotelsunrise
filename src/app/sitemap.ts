import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hotelsunrise.com";
  const lastModified = new Date();

  const routes = [
    // Core Pages
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/about", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/gallery", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/wildlife", priority: 0.8, changeFrequency: "weekly" as const },

    // Accommodations
    { url: "/rooms", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/bathrooms", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/rooms/double-bedroom-non-ac", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/rooms/double-bedroom-ac", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/rooms/family-room-ac", priority: 0.8, changeFrequency: "weekly" as const },

    // Travel Packages
    { url: "/packages", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/packages/honeymoon-package", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/packages/family-package", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/packages/explore-andaman", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/packages/adventure-package", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/packages/budget-traveller-package", priority: 0.8, changeFrequency: "weekly" as const },

    // Experiences
    { url: "/experiences", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/experiences/cellular-jail", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/ross-island", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/north-bay-island", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/chidiya-tapu", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/mahatma-gandhi-marine-national-park", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/mount-harriet", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/corbyns-cove-beach", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/chatham-saw-mill", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/wandoor-beach", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experiences/samudrika-museum", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
