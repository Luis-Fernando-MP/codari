export const categories = [
	{
		id: 'laptops',
		title: 'Laptops Gaming',
		icon: '🎮',
		productCount: 156,
		image: '/productos/categorias/cat1.png?height=100&width=100'
	},
	{
		id: 'smartphones',
		title: 'Smartphones',
		icon: '📱',
		productCount: 234,
		image: '/productos/categorias/cat2.png?height=100&width=100'
	},
	{
		id: 'audifonos',
		title: 'Audífonos',
		icon: '🎧',
		productCount: 89,
		image: '/productos/categorias/cat3.png?height=100&width=100'
	},
	{
		id: 'televisores',
		title: 'Televisores',
		icon: '📺',
		productCount: 67,
		image: '/productos/categorias/cat4.png?height=100&width=100'
	},
	{
		id: 'lsmartwatches',
		title: 'Smartwatches',
		icon: '⌚',
		productCount: 45,
		image: '/productos/categorias/cat5.png?height=100&width=100'
	},
	{
		id: 'sillas',
		title: 'Sillas',
		icon: '🔌',
		productCount: 178,
		image: '/productos/categorias/cat6.png?height=100&width=100'
	}
]

export const brandLogos = [
	{ id: 'log', name: 'Logitech', src: '/productos/marcas/logo1.png' },
	{ id: 'sam', name: 'Samsung', src: '/productos/marcas/logo2.png' },
	{ id: 'hyp', name: 'HyperX', src: '/productos/marcas/logo3.png' },
	{ id: 'asu', name: 'Asus', src: '/productos/marcas/logo4.png' }
]

export const relatedProducts = [
	{
		id: 'apple-iphone15pro-128',
		name: 'iPhone 15 Pro 128GB',
		price: '$999',
		originalPrice: '$1,099',
		rating: 4.7,
		reviews: 1234,
		image: '/productos/categorias/cat6.png?height=100&width=100'
	},
	{
		id: 'apple-airpods-pro-2gen',
		name: 'AirPods Pro (2ª gen)',
		price: '$249',
		originalPrice: '$279',
		rating: 4.9,
		reviews: 5678,
		image: '/productos/categorias/cat3.png?height=100&width=100'
	},
	{
		id: 'apple-magsafe-charger',
		name: 'MagSafe Charger',
		price: '$39',
		originalPrice: '$49',
		rating: 4.5,
		reviews: 890,
		image: '/productos/categorias/cat1.png?height=100&width=100'
	},
	{
		id: 'apple-iphone15promax-case',
		name: 'iPhone 15 Pro Max Case',
		price: '$59',
		originalPrice: '$79',
		rating: 4.6,
		reviews: 456,
		image: '/inicio/head.png?height=500&width=600'
	}
]

export const slides = [
	{
		id: 'iPhone-15-Pro-Max',
		name: 'iPhone 15 Pro Max',
		category: 'iPhone 15 Pro Max',
		title: 'TECNOLOGÍA\nQUE IMPACTA',
		description: 'Explora el futuro con nuestros productos de última generación que transforman tu experiencia digital.',
		price: 's/ 4,999.00',
		image: '/inicio/head.png?height=500&width=600',
		buttonText: 'Ver Detalles'
	},
	{
		id: 'MacBook--Pro-M3',
		name: 'MacBook Pro M3',
		category: 'MacBook Pro M3',
		title: 'POTENCIA\nSIN LÍMITES',
		description: 'Experimenta el rendimiento profesional con el nuevo chip M3 que revoluciona tu productividad.',
		price: 's/ 5,999.00',
		image: '/inicio/head2.png?height=500&width=600',
		buttonText: 'Descubrir Más'
	},
	{
		id: 'AirPods-Pro',
		name: 'AirPods Pro',
		category: 'AirPods Pro',
		title: 'SONIDO\nINMERSIVO',
		description: 'Sumérgete en una experiencia auditiva única con cancelación de ruido activa de nueva generación.',
		price: 's/ 999.00',
		image: '/inicio/head3.png?height=500&width=600',
		buttonText: 'Escuchar Ahora'
	},
	{
		id: 'Apple-Watch-Ultra',
		name: 'Apple Watch Ultra',
		category: 'Apple Watch Ultra',
		title: 'AVENTURA\nSIN FRONTERAS',
		description: 'El reloj más resistente y avanzado para los que buscan superar todos los límites.',
		price: 's/ 600.00',
		image: '/inicio/head4.png?height=500&width=600',
		buttonText: 'Explorar'
	}
]

