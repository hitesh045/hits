<template>
  <div>
    <!-- <header-Section /> -->
    <aSection />
    <orderChangeSection />
  </div>
</template>

<script>
// @ is an alias to /src
// import headerSection from "@/components/header-section.vue";
import aSection from "@/components/a.vue";
import orderChangeSection from "@/components/order-change.vue";

export default {
  components: {
    aSection,
    orderChangeSection
    // headerSection
  }
};
</script>
