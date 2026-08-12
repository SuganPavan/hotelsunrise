import roomsJson from "./rooms.json";

export interface RoomData {
  slug: string;
  name: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;
  amenities: string[];
  specs: {
    size: string;
    occupancy: string;
    view: string;
    bedding: string;
  };
  features: {
    title: string;
    desc: string;
    image: string;
  }[];
  gallery: string[];
}

export const ROOMS_DATA: Record<string, RoomData> = roomsJson;

