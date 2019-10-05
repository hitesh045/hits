<template>
  <div>
    <!-- <banner-Section />
    <accordian-Section />
    <earthSection />
    <animatedBannerSection />
    <sidenavSection />
    <sliderButtonSection /> -->
    <buttonAnimationSection />
    <imageAnimationSection />
    <creativeBorderBoxSection />
    <!-- <glowingTextSection /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import bannerSection from "@/components/banner.vue";
// import accordianSection from "@/components/accordian.vue";
// import earthSection from "@/components/earth.vue";
// import animatedBannerSection from "@/components/animated-banner.vue";
// import sidenavSection from "@/components/sidenav.vue";
// import sliderButtonSection from "@/components/sliderButton.vue";
import buttonAnimationSection from "@/components/button-animation.vue";
import imageAnimationSection from "@/components/image-animation.vue";
import creativeBorderBoxSection from "@/components/creative-border-box.vue";
// import glowingTextSection from "@/components/glowing-text-animation.vue";

export default {
  name: "home",
  components: {
    // bannerSection,
    // accordianSection,
    // earthSection,
    // animatedBannerSection,
    // sidenavSection,
    // sliderButtonSection,
    buttonAnimationSection,
    imageAnimationSection,
    creativeBorderBoxSection
    // glowingTextSection
  }
};
</script>
