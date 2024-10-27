import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import{db} from '~/server/db'

const page = await db.pages.findUnique({
  where: { name: 'homepage', id: 1 },
  select: {title: true, description: true}
})

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
      <body>{children}</body>
    </html>
  );
}
