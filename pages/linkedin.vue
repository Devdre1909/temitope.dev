<template>
  <div>
    Redirecting to LinkedIn ...
  </div>
</template>

<script>
export default {
  name: 'LinkedInPage',
  mounted() {
    window.open('https://www.linkedin.com/in/dtemitope/', '_blank');
    this.$router.push('/')
  },
}
</script>

<style></style>
