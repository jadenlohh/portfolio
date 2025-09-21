import { Outfit } from "next/font/google";
import "@/app/ui/global.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Jaden's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
