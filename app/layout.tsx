import { Navbar } from "@/app/components/Navbar"
import "./globals.css"

export const metadata = {
  title: "Wiki",
  description: "A Wikipedia Search",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
