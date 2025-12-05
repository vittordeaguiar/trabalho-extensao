// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'Como Redes Neurais Veem Imagens | Projeto de Extensão',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Projeto de Extensão: Como Redes Neurais Veem Imagens. Uma explicação visual sobre Inteligência Artificial.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap'
        }
      ],
      script: [
        { src: 'https://unpkg.com/@phosphor-icons/web', defer: true }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
