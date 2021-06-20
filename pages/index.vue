<template>
  <div>
    <div>
      <div class="h-56 lg:h-screen">
        <div class="bg-home-hero h-56 lg:h-screen bg-center bg-cover mb-5">
          <div class="px-3 py-5 bg-gray-700 text-white flex justify-evenly">
            Hello World! This is a message line!
          </div>
        </div>
      </div>
    </div>
    <div class="flex h-screen justify-center">
      <div class="lg:px-5">
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
          <div v-for="article in posts" :key="article.id">
            <div class="rounded-md border border-gray-700 lg:border-4 lg:border-purple-600 text-left">
              <img :src="require(`~/assets/blog-assets/${article.image}`)" alt="">
              <div class="px-3 py-5">
                <p class="text-2xl font-bold">
                  {{ article.title }}
                </p>
                <div class="mt-5 flex items-center">
                  <img :src="require(`~/assets/authors/${article.author.image}`)" alt="" class="rounded" width="50" height="50">
                  <div class="ml-3">
                    <span class="text-gray-700">
                      {{ article.author.name }}
                    </span>
                    <br>
                    <span class="text-gray-500">
                      {{ $dayjs(article.createdAt).format('MMMM DD') }} • {{ article.minRead }} min read
                    </span>
                  </div>
                </div>
                <nuxt-link :to="article.path" class="text-gray-800 group flex items-center mt-5 font-semibold" no-prefetch>
                  Go to article
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current group-hover:transform group-hover:translate-x-5">
                    <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('articles')
      .only(['title', 'description', 'image', 'author', 'createdAt', 'minRead', 'path'])
      .sortBy('createdAt', 'asc')
      .limit(10)
      .fetch()
    return { posts }
  },
  methods: {
    async generateURL (path) {
      const link = await innerLinkAwait(path)
      function innerLinkAwait (path) {
        return path
      }
      return `${link}`
    },
    title: 'Home | The Furry Galaxy Blog',
    meta: [
      {
        property: 'theme-color',
        content: '#9E25FA'
      },
      {
        property: 'og:title',
        content: 'The Furry Galaxy Blog'
      },
      {
        property: 'og:description',
        content: 'The Offical Furry Galaxy Blog'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'The Furry Galaxy Blog'
      },
      {
        property: 'og:url',
        content: 'https://blog.furrygalaxy.gq/'
      },
      {
        property: 'og:image',
        content: `${this.$config.baseURL}/wp-static/hero-img.png`
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://blog.furrgalaxy.gq/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.data.title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'The Official Furry Galaxy Blog'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${this.$config.baseURL}/wp-static/hero-img.png`
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `${this.$config.baseURL}/articles/${this.$route.params.slug}`
      }
    ]
  }
}
</script>
