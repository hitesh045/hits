<template>
  <div>
    <div class="all-elements">
      <div
        id="perspective"
        class="perspective effect-airbnb "
        :class="{ 'modalview animate': closed }"
      >
        <div class="header">
          <a href="#" id="showMenu" style="z-index:999;">
            <!-- Text Menu -->
            <div id="webapp_cover">
              <div id="menu_button">
                <input
                  type="checkbox"
                  id="menu_checkbox"
                  @click="toggleMenu()"
                />
                <label for="menu_checkbox" id="menu_label">
                  <div id="menu_text_bar"></div>
                </label>
              </div>
            </div>
          </a>
          <a href="#" id="pageLogo"
            ><img
              src="../assets/CHILLI_CLUSTER.png"
              alt="img"
              style="    width: 18%;
    height: auto;"
          /></a>
          <a href="#" id="openMail"><i class="fa fa-envelope-o"></i></a>
        </div>
        <div class="outer-nav">
          <div class="inner-nav">
            <div class="nav-item">
              <a href="index.html" class="active-item">
                <i class="nav-icon fa fa-home"></i>
                Home
              </a>
            </div>
            <div class="nav-item">
              <a href="#" class="deploy-nav-sub-item">
                <i class="nav-icon fa fa-cog"></i>
                Features
              </a>
              <!-- <div class="nav-sub-item">
                <a href="features-type.html">Type</a>
                <a href="features-jquery.html">jQuery</a>
                <a href="features-others.html">Others</a>
              </div> -->
            </div>
            <div class="nav-item">
              <a href="#" class="deploy-nav-sub-item">
                <i class="nav-icon fa fa-camera"></i>
                Gallery
              </a>
              <!-- <div class="nav-sub-item">
                <a href="gallery-wide.html">Thumbs Wide</a>
                <a href="gallery-round.html">Thumbs Round</a>
                <a href="gallery-square.html">Thumbs Square</a>
              </div> -->
            </div>
            <div class="nav-item">
              <a href="#" class="deploy-nav-sub-item">
                <i class="nav-icon fa fa-picture-o"></i>
                Portfolio
              </a>
              <!-- <div class="nav-sub-item">
                <a href="portfolio-adaptive.html">Adaptive</a>
                <a href="portfolio-one.html">One Column</a>
                <a href="portfolio-two.html">Two Columns</a>
                <a href="portfolio-wide.html">Wide Columns</a>
              </div> -->
            </div>
            <div class="nav-item">
              <a href="#" class="deploy-nav-sub-item">
                <i class="nav-icon fa fa-files-o"></i>
                Pages
              </a>
              <!-- <div class="nav-sub-item">
                <a href="page-soon.html">Soon Page</a>
                <a href="page-error.html">Error Page</a>
                <a href="page-profile.html">Profile Page</a>
                <a href="page-timeline.html">Timeline Page</a>
                <a href="page-updates.html">Updates Page</a>
              </div> -->
            </div>
            <div class="nav-item">
              <a href="contact.html">
                <i class="nav-icon fa fa-envelope"></i>
                Contact
              </a>
            </div>
            <div class="nav-item">
              <a id="closeMenu" href="#">
                <i class="nav-icon fa fa-times"></i>
                Close
              </a>
            </div>
          </div>
        </div>
        <div
          class="perspective_container"
          :class="{ 'close-menu closebar': closed }"
        >
          <div class="wrapper" style="top: 0px;">
            <div class="header-clear" style="color:red;text-align:left">
              <!-- <i class="fa fa-times"></i> -->
              <a href="#" id="pageLogo"
                ><img
                  src="../assets/CHILLI_CLUSTER.png"
                  alt="img"
                  style="width: 18%;height: auto;"
              /></a>
            </div>

            <div class="content-strip">
              <h4>Featured Project</h4>
              <p>Check and enjoy our featured item</p>
              <i class="fa fa-star-o"></i>
              <div class="overlay"></div>
              <img src="images/pictures/7w.jpg" alt="img" />
            </div>
            <div class="content">
              <div class="decoration"></div>
              <div class="container">
                <div class="one-half-responsive">
                  <img
                    src="images/mobile.png"
                    alt="img"
                    class="responsive-image"
                  />
                </div>
                <div class="one-half-responsive last-column">
                  <h3 class="center-if-mobile">Awesome project title</h3>
                  <em class="center-if-mobile small-text"
                    >Awesome project subtitle</em
                  >
                  <p class="center-if-mobile no-bottom">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent in quam mauris. Nam condimentum convallis lectus,
                    ac tempus massa eleifend sit amet. Ut nec orci ut urna
                    mollis elementum a et diam. Donec varius orci a convallis
                    convallis.
                  </p>
                </div>
              </div>
              <div class="decoration"></div>
            </div>

            <div class="footer-section">
              <p class="footer-text">
                Copyright 2014.<br />
                All rights reserved.
              </p>
              <div class="footer-icons">
                <a href="#" class="footer-facebook-icon"
                  ><i class="fa fa-facebook"></i
                ></a>
                <a href="#" class="footer-google-icon"
                  ><i class="fa fa-google-plus"></i
                ></a>
                <a href="#" class="footer-twitter-icon"
                  ><i class="fa fa-twitter"></i
                ></a>
                <a href="#" class="footer-up-icon"
                  ><i class="fa fa-angle-up"></i
                ></a>
              </div>
            </div>
            <!-- <sliderButtonSection /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sliderButtonSection from "./sliderButton.vue";
