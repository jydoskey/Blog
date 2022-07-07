<template>
  <div>
    <div class="team">
      <h2>{{ teamHeader }}</h2>
      <p class="flex text-center pb-1">
        <img src="@/assets/images/calender.svg" class="pr-2" alt="calender" />{{
          teamDate
        }}
      </p>
      <p class="flex text-center">
        <img src="@/assets/images/time.svg" class="pr-2" alt="time" />{{
          teamTime
        }}
      </p>
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

<style>
.team {
  @apply py-6 pr-[60px] pl-7 rounded-3xl border-[1px] mb-2 border-solid border-[#D2DCE8] bg-white bg-no-repeat bg-origin-padding;
  box-shadow: 0px 8px 16px #0000000a;
}

.team h2 {
  @apply text-left font-bold text-[#262626] text-base pb-2;
}

.team p {
  @apply text-left font-normal text-[#AAAAAA] text-sm;
  font-family: Roboto;
}
</style>