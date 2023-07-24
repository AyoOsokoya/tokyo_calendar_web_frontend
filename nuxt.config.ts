// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // devtools: {enabled: true},
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        'nuxt-icon',
        'nuxt-lodash'
    ],
    buildModules: [
        '@nuxtjs/composition-api/module'
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },

})
