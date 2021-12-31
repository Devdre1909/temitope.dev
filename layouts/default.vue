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
}
</script>
