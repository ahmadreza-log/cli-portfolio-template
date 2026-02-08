import type { Metadata } from "next";
import Font from 'next/font/local'
import "./globals.css"

const font = Font({
  src: '../../public/fonts/consolas.woff2'
})

export const metadata: Metadata = {
  title: "CLI Portfolio Template",
  description: "A Creative Portfolio For Coders.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-black text-green-400 ${font.className} text-xl tracking-widest`}>
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
