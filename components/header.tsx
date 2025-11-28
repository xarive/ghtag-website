"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"

export function Header() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 border-b border-black/5 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center gap-3.5">
        <Image src="/images/logo.png" alt="GH TAG logo" width={54} height={54} className="h-[54px] w-auto" />
        <div>
          <h1 className="m-0 text-lg font-bold">GH TAG SDN. BHD.</h1>
          <p className="m-0 text-xs text-gray-500">Consulting Mechanical and Electrical Engineers</p>
        </div>
      </div>

      <button
        className="md:hidden bg-transparent border-none text-2xl"
        aria-label="Menu"
        onClick={() => setNavOpen(!navOpen)}
      >
        <Menu />
      </button>

      <nav
        className={`${navOpen ? "flex" : "hidden"} md:flex gap-6 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row p-4 md:p-0 border-b md:border-none border-black/5`}
      >
        <a href="#services" className="font-semibold text-gray-600 hover:text-[#00A651] no-underline relative group">
          Services
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00A651] transition-all duration-300 group-hover:w-2/5" />
        </a>
        <a href="#team" className="font-semibold text-gray-600 hover:text-[#00A651] no-underline relative group">
          Team
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00A651] transition-all duration-300 group-hover:w-2/5" />
        </a>
        <a href="#contact" className="font-semibold text-gray-600 hover:text-[#00A651] no-underline relative group">
          Contact
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00A651] transition-all duration-300 group-hover:w-2/5" />
        </a>
        <a href="#clientele" className="font-semibold text-gray-600 hover:text-[#00A651] no-underline relative group">
          Clientele
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00A651] transition-all duration-300 group-hover:w-2/5" />
        </a>
      </nav>
    </header>
  )
}
