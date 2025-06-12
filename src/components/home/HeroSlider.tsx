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
            price: 's/ 4,999.00',
            image: '/inicio/head.png?height=500&width=600',
            buttonText: 'Ver Detalles'
        },
        {
            id: 2,
            category: 'MacBook Pro M3',
            title: 'POTENCIA\nSIN LÍMITES',
            description: 'Experimenta el rendimiento profesional con el nuevo chip M3 que revoluciona tu productividad.',
            price: 's/ 5,999.00',
            image: '/inicio/head2.png?height=500&width=600',
            buttonText: 'Descubrir Más'
        },
        {
            id: 3,
            category: 'AirPods Pro',
            title: 'SONIDO\nINMERSIVO',
            description: 'Sumérgete en una experiencia auditiva única con cancelación de ruido activa de nueva generación.',
            price: 's/ 999.00',
            image: '/inicio/head3.png?height=500&width=600',
            buttonText: 'Escuchar Ahora'
        },
        {
            id: 4,
            category: 'Apple Watch Ultra',
            title: 'AVENTURA\nSIN FRONTERAS',
            description: 'El reloj más resistente y avanzado para los que buscan superar todos los límites.',
            price: 's/ 600.00',
            image: '/inicio/head4.png?height=500&width=600',
            buttonText: 'Explorar'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    const goToSlide = (index: number) => setCurrentSlide(index)

    return (
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
            {/* Fondo decorativo extra */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-400 opacity-30 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-2xl z-0"></div>
            
            {/* Slides */}
            <div className="relative h-full overflow-hidden z-10">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                            index === currentSlide ? 'translate-x-0 opacity-100 z-10' : index < currentSlide ? '-translate-x-full opacity-0 z-0' : 'translate-x-full opacity-0 z-0'
                        }`}
                    >
                        <div className="container mx-auto px-4 h-full">
                            <div className="grid md:grid-cols-2 gap-8 items-center h-full py-16">
                                {/* Texto */}
                                <div className="space-y-6 animate-fade-in">
                                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-200 text-yellow-900 font-bold px-4 py-1 rounded-full text-xs tracking-widest shadow-lg mb-2 animate-pulse">
                                        {slide.category}
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg whitespace-pre-line">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-white/90">{slide.description}</p>
                                    <div className="flex items-center space-x-4 mt-6">
                                        <span className="text-2xl font-bold text-yellow-300 drop-shadow">{slide.price}</span>
                                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-xl transition-all scale-100 hover:scale-105">
                                            {slide.buttonText}
                                        </Button>
                                    </div>
                                </div>
                                {/* Imagen */}
                                <div className="flex items-center justify-center">
                                    <div className="w-[350px] h-[320px] md:w-[400px] md:h-[350px] bg-white/10 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/20">
                                        <img
                                            src={slide.image || '/placeholder.svg'}
                                            alt={slide.category}
                                            width={400}
                                            height={350}
                                            className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black backdrop-blur-sm rounded-full p-2 transition-colors shadow-lg z-20"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="w-7 h-7" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black backdrop-blur-sm rounded-full p-2 transition-colors shadow-lg z-20"
                aria-label="Siguiente slide"
            >
                <ChevronRight className="w-7 h-7" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                            index === currentSlide ? 'bg-yellow-400 scale-110 shadow-lg' : 'bg-white/40'
                        }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                <div
                    className="h-full bg-yellow-400 transition-all duration-5000 ease-linear"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>
        </div>
    )
}