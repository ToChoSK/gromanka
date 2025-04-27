import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "O.Z. Gromanka - Občianske združenie Hrabkov",
  description: "Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'