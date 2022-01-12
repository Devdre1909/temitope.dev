<template>
  <div
    class="spacing relative min-h-screen text-gray-500 dark:text-gray-400 pb-10"
  >
    <section class="py-16">
      <p>
        All articles are written by
        <nuxt-link to="/linkedin" class="styled-link"
          >Adegoke Temitope</nuxt-link
        >, A Front-End Web Developer (React, Vue, Node, JavaScript, Typescript),
        currently based in Akure, Nigeria. studying Information technology in
        Federal University of Technology, Akure.
      </p>
      <p>
        Say Hi to Him on
        <nuxt-link to="/twitter" class="styled-link">Twitter</nuxt-link> .
      </p>
    </section>
    <section v-if="!articles.length === 0" class="">
      <nuxt-link
        v-for="(article, i) in articles"
        :key="i"
        class="bg-white p-5 rounded mb-5 shadow-md block w-full"
        :to="`/writing/${article.slug}`"
      >
        <h2 class="text-3xl tracking-tight font-semibold text-brand-dark-body">
          {{ article.title }}
        </h2>
        <div class="mt-2 flex">
          <span
            class="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1"
          >
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
        </div>
        <p class="text-gray-500 mt-3">{{ article.description }}</p>
      </nuxt-link>
    </section>
    <section v-else>
      <div class="mx-auto max-w-lg">
        <img src="../assets/images/undraw_dog_walking_re_l61p.svg" />
      </div>
    </section>
  </div>
</template>

<script>
import timeAgo from '~/utils/timeAgo'
export default {
  name: 'WritingsPage',
  filters: {
    formatDate(time) {
      return timeAgo.format(new Date(time))
    },
  },
  async asyncData({ $content, params }) {
    try {
      const articles = await $content('articles').fetch()
      return { articles }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
