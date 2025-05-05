"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"

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
              FITNESS<span className="text-red-600">ELITE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white hover:text-red-500 transition-colors">
              Nosotros
            </Link>
            <Link href="/programas" className="text-white hover:text-red-500 transition-colors">
              Programas
            </Link>
            <Link href="/entrenadores" className="text-white hover:text-red-500 transition-colors">
              Entrenadores
            </Link>
            <Link href="/blog" className="text-white hover:text-red-500 transition-colors">
              Blog
            </Link>
            <Link href="/contacto" className="text-white hover:text-red-500 transition-colors">
              Contacto
            </Link>

            {isLoggedIn ? (
              <Link href="/cuenta" className="text-white hover:text-red-500 transition-colors">
                <User size={20} />
              </Link>
            ) : (
              <>
                <Link href="/iniciar-sesion" className="text-white hover:text-red-500 transition-colors">
                  Iniciar Sesión
                </Link>
                <Link href="/unirse" className="btn-primary">
                  Únete Ahora
                </Link>
              </>
            )}

            {/* Botón para demostración - en una app real esto no existiría */}
            <button
              onClick={toggleLogin}
              className="text-xs text-zinc-500 hover:text-zinc-400 border border-zinc-800 px-2 py-1 rounded"
            >
              {isLoggedIn ? "Simular Cierre" : "Simular Inicio"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link href="/" className="text-white hover:text-red-500 transition-colors py-2">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white hover:text-red-500 transition-colors py-2">
              Nosotros
            </Link>
            <Link href="/programas" className="text-white hover:text-red-500 transition-colors py-2">
              Programas
            </Link>
            <Link href="/entrenadores" className="text-white hover:text-red-500 transition-colors py-2">
              Entrenadores
            </Link>
            <Link href="/blog" className="text-white hover:text-red-500 transition-colors py-2">
              Blog
            </Link>
            <Link href="/contacto" className="text-white hover:text-red-500 transition-colors py-2">
              Contacto
            </Link>

            {isLoggedIn ? (
              <Link href="/cuenta" className="text-white hover:text-red-500 transition-colors py-2 flex items-center">
                <User size={20} className="mr-2" /> Mi Cuenta
              </Link>
            ) : (
              <>
                <Link href="/iniciar-sesion" className="text-white hover:text-red-500 transition-colors py-2">
                  Iniciar Sesión
                </Link>
                <Link href="/unirse" className="btn-primary inline-block text-center">
                  Únete Ahora
                </Link>
              </>
            )}

            {/* Botón para demostración - en una app real esto no existiría */}
            <button
              onClick={toggleLogin}
              className="text-xs text-zinc-500 hover:text-zinc-400 border border-zinc-800 px-2 py-1 rounded self-start"
            >
              {isLoggedIn ? "Simular Cierre" : "Simular Inicio"}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
