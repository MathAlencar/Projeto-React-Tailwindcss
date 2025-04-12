import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="p-4 flex font-latoRegular">
        <Link to="/home">
          <img
            src="assets/logo/logo-libra-credito.png"
            alt="logo"
            className="mt-3"
            width="160"
            height="64"
            loading="eager"
            decoding="async"
          />
        </Link>
  
        <div className="flex justify-end text-center text-sm items-center w-full md:justify-end">
          <button
            type="button"
            className="md:hidden text-5xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes size={30} lassName="text-primary" />
            ) : (
              <FaBars size={30} className="text-primary" />
            )}
          </button>
  
          <ul className="hidden md:flex space-x-12 xl:text-3xl md:text-xl justify-end">
            <li className="mt-3">
              <Link to="/home">
                <p className="text-primary">Sobre nós</p>
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/clientes">
                <p className="text-primary">Blog</p>
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/clientes">
                <p className="text-primary">Seja parceiro</p>
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/simulacao">
                <p className="text-primary-red font-semibold">Simulação</p>
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Menu Mobile - Lateral */}
        <div
          className={`fixed top-[0px] right-0 w-64 h-[100%] bg-gray-900 text-white transform z-50 ${
            menuOpen ? 'translate-x-10' : 'translate-x-full'
          } transition-transform duration-300 md:hidden`}
        >
          <button
            type="button"
            className="p-4 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <ul className="p-4 space-y-4 bg-primary h-[100%]">
            <li>
              <Link to="/home" onClick={() => setMenuOpen(false)}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/clientes" onClick={() => setMenuOpen(false)}>
                Seja parceiro
              </Link>
            </li>
            <li>
              <Link to="/simulacao" onClick={() => setMenuOpen(false)}>
                <p>Simulação</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
