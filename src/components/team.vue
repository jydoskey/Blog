<template>
  <div>
    <div class="team">
      <div class="leftmarker"></div>
      <div>
        <h2>{{ teamHeader }}</h2>
        <p class="flex text-center pb-1">
          <img
            src="@/assets/images/calender.svg"
            class="pr-2 w-5"
            alt="calender"
          />{{ teamDate }}
        </p>
        <p class="flex text-center">
          <img src="@/assets/images/time.svg" class="pr-2 w-5" alt="time" />{{
            teamTime
          }}
        </p>
        <span class="flex mt-1">
          <img
            class="team-members"
            src="@/assets/images/face1.png"
            alt="face1"
          />
          <img
            class="team-members -ml-2"
            src="@/assets/images/face2.png"
            alt="face2"
          />
          <img
            class="team-members -ml-2"
            src="@/assets/images/face3.png"
            alt="face3"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogTeam",
  data() {
    return {};
  },
  props: ["teamHeader", "teamDate", "teamTime"],
};
</script>

<style scoped>
.team {
  @apply py-3 pr-[60px] w-[262.84px] flex items-center pl-2 rounded-3xl border-[1px] mb-2 mx-auto border-solid border-[#D2DCE8] bg-white bg-no-repeat bg-origin-padding;
  box-shadow: 0px 8px 16px #0000000a;
}

.leftmarker {
  @apply border-l-2 bg-[#B8CADE] bg-no-repeat bg-origin-padding h-14 w-1 mr-4;
}

.team h2 {
  @apply text-left font-bold text-[#262626] text-base pb-2;
}

.team p {
  @apply text-left font-normal text-[#AAAAAA] text-xs;
  font-family: Roboto;
}

.team-members {
  @apply w-8 h-8 border-solid border-[white] rounded-md;
}
</style>