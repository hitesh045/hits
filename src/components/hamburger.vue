<template>
  <div>
    <div id="webapp_cover">
      <div id="menu_button">
        <input type="checkbox" id="menu_checkbox" />
        <label for="menu_checkbox" id="menu_label">
          <div id="menu_text_bar"></div>
        </label>
      </div>
    </div>
    <input type="checkbox" id="hi" />
    <label class="menu" for="hi">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  </div>
</template>
<style lang="scss" scoped>
* {
  -webkit-tap-highlight-color: transparent;
}

*:focus {
  outline: none;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #0e3577;
}

#webapp_cover {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 39px;
  // margin: 0 auto;
  margin: 20px;
  padding: 120px 400px;
  background-color: red;
  transform: translateY(-50%) scale(2);
}

#menu_button {
  width: 39px;
  overflow: hidden;
}

#menu_checkbox {
  display: none;
}

#menu_label {
  position: relative;
  display: block;
  height: 29px;
  cursor: pointer;
}

#menu_label:before,
#menu_label:after,
#menu_text_bar {
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #fff;
}

#menu_label:before,
#menu_label:after {
  content: "";
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
}

#menu_label:before {
  top: 0;
}

#menu_label:after {
  top: 12px;
}

#menu_text_bar {
  top: 24px;
}

#menu_text_bar:before {
  // content: "MENU";
  content: "HITs";
  position: absolute;
  top: 16px;
  right: 0;
  left: 0;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  text-align: center;
}

#menu_checkbox:checked + #menu_label:before {
  left: -39px;
}

#menu_checkbox:checked + #menu_label:after {
  left: 39px;
}

#menu_checkbox:checked + #menu_label #menu_text_bar:before {
  animation: moveUpThenDown 0.8s ease 0.2s forwards,
    shakeWhileMovingUp 0.8s ease 0.2s forwards,
    shakeWhileMovingDown 0.2s ease 0.8s forwards;
}

@keyframes moveUpThenDown {
  0% {
    top: 0;
  }
  50% {
    top: -27px;
  }
  100% {
    top: -14px;
  }
}

@keyframes shakeWhileMovingUp {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes shakeWhileMovingDown {
  0% {
    transform: rotateZ(0);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-3deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

/////////////////////////////////////////////////////////
///////////        Cross Menu Icon           ////////////
/////////////////////////////////////////////////////////
.menu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.5s ease;
  height: 50px;
  &:hover .bar {
    box-shadow: 1px 1px 7px 1px RGBa(0, 0, 0, 0.3);
  }
  .bar {
    width: 55px;
    height: 10px;
    background: #fff;
    box-shadow: 1px 1px 3px RGBa(0, 0, 0, 0.4);
    border-radius: 2px;
    transition: 0.4s ease;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
#hi {
  position: absolute;
  left: -999px;
  top: -999px;
}
#hi:checked + .menu {
  transform: translate(-50%, -50%) rotatey(180deg);
  .bar {
    transform: rotatey(180deg) rotatex(360deg);
    &:first-child {
      transform: rotate(-45deg);
      margin-top: 20px;
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      margin-top: -30px;
      transform: rotate(45deg);
    }
  }
}
</style>
