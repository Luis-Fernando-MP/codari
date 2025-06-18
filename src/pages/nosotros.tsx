import { Search, Users, Heart, Award, Zap, TrendingUp, Code, Palette, Cpu, Lightbulb, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function TeamMember({ member }: { member: any }) {
	return (
		<Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
			<CardContent className="p-8">
				<div className="text-center mb-6">
					<div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 mb-4">
						<img
							src={member.image ?? '/placeholder.svg?height=128&width=128'}
							alt={member.name}
							width={128}
							height={128}
							className="w-full h-full object-cover group-hover:scale-110 transition-transform"
						/>
					</div>
					<h3 className="text-2xl font-bold mb-2">{member.name}</h3>
					<Badge className="bg-orange-500 text-white mb-4">{member.role}</Badge>
					<p className="text-gray-600 mb-6">{member.description}</p>
				</div>

				{/* Mini CV */}
				<div className="space-y-6">
					{/* Experiencia */}
					<div>
						<h4 className="font-bold text-lg mb-3 flex items-center">
							<Award className="w-5 h-5 mr-2 text-orange-500" />
							Experiencia
						</h4>
						<ul className="space-y-2">
							{member.experience.map((exp: string, index: number) => (
								<li key={index} className="text-sm text-gray-600 flex items-start">
									<div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
									{exp}
								</li>
							))}
						</ul>
					</div>

					{/* Lenguajes de Programación */}
					<div>
						<h4 className="font-bold text-lg mb-3 flex items-center">
							<Code className="w-5 h-5 mr-2 text-blue-500" />
							Lenguajes de Programación
						</h4>
						<div className="flex flex-wrap gap-2">
							{member.programmingLanguages.map((lang: string, index: number) => (
								<Badge key={index} variant="outline" className="text-xs border-blue-500 text-blue-600">
									{lang}
								</Badge>
							))}
						</div>
					</div>

					{/* Habilidades Técnicas */}
					<div>
						<h4 className="font-bold text-lg mb-3 flex items-center">
							<Cpu className="w-5 h-5 mr-2 text-green-500" />
							Habilidades Técnicas
						</h4>
						<div className="flex flex-wrap gap-2">
							{member.technicalSkills.map((skill: string, index: number) => (
								<Badge key={index} variant="outline" className="text-xs border-green-500 text-green-600">
									{skill}
								</Badge>
							))}
						</div>
					</div>

					{/* Habilidades Blandas */}
					<div>
						<h4 className="font-bold text-lg mb-3 flex items-center">
							<Heart className="w-5 h-5 mr-2 text-purple-500" />
							Habilidades Blandas
						</h4>
						<div className="flex flex-wrap gap-2">
							{member.softSkills.map((skill: string, index: number) => (
								<Badge key={index} variant="outline" className="text-xs border-purple-500 text-purple-600">
									{skill}
								</Badge>
							))}
						</div>
					</div>

					{/* Actividades Realizadas */}
					<div>
						<h4 className="font-bold text-lg mb-3 flex items-center">
							<Zap className="w-5 h-5 mr-2 text-yellow-500" />
							Actividades Realizadas
						</h4>
						<ul className="space-y-2">
							{member.activities.map((activity: string, index: number) => (
								<li key={index} className="text-sm text-gray-600 flex items-start">
									<div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
									{activity}
								</li>
							))}
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

function OrganizationalChart() {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-12">Árbol Organizacional</h2>

			{/* CEO Level */}
			<div className="text-center mb-8">
				<Card className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white">
					<CardContent className="p-6">
						<div className="text-lg font-bold">CEO & Fundador</div>
						<div className="text-sm">Melgar Pizarro Luis</div>
						<div className="text-xs opacity-90">Líder Técnico & Visionario</div>
					</CardContent>
				</Card>
			</div>

			{/* Connection Line */}
			<div className="flex justify-center mb-8">
				<div className="w-px h-12 bg-gray-300"></div>
			</div>

			{/* Co-founders Level */}
			<div className="flex justify-center items-center mb-8">
				<div className="flex items-center space-x-8">
					{/* Left Co-founder */}
					<Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
						<CardContent className="p-6 text-center">
							<div className="text-lg font-bold">CTO</div>
							<div className="text-sm">Gonzalez Chaca, Angel Jefferson</div>
							<div className="text-xs opacity-90">Director de Tecnología</div>
						</CardContent>
					</Card>

					{/* Connection */}
					<div className="w-16 h-px bg-gray-300"></div>

					{/* Right Co-founder */}
					<Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
						<CardContent className="p-6 text-center">
							<div className="text-lg font-bold">CPO</div>
							<div className="text-sm">Alfaro Muñoz, Anderson</div>
							<div className="text-xs opacity-90">Director de Producto</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Departments */}
			<div className="grid md:grid-cols-3 gap-6 mt-12">
				<Card className="border-orange-200">
					<CardContent className="p-6 text-center">
						<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Code className="w-6 h-6 text-orange-600" />
						</div>
						<h3 className="font-bold mb-2">Desarrollo</h3>
						<p className="text-sm text-gray-600">Frontend, Backend, Mobile</p>
					</CardContent>
				</Card>

				<Card className="border-blue-200">
					<CardContent className="p-6 text-center">
						<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Palette className="w-6 h-6 text-blue-600" />
						</div>
						<h3 className="font-bold mb-2">Diseño</h3>
						<p className="text-sm text-gray-600">UI/UX, Branding, Marketing</p>
					</CardContent>
				</Card>

				<Card className="border-green-200">
					<CardContent className="p-6 text-center">
						<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<TrendingUp className="w-6 h-6 text-green-600" />
						</div>
						<h3 className="font-bold mb-2">Estrategia</h3>
						<p className="text-sm text-gray-600">Producto, Ventas, Operaciones</p>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default function NosotrosPage() {
	const teamMembers = [
		{
			name: 'Melgar Pizarro Luis',
			role: 'CEO & Lead Developer',
			description:
				'Fundador y líder técnico de CODARI, especialista en arquitectura de software y desarrollo full-stack con visión empresarial.',
			image: '/placeholder.svg?height=128&width=128',
			experience: [
				'5+ años en desarrollo de software empresarial',
				'Fundador de 2 startups tecnológicas exitosas',
				'Ex-desarrollador senior en empresas Fortune 500',
				'Mentor en programas de aceleración de startups'
			],
			programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust'],
			technicalSkills: [
				'React/Next.js',
				'Node.js',
				'AWS/Azure',
				'Docker',
				'Kubernetes',
				'PostgreSQL',
				'MongoDB',
				'Redis',
				'GraphQL',
				'Microservices'
			],
			softSkills: [
				'Liderazgo',
				'Visión Estratégica',
				'Comunicación',
				'Resolución de Problemas',
				'Trabajo en Equipo',
				'Adaptabilidad',
				'Pensamiento Crítico'
			],
			activities: [
				'Arquitectura y diseño de la plataforma CODARI',
				'Liderazgo del equipo de desarrollo',
				'Definición de la estrategia tecnológica',
				'Gestión de relaciones con inversores',
				'Desarrollo de APIs y microservicios core'
			]
		},
		{
			name: 'Gonzalez Chaca, Angel Jefferson',
			role: 'CTO & Full-Stack Developer',
			description: 'Director de Tecnología especializado en desarrollo full-stack, DevOps y arquitectura de sistemas escalables.',
			image: '/placeholder.svg?height=128&width=128',
			experience: [
				'4+ años en desarrollo web y mobile',
				'Especialista en arquitectura cloud y DevOps',
				'Ex-ingeniero de software en startups fintech',
				'Certificado en AWS y Google Cloud Platform'
			],
			programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Dart', 'SQL'],
			technicalSkills: [
				'Vue.js',
				'Angular',
				'Laravel',
				'Django',
				'Flutter',
				'Firebase',
				'AWS',
				'GCP',
				'CI/CD',
				'Terraform',
				'Monitoring',
				'Security'
			],
			softSkills: [
				'Gestión de Equipos',
				'Planificación',
				'Comunicación Técnica',
				'Innovación',
				'Resolución de Conflictos',
				'Mentoring',
				'Análisis de Datos'
			],
			activities: [
				'Implementación de infraestructura cloud',
				'Desarrollo de aplicaciones web y mobile',
				'Gestión de bases de datos y optimización',
				'Implementación de sistemas de seguridad',
				'Automatización de procesos de deployment'
			]
		},
		{
			name: 'Alfaro Muñoz, Anderson',
			role: 'CPO & Frontend Developer',
			description:
				'Director de Producto enfocado en experiencia de usuario, desarrollo frontend y estrategia de producto digital.',
			image: '/placeholder.svg?height=128&width=128',
			experience: [
				'3+ años en desarrollo frontend y UX/UI',
				'Especialista en diseño de experiencias digitales',
				'Ex-diseñador de producto en agencias digitales',
				'Certificado en Design Thinking y Agile'
			],
			programmingLanguages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Swift'],
			technicalSkills: [
				'React',
				'Next.js',
				'Tailwind CSS',
				'Figma',
				'Adobe Creative Suite',
				'iOS Development',
				'Responsive Design',
				'A/B Testing',
				'Analytics'
			],
			softSkills: [
				'Creatividad',
				'Empatía',
				'Comunicación Visual',
				'Investigación de Usuario',
				'Colaboración',
				'Atención al Detalle',
				'Pensamiento de Diseño'
			],
			activities: [
				'Diseño y desarrollo de interfaces de usuario',
				'Investigación y análisis de experiencia de usuario',
				'Definición de roadmap de producto',
				'Desarrollo de aplicaciones iOS nativas',
				'Optimización de conversión y métricas de producto'
			]
		}
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
							<a href="/productos" className="text-gray-700 hover:text-gray-900 font-medium">
								Productos
							</a>
							<a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
								Populares
							</a>
							<a href="/nosotros" className="text-orange-600 hover:text-orange-700 font-medium">
								Nosotros
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
									<Input placeholder="Buscar" className="pl-10 w-full bg-white border-gray-300" />
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

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6">Conoce a Nuestro Equipo</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
						Somos 3 desarrolladores apasionados por la tecnología, unidos por la visión de revolucionar el e-commerce en
						Latinoamérica.
					</p>
					<div className="flex justify-center space-x-4">
						<Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">Ver Proyectos</Button>
						<Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
							Contáctanos
						</Button>
					</div>
				</div>
			</section>

			{/* Company Stats */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Users className="w-8 h-8 text-orange-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">3</div>
							<div className="text-gray-600">Desarrolladores</div>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Code className="w-8 h-8 text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
							<div className="text-gray-600">Tecnologías</div>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Award className="w-8 h-8 text-green-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">12+</div>
							<div className="text-gray-600">Años Experiencia</div>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Zap className="w-8 h-8 text-purple-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
							<div className="text-gray-600">Proyectos</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Members */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4">Nuestros Desarrolladores</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Conoce a los talentosos profesionales que hacen posible CODARI. Cada uno aporta su experiencia única y pasión por la
							innovación.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<TeamMember key={index} member={member} />
						))}
					</div>
				</div>
			</section>

			{/* Organizational Chart */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<OrganizationalChart />
				</div>
			</section>

			{/* Company Culture */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-8">Nuestra Cultura de Trabajo</h2>
						<p className="text-gray-600 text-lg mb-12">
							En CODARI creemos en la colaboración, la innovación constante y el crecimiento personal y profesional de nuestro
							equipo.
						</p>

						<div className="grid md:grid-cols-3 gap-8">
							<Card className="group hover:shadow-lg transition-all duration-300">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Lightbulb className="w-8 h-8 text-blue-600" />
									</div>
									<h3 className="text-xl font-bold mb-3">Innovación</h3>
									<p className="text-gray-600">
										Fomentamos la creatividad y la experimentación con nuevas tecnologías y metodologías.
									</p>
								</CardContent>
							</Card>

							<Card className="group hover:shadow-lg transition-all duration-300">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<MessageSquare className="w-8 h-8 text-green-600" />
									</div>
									<h3 className="text-xl font-bold mb-3">Colaboración</h3>
									<p className="text-gray-600">Trabajamos en equipo, compartiendo conocimientos y apoyándonos mutuamente.</p>
								</CardContent>
							</Card>

							<Card className="group hover:shadow-lg transition-all duration-300">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<TrendingUp className="w-8 h-8 text-purple-600" />
									</div>
									<h3 className="text-xl font-bold mb-3">Crecimiento</h3>
									<p className="text-gray-600">Promovemos el desarrollo continuo y el aprendizaje de nuevas habilidades.</p>
								</CardContent>
							</Card>
						</div>
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
								Desarrollado con ❤️ por un equipo apasionado por la tecnología y la innovación.
							</p>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-gray-900">Equipo</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-gray-900">
										Nuestros Desarrolladores
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Únete al Equipo
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Cultura de Trabajo
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-gray-900">Proyectos</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-gray-900">
										Portfolio
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Open Source
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										Colaboraciones
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-gray-900">Contacto</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-gray-900">
										Email
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										LinkedIn
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-900">
										GitHub
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
						<p>&copy; 2024 CODARI. Desarrollado por Luis, Jefferson y Anderson.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
