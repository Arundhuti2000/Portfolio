"use client"

import { useState, useEffect } from "react"
import { Twitter, Instagram } from "lucide-react" 

const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium hover:scale-110 transform"
  >
    {children}
  </button>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const isScrolledNow = scrollY > 50
      setIsScrolled(isScrolledNow)

      // Show/hide header based on scroll direction
      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down & past 100px - hide header
        setIsVisible(false)
      } else if (scrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      }

      // Always show header when at top
      if (scrollY < 50) {
        setIsVisible(true)
      }

      setLastScrollY(scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleButtonClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 max-w-6xl w-full px-16 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-full shadow-lg shadow-black/20 px-12 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white transition-all duration-500 hover:scale-125 transform cursor-default mr-12">
            AD.
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleButtonClick("home")}>Home</NavLink>
            <NavLink onClick={() => handleButtonClick("experience")}>Experience</NavLink>
            <NavLink onClick={() => handleButtonClick("skills")}>Skills</NavLink>
            <NavLink onClick={() => handleButtonClick("projects")}>Projects</NavLink>
            <NavLink onClick={() => handleButtonClick("contact")}>Contact</NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-12">
            <a
              href="https://x.com/ArundhutiDas2" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/honey2000_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-125 transform"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform ml-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg shadow-black/20 px-8 py-6">
          <div className="flex flex-col space-y-4">
            <NavLink onClick={() => handleButtonClick("home")}>Home</NavLink>
            <NavLink onClick={() => handleButtonClick("experience")}>Experience</NavLink>
            <NavLink onClick={() => handleButtonClick("skills")}>Skills</NavLink>
            <NavLink onClick={() => handleButtonClick("projects")}>Projects</NavLink>
            <NavLink onClick={() => handleButtonClick("contact")}>Contact</NavLink>

            {/* Mobile Social Media Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50 mt-4">
              <a
                href="https://x.com/ArundhutiDas2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/honey2000_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-125 transform"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header