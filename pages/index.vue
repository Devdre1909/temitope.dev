<template>
  <div
    class="h-screen w-full flex items-center justify-center bg-brand-dark-body text-white"
  >
    <div class="text-center">
      <h2 class="lg:text-5xl text-4xl font-bold font-major-mono-display">
        Revamping is going on...
      </h2>
      <p
        class="font-poppins lg:text-xl text-base max-w-xs lg:max-w-none mx-auto mt-2"
      >
        Stay tuned for more updates or drop an email here
        <a
          class="text-brand-primary"
          href="mailto:adegoketemitope1909@gmail.com"
          >adegoketemitope1909</a
        >
      </p>
      <div class="mt-10">
        <a
          class="bg-brand-primary text-brand-dark-body px-4 py-3 font-bold rounded font-poppins"
          download
          href="/docs/adegoke_temitope_cv.pdf"
          >Download Resume</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
*:focus {
  @apply ring-2 ring-brand-primary;
}
</style>
