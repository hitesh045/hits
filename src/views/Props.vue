<template>
  <div>
    <!--***** What is the Props *****-->
    <!--******* Props are the way components can accept data from components that include them (parent component)  **********-->
    <propsContentSection company-name="Wohlig Technology" name="UI Developer" v-bind:myplaylist="myplaylist"/>
    <!-- Pass array in the propsContentSection so it will pass data(json data to that child class(child props file)) -->
    <!-- So in this way we can pass multiple data to the its required .vue file -->

    <!-- To learn slot concept https://www.youtube.com/watch?v=90oSN3BEiCU-->
  </div>
</template>
<script>
import propsContentSection from "@/components/props-content.vue";
export default {
  name: "props",
  components: {
    propsContentSection
    },
     data() {
    return {
      myplaylist:[
        {
          name:"Hitesh",
        },
        {
          name:"Roshan",
        }
      ]
    };
  },
  }
</script>
