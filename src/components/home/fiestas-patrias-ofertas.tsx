'use client'

import { Star, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState, useEffect } from 'react'

export function FiestasPatriasOfertas() {
	const [timeLeft, setTimeLeft] = useState({
		days: 15,
		hours: 8,
		minutes: 45,
		seconds: 30
	})

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev.seconds > 0) {
					return { ...prev, seconds: prev.seconds - 1 }
				} else if (prev.minutes > 0) {
					return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
				} else if (prev.hours > 0) {
					return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
				} else if (prev.days > 0) {
					return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
				}
				return prev
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const patriasOffers = [
		{
			name: 'iPhone 15 Pro Max 256GB',
			price: '$999',
			originalPrice: '$1,299',
			discount: 23,
			brand: 'Apple',
			rating: 5,
			reviews: 234,
			image: '/placeholder.svg?height=300&width=300',
			stock: 5,
			isLimitedTime: true
		},
		{
			name: 'MacBook Air M2 512GB',
			price: '$1,199',
			originalPrice: '$1,499',
			discount: 20,
			brand: 'Apple',
			rating: 5,
			reviews: 189,
			image: '/placeholder.svg?height=300&width=300',
			stock: 3,
			isLimitedTime: true
		},
		{
			name: 'Samsung Galaxy S24 Ultra',
			price: '$899',
			originalPrice: '$1,199',
			discount: 25,
			brand: 'Samsung',
			rating: 4,
			reviews: 156,
			image: '/placeholder.svg?height=300&width=300',
			stock: 8,
			isLimitedTime: true
		},
		{
			name: 'Sony WH-1000XM5 Headphones',
			price: '$299',
			originalPrice: '$399',
			discount: 25,
			brand: 'Sony',
			rating: 5,
			reviews: 298,
			image: '/placeholder.svg?height=300&width=300',
			stock: 12,
			isLimitedTime: true
		}
	]

	return (
		<section className="py-16 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-white to-red-600"></div>
			<div className="absolute top-4 left-8 text-6xl opacity-10">🇵🇪</div>
			<div className="absolute top-12 right-12 text-4xl opacity-10">🎉</div>
			<div className="absolute bottom-8 left-16 text-5xl opacity-10">🎊</div>

			<div className="container mx-auto px-4 relative">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex items-center justify-center mb-6">
						<div className="text-6xl mr-4">🇵🇪</div>
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">¡OFERTAS FIESTAS PATRIAS!</h2>
							<p className="text-xl text-gray-700">Celebra con los mejores descuentos del año</p>
						</div>
						<div className="text-6xl ml-4">🎉</div>
					</div>

					{/* Countdown Timer */}
					<div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-red-200">
						<div className="flex items-center justify-center mb-4">
							<Clock className="w-6 h-6 text-red-600 mr-2" />
							<span className="text-lg font-semibold text-gray-800">Tiempo restante:</span>
						</div>
						<div className="grid grid-cols-4 gap-2 text-center">
							<div className="bg-red-600 text-white rounded-lg p-3">
								<div className="text-2xl font-bold">{timeLeft.days}</div>
								<div className="text-xs">DÍAS</div>
							</div>
							<div className="bg-red-600 text-white rounded-lg p-3">
								<div className="text-2xl font-bold">{timeLeft.hours}</div>
								<div className="text-xs">HORAS</div>
							</div>
							<div className="bg-red-600 text-white rounded-lg p-3">
								<div className="text-2xl font-bold">{timeLeft.minutes}</div>
								<div className="text-xs">MIN</div>
							</div>
							<div className="bg-red-600 text-white rounded-lg p-3">
								<div className="text-2xl font-bold">{timeLeft.seconds}</div>
								<div className="text-xs">SEG</div>
							</div>
						</div>
					</div>
				</div>

				{/* Special Banner */}
				<div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-6 mb-12 text-center">
					<div className="flex items-center justify-center mb-4">
						<Zap className="w-8 h-8 mr-3 animate-pulse" />
						<h3 className="text-2xl font-bold">MEGA DESCUENTOS HASTA 28 DE JULIO</h3>
						<Zap className="w-8 h-8 ml-3 animate-pulse" />
					</div>
					<p className="text-lg">🎊 Envío GRATIS en compras mayores a $100 | 🎁 12 meses sin intereses | 🏆 Garantía extendida</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{patriasOffers.map((product, index) => (
						<Card
							key={index}
							className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-100 hover:border-red-300"
						>
							<CardContent className="p-4 relative">
								{/* Patriotic Badge */}
								<div className="absolute top-2 left-2 z-10">
									<Badge className="bg-red-600 text-white animate-pulse">🇵🇪 -{product.discount}%</Badge>
								</div>

								{/* Limited Time Badge */}
								{product.isLimitedTime && (
									<div className="absolute top-2 right-2 z-10">
										<Badge className="bg-yellow-500 text-black font-bold">⚡ LIMITADO</Badge>
									</div>
								)}

								{/* Product Image */}
								<div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden relative">
									<img
										src={product.image ?? '/placeholder.svg'}
										alt={product.name}
										width={300}
										height={300}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									/>

									{/* Overlay with Peruvian flag colors */}
									<div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
								</div>

								{/* Product Info */}
								<div className="space-y-3">
									<div className="text-xs text-gray-500 uppercase font-semibold">{product.brand}</div>
									<h3 className="font-bold text-lg line-clamp-2 min-h-[3.5rem]">{product.name}</h3>

									{/* Rating */}
									<div className="flex items-center space-x-2">
										<div className="flex">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
												/>
											))}
										</div>
										<span className="text-sm text-gray-600">({product.reviews})</span>
									</div>

									{/* Price */}
									<div className="space-y-2">
										<div className="flex items-center space-x-3">
											<span className="text-2xl font-bold text-red-600">{product.price}</span>
											<span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
										</div>
										<div className="text-sm text-green-600 font-semibold">
											¡Ahorras ${Number(product.originalPrice.slice(1)) - Number(product.price.slice(1))}!
										</div>
									</div>

									{/* Stock */}
									<div className="flex items-center justify-between">
										<span className="text-sm text-orange-600 font-semibold">Solo {product.stock} disponibles</span>
										<Badge variant="outline" className="text-xs border-green-500 text-green-600">
											Envío GRATIS
										</Badge>
									</div>

									{/* Action Button */}
									<Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg">
										<a
											href={`/producto/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
											className="flex items-center justify-center w-full text-white"
										>
											🛒 ¡COMPRAR AHORA!
										</a>
									</Button>

									{/* Patriotic Message */}
									<div className="text-center text-xs text-red-600 font-semibold">🇵🇪 ¡Viva el Perú! 🇵🇪</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12">
					<div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto border-2 border-red-200">
						<h3 className="text-2xl font-bold text-red-600 mb-4">🎉 ¡No te pierdas estas ofertas únicas! 🎉</h3>
						<p className="text-gray-700 mb-6">
							Celebra las Fiestas Patrias con la mejor tecnología a precios increíbles. Ofertas válidas hasta el 28 de julio o
							hasta agotar stock.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
								<a href="/productos" className="text-white">
									Ver Todas las Ofertas
								</a>
							</Button>
							<Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
								Suscribirse a Ofertas
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