export const laptops = [
	{
		id: 'asus-rog-strix-i9-4060',
		name: "Laptop Asus Rog Strix Intel Core i9-14900Hx, 16GB, 1Tb, 16'' FHD,Video RTX 4060, Win 11 Pro",
		price: 'S/ 1,469',
		originalPrice: 'S/ 1,699',
		brand: 'Asus',
		rating: 4,
		reviews: 128,
		discount: 15,
		stock: 5,
		freeShipping: true,
		specs: ['Intel Core i9', '16GB RAM', '1TB SSD', 'RTX 4060'],
		installments: '12x S/ 122.42 sin interés',
		image: '/productos/header_ofert1.png?height=300&width=300',
		sku: 'ASUS-ROG-I9-16-1T-4060',
		description: 'Laptop gamer de alto rendimiento con procesador Intel Core i9 y tarjeta gráfica RTX 4060.',
		features: [
			"Pantalla FHD 16''",
			'Procesador Intel Core i9',
			'Tarjeta gráfica RTX 4060',
			'SSD 1TB',
			'16GB RAM',
			'Windows 11 Pro'
		],
		specifications: {
			Pantalla: "16'' FHD",
			Procesador: 'Intel Core i9-14900Hx',
			Almacenamiento: '1TB SSD',
			Batería: '76Wh, hasta 8 horas',
			Conectividad: 'WiFi 6E, Bluetooth 5.2, USB-C, HDMI',
			Dimensiones: '35.4 x 25.4 x 2.2 cm',
			Peso: '2.3 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Gris', value: '#888', available: true }
		],
		storage: [
			{ size: '1TB SSD', price: 'S/ 1,469', available: true },
			{ size: '512GB SSD', price: 'S/ 1,399', available: false }
		],
		warranty: '2 años de garantía Asus',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'hp-victus-i7-3050',
		name: "Gamer HP Intel Core i7 RTX 3050 16GB 512 GB SSD Victus 12va Gen 15.6'' 15-fa0007la W11",
		price: 'S/ 1,499',
		originalPrice: 'S/ 1,599',
		brand: 'HP',
		rating: 5,
		reviews: 89,
		discount: 8,
		stock: 12,
		freeShipping: true,
		isBestSeller: true,
		specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX 3050'],
		installments: '18x S/ 81.61 sin interés',
		image: '/productos/header_ofert2.png?height=300&width=300',
		sku: 'HP-VICTUS-I7-16-512-3050',
		description: 'Laptop HP Victus para gaming con procesador Intel Core i7 y gráfica RTX 3050.',
		features: [
			"Pantalla FHD 15.6''",
			'Procesador Intel Core i7',
			'Tarjeta gráfica RTX 3050',
			'512GB SSD',
			'16GB RAM',
			'Windows 11'
		],
		specifications: {
			Pantalla: "15.6'' FHD",
			Procesador: 'Intel Core i7 12va Gen',
			Almacenamiento: '512GB SSD',
			Batería: '70Wh, hasta 7 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.1, USB-C, HDMI',
			Dimensiones: '36 x 24 x 2.3 cm',
			Peso: '2.2 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Azul', value: '#0057b7', available: false }
		],
		storage: [
			{ size: '512GB SSD', price: 'S/ 1,499', available: true },
			{ size: '1TB SSD', price: 'S/ 1,599', available: false }
		],
		warranty: '1 año de garantía HP',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'acer-nitro-v15-i7-4050',
		name: 'LAPTOP GAMER ACER NITRO V15 ANV15-51-711U i7 13° GEN. 15.6 FHD IPS 144Hz 16GB 512GB RTX4050 6GB W11',
		price: 'S/ 1,549',
		originalPrice: 'S/ 1,549',
		brand: 'Acer',
		rating: 4,
		reviews: 67,
		discount: 5,
		stock: 8,
		freeShipping: true,
		specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX 4050'],
		installments: '24x S/ 61.21 sin interés',
		image: '/productos/header_ofert3.png?height=300&width=300',
		sku: 'ACER-NITRO-I7-16-512-4050',
		description: 'Laptop gamer Acer Nitro V15 con pantalla IPS 144Hz y gráfica RTX 4050.',
		features: [
			"Pantalla FHD IPS 144Hz 15.6''",
			'Procesador Intel Core i7',
			'Tarjeta gráfica RTX 4050',
			'512GB SSD',
			'16GB RAM',
			'Windows 11'
		],
		specifications: {
			Pantalla: "15.6'' FHD IPS 144Hz",
			Procesador: 'Intel Core i7 13° Gen',
			Almacenamiento: '512GB SSD',
			Batería: '72Wh, hasta 7 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.1, USB-C, HDMI',
			Dimensiones: '36.2 x 25.3 x 2.4 cm',
			Peso: '2.4 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Rojo', value: '#c00', available: false }
		],
		storage: [
			{ size: '512GB SSD', price: 'S/ 1,549', available: true },
			{ size: '1TB SSD', price: 'S/ 1,649', available: false }
		],
		warranty: '1 año de garantía Acer',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'acer-nitro-v15-i5-3050',
		name: 'ACER Nitro V15 ANV15-51-56GH Ci5 13420H/ 8Gb Ram/ 512GB SSD/ RTX 3050 6GB/ 15.6”FHD W.11 - CSI',
		price: 'S/ 1,469',
		originalPrice: 'S/ 1,799',
		brand: 'Acer',
		rating: 5,
		reviews: 156,
		discount: 18,
		stock: 3,
		freeShipping: true,
		isNew: true,
		specs: ['Intel Core i5', '8GB RAM', '512GB SSD', 'RTX 3050'],
		installments: '6x S/ 244.83 sin interés',
		image: '/productos/header_ofert4.png?height=300&width=300',
		sku: 'ACER-NITRO-I5-8-512-3050',
		description: 'Laptop gamer Acer Nitro V15 con procesador Intel Core i5 y gráfica RTX 3050.',
		features: [
			"Pantalla FHD 15.6''",
			'Procesador Intel Core i5',
			'Tarjeta gráfica RTX 3050',
			'512GB SSD',
			'8GB RAM',
			'Windows 11'
		],
		specifications: {
			Pantalla: "15.6'' FHD",
			Procesador: 'Intel Core i5 13420H',
			Almacenamiento: '512GB SSD',
			Batería: '70Wh, hasta 6 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.1, USB-C, HDMI',
			Dimensiones: '36 x 25 x 2.3 cm',
			Peso: '2.2 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Azul', value: '#0057b7', available: false }
		],
		storage: [
			{ size: '512GB SSD', price: 'S/ 1,469', available: true },
			{ size: '1TB SSD', price: 'S/ 1,799', available: false }
		],
		warranty: '1 año de garantía Acer',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	}
]

