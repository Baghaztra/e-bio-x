export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'nuxt-vue3-google-signin',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  runtimeConfig: {
    public: {
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      backend: process.env.NUXT_PUBLIC_BACKEND_URL || "http://localhost:3000",
    }
  },
  googleSignIn: {
    clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
  }
})
