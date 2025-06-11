"use client"

import { Search, ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye, Zap, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Header } from '../header'
import { Footer } from '../footer'

function ImprovedCarousel({
  title,
  products,
  autoplay = false,
}: { title: string; products: any[]; autoplay?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480)
        setItemsPerView(1) // Mobile pequeño
      else if (window.innerWidth < 640)
        setItemsPerView(1.5) // Mobile
      else if (window.innerWidth < 768)
        setItemsPerView(2) // Tablet pequeña
      else if (window.innerWidth < 1024)
        setItemsPerView(3) // Tablet
      else if (window.innerWidth < 1280)
        setItemsPerView(4) // Desktop pequeño
      else setItemsPerView(5) // Desktop grande
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
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
      (prev) =>
        (prev - 1 + Math.max(1, products.length - itemsPerView + 1)) % Math.max(1, products.length - itemsPerView + 1),
    )
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-3 sm:p-4 lg:p-6 relative">
                  {/* Product Badges */}
                  <div className="absolute top-2 left-2 z-10 space-y-1">
                    {product.isNew && <Badge className="bg-green-500 text-white text-xs">Nuevo</Badge>}
                    {product.isBestSeller && <Badge className="bg-purple-500 text-white text-xs">Más Vendido</Badge>}
                    {product.discount && <Badge className="bg-red-500 text-white text-xs">-{product.discount}%</Badge>}
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Product Image */}
                  <div className="aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden relative">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=200"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 uppercase">{product.brand}</div>
                    <h4 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">{product.name}</h4>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Specifications */}
                    {product.specs && (
                      <div className="text-xs text-gray-600 space-y-1">
                        {product.specs.slice(0, 2).map((spec: string, i: number) => (
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
                      <span className={`text-xs ${product.stock > 10 ? "text-green-600" : "text-orange-600"}`}>
                        {product.stock > 10 ? "En stock" : `Solo ${product.stock} disponibles`}
                      </span>
                      {product.freeShipping && (
                        <Badge variant="outline" className="text-xs">
                          Envío gratis
                        </Badge>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <Button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-sm">
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
        disabled={currentIndex >= Math.max(0, products.length - itemsPerView)}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

function CategoryCard({ title, icon, productCount, image }: any) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-6 text-center">
        <div className="relative mb-4">
          <img
            src={image || "/placeholder.svg?height=100&width=100"}
            alt={title}
            width={100}
            height={100}
            className="mx-auto rounded-lg group-hover:scale-105 transition-transform"
          />
          <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-2">{icon}</div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-600">{productCount} productos</p>
      </CardContent>
    </Card>
  )
}

// Las mejores Ofertas del Año CARRUSEL!!
export default function ProductosPage() {
  const laptops = [
    {
      name: "Laptop Asus Rog Strix Intel Core i9-14900Hx, 16GB, 1Tb, 16'' FHD,Video RTX 4060, Win 11 Pro",
      price: "S/ 1,469",
      originalPrice: "S/ 1,699",
      brand: "Asus",
      rating: 4,
      reviews: 128,
      discount: 15,
      stock: 5,
      freeShipping: true,
      specs: ["Intel Core i9", "16GB RAM", "1TB SSD", "RTX 4060"],
      installments: "12x S/ 122.42 sin interés",
      image: "/productos/header_ofert1.png?height=300&width=300",
    },
    {
      name: "Gamer HP Intel Core i7 RTX 3050 16GB 512 GB SSD Victus 12va Gen 15.6'' 15-fa0007la W11",
      price: "S/ 1,499",
      originalPrice: "S/ 1,599",
      brand: "HP",
      rating: 5,
      reviews: 89,
      discount: 8,
      stock: 12,
      freeShipping: true,
      isBestSeller: true,
      specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "RTX 3050"],
      installments: "18x S/ 81.61 sin interés",
      image: "/productos/header_ofert2.png?height=300&width=300",
    },
    {
      name: "LAPTOP GAMER ACER NITRO V15 ANV15-51-711U i7 13° GEN. 15.6 FHD IPS 144Hz 16GB 512GB RTX4050 6GB W11",
      price: "S/ 1,549",
      originalPrice: "S/ 1,549",
      brand: "Acer",
      rating: 4,
      reviews: 67,
      discount: 5,
      stock: 8,
      freeShipping: true,
      specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "RTX 4050"],
      installments: "24x S/ 61.21 sin interés",
      image: "/productos/header_ofert3.png?height=300&width=300",
    },
    {
      name: "ACER Nitro V15 ANV15-51-56GH Ci5 13420H/ 8Gb Ram/ 512GB SSD/ RTX 3050 6GB/ 15.6”FHD W.11 - CSI",
      price: "S/ 1,469",
      originalPrice: "S/ 1,799",
      brand: "Acer",
      rating: 5,
      reviews: 156,
      discount: 18,
      stock: 3,
      freeShipping: true,
      isNew: true,
      specs: ["Intel Core i5", "8GB RAM", "512GB SSD", "RTX 3050"],
      installments: "6x S/ 244.83 sin interés",
      image: "/productos/header_ofert4.png?height=300&width=300",
    },
  ]

  const audifonos = [
    {
      name: "Audifono Redragon Zeus X PRO RGB H510-PRO-WL Wireless BLACK",
      price: "s/ 89.99",
      originalPrice: "s/ 119.99",
      brand: "Redragon",
      rating: 5,
      reviews: 234,
      discount: 25,
      stock: 15,
      freeShipping: true,
      isBestSeller: true,
      specs: ["Bluetooth 5.0", "RGB lighting", "40-hour battery life"],
      installments: "3x s/ 29.99 sin interés",
      image: "/productos/audifonos/audifono1.png?height=200&width=200",
    },
    {
      name: "Audífonos Bluetooth Haylou S30 PRO ANC Hybrid Hi-Res - Blanco",
      price: "s/ 179.99",
      originalPrice: "s/ 199.99",
      brand: "Haylou",
      rating: 4,
      reviews: 167,
      discount: 10,
      stock: 8,
      freeShipping: true,
      specs: ["Active Noise Cancellation", "Hi-Res Audio", "Touch controls"],
      installments: "6x s/ 29.99 sin interés",
      image: "/productos/audifonos/audifono2.png?height=200&width=200",
    },
    {
      name: "Audífonos Bluetooth Haylou S30 PRO ANC Hybrid Hi-Res - Negro",
      price: "s/ 129.99",
      originalPrice: "s/ 149.99",
      brand: "Haylou",
      rating: 4,
      reviews: 198,
      discount: 13,
      stock: 12,
      freeShipping: true,
      specs: ["Bluetooth 5.1", "Low latency", "Dual microphone"],
      installments: "4x s/ 32.49 sin interés",
      image: "/productos/audifonos/audifono3.png?height=200&width=200",
    },
    {
      name: "AUDIFONOS GAMER COMBAT NEGROAZUL",
      price: "s/ 149.99",
      originalPrice: "s/ 169.99",
      brand: "Combat",
      rating: 5,
      reviews: 145,
      discount: 12,
      stock: 6,
      freeShipping: true,
      isNew: true,
      specs: ["50mm drivers", "Noise isolation", "Adjustable headband"],
      installments: "5x s/ 29.99 sin interés",
      image: "/productos/audifonos/audifono4.png?height=200&width=200",
    },
    {
      name: "Corsair HS80 RGB Wireless",
      price: "s/ 149.99",
      originalPrice: "s/ 179.99",
      brand: "Corsair",
      rating: 4,
      reviews: 112,
      discount: 17,
      stock: 9,
      freeShipping: true,
      specs: ["Dolby Atmos", "Custom-tuned 50mm drivers", "Up to 20 hours battery life"],
      installments: "6x s/ 24.99 sin interés",
      image: "/productos/audifonos/audifono5.png?height=200&width=200",
    },
    {
      name: "Audífonos Bluetooth Haylou S30 PRO ANC Hybrid Hi-Res",
      price: "s/ 199.99",
      originalPrice: "s/ 229.99",
      brand: "Haylou",
      rating: 5,
      reviews: 78,
      discount: 13,
      stock: 4,
      freeShipping: true,
      specs: ["Bluetooth 5.2", "IPX5 water resistance", "Touch controls"],
      installments: "8x s/ 24.99 sin interés",
      image: "/productos/audifonos/audifono6.png?height=200&width=200",
    },
  ]

  const televisores = [
    {
      name: 'Samsung OLED 55" QN90A Neo QLED 4K',
      price: "s/ 1,299.99",
      originalPrice: "s/ 1,499.99",
      brand: "Samsung",
      rating: 5,
      reviews: 89,
      discount: 13,
      stock: 7,
      freeShipping: true,
      isBestSeller: true,
      specs: ["Neo Quantum Processor 4K", "Quantum HDR 32X", "120Hz refresh rate"],
      installments: "12x s/ 108.33 sin interés",
      image: "/productos/televisiones/tv1.png?height=200&width=200",
    },
    {
      name: 'LG OLED 65" C1 Series 4K Smart TV',
      price: "s/ 1,799.99",
      originalPrice: "s/ 1,999.99",
      brand: "LG",
      rating: 5,
      reviews: 156,
      discount: 10,
      stock: 5,
      freeShipping: true,
      specs: ["α9 Gen4 AI Processor", "Dolby Vision IQ", "HDMI 2.1"],
      installments: "18x s/ 99.99 sin interés",
      image: "/productos/televisiones/tv2.png?height=200&width=200",
    },
    {
      name: 'Sony OLED 55" A80J Bravia XR',
      price: "s/ 1,399.99",
      originalPrice: "s/ 1,599.99",
      brand: "Sony",
      rating: 4,
      reviews: 134,
      discount: 12,
      stock: 8,
      freeShipping: true,
      isNew: true,
      specs: ["Cognitive Processor XR", "XR OLED Contrast", "Google TV"],
      installments: "15x s/ 93.33 sin interés",
      image: "/productos/televisiones/tv3.png?height=200&width=200",
    },
    {
      name: 'TCL QLED 50" C825 Mini LED 4K',
      price: "s/ 899.99",
      originalPrice: "s/ 1,099.99",
      brand: "TCL",
      rating: 4,
      reviews: 67,
      discount: 18,
      stock: 12,
      freeShipping: true,
      specs: ["Quantum Dot technology", "Mini LED backlight", "120Hz VRR"],
      installments: "9x s/ 99.99 sin interés",
      image: "/productos/televisiones/tv4.png?height=200&width=200",
    },
    {
      name: 'samsung QLED 55" Q80A 4K Smart TV',
      price: "s/ 999.99",
      originalPrice: "s/ 1,199.99",
      brand: "Samsung",
      rating: 4,
      reviews: 98,
      discount: 17,
      stock: 10,
      freeShipping: true,
      specs: ["Quantum Dot Wide Color", "Full Array Local Dimming", "Dolby Vision"],
      installments: "10x s/ 99.99 sin interés",
      image: "/productos/televisiones/tv5.png?height=200&width=200",
    },
    {
      name: 'samsung QLED 65" QN85A 4K Smart TV',
      price: "s/ 1,199.99",
      originalPrice: "s/ 1,399.99",
      brand: "Samsung",
      rating: 5,
      reviews: 45,
      discount: 14,
      stock: 6,
      freeShipping: true,
      specs: ["P5 AI Perfect Picture", "3-sided Ambilight", "Android TV"],
      installments: "12x s/ 99.99 sin interés",
      image: "/productos/televisiones/tv6.png?height=200&width=200",
    },
  ]

  const Sillas = [
    {
      name: "Silla Gamer Reclinación 155° con Posapies y Masajeador",
      price: "s/ 429.99",
      originalPrice: "s/ 449.99",
      brand: "Codari",
      rating: 5,
      reviews: 267,
      discount: 4,
      stock: 15,
      freeShipping: true,
      isBestSeller: true,
      specs: ["Reclinación 155°", "Posapies ajustable", "Masajeador incorporado"],
      installments: "12x s/ 35.83 sin interés",
      image: "/productos/sillas/silla1.png?height=200&width=200",
    },
    {
      name: "Silla Gamer Reclinación 155° con Posapies y Masageador",
      price: "s/ 379.99",
      originalPrice: "s/ 429.99",
      brand: "Codari",
      rating: 4,
      reviews: 189,
      discount: 12,
      stock: 11,
      freeShipping: true,
      specs: ["Reclinación 155°", "Posapies ajustable", "Diseño ergonómico"],
      installments: "10x s/ 37.99 sin interés",
      image: "/productos/sillas/silla2.png?height=200&width=200",
    },
    {
      name: "Silla Gamer Kuzler Con Masajeador Lumbar Color Rosa RIK-101R",
      price: "s/ 449.99",
      originalPrice: "s/ 499.99",
      brand: "Kuzler",
      rating: 5,
      reviews: 123,
      discount: 10,
      stock: 8,
      freeShipping: true,
      isNew: true,
      specs: ["Reclinación 155°", "Posapies ajustable", "Masajeador lumbar"],
      installments: "15x s/ 29.99 sin interés",
      image: "/productos/sillas/silla3.png?height=200&width=200",
    },
    {
      name: "Silla Gamer Kuzler Negra con masajeador lumbar reposapiés y base metálica",
      price: "s/ 199.99",
      originalPrice: "s/ 249.99",
      brand: "Kuzler",
      rating: 4,
      reviews: 234,
      discount: 20,
      stock: 18,
      freeShipping: true,
      specs: ["Reclinación 155°", "Posapies ajustable", "Base metálica resistente"],
      installments: "6x s/ 33.33 sin interés",
      image: "/productos/sillas/silla4.png?height=200&width=200",
    },
    {
      name: "Silla Gamer Extingtion Sapp Gamuza-Cuerina Color Blanco",
      price: "s/ 279.99",
      originalPrice: "s/ 329.99",
      brand: "Extingtion",
      rating: 4,
      reviews: 156,
      discount: 15,
      stock: 13,
      freeShipping: true,
      specs: ["Reclinación 155°", "Posapies ajustable", "Diseño moderno"],
      installments: "8x s/ 34.99 sin interés",
      image: "/productos/sillas/silla5.png?height=200&width=200",
    },
    {
      name: "Silla Gamer Con Luces RGB Titan Con Masajeador Reposapiés 135° Blanco",
      price: "s/ 199.99",
      originalPrice: "s/ 229.99",
      brand: "Titan",
      rating: 4,
      reviews: 178,
      discount: 13,
      stock: 16,
      freeShipping: true,
      specs: ["Reclinación 135°", "Luces RGB personalizables", "Masajeador lumbar"],
      installments: "7x s/ 28.57 sin interés",
      image: "/productos/sillas/silla6.png?height=200&width=200",
    },
  ]

// Ofertas Flash 
  const flashDeals = [
    {
      name: "Laptop Lenovo Legion 5, Amd Ryzen 5 5600H, 8GB DDR4, SSD 512Gb, 15.6\" FHD ",
      price: "S/ 2500",
      originalPrice: "S/ 3000",
      brand: "Lenovo",
      rating: 5,
      reviews: 345,
      discount: 17,
      stock: 3,
      freeShipping: true,
      timeLeft: "2h 15m",
      specs: ["M1 chip", "10.9-inch display", "12MP cameras"],
      image: "/productos/ofert1.png?height=200&width=200",
      installments: "12x S/ 208.33 sin interés",
    },
    {
      name: "Teclado Gamer Marca Logitech G213 Prodigy Con Iluminación RGB, Black, Alámbrico - USB",
      price: "S/ 222.99",
      originalPrice: "S/ 249.99",
      brand: "Logitech",
      rating: 5,
      reviews: 189,
      discount: 17,
      stock: 2,
      freeShipping: true,
      timeLeft: "1h 45m",
      specs: ["M2 chip", "13.6-inch display", "18-hour battery"],
      image: "/productos/ofert2.png?height=200&width=200",
      installments: "12x S/ 208.33 sin interés",
    },
    {
      name: "Case Gamer Halion Aries 06 Con Fuente de 600W, 4 LED-ARGB, Vidrio Templado, Black",
      price: "S/ 799.99",
      originalPrice: "S/ 899.99",
      brand: "Halion",
      rating: 5,
      reviews: 567,
      discount: 12,
      stock: 1,
      freeShipping: true,
      timeLeft: "3h 30m",
      specs: ["A16 Bionic chip", "6.1-inch display", "48MP camera"],
      image: "/productos/ofert3.png?height=200&width=200",
      installments: "12x S/ 208.33 sin interés",
    },
  ]

  const categories = [
    { title: "Laptops Gaming", icon: "🎮", productCount: 156, image: "/productos/categorias/cat1.png?height=100&width=100" },
    { title: "Smartphones", icon: "📱", productCount: 234, image: "/productos/categorias/cat2.png?height=100&width=100" },
    { title: "Audífonos", icon: "🎧", productCount: 89, image: "/productos/categorias/cat3.png?height=100&width=100" },
    { title: "Televisores", icon: "📺", productCount: 67, image: "/productos/categorias/cat4.png?height=100&width=100" },
    { title: "Smartwatches", icon: "⌚", productCount: 45, image: "/productos/categorias/cat5.png?height=100&width=100" },
    { title: "Sillas", icon: "🔌", productCount: 178, image: "/productos/categorias/cat6.png?height=100&width=100" },
  ]

  const brandLogos = [
    { name: "Logitech", src: "/productos/marcas/logo1.png" },
    { name: "Samsung", src: "/productos/marcas/logo2.png" },
    { name: "HyperX", src: "/productos/marcas/logo3.png" },
    { name: "Asus", src: "/productos/marcas/logo4.png" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Las mejores Ofertas del Año!! */}
      <section className="relative py-12 sm:py-20 lg:py-70 overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="/productos/fondo_header.png"
          alt="Fondo ofertas"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-orange-900/60 z-0"></div>
        {/* Contenido encima */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto principal */}
              <div className="text-white space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <Badge className="bg-white text-red-200 font-bold px-3 py-1">Hasta 20%</Badge>
                  <span className="text-lg font-semibold">Descuento</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                  Las mejores Ofertas
                  <br />
                  En <span className="text-red-500">Laptops</span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="text-lg font-medium">Cotiza Ahora!</span>
                  <div className="bg-orange-400 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    📞 999 999 999
                  </div>
                </div>
              </div>
              {/* Imágenes de productos destacados (opcional) */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl shadow-2xl flex items-center justify-center border-2 border-red-400 bg-white/90 hover:scale-115 hover:shadow-red-700 transition-transform duration-200 p-4"
                  >
                    <img
                      src={`/productos/best_ofert${i}.png`}
                      alt={`Laptop oferta ${i}`}
                      className="w-[320px] h-[192px] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Zap className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-red-600">Ofertas Flash</h2>
              <Clock className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {flashDeals.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-red-200">
                <CardContent className="p-3 sm:p-4 lg:p-6 relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-red-500 text-white animate-pulse">⚡ Flash Deal</Badge>
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-orange-500 text-white">{product.timeLeft}</Badge>
                  </div>

                  <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-gray-500 uppercase">{product.brand}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-red-600">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
                    </div>
                    <div className="text-sm text-green-600">{product.installments}</div>
                    <div className="text-sm text-orange-600">Solo {product.stock} disponibles</div>
                    <Button className="bg-red-500 hover:bg-red-600 text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 w-full">
                      ¡Comprar Ahora!
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Categorías Populares</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600">Las mejores Ofertas del Año</h2>
            <Button className="bg-red-500 hover:bg-red-600 text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3">
              Solicita un Catálogo
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {laptops.map((laptop, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-3 sm:p-4 lg:p-6 relative">
                  {laptop.discount && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-red-500 text-white">-{laptop.discount}%</Badge>
                    </div>
                  )}
                  {laptop.isBestSeller && (
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-purple-500 text-white">Más Vendido</Badge>
                    </div>
                  )}

                  <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={laptop.image || "/placeholder.svg"}
                      alt={laptop.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="text-center space-y-3">
                    <div className="text-sm text-gray-500 mb-2">{laptop.brand}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{laptop.name}</h3>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < laptop.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({laptop.reviews})</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">{laptop.price}</span>
                        {laptop.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{laptop.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-green-600">{laptop.installments}</div>
                    </div>
                    <div className="text-sm text-orange-600">Stock: {laptop.stock} unidades</div>
                    <Button className="bg-red-600 hover:bg-red-700 text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 w-full">
                      Ver más detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusivos Online */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-red-100 via-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center bg-white/90 rounded-2xl shadow-xl overflow-hidden">
            {/* Imagen principal */}
            <div className="w-full lg:w-1/2 flex justify-center items-center bg-red-200 p-6 lg:p-12">
              <img
                src="/productos/exclusive1.png?height=400&width=600"
                alt="Exclusivo Online"
                width={400}
                height={300}
                className="w-full max-w-md h-auto rounded-xl shadow-lg"
              />
            </div>
            {/* Contenido */}
            <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">SOLO ONLINE</span>
                <span className="text-red-600 font-bold text-lg">Exclusivos Online</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">¡Productos únicos solo en la web!</h3>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                Descubre ofertas y productos que no encontrarás en tiendas físicas. Aprovecha descuentos especiales y beneficios exclusivos para compras online.
              </p>
              {/* Beneficios */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
                <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Descuentos exclusivos web</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Stock limitado</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Envío rápido a todo el país</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Garantía oficial</li>
              </ul>
              {/* Productos destacados */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-orange-50 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col items-center">
                    <img
                      src={`/productos/celphone${i}.png?height=100&width=100`}
                      alt={`Producto ${i}`}
                      width={100}
                      height={100}
                      className="w-20 h-20 object-contain mb-2"
                    />
                    <span className="text-xs text-gray-600 font-medium">Producto {i}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-red-500 hover:bg-red-600 text-base font-bold px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto">
                Ver más Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg inline-block font-bold">
              TUS MARCAS FAVORITAS
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12">
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:opacity-100 transition-opacity cursor-pointer"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-12 w-auto sm:h-16 lg:h-20 object-contain mb-2"
                  loading="lazy"
                />
                {/* Si quieres mostrar el nombre debajo del logo, descomenta la siguiente línea */}
                {/* <span className="text-xs text-gray-500">{brand.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousels */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 space-y-16">
          <ImprovedCarousel title="🎧 Audífonos Gamer" products={audifonos} autoplay={true} />
          <ImprovedCarousel title="📺 Televisiones OLED" products={televisores} />
          <ImprovedCarousel title="⌚ Zonas de Sillas Tecnológicos" products={Sillas} />
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-red-600">Productos en Tendencia</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {audifonos.slice(0, 4).map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-3 sm:p-4 lg:p-6 relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-red-500 text-white">🔥 Trending</Badge>
                  </div>

                  <div className="aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 uppercase">{product.brand}</div>
                    <h4 className="font-medium text-sm line-clamp-2">{product.name}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-green-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-600">{product.installments}</div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 w-full">
                      Agregar al Carrito
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "🚚",
                title: "Envío gratis",
                subtitle: "En compras mayores a $50",
                color: "bg-blue-100 text-blue-600",
              },
              { icon: "💳", title: "Pago seguro", subtitle: "100% protegido", color: "bg-green-100 text-green-600" },
              {
                icon: "🏆",
                title: "Garantía",
                subtitle: "Productos originales",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                icon: "👨‍💻",
                title: "Soporte 24/7",
                subtitle: "Atención personalizada",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((service, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div
                  className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 text-2xl`}
                >
                  {service.icon}
                </div>
                <h4 className="font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
