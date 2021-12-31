<template>
  <div class="spacing relative">
    <div class="max-w-4xl mx-auto">
      <div class="my-8">
        <nuxt-link
          to="/writings"
          class="inline-flex items-center justify-start text-sm text-gray-500 dark:text-gray-400 hover:text-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Writings</nuxt-link
        >
      </div>
      <div class="mb-5 flex space-x-5">
        <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{{ article.createdAt | formatDate }}</span>
        </span>
        <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span> {{ readingTime.text }}</span>
        </span>
      </div>
      <h1
        class="text-3xl tracking-tight font-semibold font-poppins text-brand-dark-body dark:text-white mb-2"
      >
        {{ article.title }}
      </h1>
      <p class="mb-10 text-base font-ibm-plex-sans font-medium text-gray-600 dark:text-gray-200">
        {{ article.description }}
      </p>
    </div>
    <div class="max-w-5xl mx-auto mb-10">
      <img :src="article.img" :alt="article.alt" class="object-cover rounded" />
    </div>
    <div class="max-w-4xl mx-auto dark:text-gray-200 text-brand-dark-body ">
      <article ref="article">
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>

<script>
import readingTime from 'reading-time'
import timeAgo from '~/utils/timeAgo'

export default {
  filters: {
    formatDate(time) {
      return timeAgo.format(new Date(time))
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.title).fetch()
    // console.log({ article })
    return { article }
  },
  data() {
    return {
      articleContent: '',
      readingTime: {},
    }
  },
  head() {
    return {
      title: `${this.article.title} | Adegoke Temitope - Front-End Developer from Akure, Nigeria`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.getTime()
    })
  },
  methods: {
    getTime() {
      if (this.$refs.article) {
        this.readingTime = readingTime(this.$refs.article.innerText)
      }
    },
  },
}
</script>

<style></style>
