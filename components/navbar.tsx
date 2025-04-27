"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-blue-950/90 to-blue-900/90 backdrop-blur-md text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-sky-300">
            Gromanka
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#o-nas" className="text-white/80 hover:text-white transition-colors">
              O nás
            </Link>
            <Link href="#hrabkov" className="text-white/80 hover:text-white transition-colors">
              Hrabkov
            </Link>
            <Link href="#aktivity" className="text-white/80 hover:text-white transition-colors">
              Aktivity
            </Link>
            <Link href="#galeria" className="text-white/80 hover:text-white transition-colors">
              Galéria
            </Link>
            <Link href="#clenstvo" className="text-white/80 hover:text-white transition-colors">
              Členstvo
            </Link>
            <Button className="bg-sky-500 hover:bg-sky-600">Kontakt</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link href="#o-nas" className="text-white/80 hover:text-white py-2 transition-colors" onClick={toggleMenu}>
              O nás
            </Link>
            <Link
              href="#hrabkov"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Hrabkov
            </Link>
            <Link
              href="#aktivity"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Aktivity
            </Link>
            <Link
              href="#galeria"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Galéria
            </Link>
            <Link
              href="#clenstvo"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Členstvo
            </Link>
            <Button className="bg-sky-500 hover:bg-sky-600 w-full">Kontakt</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
