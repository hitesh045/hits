<template>
  <div class="home">
    <!-- <header-Section /> -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button
      v-on:click="clickbtn1()"
      class="btn btn-primary"
      :class="{ 'text-red': colorChangeOne === true }"
    >
      click here
    </button>
    <button
      v-on:click="clickbtn2()"
      class="btn btn-primary"
      :class="{ 'text-red': colorChangeTwo === true }"
    >
      click here
    </button>
    <button
      v-on:click="clickbtn3()"
      class="btn btn-primary"
      :class="{ 'text-red': colorChangeThree === true }"
    >
      click here
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import headerSection from "@/components/header-section.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
    // headerSection
  },
  data() {
    return {
      text: "",
      toggled: true,
      colorChangeOne: false,
      colorChangeTwo: false,
      colorChangeThree: false
    };
  },
  methods: {
    clickButton: function() {
      this.toggled = !this.toggled;
    },
    clickbtn1: function() {
      // console.log("red");
      this.colorChangeOne = true;
      this.colorChangeTwo = false;
      this.colorChangeThree = false;
    },
    clickbtn2: function() {
      // console.log("red");
      this.colorChangeTwo = true;
      this.colorChangeOne = false;
      this.colorChangeThree = false;
    },
    clickbtn3: function() {
      // console.log("red");
      this.colorChangeThree = true;
      this.colorChangeTwo = false;
      this.colorChangeOne = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.text-red {
  color: red !important;
}
</style>
