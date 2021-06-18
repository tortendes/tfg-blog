// tailwind.config.js
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: theme => ({
      'home-hero': "url('~assets/hero-img.png')"
    }),
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
    // ...
  ]
}
