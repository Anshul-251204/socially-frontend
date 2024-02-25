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
	plugins: [react()],
	server: {
		proxy: {
			"/api": "https://socialy-backend-tfmn.onrender.com",
		},
	},

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
