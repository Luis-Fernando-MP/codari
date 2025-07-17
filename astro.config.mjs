import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel/serverless'

import react from '@astrojs/react'

export default defineConfig({
	output: 'server',
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [react()],
	// 👀 look here
	adapter: vercel()
})