export default {
  name: "a",
  components() {
    sliderButtonSection;
  },
  data() {
    return {
      closed: false,
      show: 1,
      number: 1
    };
  },
  methods: {
    toggleMenu() {
      this.closed = !this.closed;
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body,
.perspective {
  width: 100%;
  height: 100%;
}
.perspective {
  overflow: visible;
  background: #aaa;
}
.perspective.modalview {
  position: fixed;
  -webkit-perspective: 1500px;
  perspective: 1500px;
}
.effect-airbnb {
  background: url(../assets/image-tem.jpg) rgba(0, 0, 0, 0.7);
  background-size: cover;
}
.header {
  -webkit-transform: translateZ(0);
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: 99999;
  top: 0;
  background-color: #fff;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}
.header {
  -webkit-transform: translateZ(0) translateX(0) rotateY(0deg);
  transform: translateZ(0) translateX(0) rotateY(0deg);
  transition: all 300ms ease;
  overflow: scroll;
  overflow-x: hidden;
  opacity: 1;
}
//********if we want to hide header then un comment this css *******
.animate .header {
  // -webkit-transform: translateZ(0) translateX(0) translateY(-60px);
  // transform: translateZ(0) translateX(0) translateY(-60px);
  // opacity: 0.5;
  background: transparent;
  transition: all 300ms ease;
  border-bottom: none;
  #pageLogo {
    opacity: 0;
    transform: translateZ(0) translateX(0) translateY(-60px);
  }
}
.outer-nav {
  position: absolute;
  height: auto;
  top: 51%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  overflow: scroll;
  overflow-x: hidden;
  width: 250px;
  height: 71%;
  transition: all 500ms ease;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.perspective_container {
  background: #fff;
  min-height: 100%;
  position: relative;
  outline: 1px solid transparent;
  z-index: 10;
  -webkit-transform: translateZ(0) translateX(0) rotateY(0deg);
  transform: translateZ(0) translateX(0) rotateY(0deg);
}
.modalview .perspective_container {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.effect-airbnb.animate .perspective_container {
  /* -webkit-transform: translateZ(-100px) translateX(65%) rotateY(-45deg); */
  transform: translateZ(-100px) translateX(65%) rotateY(-45deg);
}
.effect-airbnb.animate .perspective_container .close-menu .closebar {
  transform: translateZ(0) translateX(0) rotateY(0deg);
}
.effect-airbnb .perspective_container {
  // -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  // -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.wrapper {
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
}
.modalview .wrapper {
  -webkit-transform: translateZ(-1px);
}
.animate .header-clear {
  opacity: 1;
  transition: all 400ms ease;
}
.header-clear {
  height: 60px;
  opacity: 0;
  transition: all 400ms ease;
}
.animate .perspective_container::after {
  opacity: 1;
  height: 101%;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.perspective_container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.2);
  -webkit-transition: opacity 0.4s, height 0s 0.4s;
  transition: opacity 0.4s, height 0s 0.4s;
}
a {
  font-size: 25px;
  color: white;
  // color: red;
  text-decoration: none;
  background-color: transparent;
}
//Menu bar
#webapp_cover {
  position: absolute;
  top: 95%;
  left: 25px;
  width: 30px;
  // margin: 0 auto;
  // margin: 20px;
  // padding: 120px 400px;
  // background-color: white;
  transform: translateY(-50%) scale(2);
}

#menu_button {
  width: 22px;
  overflow: hidden;
}

#menu_checkbox {
  display: none;
}

#menu_label {
  position: relative;
  display: block;
  height: 52px;
  cursor: pointer;
}

#menu_label:before,
#menu_label:after,
#menu_text_bar {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: red;
}

#menu_label:before,
#menu_label:after {
  content: "";
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
}

#menu_label:before {
  top: 16px;
}

#menu_label:after {
  top: 20px;
}

#menu_text_bar {
  top: 24px;
}

#menu_text_bar:before {
  content: "MENU";
  // content: "HITs";
  position: absolute;
  top: 16px;
  right: 0;
  left: 0;
  color: red;
  font-size: 7px;
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
//menu Bar end
</style>
