<template>
  <div class="todocomment">
    <Header class="fixed w-full bg-white top-0 z-50 top-nav"></Header>
    <div class="todocomment-body">
      <div class="container">
        <div class="content form-height">
          <form>
            <input
              v-model="thought"
              name="thought"
              type="text"
              required
              class="form-input"
              placeholder="Share your thought"
            />
            <button type="submit" class="form-button">Post it</button>
          </form>
        </div>
        <Comment
          profile="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/VanGoghByAmrit.png"
          userName="Sandie Handy"
          postDescription="Designed this last night with Xd"
          imageName="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/blog3.png"
        ></Comment>
        <Comment
          profile="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/Indiahigh.png"
          userName="Turban Toyface Man"
          postDescription="The life of developer with a good design team in the field makes life pops like popcorn"
          imageName="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/blog4.png"
        ></Comment>
        <Comment
          profile="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/VanGoghByAmrit.png"
          userName="Johnson Johnston"
          postDescription="The life of developer with a good design team in the field makes life pops like popcorn"
          imageName="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/blog1.png"
        ></Comment>
        <Comment
          profile="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/Indiahigh.png"
          userName="Johnson Johnston"
          postDescription="The life of developer with a good design team in the field makes life pops like popcorn"
          imageName="https://raw.githubusercontent.com/jydoskey/Blog/main/src/assets/images/blog2.png"
        ></Comment>
      </div>
      <div class="container">
        <div class="content">
          <h3>Daily Tasks</h3>
          <div class="status">
            <p @click="pendingColor()" :style="pending">Pending</p>
            <p @click="progressColor()" :style="progress">Inprogress</p>
            <p @click="completeColor()" :style="completed">Completed</p>
          </div>
          <div class="task !flex-wrap" v-show="pendingView">
            <team
              teamHeader="Meeting with the team"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
            <team
              teamHeader="Design with M3 Team"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
            <div class="new-task">
              <a class="plus"></a>
            </div>
          </div>
          <div class="task" v-show="progressView">
            <team
              teamHeader="FigJam using Figma"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
            <team
              teamHeader="Tweak UIs in Xd"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
          </div>
          <div class="task !flex-wrap" v-show="completeView">
            <team
              teamHeader="Usability testing"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
            <team
              teamHeader="Test UIs Accessibility"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
            <team
              teamHeader="Meeting with the team"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
            <team
              teamHeader="Board Meeting"
              teamDate="20 June, 2022"
              teamTime="11:00 A.M - 12:00 P.M"
            >
            </team>
          </div>
        </div>
        <div class="content rounded-3xl">
          <h3>What's trending on Blogit</h3>
          <div class="line-break"></div>
          <div class="comment">
            <img class="comment-img" src="@/assets/images/lion.png" alt="comment picture" />
            <span class="w-full">
              <span class="flex justify-between items-center mb-3">
                <h3>
                  Premier teams all set for the new season
                  <img class="w-3 ml-2" src="@/assets/images/verified.svg" alt="verified"/>
                </h3>
                <span class="time">25 mins ago</span>
              </span>
              <p class="comment-title">
                Upon the release of the 2022/2 season all teams are set on fire
                for the upcoming season. Oh, Premier League how I love You.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Team from "@/components/team.vue";
import Comment from "@/components/Mainpages/comment.vue";
export default {
  name: "todocomment",
  data() {
    return {
      thought: "",
      pending:
        "color:#0047F9; background-color:white; padding: 0.5rem 0.6rem; border-radius: 10px",
      progress: "color:#262626",
      completed: "color:#262626",
      progressView: false,
      completeView: false,
      pendingView: true,
    };
  },
  components: { Team, Header, Comment },
  methods: {
    pendingColor() {
      this.pending =
        "color:#0047F9; background-color:white; padding: 0.5rem 0.6rem; border-radius: 10px";
      this.progress = "color:#262626";
      this.completed = "color:#262626";
      this.pendingView = true;
      this.progressView = false;
      this.completeView = false;
    },
    progressColor() {
      this.progress =
        "color:#0047F9; background-color:white; padding: 0.5rem 0.6rem; border-radius: 10px";
      this.pending = "color:#262626";
      this.completed = "color:#262626";
      this.pendingView = false;
      this.progressView = true;
      this.completeView = false;
    },
    completeColor() {
      this.completed =
        "color:#0047F9; background-color:white; padding: 0.5rem 0.6rem; border-radius: 10px";
      this.pending = "color:#262626";
      this.progress = "color:#262626";
      this.pendingView = false;
      this.progressView = false;
      this.completeView = true;
    },
  },
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
  @apply bg-[#F6F6F6] h-full;
}

.todocomment-body {
  @apply md:flex px-4 md:px-16 justify-between mt-[4.5rem] pb-8;
}

.container {
  @apply md:mx-4;
}

.content {
  @apply text-[#262626] bg-white py-6 w-full h-auto px-6 mb-3;
}

.new-task {
  @apply py-3 w-[262.84px] h-[130px] rounded-3xl md:mb-3 md:ml-2 mx-auto bg-[#FCFCFC] bg-no-repeat bg-origin-padding;
  border: 3px dashed #b8cade;
}

.plus {
  @apply h-6 w-6 absolute left-2/4 top-11;
}
.plus:before,
.plus:after {
  content: " ";
  @apply bg-[#b8cade] w-1 h-6 absolute;
}
.plus:before {
  transform: rotate(90deg);
}
.plus:after {
  transform: rotate(-180deg);
}

.content h3 {
  @apply text-left font-bold text-[#262626] opacity-100 text-lg pb-3;
}

.status {
  @apply bg-[#F1F7FE] flex justify-center rounded-2xl w-[18rem] mb-8 mr-auto ml-auto items-center;
}

.status p {
  @apply font-bold text-xs cursor-pointer px-4 py-4;
}

.task {
  @apply md:flex justify-between;
}

form {
  @apply flex;
}

.form-height {
  @apply h-32;
}

.form-input {
  @apply rounded-xl w-full h-[3.5rem] px-6 focus:outline-none text-sm bg-[#F1F7FE] text-[#AAAAAA] appearance-none
   py-2 focus:border placeholder-gray-500 focus:bg-[white] focus:ring-[#B8CADE] focus:border-[#B8CADE] focus:z-10;
}

.form-button {
  background: transparent
    linear-gradient(
      270deg,
      #00c2ef 0%,
      #00baef 9%,
      #00a7f1 18%,
      #0087f3 44%,
      #005bf7 88%,
      #0047f9 100%
    )
    0% 0% no-repeat padding-box;
  @apply h-[3.5rem] w-4/12 ml-4 py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white cursor-pointer;
}

.form-button:hover {
  background: #0047f9;
}

.line-break {
  @apply border border-t-[1px] border-solid border-[#B8CADE] -mx-6 opacity-50;
}

.comment {
  @apply text-[#262626] bg-white pt-5 pb-1 w-full h-auto mb-3 flex rounded-3xl;
}

.comment-img {
  @apply rounded-2xl w-16 h-16 mr-6;
}

.comment h3 {
  @apply text-left font-bold text-[#262626] opacity-100 md:text-lg pb-1 flex;
}

.comment-title {
  @apply text-[#262626] text-sm;
}

.time {
  @apply text-[#AAAAAA] ml-4;
  font-size: 9px;
}
</style>