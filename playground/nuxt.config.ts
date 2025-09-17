// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    // 추가사항
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@prisma/nuxt',
  ],
  // 추가사항
  imports: {
    dirs: [
      'composables/**',
      'stores/**',
    ],
  },
  devtools: { enabled: true },
  // 추가사항
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/style.scss',
  ],
  colorMode: {
    preference: 'dark',
  },
  ui: {
    prefix: 'Sc',
    fonts: false,
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.BASE_URL ?? process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:7000',
      supabaseUrl: process.env.SUPABASE_URL ?? '',
      supabaseKey: process.env.SUPABASE_KEY ?? '',
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
    checker: true,
  },
  image: {
    format: ['svg', 'png', 'jpg', 'jpeg', 'webp'],
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  prisma: {
    autoSetupPrisma: true,
  },
  stylelint: {
    lintOnStart: true,
  },
  supabase: {
    redirect: false,
    // redirectOptions: {
    //   login: '/login',
    //   callback: '/confirm',
    //   exclude: [
    //     '/',
    //   ],
    // },
    clientOptions: {
      // auth: {
      //   flowType: 'pkce',
      //   detectSessionInUrl: true,
      //   persistSession: true,
      //   autoRefreshToken: true,
      // },
    },
  },
})
