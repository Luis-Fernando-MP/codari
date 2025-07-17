import { Heart, Award, Zap, TrendingUp, Code, Palette, Cpu, Lightbulb, MessageSquare } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function TeamMember({ member }: any) {
	return (
		<Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
			<CardContent className="p-8">
				<div className="text-center mb-6">
					<div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary via-[#FB6300] to-primary mb-4">
						<img
							src={member.image ?? '/logo.svg?height=128&width=128'}
							alt={member.name}
							width={128}
							height={128}
							className="w-full h-full object-cover group-hover:scale-110 transition-transform"
						/>
					</div>
					<h3 className="text-2xl font-bold mb-2">{member.name}</h3>
					<Badge className="bg-primary text-white mb-4">{member.role}</Badge>
					<p className="text-gray-600 mb-6 text-[12px]">{member.description}</p>
				</div>

				{/* Mini CV */}
				<div className="space-y-6">
					{/* Experiencia */}
					<div>
						<h4 className="font-bold text-lg mb-3 flex items-center">
							<Award className="w-5 h-5 mr-2 text-primary" />
							Experiencia
						</h4>
						<ul className="space-y-2">
							{member.experience.map((exp: string, index: number) => (
								<li key={index + 1} className="text-sm text-gray-600 flex items-start">
									<div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
								<Badge key={`${index + 1}-Lenguajes`} variant="outline" className="text-xs border-blue-500 text-blue-600">
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
								<Badge key={`${index + 1}-Habilidades`} variant="outline" className="text-xs border-green-500 text-green-600">
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
								<Badge
									key={`${index + 1}-Habilidades-blandas`}
									variant="outline"
									className="text-xs border-purple-500 text-purple-600"
								>
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
								<li key={`${index + 1}-Actividades`} className="text-sm text-gray-600 flex items-start">
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

export function OrganizationalChart() {
	return (
		<div className="max-w-4xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-12">Árbol Organizacional</h2>

			{/* CEO Level */}

			{/* Departments */}
			<div className="grid md:grid-cols-3 gap-6 mt-12">
				<Card className="border-orange-200">
					<CardContent className="p-6 text-center">
						<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Code className="w-6 h-6 text-primary" />
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

export function CultureCompany() {
	return (
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
	)
}
