<template>
  <div>
    <nav>
      <div class="px-10 py-5 bg-gray-100 flex justify-between items-center">
        <nuxt-link to="/">
          <img :src="require('@/assets/tfg_logo_w_wordmark_black.png')" alt="Furry Galaxy logo" class="w-1/2 h-1/2 lg:w-1/5 lg:h-1/5">
        </nuxt-link>
        <a href="https://furrygalaxy.gq" class="group bg-purple-600 px-3 py-2  lg:px-5 lg:py-3 flex items-center justify-center text-white rounded-lg text-sm lg:text-base">
          Go to main website
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current group-hover:transform group-hover:translate-x-5">
            <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
          </svg>
        </a>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style>
</style>
