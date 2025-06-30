'use client'

import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState, useEffect } from 'react'

export default function ImprovedCarousel({
	title,
	products,
	autoplay = false
}: {
	title: string
	products: any
	autoplay?: boolean
}) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [itemsPerView, setItemsPerView] = useState(5)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 480) setItemsPerView(1) // Mobile pequeño
			else if (window.innerWidth < 640) setItemsPerView(1.5) // Mobile
			else if (window.innerWidth < 768) setItemsPerView(2) // Tablet pequeña
			else if (window.innerWidth < 1024) setItemsPerView(3) // Tablet
			else if (window.innerWidth < 1280) setItemsPerView(4) // Desktop pequeño
			else setItemsPerView(5) // Desktop grande
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (autoplay) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - itemsPerView + 1))
			}, 3000)
			return () => clearInterval(timer)
		}
	}, [autoplay, products.length, itemsPerView])

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - itemsPerView + 1))
	}

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + Math.max(1, products.length - itemsPerView + 1)) % Math.max(1, products.length - itemsPerView + 1)
		)
	}

	return (
		<div className="relative">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg sm:text-xl font-bold mb-3">{title}</h2>
				<div className="flex space-x-2">
					{Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
						<button
							key={index + 'ImprovedCarousel'}
							onClick={() => setCurrentIndex(index)}
							aria-label={`Ir al slide ${index + 1}`}
							className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
						/>
					))}
				</div>
			</div>

			<div className="relative overflow-hidden rounded-lg">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
				>
					{products.map((product) => (
						<div key={product.id} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
							<Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
								<CardContent className="p-3 sm:p-4 lg:p-6 relative">
									{/* Product Badges */}
									<div className="absolute top-2 left-2 z-10 space-y-1 flex gap-3">
										{product.isNew && <Badge className="bg-green-500 text-white text-xs">Nuevo</Badge>}
										{product.isBestSeller && <Badge className="bg-purple-500 text-white text-xs">Más Vendido</Badge>}
										{product.discount && <Badge className="bg-red-500 text-white text-xs">-{product.discount}%</Badge>}
									</div>

									{/* Wishlist Button */}
									<button
										aria-label="Agregar a la lista de deseos"
										className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
									>
										<Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
									</button>

									{/* Product Image */}
									<div className="aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden relative">
										<img
											src={product.image ?? '/placeholder.svg?height=200&width=200'}
											alt={product.name}
											width={200}
											height={200}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
											loading="lazy"
										/>

										{/* Quick Actions */}
										<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
											<Button size="sm" className="bg-white text-black hover:bg-gray-100" aria-label="Ver detalles">
												<Eye className="w-4 h-4" />
											</Button>
											<Button size="sm" className="bg-orange-500 hover:bg-orange-600" aria-label="Agregar al carrito">
												<ShoppingCart className="w-4 h-4" />
											</Button>
										</div>
									</div>

									{/* Product Info */}
									<div className="space-y-2">
										<div className="text-xs text-gray-500 uppercase">{product.brand}</div>
										<h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

										{/* Rating */}
										<div className="flex items-center space-x-1">
											<div className="flex">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`w-3 h-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
														aria-label={`Rating: ${product.rating} de 5`}
													/>
												))}
											</div>
											<span className="text-xs text-gray-500">({product.reviews})</span>
										</div>

										{/* Specifications */}
										{product.specs && (
											<div className="text-xs text-gray-600 space-y-1">
												{product.specs.slice(0, 2).map((spec, i) => (
													<div key={i}>• {spec}</div>
												))}
											</div>
										)}

										{/* Price */}
										<div className="space-y-1">
											<div className="flex items-center space-x-2">
												<span className="text-lg font-bold text-orange-600">{product.price}</span>
												{product.originalPrice && (
													<span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
												)}
											</div>
											{product.installments && <div className="text-xs text-green-600">o {product.installments}</div>}
										</div>

										{/* Stock Status */}
										<div className="flex items-center justify-between">
											<span className={`text-xs ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
												{product.stock > 10 ? 'En stock' : `Solo ${product.stock} disponibles`}
											</span>
											{product.freeShipping && (
												<Badge variant="outline" className="text-xs">
													Envío gratis
												</Badge>
											)}
										</div>

										{/* Add to Cart Button */}
										<Button className="w-full mt-3 bg-primary hover:bg-red-700 text-sm" aria-label="Agregar al carrito">
											Agregar al Carrito
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={prevSlide}
				aria-label="Slide anterior"
				className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
				disabled={currentIndex === 0}
			>
				<ChevronLeft className="w-5 h-5" />
			</button>
			<button
				onClick={nextSlide}
				aria-label="Siguiente slide"
				className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
				disabled={currentIndex >= Math.max(0, products.length - itemsPerView)}
			>
				<ChevronRight className="w-5 h-5" />
			</button>
		</div>
	)
}
