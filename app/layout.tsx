import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = { title: "Members Shisanyama | Good meat. Good people.", description: "Fire-grilled chisa nyama, pap, rice and homemade sides in Benoni." }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
