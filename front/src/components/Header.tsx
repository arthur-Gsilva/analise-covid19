'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const Header = () => {

    const router = useRouter()

    return(
        <header className="w-full text-white">
            <nav className="flex w-full justify-between max-w-6xl mx-auto pt-8">
                <div className="flex items-center gap-4">
                    <Image 
                        src={'./virus-icon.svg'}
                        alt="virus"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-2xl">Análise do Covid-19</h1>
                </div>

                <div>
                    <ul className="flex items-center gap-14 text-xl">
                        <li 
                            className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={() => router.push('/')}
                        >
                            Previsão
                        </li>
                        <li 
                            className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={() => router.push('/paineis')}
                        >
                            Painéis
                        </li>
                        <li 
                            className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={() => router.push('/mapa')}
                        >
                            Mapa
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}