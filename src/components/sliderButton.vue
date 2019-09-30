<template>
  <div>
    <!-- Slide -->
    <section class="page-container" id="slide">
      <section class="section-container">
        <h4>Slide</h4>

        <!-- Horizontal Slide -->
        <div class="button-container button-slide-horizontal">
          <div class="slider slider-horizontal">
            <div class="button">
              <i class="fa fa-dribbble"></i>
            </div>
          </div>
        </div>

        <!-- Vertical Slide -->
        <div class="button-container button-slide-vertical">
          <div class="slider-vertical">
            <div class="button">
              <i class="fa fa-medium front"></i>
              <i class="back">Medium</i>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<style lang="scss" scoped>
/*** Import Fonts ***/
// @import url(https://fonts.googleapis.com/css?family=Lato:400, 300);

/*** Variables ***/
$Lato: "Lato", sans-serif;
$Open-sans: "Open Sans", sans-serif;
$dark-gray: #3c3c3c;
$light-gray: #a6a6a6;
$UIblue: #3cbbf7;
$UIred: #e74c3c;
$UIyellow: #f8e71c;
$UIgreen: #13bf11;
$dark-brown: #542900;

section.page-container {
  margin: auto;
  width: 90%;
  max-width: 800px;
  height: 100vh;
  position: relative;
  text-align: center;
}

#intro {
  max-width: 800px;

  .section-container {
    margin-top: 70px;
  }
}

.section-container {
  position: absolute;
  top: 45%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  text-align: center;

  h4 {
    font-size: 50px;
    font-weight: 300;
    color: #3c3c3c;
    margin-bottom: 30px;
  }
}

/*** General Button Styles ***/

.button-container {
  display: inline-block;
  margin: 10px 10px;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 2px;
  height: 45px;
  width: 200px;
  -webkit-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;

  .flipper {
    transition: all 0.5s ease-in-out;
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: relative;
  }
  .button {
    height: 45px;
    width: 200px;
    border-radius: 3px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-shadow: 1px 2px 4px -1px rgba(60, 60, 60, 0.64);
    box-shadow: 1px 2px 4px -1px rgba(60, 60, 60, 0.64);

    i.fa {
      color: white;
      font-size: 20px;
      margin: auto;
      text-shadow: 0.5px 1px 2px #3c3c3c;
    }

    &.front {
      z-index: 10;
    }

    &.back {
      color: white;
      font-size: 15px;
      text-transform: uppercase;
    }
  }
}

/* --------------------------------
			Slide
-------------------------------- */

.slider {
  i {
    transition: all 0.3s ease-in-out;

    &:before {
      transition: all 0.3s ease-in-out;
    }

    &:after {
      font-family: $Lato;
      color: white;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: none;
      content: "Dribbble";
      position: absolute;
      opacity: 0;
      top: 2.5px;
      transition: all 0.3s ease-in-out;
    }
  }
}

/*** Horizontal Slide ***/

.button-slide-horizontal {
  .button {
    background-image: linear-gradient(90deg, #ea4c89, #ee9b83);
  }

  i {
    position: relative;
    display: inline-block;
    transition: all 0.3s ease-in-out;

    &:before {
      transition: all 0.3s ease-in-out;
    }
  }

  &:hover i {
    padding-right: 100px;
  }

  &:hover i:before {
    opacity: 0;
  }
  &:hover i:after {
    opacity: 1;
  }
}

/*** Vertical Slide ***/

.button-slide-vertical {
  overflow: hidden;
  height: 45px;

  .button {
    background-image: linear-gradient(90deg, #1c84a6, #3cb371);
    overflow: hidden;
    height: 45px;
  }

  i {
    position: relative;
    margin: 0 !important;
    top: 10px;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  i.back {
    font-family: $Lato;
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: translateY(30px);
    opacity: 0;
  }

  &:hover i.front {
    transform: translateY(-30px);
    opacity: 0;
  }

  &:hover i.back {
    transform: translateY(-20px);
    opacity: 1;
  }
}
</style>
