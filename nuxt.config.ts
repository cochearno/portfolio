// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
 compatibilityDate: "2025-07-15",
 devtools: { enabled: true },
 modules: ["nuxt-svgo"],
});
({
				vite: {
								css: {
												preprocessorOptions: {
																scss: {
																				additionalData: '@use "~/assets/main.scss" as *;',
																},
												},
								},
				},
				svgo: {
								autoImportPath: "./public/icons",
								componentPrefix: "icon",
				},
});