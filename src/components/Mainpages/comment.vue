<template>
  <div class="comment">
    <img class="comment-img" :src="profile" alt="comment picture" />
    <span class="w-full">
      <span class="flex justify-between">
        <h3>{{ userName }} <span class="time">25 mins ago</span></h3>
        <span class="continuity">...</span>
      </span>
      <p class="comment-title">{{ postDescription }}</p>
      <div class="w-full mb-3">
        <img class="post-img" :src="imageName" alt="blog image" />
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
      <div class="flex flex-wrap pb-3 justify-around items-center">
        <span class="flex items-center mr-4"
          ><img
            class="circle"
            src="@/assets/images/downvote.svg"
            alt="downvote"
          />
          2</span
        >
        <span class="flex items-center mr-4"
          ><img class="circle" src="@/assets/images/upvote.svg" alt="upvote" />
          250</span
        >
        <span class="flex items-center mr-2"
          ><img class="circle" src="@/assets/images/reply.svg" alt="reply"
        /></span>
        <form>
          <input
            name="comment"
            type="text"
            required
            class="form-input md:mt-0 mt-2"
            placeholder="Comment here"
          />
        </form>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "comment",
  props: ["profile", "imageName", "userName", "postDescription"],
};
</script>

<style scoped>
* {
  @apply text-[#2E3333];
  box-sizing: border-box;
}

.comment {
  @apply text-[#262626] bg-white py-6 w-full h-auto px-6 mb-3 flex rounded-3xl;
}

.comment-img {
  @apply rounded-2xl w-16 h-16 mr-6;
}

.comment h3 {
  @apply text-left font-bold text-[#262626] opacity-100 md:text-lg pb-1;
}

.comment-title {
  @apply pb-4 text-[#262626] text-sm;
}

.time {
  @apply text-[#AAAAAA] align-top ml-4;
  font-size: 9px;
}

.continuity {
  @apply text-sm font-extrabold cursor-pointer px-[9px] py-[4px] hover:bg-[#F1F7FE] hover:rounded-full ease-in;
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

.circle {
  @apply border-[#b8cadead] rounded-full border-solid border p-[3px] md:p-[5px] md:mr-4 mr-2 hover:bg-[#B8CADEAD] cursor-pointer;
}

.form-input {
  @apply rounded-2xl h-[2.5rem] px-6 focus:outline-none text-sm bg-[#F1F7FE] text-[#AAAAAA] appearance-none
   py-2 focus:border placeholder-gray-500 focus:bg-[white];
}
</style>