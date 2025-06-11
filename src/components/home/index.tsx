"use client"

import { Shield, Truck, Globe, Headphones} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { HeroSlider } from './HeroSlider'
import { Header } from '../header'
import { Footer } from '../footer'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-red-900 via-brown-900 to-pink-900 text-white overflow-hidden min-h-[600px] flex items-center">
				{/* Fondo decorativo */}
				<div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-30 rounded-full blur-3xl z-0"></div>
				<div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-green-400 opacity-20 rounded-full blur-2xl z-0"></div>
				
				{/* Slider */}
				<div className="relative z-10 w-full">
					<HeroSlider />
				</div>
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
								category: 'LAPTOPS',
								name: 'ASUS ROG Zephyrus G14 14"',
								price: 'S/ 5000',
								originalPrice: 'S/ 5,099',
								image: '/productos/header_ofert1.png?height=300&width=300'
							},
							{
								category: 'LAPTOPS',
								name: 'VICTUS Gaming 15.6 FHD',
								price: 'S/ 5400',
								originalPrice: 'S/ 5700',
								image: '/productos/header_ofert2.png?height=300&width=300'
							},
							{
								category: 'LAPTOPS',
								name: 'NITRO 5 Gaming 15.6 FHD',
								price: 'S/ 4000',
								originalPrice: 'S/ 4,500',
								image: '/productos/header_ofert3.png?height=300&width=300'
							},
							{
								category: 'PC GAMING',
								name: 'PC Gamer AMD Ryzen 5 5600X',
								price: 'S/ 3200',
								originalPrice: 'S/ 4,000',
								image: '/productos/headofert1.png?height=300&width=300'
							},
							{
								category: 'SILLAS GAMING', 
								name: 'Silla Gaming DXRacer Racing Series',
								price: 'S/ 399',
								originalPrice: 'S/ 499',
								image: '/productos/sillas/silla3.png?height=300&width=300'
							},
							{
								category: 'SILLAS GAMING',
								name: 'Silla Gaming DXRacer Formula Series',
								price: 'S/ 79',
								originalPrice: 'S/ 99',
								image: '/productos/sillas/silla1.png?height=300&width=300'
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
			<section className="py-16 bg-gradient-to-r from-red-900 to-red-600 text-white">
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
					{
					name: 'Smartphone Xiaomi Redmi Note 12 Pro',
					price: '$299.00',
					category: 'SMARTPHONES',
					image: '/productos/audifonos/audifono1.png?height=150&width=150'
					},
					{
					name: 'Carga Inalámbrica Belkin BoostCharge',
					price: '$199.00',
					category: 'AURICULARES',
					image: '/productos/audifonos/audifono2.png?height=150&width=150'
					},
					{
					name: 'Laptop HP Victus Gaming 15.6',
					price: '$899.00',
					category: 'TABLETS',
					image: '/productos/audifonos/audifono3.png?height=150&width=150'
					},
					{
					name: 'Juego de 4K Resident Evil 4',
					price: '$1,099.00',
					category: 'JUEGOS DE 4K',
					image: '/productos/audifonos/audifono4.png?height=150&width=150'
					},
					{
					name: 'Mochila Targus CityGear',
					price: '$49.00',
					category: 'MOCHILAS',
					image: '/productos/audifonos/audifono5.png?height=150&width=150'
					},
					{
					name: 'Mochila Targus CityGear',
					price: '$39.00',
					category: 'MOCHILAS',
					image: '/productos/audifonos/audifono6.png?height=150&width=150'
					}
				].map((item, index) => (
					<Card key={index} className="group hover:shadow-lg transition-shadow">
					<CardContent className="p-4 ">
						<div className="aspect-square mb-3 bg-gray-100 rounded-lg">
						<img
							src={item.image}
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
								src="/public/inicio/team.png?height=200&width=200"
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
			<Footer/>
		</div>
	)
}
