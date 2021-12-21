<template>
  <div>
    Redirecting to Github ...
  </div>
</template>

<script>
export default {
  name: 'GithubPage',
  mounted() {
    window.open('https://github.com/devdre1909', '_blank');
    this.$router.push('/')
  },
}
</script>

<style></style>
