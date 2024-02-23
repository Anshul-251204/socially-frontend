// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		proxy: {
			"/api": "https://socialy-backend-2.onrender.com",
		},
	},
	plugins: [react()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
