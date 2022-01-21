<template>
  <div
    class="dark:bg-brand-dark-body bg-gray-100 selection:bg-brand-primary selection:text-brand-dark-body duration-200 transition-colors"
  >
    <NavbarVue />
    <div class="pt-16">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavbarVue from '~/components/Navbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    NavbarVue,
  },
  mounted() {
    const elements = document.querySelectorAll('.observe')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const dot = document.getElementById(`dot-${id}`)
            dot.classList.add('selected-circle')
          } else {
            const id = entry.target.id
            const dot = document.getElementById(`dot-${id}`)
            dot.classList.remove('selected-circle')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })
  },
}
</script>
