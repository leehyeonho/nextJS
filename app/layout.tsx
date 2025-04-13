import "../styles/global.css"

import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | BEST SELLER EXPLORER",
    default: "BEST SELLER EXPLORER",
  },
  description: "THE NEW YORK TIMES BEST SELLER EXPLORER",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}