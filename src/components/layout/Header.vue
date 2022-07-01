<template>
  <header>
    <nav id="nav-content" class="nav-content">
      <div>
        <router-link to="/">
          <img
            class="home-logo"
            src="@/assets/images/Brandlogo.svg"
            alt="logo"
          />
        </router-link>
      </div>

      <div
        class="menu-btn md:hidden block"
        id="menu-button"
        type="checkbox"
        @click="toggleIcon()"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        class="
          hidden
          w-full
          md:flex md:items-center md:w-auto md:h-full
          self-end
          sm:self-center
          h-screen
        "
        id="menu"
      >
        <div class="pt-4 text-lg flex md:justify-between md:pt-0 items-center">
          <form class="flex items-center mr-6">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="
                  flex
                  absolute
                  inset-y-0
                  left-0
                  items-center
                  pl-3
                  pointer-events-none
                "
              >
                <svg
                  class="w-5 h-5 text-[#707070] z-10"
                  fill="#707070"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="form-search"
                placeholder="Search for tasks or people"
                required=""
              />
            </div>
          </form>
          <span class="notification"></span>
          <img
            class="login-img"
            src="@/assets/images/Indiahigh.png"
            alt="login-img"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },

  methods: {
    navSelector() {
      const button = document.querySelector("#menu-button");
      const menu = document.querySelector("#menu");
      button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    },

    toggleIcon() {
      let menuIcon = document.querySelector(".menu-btn");
      const menu = document.querySelector("#menu");
      menuIcon.addEventListener("click", () => {});
      menuIcon.classList.toggle("close");
    },
  },

  mounted() {
    this.navSelector();
  },
};
</script>

<style scoped>
* {
  @apply text-[#2E3333];
}

.nav-content {
  @apply flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-6 lg:px-16 text-lg lg:h-[75px];
  border: 1px solid #B8CADE;
}

.home-logo {
  @apply w-36 h-10;
}

.menu-btn {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
.menu-btn span,
.open span {
  position: absolute;
  background: #222;
  width: 1.5rem;
  height: 0.25rem;
  transition: 0.4s 0.4s top, 0.4s 0.4s bottom, 0.3s transform;
  border-radius: 100px;
}
.menu-btn span:nth-of-type(1) {
  top: 0;
}
.menu-btn span:nth-of-type(2) {
  top: 40%;
  opacity: 1;
  transition: opacity 0.1s 0.4s;
}
.menu-btn span:nth-of-type(3) {
  bottom: 0;
}

.close span {
  transition: 0.4s top, 0.4s bottom, 0.4s 0.4s transform;
}
.close span:nth-of-type(1) {
  top: 40%;
  transform: rotate(45deg);
}
.close span:nth-of-type(2) {
  opacity: 0;
  transition: opacity 0.1s 0.4s;
}
.close span:nth-of-type(3) {
  bottom: 40%;
  transform: rotate(-45deg);
}

#nav-content {
  @apply bg-white;
}

.form-search {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-xl block md:w-72 w-56 pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white;
}

.notification {
  @apply bg-[#F1F7FE] rounded-2xl w-1 h-1 p-4 mr-6;
}

.login-img {
  @apply rounded-3xl w-10 h-10;
}
</style> 