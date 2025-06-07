"use client"

import { Search, ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye, Zap, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

function ImprovedCarousel({
  title,
  products,
  autoplay = false,
}: { title: string; products: any[]; autoplay?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 768) setItemsPerView(2)
      else if (window.innerWidth < 1024) setItemsPerView(3)
      else if (window.innerWidth < 1280) setItemsPerView(4)
      else setItemsPerView(5)
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
        <h3 className="text-2xl font-bold">{title}</h3>
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
                <CardContent className="p-4 relative">
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
                    <Button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-sm">
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
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{productCount} productos</p>
      </CardContent>
    </Card>
  )
}

export default function ProductosPage() {
  const laptops = [
    {
      name: "Lenovo IdeaPad Gaming 3 15IMH05",
      price: "$1,469",
      originalPrice: "$1,699",
      brand: "Lenovo",
      rating: 4,
      reviews: 128,
      discount: 15,
      stock: 5,
      freeShipping: true,
      specs: ["Intel Core i5-10300H", "8GB RAM", "512GB SSD", "GTX 1650"],
      installments: "12x $122.42 sin interés",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lenovo Legion 5 Pro Gaming Laptop",
      price: "$1,469",
      originalPrice: "$1,599",
      brand: "Lenovo",
      rating: 5,
      reviews: 89,
      discount: 8,
      stock: 12,
      freeShipping: true,
      isBestSeller: true,
      specs: ["AMD Ryzen 7", "16GB RAM", "1TB SSD", "RTX 3060"],
      installments: "18x $81.61 sin interés",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lenovo ThinkPad E15 Business",
      price: "$1,469",
      originalPrice: "$1,549",
      brand: "Lenovo",
      rating: 4,
      reviews: 67,
      discount: 5,
      stock: 8,
      freeShipping: true,
      specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "Intel Iris"],
      installments: "24x $61.21 sin interés",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lenovo Yoga Slim 7 Ultrabook",
      price: "$1,469",
      originalPrice: "$1,799",
      brand: "Lenovo",
      rating: 5,
      reviews: 156,
      discount: 18,
      stock: 3,
      freeShipping: true,
      isNew: true,
      specs: ["AMD Ryzen 5", "8GB RAM", "256GB SSD", "Radeon Graphics"],
      installments: "6x $244.83 sin interés",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const audifonos = [
    {
      name: "HyperX Cloud II Gaming Headset",
      price: "$89.99",
      originalPrice: "$119.99",
      brand: "HyperX",
      rating: 5,
      reviews: 234,
      discount: 25,
      stock: 15,
      freeShipping: true,
      isBestSeller: true,
      specs: ["7.1 Surround Sound", "Micrófono desmontable", "Compatible PC/PS4/Xbox"],
      installments: "3x $29.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Razer BlackShark V2 Pro Wireless",
      price: "$179.99",
      originalPrice: "$199.99",
      brand: "Razer",
      rating: 4,
      reviews: 167,
      discount: 10,
      stock: 8,
      freeShipping: true,
      specs: ["THX Spatial Audio", "50mm drivers", "Wireless 2.4GHz"],
      installments: "6x $29.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Logitech G Pro X Gaming Headset",
      price: "$129.99",
      originalPrice: "$149.99",
      brand: "Logitech",
      rating: 4,
      reviews: 198,
      discount: 13,
      stock: 12,
      freeShipping: true,
      specs: ["Blue VO!CE filters", "PRO-G 50mm drivers", "DTS Headphone:X 2.0"],
      installments: "4x $32.49 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "SteelSeries Arctis 7P Wireless",
      price: "$149.99",
      originalPrice: "$169.99",
      brand: "SteelSeries",
      rating: 5,
      reviews: 145,
      discount: 12,
      stock: 6,
      freeShipping: true,
      isNew: true,
      specs: ["Lossless 2.4GHz", "24-hour battery", "ClearCast microphone"],
      installments: "5x $29.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Corsair HS80 RGB Wireless",
      price: "$149.99",
      originalPrice: "$179.99",
      brand: "Corsair",
      rating: 4,
      reviews: 112,
      discount: 17,
      stock: 9,
      freeShipping: true,
      specs: ["Dolby Atmos", "Custom 50mm drivers", "RGB lighting"],
      installments: "6x $24.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Audio-Technica ATH-G1WL",
      price: "$199.99",
      originalPrice: "$229.99",
      brand: "Audio-Technica",
      rating: 5,
      reviews: 78,
      discount: 13,
      stock: 4,
      freeShipping: true,
      specs: ["45mm drivers", "Low-latency wireless", "15-hour battery"],
      installments: "8x $24.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const televisores = [
    {
      name: 'Samsung OLED 55" QN90A Neo QLED 4K',
      price: "$1,299.99",
      originalPrice: "$1,499.99",
      brand: "Samsung",
      rating: 5,
      reviews: 89,
      discount: 13,
      stock: 7,
      freeShipping: true,
      isBestSeller: true,
      specs: ["Neo Quantum Processor 4K", "Quantum HDR 32X", "120Hz refresh rate"],
      installments: "12x $108.33 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: 'LG OLED 65" C1 Series 4K Smart TV',
      price: "$1,799.99",
      originalPrice: "$1,999.99",
      brand: "LG",
      rating: 5,
      reviews: 156,
      discount: 10,
      stock: 5,
      freeShipping: true,
      specs: ["α9 Gen4 AI Processor", "Dolby Vision IQ", "HDMI 2.1"],
      installments: "18x $99.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: 'Sony OLED 55" A80J Bravia XR',
      price: "$1,399.99",
      originalPrice: "$1,599.99",
      brand: "Sony",
      rating: 4,
      reviews: 134,
      discount: 12,
      stock: 8,
      freeShipping: true,
      isNew: true,
      specs: ["Cognitive Processor XR", "XR OLED Contrast", "Google TV"],
      installments: "15x $93.33 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: 'TCL QLED 50" C825 Mini LED 4K',
      price: "$899.99",
      originalPrice: "$1,099.99",
      brand: "TCL",
      rating: 4,
      reviews: 67,
      discount: 18,
      stock: 12,
      freeShipping: true,
      specs: ["Quantum Dot technology", "Mini LED backlight", "120Hz VRR"],
      installments: "9x $99.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: 'Hisense ULED 55" U8G Quantum',
      price: "$999.99",
      originalPrice: "$1,199.99",
      brand: "Hisense",
      rating: 4,
      reviews: 98,
      discount: 17,
      stock: 10,
      freeShipping: true,
      specs: ["Quantum Dot Wide Color", "Full Array Local Dimming", "Dolby Vision"],
      installments: "10x $99.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: 'Philips OLED 48" 806 Series Ambilight',
      price: "$1,199.99",
      originalPrice: "$1,399.99",
      brand: "Philips",
      rating: 5,
      reviews: 45,
      discount: 14,
      stock: 6,
      freeShipping: true,
      specs: ["P5 AI Perfect Picture", "3-sided Ambilight", "Android TV"],
      installments: "12x $99.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const accesorios = [
    {
      name: "Apple Watch Series 9 GPS 45mm",
      price: "$429.99",
      originalPrice: "$449.99",
      brand: "Apple",
      rating: 5,
      reviews: 267,
      discount: 4,
      stock: 15,
      freeShipping: true,
      isBestSeller: true,
      specs: ["S9 SiP chip", "Double Tap gesture", "18-hour battery"],
      installments: "12x $35.83 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Samsung Galaxy Watch 6 Classic 47mm",
      price: "$379.99",
      originalPrice: "$429.99",
      brand: "Samsung",
      rating: 4,
      reviews: 189,
      discount: 12,
      stock: 11,
      freeShipping: true,
      specs: ["Exynos W930", "Rotating bezel", "40-hour battery"],
      installments: "10x $37.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Garmin Venu 3 GPS Smartwatch",
      price: "$449.99",
      originalPrice: "$499.99",
      brand: "Garmin",
      rating: 5,
      reviews: 123,
      discount: 10,
      stock: 8,
      freeShipping: true,
      isNew: true,
      specs: ["14-day battery", "Built-in GPS", "Health monitoring"],
      installments: "15x $29.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Fitbit Versa 4 Health & Fitness",
      price: "$199.99",
      originalPrice: "$249.99",
      brand: "Fitbit",
      rating: 4,
      reviews: 234,
      discount: 20,
      stock: 18,
      freeShipping: true,
      specs: ["6+ day battery", "Built-in GPS", "40+ exercise modes"],
      installments: "6x $33.33 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Huawei Watch GT 4 46mm",
      price: "$279.99",
      originalPrice: "$329.99",
      brand: "Huawei",
      rating: 4,
      reviews: 156,
      discount: 15,
      stock: 13,
      freeShipping: true,
      specs: ["14-day battery", "TruSleep monitoring", "100+ workout modes"],
      installments: "8x $34.99 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Amazfit GTR 4 Smart Watch",
      price: "$199.99",
      originalPrice: "$229.99",
      brand: "Amazfit",
      rating: 4,
      reviews: 178,
      discount: 13,
      stock: 16,
      freeShipping: true,
      specs: ["14-day battery", "150+ sports modes", "Alexa built-in"],
      installments: "7x $28.57 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const flashDeals = [
    {
      name: "iPad Air 5th Gen 64GB WiFi",
      price: "$499.99",
      originalPrice: "$599.99",
      brand: "Apple",
      rating: 5,
      reviews: 345,
      discount: 17,
      stock: 3,
      freeShipping: true,
      timeLeft: "2h 15m",
      specs: ["M1 chip", "10.9-inch display", "12MP cameras"],
      installments: "12x $41.66 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "MacBook Air M2 256GB",
      price: "$999.99",
      originalPrice: "$1,199.99",
      brand: "Apple",
      rating: 5,
      reviews: 189,
      discount: 17,
      stock: 2,
      freeShipping: true,
      timeLeft: "1h 45m",
      specs: ["M2 chip", "13.6-inch display", "18-hour battery"],
      installments: "18x $55.55 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "iPhone 15 128GB",
      price: "$699.99",
      originalPrice: "$799.99",
      brand: "Apple",
      rating: 5,
      reviews: 567,
      discount: 12,
      stock: 1,
      freeShipping: true,
      timeLeft: "3h 30m",
      specs: ["A16 Bionic chip", "6.1-inch display", "48MP camera"],
      installments: "24x $29.16 sin interés",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const categories = [
    { title: "Laptops Gaming", icon: "🎮", productCount: 156, image: "/placeholder.svg?height=100&width=100" },
    { title: "Smartphones", icon: "📱", productCount: 234, image: "/placeholder.svg?height=100&width=100" },
    { title: "Audífonos", icon: "🎧", productCount: 89, image: "/placeholder.svg?height=100&width=100" },
    { title: "Televisores", icon: "📺", productCount: 67, image: "/placeholder.svg?height=100&width=100" },
    { title: "Smartwatches", icon: "⌚", productCount: 45, image: "/placeholder.svg?height=100&width=100" },
    { title: "Accesorios", icon: "🔌", productCount: 178, image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        {/* First Navigation Row */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <span className="text-xl font-bold">CODARI</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Inicios
              </a>
              <a href="/productos" className="text-orange-600 hover:text-orange-700 font-medium">
                Productos
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Populares
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Contáctanos
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Navigation Row */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">-20%</div>
                <span className="text-sm text-gray-700">Aprovecha nuestras ofertas</span>
              </div>

              <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Buscar productos..." className="pl-10 w-full bg-white border-gray-300" />
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-700 font-medium">+51-909290190</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Laptops */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge className="bg-white text-orange-600 font-bold px-3 py-1">Hasta 20%</Badge>
                <span className="text-lg">Descuento</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Las mejores Ofertas
                <br />
                En <span className="text-yellow-300">Laptops</span>
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-lg">Cotiza Ahora!</span>
                <div className="bg-yellow-400 text-orange-600 px-3 py-1 rounded-full font-bold">📞 999 999 999</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt={`Laptop ${i}`}
                    width={120}
                    height={120}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Zap className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-red-600">Ofertas Flash</h2>
              <Clock className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashDeals.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-red-200">
                <CardContent className="p-6 relative">
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
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-red-600">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
                    </div>
                    <div className="text-sm text-green-600">{product.installments}</div>
                    <div className="text-sm text-orange-600">Solo {product.stock} disponibles</div>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-lg py-3">¡Comprar Ahora!</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-orange-600">Las mejores Ofertas del Año</h2>
            <Button className="bg-orange-500 hover:bg-orange-600">Solicita un Catálogo</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {laptops.map((laptop, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 relative">
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
                    <h3 className="font-semibold mb-2">{laptop.name}</h3>
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Ver más detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Web Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-orange-500 text-white rounded-lg p-2 inline-block mb-8">
            <span className="font-bold px-4 py-2">EXCLUSIVO SOLO POR LA WEB</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Exclusivo Online"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-600">Exclusivos Online</h3>
              <p className="text-gray-600">
                Productos únicos disponibles solo en nuestra tienda online con descuentos especiales.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt={`Producto ${i}`}
                      width={100}
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">Ver más Catálogo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg inline-block font-bold">
              TUS MARCAS FAVORITAS
            </div>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {["logitech", "redragon", "logitech", "redragon", "logitech"].map((brand, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-gray-600 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousels */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          <ImprovedCarousel title="🎧 Audífonos Gamer" products={audifonos} autoplay={true} />
          <ImprovedCarousel title="📺 Televisiones OLED" products={televisores} />
          <ImprovedCarousel title="⌚ Zonas de Accesorios Tecnológicos" products={accesorios} />
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-3xl font-bold">Productos en Tendencia</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audifonos.slice(0, 4).map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-green-500 text-white">🔥 Trending</Badge>
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
                    <Button className="w-full mt-3 bg-green-600 hover:bg-green-700">Agregar al Carrito</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <p className="text-sm text-gray-600">
                Tu tienda de tecnología de confianza con los mejores productos y precios.
              </p>
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
