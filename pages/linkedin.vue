<template>
  <div>
    <a
      ref="linkedinLink"
      href="https://www.linkedin.com/in/dtemitope/"
      target="_blank"
      class="hidden"
    >
    </a>
    Redirecting to LinkedIn ...
  </div>
</template>

<script>
export default {
  name: 'LinkedInPage',
  mounted() {
    this.$refs.linkedinLink.click()
    this.$router.push('/')
  },
}
</script>

<style></style>
