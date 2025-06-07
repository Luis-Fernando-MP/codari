'use client'

import { Search, Shield, Truck, Globe, Headphones, BugIcon, FigmaIcon, GithubIcon, StoreIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { HeroSlider } from './HeroSlider'
import { APP } from '@/constants'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
		

			{/* Hero Slider Section */}
			<section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
				<HeroSlider />
			</section>

			{/* Best Offers Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Mejores Ofertas Del Día</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Ofertas que duran poco y valen mucho. Aprovecha las promociones más increíbles en tecnología de última generación.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								category: 'SMARTPHONES',
								name: 'Apple iPhone 15 Pro Smartphone',
								price: '$999.00',
								originalPrice: '$1,099.00',
								image: '/placeholder.svg?height=300&width=300'
							},
							{
								category: 'AURICULARES',
								name: 'Sony WH-1000XM4 Noise Cancelling',
								price: '$279.00',
								originalPrice: '$349.00',
								image: '/placeholder.svg?height=300&width=300'
							},
							{
								category: 'SMARTWATCH',
								name: 'Samsung Galaxy Watch4 Classic 46mm',
								price: '$299.00',
								originalPrice: '$399.00',
								image: '/placeholder.svg?height=300&width=300'
							},
							{
								category: 'LAPTOPS',
								name: 'Lenovo Legion 5 Pro Gaming 16',
								price: '$799.00',
								originalPrice: '$999.00',
								image: '/placeholder.svg?height=300&width=300'
							},
							{
								category: 'CÁMARA DE ACCIÓN',
								name: 'GoPro HERO11 Black 5.3K',
								price: '$399.00',
								originalPrice: '$499.00',
								image: '/placeholder.svg?height=300&width=300'
							},
							{
								category: 'CORSAIR',
								name: 'Corsair ST100 RGB Premium Digital',
								price: '$79.00',
								originalPrice: '$99.00',
								image: '/placeholder.svg?height=300&width=300'
							}
						].map((product, index) => (
							<Card key={index} className="group hover:shadow-lg transition-shadow">
								<CardContent className="p-6">
									<div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
										<img
											src={product.image || '/placeholder.svg'}
											alt={product.name}
											width={300}
											height={300}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform"
										/>
									</div>
									<div className="text-xs text-gray-500 mb-2">{product.category}</div>
									<h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
									<div className="flex items-center space-x-2">
										<span className="text-lg font-bold">{product.price}</span>
										<span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Technology Section */}
			<section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">LA TECNOLOGÍA TRANSFORMA VIDAS</h2>
					<p className="text-xl mb-8">
						LLEVAMOS LA INNOVACIÓN A CADA RINCÓN DEL
						<br />
						PERÚ
					</p>
				</div>
			</section>

			{/* Recommended Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8">RECOMENDADO PARA TI</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{[
							{ name: 'Smartphone Xiaomi Redmi Note 12 Pro', price: '$299.00', category: 'SMARTPHONES' },
							{ name: 'Carga Inalámbrica Belkin BoostCharge', price: '$199.00', category: 'AURICULARES' },
							{ name: 'Laptop HP Victus Gaming 15.6', price: '$899.00', category: 'TABLETS' },
							{ name: 'Juego de 4K Resident Evil 4', price: '$1,099.00', category: 'JUEGOS DE 4K' },
							{ name: 'Mochila Targus CityGear', price: '$49.00', category: 'MOCHILAS' },
							{ name: 'Mochila Targus CityGear', price: '$39.00', category: 'MOCHILAS' }
						].map((item, index) => (
							<Card key={index} className="group hover:shadow-lg transition-shadow">
								<CardContent className="p-4">
									<div className="aspect-square mb-3 bg-gray-100 rounded-lg">
										<img
											src="/placeholder.svg?height=150&width=150"
											alt={item.name}
											width={150}
											height={150}
											className="w-full h-full object-cover rounded-lg"
										/>
									</div>
									<div className="text-xs text-gray-500 mb-1">{item.category}</div>
									<h3 className="text-sm font-medium mb-2 line-clamp-2">{item.name}</h3>
									<div className="text-lg font-bold">{item.price}</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<div className="mb-8">
							<img
								src="/placeholder.svg?height=200&width=200"
								alt="Team"
								width={200}
								height={200}
								className="mx-auto rounded-full"
							/>
						</div>
						<h2 className="text-3xl font-bold mb-6">¿Quienes Somos?</h2>
						<p className="text-gray-600 leading-relaxed mb-8">
							En Codari, somos más que una tienda de tecnología. Somos una familia apasionada por la innovación y comprometida con
							brindar las mejores soluciones tecnológicas a nuestros clientes. Desde nuestros inicios, hemos trabajado
							incansablemente para convertirnos en el destino preferido para aquellos que buscan calidad, variedad y excelencia en
							productos tecnológicos.
						</p>
						<p className="text-gray-600 leading-relaxed">
							Nuestro equipo está formado por expertos en tecnología que entienden las necesidades del mercado actual y se
							mantienen al día con las últimas tendencias. Creemos que la tecnología debe ser accesible para todos, por eso
							ofrecemos una amplia gama de productos que van desde smartphones y laptops hasta accesorios y gadgets innovadores,
							siempre con la garantía de calidad que nos caracteriza.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Shield,
								title: 'Pago Seguro',
								description: 'Tus compras están protegidas con los más altos estándares de seguridad.'
							},
							{
								icon: Truck,
								title: 'Compra Con Confianza',
								description: 'Productos de calidad y garantía en cada compra.'
							},
							{
								icon: Globe,
								title: 'Envío en todo el Mundo',
								description: 'Recibe tu pedido donde estés, rápido, seguro, confiable y económico.'
							},
							{
								icon: Headphones,
								title: 'Soporte 24/6',
								description: 'Estamos aquí para ayudarte todos los días de la semana.'
							}
						].map((feature, index) => (
							<div key={index} className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<feature.icon className="w-8 h-8 text-blue-600" />
								</div>
								<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
								<p className="text-gray-600 text-sm">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
							<p className="text-gray-600 leading-relaxed">
								Brindar acceso a productos tecnológicos de vanguardia que mejoren la calidad de vida de nuestros clientes,
								ofreciendo una experiencia de compra excepcional respaldada por un servicio al cliente de primera clase y precios
								competitivos que hagan la tecnología accesible para todos.
							</p>
						</div>
						<div className="text-center">
							<h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
							<p className="text-gray-600 leading-relaxed">
								Ser reconocidos como la empresa líder en retail tecnológico en Latinoamérica, destacándonos por nuestra capacidad
								de anticipar las necesidades del mercado, nuestra excelencia en el servicio al cliente y nuestro compromiso con la
								innovación constante. Aspiramos a ser el puente que conecte a las personas con la tecnología del futuro,
								contribuyendo al desarrollo digital de nuestra sociedad.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
									<span className="text-white text-xs font-bold">$</span>
								</div>
								<span className="text-xl font-bold text-gray-900">CODARI</span>
							</div>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-gray-900">Empresa</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-gray-900">
										Productos
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Precios
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Contacto
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-gray-900">Más Info</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-gray-900">
										Servicios
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Soporte
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Digital
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-gray-900">Recursos</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-gray-900">
										Digital
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Ayuda
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Soporte
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
