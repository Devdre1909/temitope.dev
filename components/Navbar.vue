<template>
  <div class="h-16 fixed w-full shadow-md dark:bg-brand-dark-body bg-white z-10">
    <div class="spacing h-full">
      <div class="flex w-full h-full items-center justify-between">
        <div>
          <a class="brand">DEVTEMITOPE</a>
        </div>
        <ul class="hidden lg:flex center h-full">
          <li class="h-full">
            <a href="#base" class="link">Base</a>
          </li>
          <li class="h-full">
            <a href="#about" class="link">About</a>
          </li>
          <li class="h-full">
            <a href="#projects" class="link">Projects</a>
          </li>
          <li class="h-full">
            <a href="#work-history" class="link">Work History</a>
          </li>
          <li class="h-full">
            <a href="#contact" class="link">Contact</a>
          </li>
          <li class="h-full flex center mx-3">
            <a
              download
              href="/docs/adegoke_temitope_cv.pdf"
              class="bg-brand-primary text-brand-blue-dark px-4 font-semibold py-2 rounded"
            >
              Resume
            </a>
          </li>
        </ul>
        <div class="flex" @click="toggleMode">
          <span
            v-if="!isDarkMode"
            id="dark"
            class="cursor-pointer text-brand-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
          <span v-else id="light" class="cursor-pointer text-brand-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
        </div>
        <div class="lg:hidden">
          <svg
            class="w-7 h-7 dark:text-white text-brand-dark-body"
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
              fill="currentColor"
            ></path>
            <path
              d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
              fill="currentColor"
            ></path>
            <path
              d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { themeKey } from '~/utils/consts'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      isDarkMode: true,
    }
  },
  mounted() {
    const userTheme = localStorage.getItem(themeKey)

    if (!userTheme) {
      localStorage.setItem(themeKey, 'dark')
    }

    if (
      userTheme === 'dark' ||
      (!(themeKey in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      this.isDarkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false
    }
  },
  methods: {
    toggleMode() {
      const userTheme = localStorage.getItem(themeKey)
      if (userTheme && userTheme === 'dark') {
        localStorage.setItem(themeKey, 'light')
        document.documentElement.classList.remove('dark')
        this.isDarkMode = false
      } else if (userTheme && userTheme === 'light') {
        localStorage.setItem(themeKey, 'dark')
        document.documentElement.classList.add('dark')
        this.isDarkMode = true
      } else {
        localStorage.setItem(themeKey, 'light')
        document.documentElement.classList.remove('dark')
        this.isDarkMode = false
      }
    },
  },
}
</script>

<style>
.brand {
  @apply text-brand-primary font-poppins font-semibold;
}

.link {
  z-index: 1;
  @apply h-full flex justify-center items-center dark:text-white px-4 cursor-pointer relative;
}

.link::after {
  @apply bg-brand-primary;
  content: '';
  height: 0px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 200ms ease-in-out;
  z-index: -1;
}

.link:hover {
  @apply text-brand-dark-body;
}

.link:hover::after {
  height: 100%;
}
</style>
