<template>
  <div>
    <div class="outer">
      <div class="button">
        <div class="text">button</div>
      </div>
    </div>
    <div class="box-left">
      Hover button Animation
      <div class="item bt-menu js-nav-main" data-menu-id="menu-main">
        <div class="ico-menu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <span class="has-tablet">MENU</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.outer {
  margin: 50px;
}

.button {
  border: 1px solid black;
  border-radius: 3px;
  width: 100px;
  height: 30px;
  display: block;

  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

.button:hover {
  background-position: left bottom;
}

.text {
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  color: black;
  transition: all 0.6s ease-out;
  display: block;
}

.text:hover {
  color: white;
}

//navbar button nav start
.item {
  padding: 0 23px;
}
.bt-menu {
  min-width: 115px;
  height: 70px;
  border-right: 1px solid #e6eaea;
  cursor: pointer;
  overflow: hidden;
  // transition: all 0.3s ease-in-out;
  transition: all 0.5s ease-out;
}
.bt-menu .ico-menu {
  top: -1px;
  margin-right: 10px;
  vertical-align: middle;
}
.ico-menu {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 13px;
}
.ico-menu .bar {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #202121;
  border-radius: 2px;
  overflow: hidden;
}
.ico-menu .bar:nth-child(1) {
  top: 0;
}
.ico-menu .bar:nth-child(2) {
  top: 4px;
}
.ico-menu .bar:nth-child(3) {
  top: 8px;
}
.ico-menu .bar:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: red;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
  transition: 0.3s;
}
.bt-menu:hover {
  color: red;
  .ico-menu .bar:after {
    left: 0;
  }
}
.ico-menu .bar:nth-child(1):after {
  transition-delay: 0.1s;
}
.ico-menu .bar:nth-child(2):after {
  transition-delay: 0.2s;
}
.ico-menu .bar:nth-child(3):after {
  transition-delay: 0.3s;
}
</style>
