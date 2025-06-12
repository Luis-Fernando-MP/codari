import { useState } from 'react'
import { BugIcon, FigmaIcon, GithubIcon, PhoneIcon, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="border-b border-gray-200 sticky top-0 z-10 bg-background">
			{/* First Navigation Row */}
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="rounded flex items-center justify-center">
							<img src="/logo.svg" alt="codari logo" width={30} height={30} />
						</div>
						<span className="text-xl font-bold">CODARI</span>
					</div>

					{/* Desktop nav */}
					<nav className="hidden lg:flex space-x-8">
						<a href="/" className="text-gray-700 hover:text-primary font-medium">
							Inicio
						</a>
						<a href="/productos" className="text-gray-700 hover:text-primary font-medium">
							Productos
						</a>
						<a href="/contacto" className="text-gray-600 hover:text-primary font-medium">
							Contáctenos
						</a>
					</nav>

					{/* Mobile menu button */}
					<button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menú">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>

					<div className="flex items-center space-x-3">
						<Button variant="ghost" size="icon" className="w-8 h-8">
							<BugIcon />
						</Button>
						<Button variant="ghost" size="icon" className="w-8 h-8">
							<FigmaIcon />
						</Button>
						<Button variant="ghost" size="icon" className="w-8 h-8">
							<GithubIcon />
						</Button>
					</div>
				</div>
			</div>

			{/* Menú móvil */}
			{mobileMenuOpen && (
				<nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
					<a href="/" className="block text-gray-700 hover:text-primary font-medium">
						Inicio
					</a>
					<a href="/product" className="block text-gray-700 hover:text-primary font-medium">
						Productos
					</a>
					<a href="/Contact" className="block text-gray-600 hover:text-primary font-medium">
						Contáctanos
					</a>
				</nav>
			)}

			{/* Second Navigation Row */}
			<div className="bg-gray-50 border-t border-gray-200">
				<div className="container mx-auto px-4 py-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="bg-primary text-white px-2 py-1 rounded text-sm font-bold">-20%</div>
							<span className="text-sm text-gray-700">Aprovecha nuestras ofertas</span>
						</div>

						<div className="flex-1 max-w-md mx-4 lg:mx-8">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
								<Input placeholder="Buscar" className="pl-10 w-full bg-white border-gray-300" />
							</div>
						</div>

						<div className="hidden sm:flex items-center space-x-2 text-sm">
							<PhoneIcon />
							<span className="text-gray-700 font-medium">+51-909290190</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
