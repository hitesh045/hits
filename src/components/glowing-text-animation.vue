<template>
  <div class="glowing-text">
    <div class="container">
      <h1>
        <span>
          H
        </span>
        <span>
          I
        </span>
        <span>
          T
        </span>
        <span>
          E
        </span>
        <span>
          S
        </span>
        <span>
          H
        </span>
      </h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.glowing-text {
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100vh;
  background-color: #060c21;
  h1 {
    margin: 0;
    padding: 0;
    color: #111;
    font-size: 16em;
    span {
      display: table-cell;
      margin: 0;
      padding: 0;
      animation: animate 2s linear infinite;
    }
    span:nth-child(1) {
      animation-delay: 0s;
    }
    span:nth-child(2) {
      animation-delay: 0.25s;
    }
    span:nth-child(3) {
      animation-delay: 0.5s;
    }
    span:nth-child(4) {
      animation-delay: 0.75s;
    }
    span:nth-child(5) {
      animation-delay: 1s;
    }
    span:nth-child(6) {
      animation-delay: 1.25s;
    }
    @keyframes animate {
      0% {
        color: #fff;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
          0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
          0 0 300px #00b3ff, 0 0 400px #00b3ff;
      }
      5% {
        color: #111;
        filter: blur(0px);
        // text-shadow: none; //It will provide text shadow border
        text-shadow: 0 0 10px #00b3ff; //It will provide text shadow border
      }
      95% {
        color: #111;
        filter: blur(0px);
        text-shadow: none; //It will provide text shadow border/
        // text-shadow: 0 0 10px #00b3ff; //It will provide text shadow border
      }
      100% {
        color: #fff;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff;
      }
    }
  }
}
</style>
