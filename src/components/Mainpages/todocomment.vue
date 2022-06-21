<template>
  <div class="todocomment">
    <Header class="fixed w-full bg-white top-0 z-50 top-nav"></Header>
    <div class="todocomment-body">

    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
export default {
  name: "todocomment",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Header },
};
</script>

<style scoped>
* {
  @apply text-[#2E3333];
  box-sizing: border-box;
}

.top-nav {
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  z-index: 2;
}
.todocomment {
  @apply bg-[#F6F6F6] w-full h-screen md:flex block;
}

.todocomment-body {
    
}
</style>