"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  return (
      <header className="fixed w-full z-50 bg-gradient-to-r from-blue-950/90 to-blue-900/90 backdrop-blur-md text-white shadow-lg shadow-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-200 hover:to-sky-300 transition-all duration-300"
            >
              Gromanka
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                  onClick={() => scrollToSection("o-nas")}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                O nás
              </button>
              <button
                  onClick={() => scrollToSection("predseda")}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                Predseda
              </button>
              <button
                  onClick={() => scrollToSection("hrabkov")}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                Hrabkov
              </button>
              <button
                  onClick={() => scrollToSection("aktivity")}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                Aktivity
              </button>
              <button
                  onClick={() => scrollToSection("galeria")}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                Galéria
              </button>
              <button
                  onClick={() => scrollToSection("clenstvo")}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                Členstvo
              </button>
              <Button
                  onClick={() => scrollToSection("kontakt")}
                  className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 hover:scale-105"
              >
                Kontakt
              </Button>
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
                <button
                    onClick={() => scrollToSection("o-nas")}
                    className="text-white/80 hover:text-white py-2 transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full text-left"
                >
                  O nás
                </button>
                <button
                    onClick={() => scrollToSection("predseda")}
                    className="text-white/80 hover:text-white py-2 transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full text-left"
                >
                  Predseda
                </button>
                <button
                    onClick={() => scrollToSection("hrabkov")}
                    className="text-white/80 hover:text-white py-2 transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full text-left"
                >
                  Hrabkov
                </button>
                <button
                    onClick={() => scrollToSection("aktivity")}
                    className="text-white/80 hover:text-white py-2 transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full text-left"
                >
                  Aktivity
                </button>
                <button
                    onClick={() => scrollToSection("galeria")}
                    className="text-white/80 hover:text-white py-2 transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full text-left"
                >
                  Galéria
                </button>
                <button
                    onClick={() => scrollToSection("clenstvo")}
                    className="text-white/80 hover:text-white py-2 transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full text-left"
                >
                  Členstvo
                </button>
                <Button onClick={() => scrollToSection("kontakt")} className="bg-sky-500 hover:bg-sky-600 w-full">
                  Kontakt
                </Button>
              </div>
            </nav>
        )}
      </header>
  )
}