export const audifonos = [
	{
		id: 'redragon-zeus-h510-pro-wl',
		name: 'Audifono Redragon Zeus X PRO RGB H510-PRO-WL Wireless BLACK',
		price: 's/ 89.99',
		originalPrice: 's/ 119.99',
		brand: 'Redragon',
		rating: 5,
		reviews: 234,
		discount: 25,
		stock: 15,
		freeShipping: true,
		isBestSeller: true,
		specs: ['Bluetooth 5.0', 'RGB lighting', '40-hour battery life'],
		installments: '3x s/ 29.99 sin interés',
		image: '/productos/audifonos/audifono1.png?height=200&width=200',
		sku: 'REDRAGON-H510-PRO-WL',
		description: 'Audífono gamer inalámbrico con RGB y batería de larga duración.',
		features: ['Bluetooth 5.0', 'RGB', '40 horas de batería', 'Micrófono desmontable'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '40 horas',
			Conectividad: 'Bluetooth 5.0, USB',
			Dimensiones: '21 x 18 x 9 cm',
			Peso: '350 g'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Redragon',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'haylou-s30pro-white',
		name: 'Audífonos Bluetooth Haylou S30 PRO ANC Hybrid Hi-Res - Blanco',
		price: 's/ 179.99',
		originalPrice: 's/ 199.99',
		brand: 'Haylou',
		rating: 4,
		reviews: 167,
		discount: 10,
		stock: 8,
		freeShipping: true,
		specs: ['Active Noise Cancellation', 'Hi-Res Audio', 'Touch controls'],
		installments: '6x s/ 29.99 sin interés',
		image: '/productos/audifonos/audifono2.png?height=200&width=200',
		sku: 'HAYLOU-S30PRO-WHITE',
		description: 'Audífonos Bluetooth con cancelación activa de ruido y audio Hi-Res.',
		features: ['ANC', 'Hi-Res Audio', 'Controles táctiles', 'Bluetooth 5.2'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '30 horas',
			Conectividad: 'Bluetooth 5.2',
			Dimensiones: '20 x 17 x 8 cm',
			Peso: '320 g'
		},
		colors: [
			{ name: 'Blanco', value: '#fff', available: true },
			{ name: 'Negro', value: '#222', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Haylou',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'haylou-s30pro-black',
		name: 'Audífonos Bluetooth Haylou S30 PRO ANC Hybrid Hi-Res - Negro',
		price: 's/ 129.99',
		originalPrice: 's/ 149.99',
		brand: 'Haylou',
		rating: 4,
		reviews: 198,
		discount: 13,
		stock: 12,
		freeShipping: true,
		specs: ['Bluetooth 5.1', 'Low latency', 'Dual microphone'],
		installments: '4x s/ 32.49 sin interés',
		image: '/productos/audifonos/audifono3.png?height=200&width=200',
		sku: 'HAYLOU-S30PRO-BLACK',
		description: 'Audífonos Bluetooth con baja latencia y doble micrófono.',
		features: ['Bluetooth 5.1', 'Baja latencia', 'Doble micrófono', 'Carga rápida'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '28 horas',
			Conectividad: 'Bluetooth 5.1',
			Dimensiones: '20 x 17 x 8 cm',
			Peso: '320 g'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Haylou',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'combat-gamer-negroazul',
		name: 'AUDIFONOS GAMER COMBAT NEGROAZUL',
		price: 's/ 149.99',
		originalPrice: 's/ 169.99',
		brand: 'Combat',
		rating: 5,
		reviews: 145,
		discount: 12,
		stock: 6,
		freeShipping: true,
		isNew: true,
		specs: ['50mm drivers', 'Noise isolation', 'Adjustable headband'],
		installments: '5x s/ 29.99 sin interés',
		image: '/productos/audifonos/audifono4.png?height=200&width=200',
		sku: 'COMBAT-GAMER-BLUE',
		description: 'Audífonos gamer con aislamiento de ruido y diadema ajustable.',
		features: ['Drivers 50mm', 'Aislamiento de ruido', 'Diadema ajustable', 'Micrófono integrado'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '20 horas',
			Conectividad: 'Cable 3.5mm, USB',
			Dimensiones: '22 x 19 x 9 cm',
			Peso: '370 g'
		},
		colors: [{ name: 'Negro/Azul', value: '#2222ff', available: true }],
		storage: [],
		warranty: '1 año de garantía Combat',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'corsair-hs80-rgb-wireless',
		name: 'Corsair HS80 RGB Wireless',
		price: 's/ 149.99',
		originalPrice: 's/ 179.99',
		brand: 'Corsair',
		rating: 4,
		reviews: 112,
		discount: 17,
		stock: 9,
		freeShipping: true,
		specs: ['Dolby Atmos', 'Custom-tuned 50mm drivers', 'Up to 20 hours battery life'],
		installments: '6x s/ 24.99 sin interés',
		image: '/productos/audifonos/audifono5.png?height=200&width=200',
		sku: 'CORSAIR-HS80-RGB',
		description: 'Audífonos inalámbricos con sonido Dolby Atmos y drivers personalizados.',
		features: ['Dolby Atmos', 'Drivers 50mm', 'RGB', '20 horas de batería'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '20 horas',
			Conectividad: 'Wireless, USB',
			Dimensiones: '21 x 18 x 9 cm',
			Peso: '340 g'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '1 año de garantía Corsair',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'haylou-s30pro-ipx5',
		name: 'Audífonos Bluetooth Haylou S30 PRO ANC Hybrid Hi-Res',
		price: 's/ 199.99',
		originalPrice: 's/ 229.99',
		brand: 'Haylou',
		rating: 5,
		reviews: 78,
		discount: 13,
		stock: 4,
		freeShipping: true,
		specs: ['Bluetooth 5.2', 'IPX5 water resistance', 'Touch controls'],
		installments: '8x s/ 24.99 sin interés',
		image: '/productos/audifonos/audifono6.png?height=200&width=200',
		sku: 'HAYLOU-S30PRO-IPX5',
		description: 'Audífonos Bluetooth resistentes al agua con controles táctiles.',
		features: ['Bluetooth 5.2', 'IPX5', 'Controles táctiles', 'Carga rápida'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '32 horas',
			Conectividad: 'Bluetooth 5.2',
			Dimensiones: '20 x 17 x 8 cm',
			Peso: '320 g'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Haylou',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	}
]

export const televisores = [
	{
		id: 'samsung-qn90a-neo-qled-55',
		name: 'Samsung OLED 55" QN90A Neo QLED 4K',
		price: 's/ 1,299.99',
		originalPrice: 's/ 1,499.99',
		brand: 'Samsung',
		rating: 5,
		reviews: 89,
		discount: 13,
		stock: 7,
		freeShipping: true,
		isBestSeller: true,
		specs: ['Neo Quantum Processor 4K', 'Quantum HDR 32X', '120Hz refresh rate'],
		installments: '12x s/ 108.33 sin interés',
		image: '/productos/televisiones/tv1.png?height=200&width=200',
		sku: 'SAMSUNG-QN90A-55OLED',
		description: "Televisor Samsung OLED 55'' con procesador Neo Quantum y HDR 32X.",
		features: ['OLED 4K', 'Neo Quantum Processor', 'HDR 32X', '120Hz', 'Smart TV'],
		specifications: {
			Pantalla: "55'' OLED 4K",
			Procesador: 'Neo Quantum Processor 4K',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, HDMI, USB',
			Dimensiones: '122 x 70 x 5 cm',
			Peso: '18 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía Samsung',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'lg-c1-oled-65',
		name: 'LG OLED 65" C1 Series 4K Smart TV',
		price: 's/ 1,799.99',
		originalPrice: 's/ 1,999.99',
		brand: 'LG',
		rating: 5,
		reviews: 156,
		discount: 10,
		stock: 5,
		freeShipping: true,
		specs: ['α9 Gen4 AI Processor', 'Dolby Vision IQ', 'HDMI 2.1'],
		installments: '18x s/ 99.99 sin interés',
		image: '/productos/televisiones/tv2.png?height=200&width=200',
		sku: 'LG-C1-65OLED',
		description: "Televisor LG OLED 65'' con procesador α9 Gen4 y Dolby Vision IQ.",
		features: ['OLED 4K', 'α9 Gen4 AI Processor', 'Dolby Vision IQ', 'HDMI 2.1', 'Smart TV'],
		specifications: {
			Pantalla: "65'' OLED 4K",
			Procesador: 'α9 Gen4 AI Processor',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, HDMI, USB',
			Dimensiones: '144 x 83 x 5 cm',
			Peso: '24 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía LG',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'sony-a80j-oled-55',
		name: 'Sony OLED 55" A80J Bravia XR',
		price: 's/ 1,399.99',
		originalPrice: 's/ 1,599.99',
		brand: 'Sony',
		rating: 4,
		reviews: 134,
		discount: 12,
		stock: 8,
		freeShipping: true,
		isNew: true,
		specs: ['Cognitive Processor XR', 'XR OLED Contrast', 'Google TV'],
		installments: '15x s/ 93.33 sin interés',
		image: '/productos/televisiones/tv3.png?height=200&width=200',
		sku: 'SONY-A80J-55OLED',
		description: "Televisor Sony OLED 55'' con procesador XR y Google TV integrado.",
		features: ['OLED 4K', 'Cognitive Processor XR', 'XR OLED Contrast', 'Google TV', 'Smart TV'],
		specifications: {
			Pantalla: "55'' OLED 4K",
			Procesador: 'Cognitive Processor XR',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, HDMI, USB',
			Dimensiones: '122 x 70 x 5 cm',
			Peso: '19 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía Sony',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'tcl-c825-qled-50',
		name: 'TCL QLED 50" C825 Mini LED 4K',
		price: 's/ 899.99',
		originalPrice: 's/ 1,099.99',
		brand: 'TCL',
		rating: 4,
		reviews: 67,
		discount: 18,
		stock: 12,
		freeShipping: true,
		specs: ['Quantum Dot technology', 'Mini LED backlight', '120Hz VRR'],
		installments: '9x s/ 99.99 sin interés',
		image: '/productos/televisiones/tv4.png?height=200&width=200',
		sku: 'TCL-C825-50QLED',
		description: "Televisor TCL QLED 50'' con tecnología Quantum Dot y Mini LED.",
		features: ['QLED 4K', 'Quantum Dot', 'Mini LED', '120Hz VRR', 'Smart TV'],
		specifications: {
			Pantalla: "50'' QLED 4K",
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, HDMI, USB',
			Dimensiones: '112 x 65 x 5 cm',
			Peso: '15 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía TCL',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'samsung-q80a-qled-55',
		name: 'samsung QLED 55" Q80A 4K Smart TV',
		price: 's/ 999.99',
		originalPrice: 's/ 1,199.99',
		brand: 'Samsung',
		rating: 4,
		reviews: 98,
		discount: 17,
		stock: 10,
		freeShipping: true,
		specs: ['Quantum Dot Wide Color', 'Full Array Local Dimming', 'Dolby Vision'],
		installments: '10x s/ 99.99 sin interés',
		image: '/productos/televisiones/tv5.png?height=200&width=200',
		sku: 'SAMSUNG-Q80A-55QLED',
		description: "Televisor Samsung QLED 55'' con Dolby Vision y Full Array Local Dimming.",
		features: ['QLED 4K', 'Quantum Dot', 'Full Array Local Dimming', 'Dolby Vision', 'Smart TV'],
		specifications: {
			Pantalla: "55'' QLED 4K",
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, HDMI, USB',
			Dimensiones: '122 x 70 x 5 cm',
			Peso: '18 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía Samsung',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'samsung-qn85a-qled-65',
		name: 'samsung QLED 65" QN85A 4K Smart TV',
		price: 's/ 1,199.99',
		originalPrice: 's/ 1,399.99',
		brand: 'Samsung',
		rating: 5,
		reviews: 45,
		discount: 14,
		stock: 6,
		freeShipping: true,
		specs: ['P5 AI Perfect Picture', '3-sided Ambilight', 'Android TV'],
		installments: '12x s/ 99.99 sin interés',
		image: '/productos/televisiones/tv6.png?height=200&width=200',
		sku: 'SAMSUNG-QN85A-65QLED',
		description: "Televisor Samsung QLED 65'' con Ambilight y Android TV.",
		features: ['QLED 4K', 'P5 AI Perfect Picture', 'Ambilight', 'Android TV', 'Smart TV'],
		specifications: {
			Pantalla: "65'' QLED 4K",
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, HDMI, USB',
			Dimensiones: '144 x 83 x 5 cm',
			Peso: '24 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía Samsung',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	}
]

export const Sillas = [
	{
		id: 'codari-gamer-155-masaje',
		name: 'Silla Gamer Reclinación 155° con Posapies y Masajeador',
		price: 's/ 429.99',
		originalPrice: 's/ 449.99',
		brand: 'Codari',
		rating: 5,
		reviews: 267,
		discount: 4,
		stock: 15,
		freeShipping: true,
		isBestSeller: true,
		specs: ['Reclinación 155°', 'Posapies ajustable', 'Masajeador incorporado'],
		installments: '12x s/ 35.83 sin interés',
		image: '/productos/sillas/silla1.png?height=200&width=200',
		sku: 'CODARI-GAMER-155-MASAJE',
		description: 'Silla gamer reclinable con masajeador y posapies ajustable.',
		features: ['Reclinación 155°', 'Masajeador lumbar', 'Posapies ajustable', 'Diseño ergonómico'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '18 kg'
		},
		colors: [
			{ name: 'Negro/Rojo', value: '#222', available: true },
			{ name: 'Negro/Azul', value: '#0057b7', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Codari',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'codari-gamer-155-ergonomica',
		name: 'Silla Gamer Reclinación 155° con Posapies y Masageador',
		price: 's/ 379.99',
		originalPrice: 's/ 429.99',
		brand: 'Codari',
		rating: 4,
		reviews: 189,
		discount: 12,
		stock: 11,
		freeShipping: true,
		specs: ['Reclinación 155°', 'Posapies ajustable', 'Diseño ergonómico'],
		installments: '10x s/ 37.99 sin interés',
		image: '/productos/sillas/silla2.png?height=200&width=200',
		sku: 'CODARI-GAMER-155-ERGONOMICA',
		description: 'Silla gamer reclinable con diseño ergonómico y posapies ajustable.',
		features: ['Reclinación 155°', 'Diseño ergonómico', 'Posapies ajustable'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '17 kg'
		},
		colors: [{ name: 'Negro/Rojo', value: '#222', available: true }],
		storage: [],
		warranty: '1 año de garantía Codari',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'kuzler-rik-101r-rosa',
		name: 'Silla Gamer Kuzler Con Masajeador Lumbar Color Rosa RIK-101R',
		price: 's/ 449.99',
		originalPrice: 's/ 499.99',
		brand: 'Kuzler',
		rating: 5,
		reviews: 123,
		discount: 10,
		stock: 8,
		freeShipping: true,
		isNew: true,
		specs: ['Reclinación 155°', 'Posapies ajustable', 'Masajeador lumbar'],
		installments: '15x s/ 29.99 sin interés',
		image: '/productos/sillas/silla3.png?height=200&width=200',
		sku: 'KUZLER-RIK-101R-ROSA',
		description: 'Silla gamer Kuzler con masajeador lumbar y posapies ajustable, color rosa.',
		features: ['Reclinación 155°', 'Masajeador lumbar', 'Posapies ajustable', 'Color rosa'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '18 kg'
		},
		colors: [{ name: 'Rosa', value: '#f8b6d2', available: true }],
		storage: [],
		warranty: '1 año de garantía Kuzler',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'kuzler-negra-metalica',
		name: 'Silla Gamer Kuzler Negra con masajeador lumbar reposapiés y base metálica',
		price: 's/ 199.99',
		originalPrice: 's/ 249.99',
		brand: 'Kuzler',
		rating: 4,
		reviews: 234,
		discount: 20,
		stock: 18,
		freeShipping: true,
		specs: ['Reclinación 155°', 'Posapies ajustable', 'Base metálica resistente'],
		installments: '6x s/ 33.33 sin interés',
		image: '/productos/sillas/silla4.png?height=200&width=200',
		sku: 'KUZLER-NEGRA-METALICA',
		description: 'Silla gamer Kuzler negra con masajeador lumbar y base metálica resistente.',
		features: ['Reclinación 155°', 'Base metálica', 'Masajeador lumbar', 'Posapies ajustable'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '19 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '1 año de garantía Kuzler',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'extingtion-sapp-blanco',
		name: 'Silla Gamer Extingtion Sapp Gamuza-Cuerina Color Blanco',
		price: 's/ 279.99',
		originalPrice: 's/ 329.99',
		brand: 'Extingtion',
		rating: 4,
		reviews: 156,
		discount: 15,
		stock: 13,
		freeShipping: true,
		specs: ['Reclinación 155°', 'Posapies ajustable', 'Diseño moderno'],
		installments: '8x s/ 34.99 sin interés',
		image: '/productos/sillas/silla5.png?height=200&width=200',
		sku: 'EXTINGTION-SAPP-BLANCO',
		description: 'Silla gamer Extingtion con diseño moderno y posapies ajustable, color blanco.',
		features: ['Reclinación 155°', 'Diseño moderno', 'Posapies ajustable', 'Color blanco'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '17 kg'
		},
		colors: [{ name: 'Blanco', value: '#fff', available: true }],
		storage: [],
		warranty: '1 año de garantía Extingtion',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'titan-rgb-135-blanco',
		name: 'Silla Gamer Con Luces RGB Titan Con Masajeador Reposapiés 135° Blanco',
		price: 's/ 199.99',
		originalPrice: 's/ 229.99',
		brand: 'Titan',
		rating: 4,
		reviews: 178,
		discount: 13,
		stock: 16,
		freeShipping: true,
		specs: ['Reclinación 135°', 'Luces RGB personalizables', 'Masajeador lumbar'],
		installments: '7x s/ 28.57 sin interés',
		image: '/productos/sillas/silla6.png?height=200&width=200',
		sku: 'TITAN-RGB-135-BLANCO',
		description: 'Silla gamer Titan con luces RGB y masajeador lumbar, color blanco.',
		features: ['Reclinación 135°', 'Luces RGB', 'Masajeador lumbar', 'Color blanco'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '18 kg'
		},
		colors: [
			{ name: 'Blanco', value: '#fff', available: true },
			{ name: 'Negro', value: '#222', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Titan',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	}
]

export const flashDeals = [
	{
		id: 'lenovo-legion5-r5-512',
		name: 'Laptop Lenovo Legion 5, Amd Ryzen 5 5600H, 8GB DDR4, SSD 512Gb, 15.6" FHD ',
		price: 'S/ 2500',
		originalPrice: 'S/ 3000',
		brand: 'Lenovo',
		rating: 5,
		reviews: 345,
		discount: 17,
		stock: 3,
		freeShipping: true,
		timeLeft: '2h 15m',
		specs: ['M1 chip', '10.9-inch display', '12MP cameras'],
		image: '/productos/ofert1.png?height=200&width=200',
		installments: '12x S/ 208.33 sin interés',
		category: 'LAPTOPS',
		sku: 'LENOVO-LEGION5-R5-8-512',
		description: 'Laptop Lenovo Legion 5 con procesador Ryzen 5 y pantalla FHD de 15.6 pulgadas.',
		features: ['Procesador Ryzen 5 5600H', '8GB DDR4', 'SSD 512GB', "Pantalla FHD 15.6''"],
		specifications: {
			Pantalla: "15.6'' FHD",
			Procesador: 'AMD Ryzen 5 5600H',
			Almacenamiento: '512GB SSD',
			Batería: '60Wh, hasta 7 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.1, USB-C, HDMI',
			Dimensiones: '36 x 25 x 2.3 cm',
			Peso: '2.4 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Gris', value: '#888', available: false }
		],
		storage: [{ size: '512GB SSD', price: 'S/ 2500', available: true }],
		warranty: '1 año de garantía Lenovo',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'logitech-g213-rgb-black',
		name: 'Teclado Gamer Marca Logitech G213 Prodigy Con Iluminación RGB, Black, Alámbrico - USB',
		price: 'S/ 222.99',
		originalPrice: 'S/ 249.99',
		brand: 'Logitech',
		rating: 5,
		reviews: 189,
		discount: 17,
		stock: 2,
		freeShipping: true,
		timeLeft: '1h 45m',
		specs: ['M2 chip', '13.6-inch display', '18-hour battery'],
		image: '/productos/ofert2.png?height=200&width=200',
		installments: '12x S/ 208.33 sin interés',
		category: 'ACCESORIOS',
		sku: 'LOGITECH-G213-RGB-BLACK',
		description: 'Teclado gamer Logitech G213 Prodigy con iluminación RGB y conexión USB.',
		features: ['Iluminación RGB', 'Alámbrico USB', 'Resistente a salpicaduras'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'USB',
			Dimensiones: '45 x 21 x 3.4 cm',
			Peso: '1.1 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '2 años de garantía Logitech',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'halion-aries06-600w-black',
		name: 'Case Gamer Halion Aries 06 Con Fuente de 600W, 4 LED-ARGB, Vidrio Templado, Black',
		price: 'S/ 799.99',
		originalPrice: 'S/ 899.99',
		brand: 'Halion',
		rating: 5,
		reviews: 567,
		discount: 12,
		stock: 1,
		freeShipping: true,
		timeLeft: '3h 30m',
		specs: ['A16 Bionic chip', '6.1-inch display', '48MP camera'],
		image: '/productos/ofert3.png?height=200&width=200',
		installments: '12x S/ 208.33 sin interés',
		category: 'ACCESORIOS',
		sku: 'HALION-ARIES06-600W-BLACK',
		description: 'Case gamer Halion Aries 06 con fuente de 600W y 4 LED-ARGB.',
		features: ['Fuente 600W', 'Vidrio templado', '4 LED-ARGB'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '45 x 21 x 45 cm',
			Peso: '6 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '1 año de garantía Halion',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	}
]

export const patriasOffers = [
	{
		id: 'apple-iphone15promax-256',
		name: 'iPhone 15 Pro Max 256GB',
		category: 'CELULARES',
		price: 999,
		originalPrice: '1299',
		image: '/productos/patrias/iPhone-15-Pro-Max-256GB.png',
		discount: 23,
		brand: 'Apple',
		rating: 5,
		reviews: 234,
		stock: 5,
		isLimitedTime: true,
		sku: 'APPLE-IP15PM-256GB',
		description: 'iPhone 15 Pro Max con 256GB de almacenamiento y cámara avanzada.',
		features: ["Pantalla OLED 6.7''", 'Cámara triple 48MP', 'Face ID', 'Carga rápida'],
		specifications: {
			Pantalla: "6.7'' OLED",
			Procesador: 'A17 Pro',
			Almacenamiento: '256GB',
			Batería: 'Hasta 29 horas de video',
			Conectividad: '5G, WiFi 6E, Bluetooth 5.3',
			Dimensiones: '160.7 x 77.6 x 7.85 mm',
			Peso: '221 g'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Plata', value: '#ccc', available: false }
		],
		storage: [
			{ size: '256GB', price: '999', available: true },
			{ size: '512GB', price: '1199', available: false }
		],
		warranty: '1 año de garantía Apple',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 30 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'apple-macbookair-m2-512',
		name: 'MacBook Air M2 512GB',
		category: 'LAPTOPS',
		price: 1199,
		originalPrice: '1499',
		image: '/productos/patrias/MacBook-Air-M2-512GB.png',
		discount: 20,
		brand: 'Apple',
		rating: 5,
		reviews: 189,
		stock: 3,
		isLimitedTime: true,
		sku: 'APPLE-MBAIR-M2-512GB',
		description: 'MacBook Air M2 con 512GB de almacenamiento y pantalla Retina.',
		features: ["Pantalla Retina 13.6''", 'Procesador M2', '512GB SSD', 'Touch ID'],
		specifications: {
			Pantalla: "13.6'' Retina",
			Procesador: 'Apple M2',
			Almacenamiento: '512GB SSD',
			Batería: 'Hasta 18 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.0, Thunderbolt 3',
			Dimensiones: '30.41 x 21.5 x 1.13 cm',
			Peso: '1.24 kg'
		},
		colors: [
			{ name: 'Gris espacial', value: '#888', available: true },
			{ name: 'Plata', value: '#ccc', available: false }
		],
		storage: [
			{ size: '512GB SSD', price: '1199', available: true },
			{ size: '256GB SSD', price: '999', available: false }
		],
		warranty: '1 año de garantía Apple',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 30 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'samsung-galaxy-s24-ultra',
		name: 'Samsung Galaxy S24 Ultra',
		category: 'CELULARES',
		price: 899,
		originalPrice: '1199',
		image: '/productos/patrias/Samsung-Galaxy-S24-Ultra.png',
		discount: 25,
		brand: 'Samsung',
		rating: 4,
		reviews: 156,
		stock: 8,
		isLimitedTime: true,
		sku: 'SAMSUNG-GS24U-256GB',
		description: 'Samsung Galaxy S24 Ultra con cámara de 200MP y pantalla AMOLED.',
		features: ["Pantalla AMOLED 6.8''", 'Cámara 200MP', 'S Pen', 'Carga rápida'],
		specifications: {
			Pantalla: "6.8'' AMOLED",
			Procesador: 'Snapdragon 8 Gen 3',
			Almacenamiento: '256GB',
			Batería: '5000mAh, hasta 2 días',
			Conectividad: '5G, WiFi 7, Bluetooth 5.3',
			Dimensiones: '163.4 x 78.1 x 8.9 mm',
			Peso: '233 g'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Verde', value: '#0f0', available: false }
		],
		storage: [
			{ size: '256GB', price: '899', available: true },
			{ size: '512GB', price: '1099', available: false }
		],
		warranty: '1 año de garantía Samsung',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 30 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'sony-wh1000xm5-headphones',
		name: 'Sony WH-1000XM5 Headphones',
		category: 'AUDIO',
		price: 299,
		originalPrice: '399',
		image: '/productos/patrias/Sony-WH-1000XM5-Headphones.png',
		discount: 25,
		brand: 'Sony',
		rating: 5,
		reviews: 298,
		stock: 12,
		isLimitedTime: true,
		sku: 'SONY-WH1000XM5-BLACK',
		description: 'Audífonos Sony WH-1000XM5 con cancelación de ruido y batería de larga duración.',
		features: ['Cancelación de ruido', 'Bluetooth 5.2', 'Hasta 30 horas de batería', 'Carga rápida'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: '30 horas',
			Conectividad: 'Bluetooth 5.2, USB-C',
			Dimensiones: '21 x 18 x 8 cm',
			Peso: '250 g'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Plata', value: '#ccc', available: false }
		],
		storage: [],
		warranty: '1 año de garantía Sony',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 30 días', 'Cambio por defecto de fábrica']
	}
]

export const products = [
	{
		id: 'asus-rog-zephyrus-g14',
		name: 'ASUS ROG Zephyrus G14 14"',
		category: 'LAPTOPS',
		price: 5000,
		originalPrice: '5099',
		image: '/productos/header_ofert1.png?height=300&width=300',
		discount: 2,
		brand: 'ASUS',
		rating: 5,
		reviews: 234,
		stock: 5,
		isLimitedTime: true,
		sku: 'ASUS-G14-14-5000',
		description: 'ASUS ROG Zephyrus G14 con pantalla de 14 pulgadas y procesador potente.',
		features: ["Pantalla 14'' FHD", 'Procesador Ryzen 9', 'SSD 1TB', 'Gráfica RTX 4060'],
		specifications: {
			Pantalla: "14'' FHD",
			Procesador: 'AMD Ryzen 9',
			Almacenamiento: '1TB SSD',
			Batería: '76Wh, hasta 10 horas',
			Conectividad: 'WiFi 6E, Bluetooth 5.2, USB-C, HDMI',
			Dimensiones: '32.4 x 22.2 x 1.8 cm',
			Peso: '1.7 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '1TB SSD', price: '5000', available: true },
			{ size: '512GB SSD', price: '4800', available: false }
		],
		warranty: '2 años de garantía ASUS',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'hp-victus-gaming-156',
		name: 'VICTUS Gaming 15.6 FHD',
		category: 'LAPTOPS',
		price: 5400,
		originalPrice: '5700',
		image: '/productos/header_ofert2.png?height=300&width=300',
		discount: 5,
		brand: 'HP',
		rating: 4,
		reviews: 176,
		stock: 6,
		isLimitedTime: true,
		sku: 'HP-VICTUS-15-5400',
		description: 'Laptop HP Victus Gaming con pantalla FHD de 15.6 pulgadas y procesador Intel Core i7.',
		features: ["Pantalla 15.6'' FHD", 'Procesador Intel Core i7', 'SSD 512GB', 'Gráfica RTX 3050'],
		specifications: {
			Pantalla: "15.6'' FHD",
			Procesador: 'Intel Core i7',
			Almacenamiento: '512GB SSD',
			Batería: '70Wh, hasta 8 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.1, USB-C, HDMI',
			Dimensiones: '36 x 24 x 2.3 cm',
			Peso: '2.2 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Azul', value: '#0057b7', available: false }
		],
		storage: [
			{ size: '512GB SSD', price: '5400', available: true },
			{ size: '1TB SSD', price: '5700', available: false }
		],
		warranty: '1 año de garantía HP',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'acer-nitro5-gaming-156',
		name: 'NITRO 5 Gaming 15.6 FHD',
		category: 'LAPTOPS',
		price: 4000,
		originalPrice: '4500',
		image: '/productos/header_ofert3.png?height=300&width=300',
		discount: 11,
		brand: 'Acer',
		rating: 4,
		reviews: 205,
		stock: 7,
		isLimitedTime: true,
		sku: 'ACER-NITRO5-15-4000',
		description: 'Laptop Acer Nitro 5 Gaming con pantalla FHD de 15.6 pulgadas y procesador Intel Core i5.',
		features: ["Pantalla 15.6'' FHD", 'Procesador Intel Core i5', 'SSD 512GB', 'Gráfica RTX 3050'],
		specifications: {
			Pantalla: "15.6'' FHD",
			Procesador: 'Intel Core i5',
			Almacenamiento: '512GB SSD',
			Batería: '70Wh, hasta 7 horas',
			Conectividad: 'WiFi 6, Bluetooth 5.1, USB-C, HDMI',
			Dimensiones: '36 x 25 x 2.3 cm',
			Peso: '2.3 kg'
		},
		colors: [
			{ name: 'Negro', value: '#222', available: true },
			{ name: 'Rojo', value: '#c00', available: false }
		],
		storage: [
			{ size: '512GB SSD', price: '4000', available: true },
			{ size: '1TB SSD', price: '4500', available: false }
		],
		warranty: '1 año de garantía Acer',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'amd-ryzen5-5600x-pcgamer',
		name: 'PC Gamer AMD Ryzen 5 5600X',
		category: 'PC GAMING',
		price: 3200,
		originalPrice: '4000',
		image: '/productos/headofert1.png?height=300&width=300',
		discount: 20,
		brand: 'AMD',
		rating: 5,
		reviews: 150,
		stock: 4,
		isLimitedTime: true,
		sku: 'AMD-R5-5600X-PCGAMER',
		description: 'PC Gamer con procesador AMD Ryzen 5 5600X y gráfica dedicada.',
		features: ['Procesador Ryzen 5 5600X', 'Gráfica dedicada', 'SSD 512GB', 'RAM 16GB'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'AMD Ryzen 5 5600X',
			Almacenamiento: '512GB SSD',
			Batería: 'No aplica',
			Conectividad: 'WiFi, Bluetooth, USB, HDMI',
			Dimensiones: '45 x 21 x 45 cm',
			Peso: '8 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [{ size: '512GB SSD', price: '3200', available: true }],
		warranty: '2 años de garantía AMD',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'dxracer-racing-series',
		name: 'Silla Gaming DXRacer Racing Series',
		category: 'SILLAS GAMING',
		price: 399,
		originalPrice: '499',
		image: '/productos/sillas/silla3.png?height=300&width=300',
		discount: 20,
		brand: 'DXRacer',
		rating: 4,
		reviews: 89,
		stock: 10,
		isLimitedTime: true,
		sku: 'DXRACER-RACING-BLACK',
		description: 'Silla Gaming DXRacer Racing Series con diseño ergonómico y reposapiés.',
		features: ['Diseño ergonómico', 'Reposapiés', 'Ajuste de altura', 'Material premium'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '19 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '1 año de garantía DXRacer',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	},
	{
		id: 'dxracer-formula-series',
		name: 'Silla Gaming DXRacer Formula Series',
		category: 'SILLAS GAMING',
		price: 79,
		originalPrice: '99',
		image: '/productos/sillas/silla1.png?height=300&width=300',
		discount: 20,
		brand: 'DXRacer',
		rating: 4,
		reviews: 64,
		stock: 12,
		isLimitedTime: true,
		sku: 'DXRACER-FORMULA-BLACK',
		description: 'Silla Gaming DXRacer Formula Series con diseño ergonómico y ajuste de altura.',
		features: ['Diseño ergonómico', 'Ajuste de altura', 'Material premium'],
		specifications: {
			Pantalla: 'No aplica',
			Procesador: 'No aplica',
			Almacenamiento: 'No aplica',
			Batería: 'No aplica',
			Conectividad: 'No aplica',
			Dimensiones: '70 x 70 x 130 cm',
			Peso: '18 kg'
		},
		colors: [{ name: 'Negro', value: '#222', available: true }],
		storage: [],
		warranty: '1 año de garantía DXRacer',
		shipping: ['Envío estándar gratis', 'Envío express disponible'],
		returns: ['Devolución en 15 días', 'Cambio por defecto de fábrica']
	}
]

export const recommendedProducts = [
	{
		id: 'xiaomi-redmi-note12pro',
		name: 'Smartphone Xiaomi Redmi Note 12 Pro',
		category: 'SMARTPHONES',
		price: 299,
		originalPrice: '349',
		image: '/productos/audifonos/audifono1.png?height=150&width=150',
		discount: 14,
		brand: 'Xiaomi',
		rating: 4,
		reviews: 120,
		stock: 10,
		isLimitedTime: false,
		sku: 'SKU-CPSX1',
		description: 'Descripción genérica del producto.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		specifications: {
			Pantalla: 'Pantalla genérica',
			Procesador: 'Procesador genérico',
			Almacenamiento: 'Almacenamiento genérico',
			Batería: 'Batería genérica',
			Conectividad: 'Conectividad genérica',
			Dimensiones: 'Dimensiones genéricas',
			Peso: 'Peso genérico'
		},
		colors: [
			{ name: 'Negro', value: '#000', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '64GB', price: '299', available: true },
			{ size: '128GB', price: '349', available: false }
		],
		warranty: '1 año de garantía',
		shipping: ['Envío estándar', 'Envío express'],
		returns: ['Devolución en 30 días', 'Cambio por defecto']
	},
	{
		id: 'belkin-boostcharge-wireless',
		name: 'Carga Inalámbrica Belkin BoostCharge',
		category: 'ACCESORIOS',
		price: 199,
		originalPrice: '249',
		image: '/productos/audifonos/audifono2.png?height=150&width=150',
		discount: 20,
		brand: 'Belkin',
		rating: 4,
		reviews: 45,
		stock: 15,
		isLimitedTime: true,
		sku: 'SKU-CPSX2',
		description: 'Descripción genérica del producto.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		specifications: {
			Pantalla: 'Pantalla genérica',
			Procesador: 'Procesador genérico',
			Almacenamiento: 'Almacenamiento genérico',
			Batería: 'Batería genérica',
			Conectividad: 'Conectividad genérica',
			Dimensiones: 'Dimensiones genéricas',
			Peso: 'Peso genérico'
		},
		colors: [
			{ name: 'Negro', value: '#000', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '64GB', price: '199', available: true },
			{ size: '128GB', price: '249', available: false }
		],
		warranty: '1 año de garantía',
		shipping: ['Envío estándar', 'Envío express'],
		returns: ['Devolución en 30 días', 'Cambio por defecto']
	},
	{
		id: 'hp-victus-gaming-156-recommended',
		name: 'Laptop HP Victus Gaming 15.6',
		category: 'LAPTOPS',
		price: 899,
		originalPrice: '999',
		image: '/productos/audifonos/audifono3.png?height=150&width=150',
		discount: 10,
		brand: 'HP',
		rating: 5,
		reviews: 78,
		stock: 7,
		isLimitedTime: true,
		sku: 'SKU-CPSX3',
		description: 'Descripción genérica del producto.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		specifications: {
			Pantalla: 'Pantalla genérica',
			Procesador: 'Procesador genérico',
			Almacenamiento: 'Almacenamiento genérico',
			Batería: 'Batería genérica',
			Conectividad: 'Conectividad genérica',
			Dimensiones: 'Dimensiones genéricas',
			Peso: 'Peso genérico'
		},
		colors: [
			{ name: 'Negro', value: '#000', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '64GB', price: '899', available: true },
			{ size: '128GB', price: '999', available: false }
		],
		warranty: '1 año de garantía',
		shipping: ['Envío estándar', 'Envío express'],
		returns: ['Devolución en 30 días', 'Cambio por defecto']
	},
	{
		id: 'capcom-resident-evil4-4k',
		name: 'Juego de 4K Resident Evil 4',
		category: 'VIDEOJUEGOS',
		price: 1099,
		originalPrice: '1299',
		image: '/productos/audifonos/audifono4.png?height=150&width=150',
		discount: 15,
		brand: 'Capcom',
		rating: 5,
		reviews: 321,
		stock: 20,
		isLimitedTime: false,
		sku: 'SKU-CPSX4',
		description: 'Descripción genérica del producto.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		specifications: {
			Pantalla: 'Pantalla genérica',
			Procesador: 'Procesador genérico',
			Almacenamiento: 'Almacenamiento genérico',
			Batería: 'Batería genérica',
			Conectividad: 'Conectividad genérica',
			Dimensiones: 'Dimensiones genéricas',
			Peso: 'Peso genérico'
		},
		colors: [
			{ name: 'Negro', value: '#000', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '64GB', price: '1099', available: true },
			{ size: '128GB', price: '1299', available: false }
		],
		warranty: '1 año de garantía',
		shipping: ['Envío estándar', 'Envío express'],
		returns: ['Devolución en 30 días', 'Cambio por defecto']
	},
	{
		id: 'targus-citygear-mochila-1',
		name: 'Mochila Targus CityGear',
		category: 'MOCHILAS',
		price: 49,
		originalPrice: '59',
		image: '/productos/audifonos/audifono5.png?height=150&width=150',
		discount: 17,
		brand: 'Targus',
		rating: 4,
		reviews: 60,
		stock: 25,
		isLimitedTime: false,
		sku: 'SKU-CPSX5',
		description: 'Descripción genérica del producto.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		specifications: {
			Pantalla: 'Pantalla genérica',
			Procesador: 'Procesador genérico',
			Almacenamiento: 'Almacenamiento genérico',
			Batería: 'Batería genérica',
			Conectividad: 'Conectividad genérica',
			Dimensiones: 'Dimensiones genéricas',
			Peso: 'Peso genérico'
		},
		colors: [
			{ name: 'Negro', value: '#000', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '64GB', price: '49', available: true },
			{ size: '128GB', price: '59', available: false }
		],
		warranty: '1 año de garantía',
		shipping: ['Envío estándar', 'Envío express'],
		returns: ['Devolución en 30 días', 'Cambio por defecto']
	},
	{
		id: 'targus-citygear-mochila-2',
		name: 'Mochila Targus CityGear',
		category: 'MOCHILAS',
		price: 39,
		originalPrice: '59',
		image: '/productos/audifonos/audifono6.png?height=150&width=150',
		discount: 34,
		brand: 'Targus',
		rating: 4,
		reviews: 40,
		stock: 18,
		isLimitedTime: true,
		sku: 'SKU-CPSX6',
		description: 'Descripción genérica del producto.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		specifications: {
			Pantalla: 'Pantalla genérica',
			Procesador: 'Procesador genérico',
			Almacenamiento: 'Almacenamiento genérico',
			Batería: 'Batería genérica',
			Conectividad: 'Conectividad genérica',
			Dimensiones: 'Dimensiones genéricas',
			Peso: 'Peso genérico'
		},
		colors: [
			{ name: 'Negro', value: '#000', available: true },
			{ name: 'Blanco', value: '#fff', available: false }
		],
		storage: [
			{ size: '64GB', price: '39', available: true },
			{ size: '128GB', price: '59', available: false }
		],
		warranty: '1 año de garantía',
		shipping: ['Envío estándar', 'Envío express'],
		returns: ['Devolución en 30 días', 'Cambio por defecto']
	}
]

export const allProducts = [
	...laptops,
	...audifonos,
	...televisores,
	...Sillas,
	...flashDeals,
	...patriasOffers,
	...products,
	...recommendedProducts,
	...relatedProducts,
	...slides
]
