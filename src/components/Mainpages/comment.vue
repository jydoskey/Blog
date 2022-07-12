<template>
  <div class="comment">
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
      <p class="comment-title">Designed this last night with Xd</p>
      <div class="w-full">
        <img
          class="post-img"
          src="@/assets/images/blog3.png"
          alt="blog image"
        />
        <span class="comment-number">
          <img
            class="comment-profile"
            src="@/assets/images/face1.png"
            alt="face1"
          />
          <img
            class="comment-profile -ml-1"
            src="@/assets/images/face2.png"
            alt="face2"
          />
          <img
            class="comment-profile -ml-1"
            src="@/assets/images/face3.png"
            alt="face3"
          />
          <p>and 20 others already commented</p>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
* {
  @apply text-[#2E3333];
  box-sizing: border-box;
}

.comment {
  @apply text-[#262626] bg-white py-6 w-full h-auto px-6 mb-3 flex;
}

.comment-img {
  @apply rounded-2xl w-16 h-16 mr-6;
}

.comment h3 {
  @apply text-left font-bold text-[#262626] opacity-100 text-lg pb-1;
}

.comment-title {
  @apply pb-4 text-[#262626] text-sm;
}

.time {
  @apply text-[#AAAAAA] align-top ml-4;
  font-size: 9px;
}

.continuity {
  @apply text-sm font-extrabold;
}

.post-img {
  @apply rounded-2xl w-full;
}

.comment-number {
  @apply flex mt-1 justify-end items-center text-[#262626];
}

.comment-number p {
  @apply text-xs ml-1;
  font-size: 10px;
}

.comment-profile {
  @apply w-5 h-5 border-solid border-[white] rounded-md;
}
</style>