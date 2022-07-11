<template>
  <div class="content">
    <img
      class="comment-img"
      src="@/assets/images/VanGoghByAmrit.png"
      alt="comment picture"
    />
    <span class="w-full">
      <span class="flex justify-between">
        <h3>Sandie Handy <span class="time">25 mins ago</span></h3>
        <span class="continuity">...</span>
      </span>
      <p class="post-title">Designed this last night with Xd</p>
      <div class="w-full">
        <img
          class="blog-img"
          src="@/assets/images/blog3.png"
          alt="blog image"
        />
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      thought: "",
    };
  },
  methods: {},
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

.content {
  @apply text-[#262626] bg-white py-6 w-full h-auto px-6 mb-3 flex;
}

.comment-img {
  @apply rounded-2xl w-16 h-16 mr-6;
}

.content h3 {
  @apply text-left font-bold text-[#262626] opacity-100 text-lg pb-1;
}

.post-title {
  @apply pb-4 text-[#262626] text-sm;
}

.time {
  @apply text-[#AAAAAA] align-top ml-4;
  font-size: 9px;
}

.continuity {
  @apply text-sm font-extrabold;
}

.blog-img {
  @apply rounded-2xl w-full;
}

form {
  @apply flex;
}
</style>