import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect, useCallback } from 'react'
import { slides } from '@/constants/db_product'

// Componente para los dots de navegación con vistas previas y loader
const DotsNavigation = ({ slides, currentSlide, goToSlide, progress }) => (
	<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-2 px-4">
		{slides.map((slide, index) => {
			const isActive = index === currentSlide
			return (
				<button
					key={`${index + 1}-dots-slider`}
					onClick={() => goToSlide(index)}
					className="relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-300"
					aria-label={`Ir al slide ${index + 1}`}
				>
					{isActive && (
						<div className="absolute -inset-1 scale-105">
							<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
								<circle
									cx="50"
									cy="50"
									r="48"
									fill="none"
									stroke="white"
									strokeWidth="4"
									strokeDasharray="302"
									strokeDashoffset={302 - (302 * progress) / 100}
									strokeLinecap="round"
									className="text-background"
								/>
							</svg>
						</div>
					)}

					<img
						src={slide.image ?? '/logo.svg'}
						alt={slide.category}
						className={`w-full h-full object-cover rounded-full ${isActive ? 'border-background scale-105' : 'border-white/40'}`}
					/>
				</button>
			)
		})}
	</div>
)

// Componente para los botones de navegación
const NavigationArrows = ({ prevSlide, nextSlide }) => (
	<>
		<button
			onClick={prevSlide}
			className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:scale-105 rounded-full p-1.5 sm:p-2 transition-all shadow-lg z-2 cursor-pointer"
			aria-label="Slide anterior"
		>
			<ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
		</button>
		<button
			onClick={nextSlide}
			className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:scale-105 rounded-full p-1.5 sm:p-2 transition-all shadow-lg z-2 cursor-pointer"
			aria-label="Siguiente slide"
		>
			<ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
		</button>
	</>
)

// Componente para cada slide
const Slide = ({ slide, isActive }) => (
	<div
		className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
			isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
		}`}
	>
		<div className="container mx-auto px-2 sm:px-4 h-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center h-full py-8 sm:py-16">
				<div className="space-y-4 sm:space-y-6 animate-fade-in text-center md:text-left">
					<span className="inline-block bg-background text-foreground font-bold p-2.5 sm:p-3.5 rounded-2xl text-xs mb-2">
						{slide.category}
					</span>
					<h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg whitespace-pre-line text-primary-foreground">
						{slide.title}
					</h1>
					<p className="text-sm sm:text-lg md:text-xl text-primary-foreground/90">{slide.description}</p>
					<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6 justify-center md:justify-start">
						<span className="text-xl sm:text-2xl font-bold text-primary-foreground drop-shadow">{slide.price}</span>
						<a href={`/producto/${slide.id}`}>
							<Button className="bg-yellow-300 cursor-pointer font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-bl-sm shadow-xl transition-all transform scale-100 hover:scale-105 text-black hover:text-white">
								{slide.buttonText}
							</Button>
						</a>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div className="max-w-[350px] max-h-[350px] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
						<img
							src={slide.image ?? '/logo.svg'}
							alt={slide.category}
							width={400}
							height={350}
							className="w-fit h-fit object-contain rounded-2xl"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
)

// Componente para el indicador de posición
const PositionIndicator = ({ currentSlide, totalSlides }) => (
	<div className="absolute top-4 right-4 bg-white/20 text-primary-foreground font-bold p-1.5 sm:p-2 rounded-lg shadow-lg z-2">
		{currentSlide + 1} / {totalSlides}
	</div>
)

// Componente para esferas flotantes con blur
const FloatingSpheres = () => (
	<>
		<div className="absolute top-10 left-4 w-12 h-12 sm:w-20 sm:h-20 bg-[#DD5213]/20 rounded-full filter blur-xl animate-float"></div>
		<div className="absolute bottom-16 right-4 w-20 h-20 sm:w-32 sm:h-32 bg-[#FB6300]/20 rounded-full filter blur-xl animate-float-reverse"></div>
		<div className="absolute top-1/2 left-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-[#DD5213]/20 rounded-full filter blur-xl animate-float"></div>
		<div className="absolute bottom-8 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-[#FB6300]/20 rounded-full filter blur-xl animate-float-reverse"></div>
	</>
)

export function HeroSlider() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)
	const [progress, setProgress] = useState(0)

	const nextSlide = useCallback(() => {
		if (isTransitioning) return
		setIsTransitioning(true)
		setCurrentSlide((prev) => (prev + 1) % slides.length)
		setProgress(0) // Reiniciar el progreso
	}, [isTransitioning, slides.length])

	const prevSlide = useCallback(() => {
		if (isTransitioning) return
		setIsTransitioning(true)
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
		setProgress(0) // Reiniciar el progreso
	}, [isTransitioning, slides.length])

	const goToSlide = useCallback(
		(index) => {
			if (isTransitioning) return
			setIsTransitioning(true)
			setCurrentSlide(index)
			setProgress(0) // Reiniciar el progreso
		},
		[isTransitioning]
	)

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					nextSlide()
					return 0
				}
				return prevProgress + 1
			})
		}, 50)

		return () => clearInterval(timer)
	}, [nextSlide])

	useEffect(() => {
		if (isTransitioning) {
			const transitionTimer = setTimeout(() => {
				setIsTransitioning(false)
			}, 1000)
			return () => clearTimeout(transitionTimer)
		}
	}, [isTransitioning])

	return (
		<section className="relative bg-gradient-to-br from-primary via-[#FB6300] to-primary overflow-hidden min-h-[85vh] flex items-center">
			<FloatingSpheres />
			<div className="relative z-2 w-full">
				<div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden w-full">
					<div className="relative h-full overflow-hidden z-2">
						{slides.map((slide, index) => (
							<Slide key={slide.id} slide={slide} isActive={index === currentSlide} />
						))}
					</div>
					<NavigationArrows prevSlide={prevSlide} nextSlide={nextSlide} />
					<DotsNavigation slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} progress={progress} />
					<PositionIndicator currentSlide={currentSlide} totalSlides={slides.length} />
				</div>
			</div>
		</section>
	)
}
