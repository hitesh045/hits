<template>
  <div>
    <div class="container">
      <div class="one">I'm first</div>
      <div class="two">I'm second</div>
      <div class="three">I'm third</div>
      <div class="four">I'm fourth</div>
      <div class="five">I'm fifth</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.container div {
  width: 100px;
  height: 50px;
  display: inline-block;
}

.one {
  background: red;
}
.two {
  background: orange;
}
.three {
  background: yellow;
}
.four {
  background: green;
}
.five {
  background: blue;
}

@media screen and (max-width: 531px) {
  .container {
    display: flex;
    flex-flow: column;
  }
  .five {
    order: 1;
  }
  .four {
    order: 2;
  }
  .three {
    order: 5;
  }
  .two {
    order: 3;
  }
  .one {
    order: 5;
  }
}
</style>
