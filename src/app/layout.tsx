import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { db } from "~/server/db";

const page = await db.pages.findFirst({
  where: { name: "villa-holidays" },
  select: { title: true, description: true },
});

export const metadata: Metadata = {
  title: page?.title,
  description: page?.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-[#E6F1F8]">
        {children}
      </body>
    </html>
  );
}
