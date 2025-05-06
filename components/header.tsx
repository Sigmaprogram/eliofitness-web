"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Simulamos el estado de autenticación (en una aplicación real, esto vendría de un contexto de autenticación)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para simular inicio/cierre de sesión (solo para demostración)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              ELIO FITNESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="text-white hover:text-red-500 transition-colors">
              Nosotros
            </Link>
            <Link href="/programs" className="text-white hover:text-red-500 transition-colors">
              Programas
            </Link>
            <Link href="/trainers" className="text-white hover:text-red-500 transition-colors">
              Entrenadores
            </Link>
            <Link href="/blog" className="text-white hover:text-red-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
              Contacto
            </Link>

            {isLoggedIn ? (
              <Link href="/account" className="text-white hover:text-red-500 transition-colors">
                👤
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-white hover:text-red-500 transition-colors">
                  Iniciar Sesión
                </Link>
                <Link href="/join" className="btn-primary">
                  Únete Ahora
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-zinc-800 p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-red-500 transition-colors">
                Inicio
              </Link>
              <Link href="/about" className="text-white hover:text-red-500 transition-colors">
                Nosotros
              </Link>
              <Link href="/programs" className="text-white hover:text-red-500 transition-colors">
                Programas
              </Link>
              <Link href="/trainers" className="text-white hover:text-red-500 transition-colors">
                Entrenadores
              </Link>
              <Link href="/blog" className="text-white hover:text-red-500 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
                Contacto
              </Link>
              
              {isLoggedIn ? (
                <Link href="/account" className="text-white hover:text-red-500 transition-colors">
                  Mi Cuenta
                </Link>
              ) : (
                <>
                  <Link href="/login" className="text-white hover:text-red-500 transition-colors">
                    Iniciar Sesión
                  </Link>
                  <Link href="/join" className="btn-primary inline-block">
                    Únete Ahora
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
