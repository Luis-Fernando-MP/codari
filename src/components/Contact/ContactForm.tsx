'use client'

import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function ContactForm() {
	const [formData, setFormData] = useState({
		nombre: '',
		email: '',
		telefono: '',
		asunto: '',
		mensaje: ''
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Formulario enviado:', formData)
		// Aquí iría la lógica para enviar el formulario
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid md:grid-cols-2 gap-4">
				<div>
					<label htmlFor="nombre" className="block text-sm font-medium text-red-700 mb-2">
						Nombre completo *
					</label>
					<Input
						id="nombre"
						name="nombre"
						type="text"
						required
						value={formData.nombre}
						onChange={handleInputChange}
						placeholder="Tu nombre completo"
						className="w-full"
					/>
				</div>
				<div>
					<label htmlFor="telefono" className="block text-sm font-medium text-red-700 mb-2">
						Teléfono
					</label>
					<Input
						id="telefono"
						name="telefono"
						type="tel"
						value={formData.telefono}
						onChange={handleInputChange}
						placeholder="+51 999 999 999"
						className="w-full"
					/>
				</div>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-red-700 mb-2">
					Correo electrónico *
				</label>
				<Input
					id="email"
					name="email"
					type="email"
					required
					value={formData.email}
					onChange={handleInputChange}
					placeholder="tu@email.com"
					className="w-full"
				/>
			</div>

			<div>
				<label htmlFor="asunto" className="block text-sm font-medium text-red-700 mb-2">
					Asunto *
				</label>
				<Input
					id="asunto"
					name="asunto"
					type="text"
					required
					value={formData.asunto}
					onChange={handleInputChange}
					placeholder="¿En qué podemos ayudarte?"
					className="w-full"
				/>
			</div>

			<div>
				<label htmlFor="mensaje" className="block text-sm font-medium text-red-700 mb-2">
					Mensaje *
				</label>
				<Textarea
					id="mensaje"
					name="mensaje"
					required
					value={formData.mensaje}
					onChange={handleInputChange}
					placeholder="Describe tu consulta o solicitud..."
					rows={6}
					className="w-full"
				/>
			</div>

			<Button type="submit" className="bg-red-500 hover:bg-red-600 w-full py-3 text-lg">
				<Send className="w-5 h-5 mr-2" />
				Enviar Mensaje
			</Button>
		</form>
	)
}
