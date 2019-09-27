<template>
  <div>
    <banner-Section />
  </div>
</template>

<script>
// @ is an alias to /src
import bannerSection from "@/components/banner.vue";

export default {
  name: "home",
  components: {
    bannerSection
  }
};
</script>
