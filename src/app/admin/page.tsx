import { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin Portal | Hotel Sunrise",
  description: "Secure administrative management dashboard for Hotel Sunrise rates and gallery.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <AdminClient />;
}
