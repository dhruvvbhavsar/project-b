import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Project B",
  description: "project b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
