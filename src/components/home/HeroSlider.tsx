'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function HeroSlider() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			id: 1,
			category: 'iPhone 15 Pro Max',
			title: 'TECNOLOGÍA\nQUE IMPACTA',
			description: 'Explora el futuro con nuestros productos de última generación que transforman tu experiencia digital.',
			price: '$1,099 USD',
			image: '/placeholder.svg?height=500&width=600',
			buttonText: 'Ver Detalles'
		},
		{
			id: 2,
			category: 'MacBook Pro M3',
			title: 'POTENCIA\nSIN LÍMITES',
			description: 'Experimenta el rendimiento profesional con el nuevo chip M3 que revoluciona tu productividad.',
			price: '$1,999 USD',
			image: '/placeholder.svg?height=500&width=600',
			buttonText: 'Descubrir Más'
		},
		{
			id: 3,
			category: 'AirPods Pro',
			title: 'SONIDO\nINMERSIVO',
			description: 'Sumérgete en una experiencia auditiva única con cancelación de ruido activa de nueva generación.',
			price: '$249 USD',
			image: '/placeholder.svg?height=500&width=600',
			buttonText: 'Escuchar Ahora'
		},
		{
			id: 4,
			category: 'Apple Watch Ultra',
			title: 'AVENTURA\nSIN FRONTERAS',
			description: 'El reloj más resistente y avanzado para los que buscan superar todos los límites.',
			price: '$799 USD',
			image: '/placeholder.svg?height=500&width=600',
			buttonText: 'Explorar'
		}
	]

	// Auto-advance slider
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [slides.length])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	const goToSlide = (index: number) => {
		setCurrentSlide(index)
	}

	return (
		<div className="relative h-[600px] md:h-[700px]">
			{/* Slides */}
			<div className="relative h-full overflow-hidden">
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
							index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
						}`}
					>
						<div className="container mx-auto px-4 h-full">
							<div className="grid md:grid-cols-2 gap-8 items-center h-full py-16">
								<div className="space-y-6">
									<div className="text-sm font-medium opacity-90">{slide.category}</div>
									<h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line">{slide.title}</h1>
									<p className="text-lg text-gray-300 max-w-md">{slide.description}</p>
									<div className="space-y-4">
										<div className="text-3xl font-bold">{slide.price}</div>
										<Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">{slide.buttonText}</Button>
									</div>
								</div>
								<div className="relative">
									<img
										src={slide.image || '/placeholder.svg'}
										alt={slide.category}
										width={600}
										height={500}
										className="w-full h-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
				aria-label="Slide anterior"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
				aria-label="Siguiente slide"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			{/* Dots Navigation */}
			<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
						aria-label={`Ir al slide ${index + 1}`}
					/>
				))}
			</div>

			{/* Progress Bar */}
			<div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
				<div
					className="h-full bg-white transition-all duration-5000 ease-linear"
					style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
				/>
			</div>
		</div>
	)
}
