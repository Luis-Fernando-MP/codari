import { useState } from 'react'
import { BugIcon, FigmaIcon, GithubIcon, PhoneIcon, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('🔍 Searching for:', searchTerm)
        if (searchTerm.trim()) {
            window.location.href = `/buscar?q=${encodeURIComponent(searchTerm.trim())}`
        }
    }

    return (
        <header className="border-b border-gray-200 sticky top-0 z-10 bg-background">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center space-x-2">
                        <div className="rounded flex items-center justify-center">
                            <img src="/logo.svg" alt="codari logo" width={30} height={30} />
                        </div>
                        <span className="text-xl font-bold">CODARI</span>
                    </a>

                    <nav className="hidden lg:flex space-x-8">
                        <a href="/" className="text-gray-700 hover:text-primary font-medium">Inicio</a>
                        <a href="/productos" className="text-gray-700 hover:text-primary font-medium">Productos</a>
                        <a href="/contacto" className="text-gray-600 hover:text-primary font-medium">Contáctenos</a>
                        <a href="/nosotros" className="text-gray-600 hover:text-primary font-medium">Nosotros</a>
                    </nav>

                    <button 
                        className="lg:hidden p-2" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="hidden sm:flex items-center space-x-3">
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                            <BugIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                            <FigmaIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                            <GithubIcon className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
                    <a href="/" className="block text-gray-700 hover:text-primary font-medium">Inicio</a>
                    <a href="/productos" className="block text-gray-700 hover:text-primary font-medium">Productos</a>
                    <a href="/contacto" className="block text-gray-600 hover:text-primary font-medium">Contáctenos</a>
                    <a href="/nosotros" className="block text-gray-600 hover:text-primary font-medium">Nosotros</a>
                </nav>
            )}

            <div className="bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                            <div className="bg-primary text-white px-2 py-1 rounded text-sm font-bold">-20%</div>
                            <span className="text-sm text-gray-700">Aprovecha nuestras ofertas</span>
                        </div>

                        <div className="w-full sm:flex-1 sm:max-w-md sm:mx-4 lg:mx-8 mb-2 sm:mb-0">
                            <form action="/buscar" method="GET" className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Search className="w-5 h-5" />
                                </span>
                                <Input
                                    type="text"
                                    name="q"
                                    placeholder="Buscar productos..."
                                    className="pl-10 pr-20 w-full bg-white border border-gray-300 rounded h-10"
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3 bg-orange-500 text-white rounded"
                                >
                                    Buscar
                                </Button>
                            </form>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                            <PhoneIcon className="w-4 h-4" />
                            <span className="text-gray-700 font-medium">+51-909290190</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}