"use client"

import { Search, MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

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

            <nav className="hidden lg:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Inicios
              </a>
              <a href="/productos" className="text-gray-700 hover:text-gray-900 font-medium">
                Productos
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Populares
              </a>
              <a href="/contacto" className="text-orange-600 hover:text-orange-700 font-medium">
                Contáctanos
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

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
                <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">-20%</div>
                <span className="text-sm text-gray-700">Aprovecha nuestras ofertas</span>
              </div>

              <div className="flex-1 max-w-md mx-4 lg:mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Buscar" className="pl-10 w-full bg-white border-gray-300" />
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-2 text-sm">
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
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge className="bg-orange-500 hover:text-white hover:bg-black font-bold px-3 py-1">Contáctanos</Badge>
                <span className="text-lg">Estamos aquí para ayudarte</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                ¿Necesitas ayuda?
                <br />
                <span className="text-yellow-300">¡Hablemos!</span>
              </h1>
              <p className="text-xl">
                Nuestro equipo de expertos está listo para resolver todas tus dudas sobre tecnología.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-lg">Llámanos ahora:</span>
                <div className="bg-green-500 text-black hover:bg-orange-400 hover:text-black px-4 py-2 rounded-full font-bold">📞 +51-909290190</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-black hover:text-white">
                    <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold">Chat en Vivo</h3>
                    <p className="text-sm">Respuesta inmediata</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-black hover:text-white">
                    <Mail className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm">24/7 disponible</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-black hover:text-white">
                    <Phone className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-sm">Lun - Vie 9AM-6PM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-black hover:text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold">Ubicación</h3>
                    <p className="text-sm">Lima, Perú</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Múltiples formas de contactarnos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elige la forma que más te convenga para comunicarte con nosotros. Estamos disponibles en múltiples
              canales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Teléfono</h3>
                <p className="text-gray-600 mb-4">Llámanos directamente para atención inmediata</p>
                <div className="space-y-2">
                  <p className="font-semibold text-red-600">+51-909290190</p>
                  <p className="text-sm text-gray-500">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">Sáb: 9:00 AM - 2:00 PM</p>
                </div>
                <Button className="mt-4 bg-red-600 hover:bg-red-700 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Envíanos un correo y te responderemos pronto</p>
                <div className="space-y-2">
                  <p className="font-semibold text-blue-600">info@codari.com</p>
                  <p className="font-semibold text-blue-600">soporte@codari.com</p>
                  <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                </div>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chatea con nosotros por WhatsApp</p>
                <div className="space-y-2">
                  <p className="font-semibold text-green-600">+51-909290190</p>
                  <p className="text-sm text-gray-500">Disponible 24/7</p>
                  <p className="text-sm text-gray-500">Respuesta inmediata</p>
                  <p className="text-sm text-gray-500">Buena Atencion! ✨</p>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ubicación</h3>
                <p className="text-gray-600 mb-4">Visítanos en nuestra tienda física</p>
                <div className="space-y-2">
                  <p className="font-semibold text-purple-600">Lima, Perú</p>
                  <p className="text-sm text-gray-500">Av. Tecnología 123</p>
                  <p className="text-sm text-gray-500">San Isidro, Lima</p>
                  <p className="text-sm text-gray-500">Perú</p>
                </div>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700 w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver Mapa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl text-red-500 font-bold mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-600 mb-8">
                ¿Tienes alguna pregunta específica? Completa el formulario y nos pondremos en contacto contigo lo antes
                posible.
              </p>

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
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Soporte Especializado</h4>
                      <p className="text-gray-600">
                        Nuestro equipo de expertos en tecnología está capacitado para resolver cualquier duda técnica.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Respuesta Rápida</h4>
                      <p className="text-gray-600">
                        Nos comprometemos a responder todas las consultas en menos de 24 horas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Garantía de Calidad</h4>
                      <p className="text-gray-600">
                        Todos nuestros productos cuentan con garantía oficial y soporte post-venta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3">¿Necesitas ayuda urgente?</h4>
                  <p className="text-gray-600 mb-4">
                    Para consultas urgentes o problemas técnicos inmediatos, contáctanos directamente:
                  </p>
                  <div className="space-y-2">
                    <Button className="bg-red-600 hover:bg-red-700 w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar: +51-909290190
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-300 hover:text-black w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp: +51-909290190
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-red-600 font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas rápidas a las consultas más comunes de nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">¿Cuáles son los métodos de pago disponibles?</h4>
                <p className="text-gray-600">
                  Aceptamos tarjetas de crédito/débito, transferencias bancarias, PagoEfectivo y pagos en efectivo en
                  tienda.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">¿Hacen envíos a todo el Perú?</h4>
                <p className="text-gray-600">
                  Sí, realizamos envíos a nivel nacional. Los tiempos de entrega varían según la ubicación (1-5 días
                  hábiles).
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">¿Qué garantía tienen los productos?</h4>
                <p className="text-gray-600">
                  Todos nuestros productos cuentan con garantía oficial del fabricante, que varía entre 1 a 3 años según
                  el producto.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">¿Puedo cambiar o devolver un producto?</h4>
                <p className="text-gray-600">
                  Sí, tienes 7 días para cambios y 15 días para devoluciones, siempre que el producto esté en perfectas
                  condiciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-red-600 font-bold mb-4">Nuestra Ubicación</h2>
            <p className="text-gray-600">Visítanos en nuestra tienda física en Lima</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
                <div className="bg-gray-200 rounded-lg h-96 overflow-hidden flex items-center justify-center">
                    <iframe
                    title="Ubicación CODARI"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0000000000005!2d-77.03300000000002!3d-12.100000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c000000001%3A0x0000000000000001!2sAv.%20Tecnolog%C3%ADa%20123%2C%20San%20Isidro%2C%20Lima!5e0!3m2!1ses-419!2spe!4v1710000000000!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                    ></iframe>
                </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl text-red-600 font-bold mb-4">Información de la tienda</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-gray-600">Av. Tecnología 123, San Isidro, Lima 15036</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Horarios de atención</p>
                      <div className="text-gray-600 space-y-1">
                        <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                        <p>Sábados: 9:00 AM - 2:00 PM</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Teléfono de tienda</p>
                      <p className="text-gray-600">+51-909290190</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-600 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">¿Cómo llegar?</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Estación del Metropolitano: Javier Prado (5 min caminando)</li>
                  <li>• Línea 1 del Metro: Estación San Borja Sur (10 min en taxi)</li>
                  <li>• Estacionamiento gratuito disponible</li>
                  <li>• Acceso para personas con discapacidad</li>
                </ul>
              </div>
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
                Tu tienda de tecnología de confianza. Conectamos personas con el futuro digital.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="/productos" className="hover:text-gray-900">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Ofertas
                  </a>
                </li>
                <li>
                  <a href="/nosotros" className="hover:text-gray-900">
                    Nosotros
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Soporte</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="/contacto" className="hover:text-gray-900">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Garantías
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Devoluciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>+51-909290190</li>
                <li>info@codari.com</li>
                <li>Lima, Perú</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 CODARI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
