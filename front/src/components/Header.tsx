'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="w-full text-white">
            <nav className="flex w-full justify-between max-w-6xl mx-auto pt-8 px-4">
                <div className="flex items-center gap-4">
                    <Image 
                        src={'./virus-icon.svg'}
                        alt="virus"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-xl md:text-2xl">Análise do Covid-19</h1>
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center gap-14 text-xl">
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href="/">Previsão</Link>
                        </li>
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href="/paineis">Painéis</Link>
                        </li>
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href="/mapa">Mapa</Link>
                        </li>
                    </ul>
                </div>

                <button 
                    className="md:hidden text-3xl cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                >
                    <FiMenu />
                </button>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 text-white transform transition-transform duration-300 z-50 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-end p-6">
                    <button 
                        className="text-3xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FiX />
                    </button>
                </div>

                <ul className="flex flex-col gap-8 text-xl px-6">
                    <li onClick={() => setMenuOpen(false)}>
                        <Link href="/">Previsão</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link href="/paineis">Painéis</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link href="/mapa">Mapa</Link>
                    </li>
                </ul>
            </div>

            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    )
}
