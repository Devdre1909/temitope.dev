<template>
  <div class="h-16 fixed w-full shadow-md bg-brand-dark-body z-10">
    <div class="spacing h-full">
      <div class="flex w-full h-full items-center justify-between">
        <div>
          <a class="brand">DEVTEMITOPE</a>
        </div>
        <ul class="hidden md:flex center h-full">
          <li class="h-full">
            <a href="#base" class="link">Base</a>
          </li>
          <li class="h-full">
            <a href="#about" class="link">About</a>
          </li>
          <li class="h-full">
            <a href="#project" class="link">Projects</a>
          </li>
          <li class="h-full">
            <a href="#work-history" class="link">Work History</a>
          </li>
          <li class="h-full">
            <a href="#contact" class="link">Contact</a>
          </li>
          <li class="h-full flex center mx-3">
            <a
              class="bg-brand-primary text-brand-blue-dark px-4 font-semibold py-2 rounded"
            >
              Resume
            </a>
          </li>
        </ul>
        <div class="md:hidden">
          <CgMenuRightAlt class="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style>
.brand {
  @apply text-brand-primary font-poppins font-semibold;
}

.link {
  z-index: 1;
  @apply h-full flex justify-center items-center text-white px-4 cursor-pointer relative;
}

.link::after{
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

.link:hover::after{
  height: 100%;
}
</style>
