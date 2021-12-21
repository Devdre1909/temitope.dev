<template>
  <div>
    Redirecting to twitter ...
  </div>
</template>

<script>
export default {
  name: 'TwitterPage',
  mounted() {
    window.open('https://twitter.com/devtemitope', '_blank');
    this.$router.push('/')
  },
}
</script>

<style></style>
