<template>
  <div class="mb-4 main-title text-waight-bold">
    <!-- <div class="text">Yes,There's An Artist inside You</div>
    <div class="text">Hi Hitesh Here</div> -->
    <div class="local-scroll-cont">
      <a href="#section06"><span></span></a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main-title {
  // padding: 200px 20px;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: black;
  .text {
    background: url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif);
    background-size: contain;
    background-position: top left;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 5rem;
    font-weight: bold;
    font-family: sans-serif;
  }
  .local-scroll-cont {
    // width: 40px;
    // height: 40px;
    // position: absolute;
    // bottom: 0;
    // left: 50%;
    // margin-left: -20px;
    // text-align: center;
    // z-index: 20;
    // -webkit-animation: scroll-down-anim 1s ease-in-out infinite;
    // animation: scroll-down-anim 1s ease-in-out infinite;
    span {
      position: absolute;
      // top: 0;
      bottom: 0;
      left: 50%;
      width: 24px;
      height: 24px;
      margin-left: -12px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-animation: sdb05 1.5s ease-in-out infinite;
      animation: sdb05 1.5s ease-in-out infinite;
      box-sizing: border-box;
    }
    @-webkit-keyframes sdb05 {
      0% {
        -webkit-transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        -webkit-transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
      }
    }
    @keyframes sdb05 {
      0% {
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
      }
    }
  }
}
</style>
