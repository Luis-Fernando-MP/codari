export function Footer() {
	return (
		<header className="border-b border-gray-200">
			{/* Footer */}
			<footer className="bg-gradient-to-br  pt-12 pb-6 mt-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
						{/* Logo y descripción */}
						<div>
							<div className="flex items-center space-x-3 mb-4">
								<div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
									<span className="text-white text-2xl font-bold">$</span>
								</div>
								<span className="text-2xl font-extrabold text-gray-900 tracking-wide">CODARI</span>
							</div>
							<p className="text-sm text-gray-600 mb-4">
								Tu tienda de tecnología de confianza con los mejores productos y precios.
							</p>
							<div className="flex space-x-3 mt-4">
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener"
									className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path>
									</svg>
								</a>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener"
									className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-full p-2 transition"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.633.334 3.608 1.358 2.584 2.383 2.378 3.521 2.32 4.802 2.262 6.082 2.25 6.491 2.25 12s.012 5.918.07 7.198c.058 1.281.264 2.419 1.288 3.443 1.025 1.025 2.163 1.231 3.443 1.289C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.419-.264 3.443-1.289 1.025-1.025 1.231-2.163 1.289-3.443.058-1.28.07-1.689.07-7.198s-.012-5.918-.07-7.198c-.058-1.281-.264-2.419-1.289-3.443C19.367.334 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path>
									</svg>
								</a>
								<a
									href="https://wa.me/51909290190"
									target="_blank"
									rel="noopener"
									className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.19-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.8-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.17 4.42.72.25 1.28.4 1.72.51.72.18 1.38.15 1.9.09.58-.07 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.08-.11-.29-.18-.6-.33z"></path>
									</svg>
								</a>
							</div>
						</div>
						{/* Links */}
						<div>
							<h3 className="font-semibold mb-4 text-red-600 uppercase tracking-wide">Empresa</h3>
							<ul className="space-y-2 text-sm text-gray-700">
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Productos
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Precios
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Contacto
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-red-600 uppercase tracking-wide">Más Info</h3>
							<ul className="space-y-2 text-sm text-gray-700">
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Servicios
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Soporte
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Digital
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4 text-red-600 uppercase tracking-wide">Recursos</h3>
							<ul className="space-y-2 text-sm text-gray-700">
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Digital
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Ayuda
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-red-600 transition">
										Soporte
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* Línea y derechos */}
					<div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
						<span>© {new Date().getFullYear()} CODARI. Todos los derechos reservados.</span>
						<span>
							Hecho con <span className="text-red-500">♥</span> por tu equipo CODARI
						</span>
					</div>
				</div>
			</footer>
		</header>
	)
}
