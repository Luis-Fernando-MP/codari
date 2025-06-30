import { Search, Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { relatedProducts } from '@/constants/db_product'

const getProductData = (id: string) => {
	return {
		id,
		name: 'iPhone 15 Pro Max 256GB',
		brand: 'Apple',
		price: '$1,199',
		originalPrice: '$1,399',
		discount: 14,
		rating: 4.8,
		reviews: 2847,
		inStock: true,
		stockCount: 12,
		sku: 'APL-IP15PM-256-BLU',
		category: 'Smartphones',
		images: [
			'/placeholder.svg?height=600&width=600',
			'/placeholder.svg?height=600&width=600',
			'/placeholder.svg?height=600&width=600',
			'/placeholder.svg?height=600&width=600'
		],
		description:
			'El iPhone 15 Pro Max redefine lo que es posible con un smartphone. Con el revolucionario chip A17 Pro, sistema de cámaras profesional y diseño en titanio, experimenta la innovación en cada detalle.',
		features: [
			'Chip A17 Pro con GPU de 6 núcleos',
			'Sistema de cámaras Pro con teleobjetivo 5x',
			'Pantalla Super Retina XDR de 6.7 pulgadas',
			'Diseño resistente en titanio',
			'Conector USB-C',
			'Face ID avanzado',
			'Resistente al agua IP68',
			'iOS 17 con nuevas funciones'
		],
		specifications: {
			Pantalla: '6.7 pulgadas Super Retina XDR OLED',
			Procesador: 'Chip A17 Pro',
			Almacenamiento: '256GB',
			'Cámara Principal': '48MP con teleobjetivo 5x',
			'Cámara Frontal': '12MP TrueDepth',
			Batería: 'Hasta 29 horas de reproducción de video',
			Conectividad: '5G, Wi-Fi 6E, Bluetooth 5.3',
			'Sistema Operativo': 'iOS 17',
			Dimensiones: '159.9 x 76.7 x 8.25 mm',
			Peso: '221 gramos'
		},
		colors: [
			{ name: 'Titanio Natural', value: 'natural', available: true },
			{ name: 'Titanio Azul', value: 'blue', available: true },
			{ name: 'Titanio Blanco', value: 'white', available: true },
			{ name: 'Titanio Negro', value: 'black', available: false }
		],
		storage: [
			{ size: '128GB', price: '$1,099', available: true },
			{ size: '256GB', price: '$1,199', available: true, selected: true },
			{ size: '512GB', price: '$1,399', available: true },
			{ size: '1TB', price: '$1,599', available: true }
		],
		warranty: '1 año de garantía Apple + 6 meses adicionales CODARI',
		shipping: 'Envío gratis en 24-48 horas',
		returns: '30 días para devoluciones gratuitas'
	}
}

export default function ProductDetailPage() {
	const product = getProductData('Comida')

	return (
		<div className="min-h-screen bg-white">
			{/* Product Detail */}
			<div className="container mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Product Images */}
					<div className="space-y-4">
						<div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
							<img
								src={product.images[0] || '/placeholder.svg'}
								alt={product.name}
								width={600}
								height={600}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="grid grid-cols-4 gap-4">
							{product.images.map((image, index) => (
								<div
									key={index}
									className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500"
								>
									<img
										src={image || '/placeholder.svg'}
										alt={`${product.name} ${index + 1}`}
										width={150}
										height={150}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						{/* Header */}
						<div>
							<div className="flex items-center space-x-2 mb-2">
								<Badge variant="outline" className="text-xs">
									{product.brand}
								</Badge>
								<Badge className="bg-red-500 text-white text-xs">-{product.discount}%</Badge>
							</div>
							<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
							<div className="flex items-center space-x-4 mb-4">
								<div className="flex items-center space-x-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`w-5 h-5 ${
												i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
											}`}
										/>
									))}
									<span className="text-lg font-semibold ml-2">{product.rating}</span>
								</div>
								<span className="text-gray-600">({product.reviews} reseñas)</span>
							</div>
						</div>

						{/* Price */}
						<div className="space-y-2">
							<div className="flex items-center space-x-4">
								<span className="text-4xl font-bold text-orange-600">{product.price}</span>
								<span className="text-2xl text-gray-500 line-through">{product.originalPrice}</span>
							</div>
							<div className="text-green-600 font-semibold">
								¡Ahorras ${Number.parseInt(product.originalPrice.slice(1)) - Number.parseInt(product.price.slice(1))}!
							</div>
							<div className="text-sm text-gray-600">
								o 12 cuotas sin interés de ${Math.round(Number.parseInt(product.price.slice(1)) / 12)}
							</div>
						</div>

						{/* Stock Status */}
						<div className="flex items-center space-x-2">
							{product.inStock ? (
								<>
									<Check className="w-5 h-5 text-green-500" />
									<span className="text-green-600 font-semibold">En stock ({product.stockCount} disponibles)</span>
								</>
							) : (
								<span className="text-red-600 font-semibold">Agotado</span>
							)}
						</div>

						{/* Color Selection */}
						<div>
							<h3 className="font-semibold mb-3">Color: Titanio Azul</h3>
							<div className="flex space-x-3">
								{product.colors.map((color, index) => (
									<button
										key={index}
										className={`w-12 h-12 rounded-full border-2 ${
											color.available
												? 'border-gray-300 hover:border-orange-500'
												: 'border-gray-200 opacity-50 cursor-not-allowed'
										}`}
										style={{
											backgroundColor:
												color.value === 'natural'
													? '#f5f5dc'
													: color.value === 'blue'
													? '#4169e1'
													: color.value === 'white'
													? '#ffffff'
													: '#000000'
										}}
										disabled={!color.available}
									/>
								))}
							</div>
						</div>

						{/* Storage Selection */}
						<div>
							<h3 className="font-semibold mb-3">Almacenamiento</h3>
							<div className="grid grid-cols-2 gap-3">
								{product.storage.map((option, index) => (
									<button
										key={index}
										className={`p-3 border rounded-lg text-center ${
											option.selected
												? 'border-orange-500 bg-orange-50 text-orange-600'
												: option.available
												? 'border-gray-300 hover:border-orange-500'
												: 'border-gray-200 opacity-50 cursor-not-allowed'
										}`}
										disabled={!option.available}
									>
										<div className="font-semibold">{option.size}</div>
										<div className="text-sm">{option.price}</div>
									</button>
								))}
							</div>
						</div>

						{/* Quantity */}
						<div>
							<h3 className="font-semibold mb-3">Cantidad</h3>
							<div className="flex items-center space-x-3">
								<Button variant="outline" size="icon">
									<Minus className="w-4 h-4" />
								</Button>
								<span className="text-xl font-semibold px-4">1</span>
								<Button variant="outline" size="icon">
									<Plus className="w-4 h-4" />
								</Button>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="space-y-4">
							<Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold">
								<ShoppingCart className="w-5 h-5 mr-2" />
								Agregar al Carrito
							</Button>
							<div className="grid grid-cols-2 gap-4">
								<Button variant="outline" className="py-3">
									<Heart className="w-5 h-5 mr-2" />
									Favoritos
								</Button>
								<Button variant="outline" className="py-3">
									<Share2 className="w-5 h-5 mr-2" />
									Compartir
								</Button>
							</div>
						</div>

						{/* Benefits */}
						<div className="space-y-3 pt-6 border-t">
							<div className="flex items-center space-x-3">
								<Truck className="w-5 h-5 text-green-600" />
								<span className="text-sm">{product.shipping}</span>
							</div>
							<div className="flex items-center space-x-3">
								<Shield className="w-5 h-5 text-blue-600" />
								<span className="text-sm">{product.warranty}</span>
							</div>
							<div className="flex items-center space-x-3">
								<RotateCcw className="w-5 h-5 text-purple-600" />
								<span className="text-sm">{product.returns}</span>
							</div>
						</div>
					</div>
				</div>

				{/* Product Details Tabs */}
				<div className="mt-16">
					<Tabs defaultValue="description" className="w-full">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="description">Descripción</TabsTrigger>
							<TabsTrigger value="specifications">Especificaciones</TabsTrigger>
							<TabsTrigger value="reviews">Reseñas ({product.reviews})</TabsTrigger>
						</TabsList>

						<TabsContent value="description" className="mt-8">
							<Card>
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold mb-6">Descripción del Producto</h3>
									<p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>

									<h4 className="text-xl font-semibold mb-4">Características Principales</h4>
									<ul className="space-y-3">
										{product.features.map((feature, index) => (
											<li key={index} className="flex items-start space-x-3">
												<Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700">{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="specifications" className="mt-8">
							<Card>
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold mb-6">Especificaciones Técnicas</h3>
									<div className="grid md:grid-cols-2 gap-6">
										{Object.entries(product.specifications).map(([key, value], index) => (
											<div key={index} className="flex justify-between py-3 border-b border-gray-200">
												<span className="font-semibold text-gray-900">{key}</span>
												<span className="text-gray-700">{value}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="reviews" className="mt-8">
							<Card>
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold mb-6">Reseñas de Clientes</h3>
									<div className="space-y-6">
										{/* Review Summary */}
										<div className="flex items-center space-x-8 pb-6 border-b">
											<div className="text-center">
												<div className="text-4xl font-bold">{product.rating}</div>
												<div className="flex justify-center mb-2">
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`w-5 h-5 ${
																i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
															}`}
														/>
													))}
												</div>
												<div className="text-sm text-gray-600">{product.reviews} reseñas</div>
											</div>
											<div className="flex-1">
												{[5, 4, 3, 2, 1].map((stars) => (
													<div key={stars} className="flex items-center space-x-3 mb-2">
														<span className="text-sm w-8">{stars}★</span>
														<div className="flex-1 bg-gray-200 rounded-full h-2">
															<div
																className="bg-yellow-400 h-2 rounded-full"
																style={{
																	width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`
																}}
															></div>
														</div>
														<span className="text-sm text-gray-600 w-12">
															{stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '5%' : stars === 2 ? '3%' : '2%'}
														</span>
													</div>
												))}
											</div>
										</div>

										{/* Sample Reviews */}
										<div className="space-y-6">
											{[
												{
													name: 'Carlos M.',
													rating: 5,
													date: '15 de enero, 2024',
													comment:
														'Excelente producto, la calidad de la cámara es impresionante y la batería dura todo el día. Muy recomendado.'
												},
												{
													name: 'María L.',
													rating: 4,
													date: '10 de enero, 2024',
													comment:
														'Muy buen teléfono, aunque el precio es un poco alto. La pantalla es hermosa y el rendimiento es excelente.'
												},
												{
													name: 'José R.',
													rating: 5,
													date: '5 de enero, 2024',
													comment:
														'El mejor iPhone que he tenido. La diferencia en velocidad y calidad de fotos es notable comparado con mi modelo anterior.'
												}
											].map((review, index) => (
												<div key={index} className="border-b border-gray-200 pb-6">
													<div className="flex items-center space-x-4 mb-3">
														<div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
															<span className="font-semibold text-gray-700">{review.name[0]}</span>
														</div>
														<div>
															<div className="font-semibold">{review.name}</div>
															<div className="flex items-center space-x-2">
																<div className="flex">
																	{[...Array(5)].map((_, i) => (
																		<Star
																			key={i}
																			className={`w-4 h-4 ${
																				i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
																			}`}
																		/>
																	))}
																</div>
																<span className="text-sm text-gray-600">{review.date}</span>
															</div>
														</div>
													</div>
													<p className="text-gray-700">{review.comment}</p>
												</div>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>

				{/* Related Products */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8">Productos Relacionados</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{relatedProducts.map((product, index) => (
							<Card key={index} className="group hover:shadow-lg transition-all duration-300">
								<CardContent className="p-4">
									<div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
										<img
											src={product.image || '/placeholder.svg'}
											alt={product.name}
											width={200}
											height={200}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform"
										/>
									</div>
									<h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
									<div className="flex items-center space-x-1 mb-2">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-3 h-3 ${
													i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
												}`}
											/>
										))}
										<span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
									</div>
									<div className="flex items-center space-x-2 mb-4">
										<span className="text-lg font-bold text-orange-600">{product.price}</span>
										<span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
									</div>
									<Button className="w-full bg-orange-600 hover:bg-orange-700">
										<a href="/producto/iphone-15-pro" className="block w-full text-white">
											Ver Producto
										</a>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 py-12 mt-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
									<span className="text-white text-xs font-bold">$</span>
								</div>
								<span className="text-xl font-bold text-gray-900">CODARI</span>
							</div>
							<p className="text-sm text-gray-600">Tu tienda de tecnología de confianza con los mejores productos y precios.</p>
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
