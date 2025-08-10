/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // el plugin que Next estaba pidiendo
    autoprefixer: {},           // necesario para prefijos CSS en producción
  },
}

export default config
