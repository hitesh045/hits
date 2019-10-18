<template>
  <div class="container">
    <ul class="bg-color">
      {{ name }}
      {{ companyName }}
      <li v-for="playlist in myplaylist" v-bind:key="playlist.index">
        <span class="text-center">{{ playlist.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "home",
  props: ["name", "myplaylist", "companyName"],
  data() {
    return {
      // myplaylist:[
      //   {
      //     name:"Hitesh",
      //   },
      //   {
      //     name:"Roshan",
      //   }
      // ]
    };
  },
  }
</script>
<style lang="scss">
.bg-color{
  background-color:black;
  color:red;
}
</style>
