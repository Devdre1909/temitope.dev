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
              download
              href="/docs/adegoke_temitope_cv.pdf"
              class="bg-brand-primary text-brand-blue-dark px-4 font-semibold py-2 rounded"
            >
              Resume
            </a>
          </li>
        </ul>
        <div class="md:hidden">
          <svg
            class="w-7 h-7 text-white"
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
