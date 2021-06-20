<template>
  <div>
    <div class="flex h-screen justify-center font-sans mt-4">
      <div>
        <div>
          <div class="flex">
            <div class="m-auto">
              <h1 class="text-3xl font-bold mb-3 font-serif px-3">
                {{ data.title }}
              </h1>
              <hr class="px-3">
              <div class="flex items-center mt-3 max-w-xl px-3 lg:px-0">
                <img class="rounded" :src="require(`@/assets/authors/${data.author.image}`)" :alt="data.author.name + '\'s Photo'" width="50" height="50">
                <div class="ml-5">
                  <span class="text-gray-800 text-lg font-semibold">
                    {{ data.author.name }}
                  </span>
                  <br>
                  <span class="text-gray-400">
                    {{ $dayjs(data.createdAt).format('MMMM DD') }} • {{ data.minRead }} minute read
                  </span>
                </div>
              </div>
              <div class="flex justify-end items-between">
                <a class="mr-3" :href="`https://twitter.com/intent/tweet?url=https%3A%2F%2Fblog.furrygalaxy.gq${$route.path}&text=${data.title}%20by%20${data.author.name}%20•%20${data.minRead}%20min%20read`"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:#2a2a2a;transform:;-ms-filter:"><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" /></svg></a>
                <a class="mr-3" :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.furrygalaxy.gq${$route.path}`"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:#2a2a2a; transform:;-ms-filter:"><path d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798 c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771 l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z" /></svg></a>
                <a class="mr-3" :href="`http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.furrygalaxy.gq%2F${$route.path}&title=${data.title}%20by%20${data.author.name}%20•%20${data.minRead}%20min%20read`"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:#2a2a2a;transform:;-ms-filter:"><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667 v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548 S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248 h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" /></svg></a>
              </div>

              <div class="flex">
                <div class="m-auto">
                  <img :src="require(`@/assets/blog-assets/${data.image}`)" class="lg:rounded max-h-96 mt-20 mb-20" alt="">
                </div>
              </div>

              <nuxt-content :document="data" class="prose lg:prose-xl font-sans px-3 mt-5 mb-20" />

              <Disqus :identifier="$route.path" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const data = await $content(`articles/${params.slug}`)
      .fetch()
      // eslint-disable-next-line node/handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found.' })
      })

    return { data }
  },
  head: {
    title: `${this.data.title} | The Furry Galaxy Blog`,
    meta: [
      {
        property: 'theme-color',
        content: '#9E25FA'
      },
      {
        property: 'og:title',
        content: this.data.title
      },
      {
        property: 'og:description',
        content: this.data.description
      },
      {
        property: 'og:type',
        content: 'article'
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
        content: `${this.$config.baseURL}/wp-static/${this.data.image}`
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: `${this.$config.baseURL}/articles/${this.$route.params.slug}`
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.data.title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.data.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${this.$config.baseURL}/wp-static/${this.data.image}`
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

<style>

</style>
