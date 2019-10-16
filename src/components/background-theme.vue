<template>
  <div>
    <section
      id="get-start"
      class="get-start masked text-white text-center"
      data-stellar-background-ratio="0.4"
      style="background-position: 50% -42.075px;"
    >
      <div class="container rel-1">
        <h2
          class="promo-title text-white wow fadeInDown"
          style="visibility: visible; animation-name: fadeInDown;"
        >
          Unique experience
        </h2>
        <div
          class="promo-subtitle wow fadeInUp"
          style="visibility: visible; animation-name: fadeInUp;"
        >
          <p>Awesome Theme for Wordpress</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-xs-12"
            v-for="item in imageContent"
            v-bind:key="item.index"
          >
            <div class="card">
              <div class="cardTop"></div>
              <div class="cardBottom">
                <div class="cardText">
                  <!--       Title and description will always show -->
                  <h3 class="cardTitle">Title</h3>
                  <h4 class="cardInfo">Short Description</h4>
                  <!--       Only visibile when parent element is hovered over -->
                  <div class="cardHoverText">
                    Lorem Ipsum
                    <ul>
                      <li>What is Lorem Ipsum?</li>
                      <li>
                        rambled it to make a type specimen book. It has survived
                      </li>
                      <li>
                        centuries, but also the leap into electronic
                        typesettingessent
                      </li>
                    </ul>
                  </div>
                  <!--       Only visibile when parent element is hovered over -->
                </div>
              </div>
            </div>
          </div>
          <div class="grid">
            <figure class="effect-sadie">
              <img
                src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg"
                alt="img02"
              />
              <figcaption>
                <h2>Holy <span>Sadie</span></h2>
                <p>
                  Sadie never took her eyes off me. <br />She had a dark soul.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure class="effect-sadie">
              <img
                src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
                alt="img14"
              />
              <figcaption>
                <h2>Holy <span>Sadie</span></h2>
                <p>
                  Sadie never took her eyes off me. <br />She had a dark soul.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import watchImage from "@/assets/image-tem.jpg";
export default {
  data() {
    return {
      imageContent: [
        {
          image: watchImage
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.get-start {
  padding: 15% 0;
  background: url(../assets/main-desktop.jpg) 50% no-repeat fixed;
  background-size: cover;
}
.masked {
  position: relative;
}
.text-white {
  color: #fff;
}
.text-center {
  text-align: center;
}
.get-start.masked:before {
  background: rgba(44, 44, 44, 0.8);
}
.masked:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 49, 49, 0.9);
}
.rel-1 {
  position: relative;
  z-index: 1;
}
.promo-title {
  font-size: 80px;
  line-height: 1.1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.promo-subtitle {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 300;
}
.btn-red .flip-front {
  background-color: #fa4951;
}
.card {
  background: white;
  // margin-top: 40px;
  height: 400px;
  // width: 25%;
  transition: 0.6s all ease;
  // margin-left: auto;
  // margin-right: auto;
  /* I used background url to allow me to change the height and width without needing extra css */
  .cardTop {
    transition: 0.4s all ease;
    height: 65%;
    background: url("https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg")
      no-repeat;
  }
  .cardBottom {
    height: 35%;
    text-wrap: normal;
    transition: 0.4s all ease;
    .cardText {
      min-height: 100%;
      padding: 20px;
      .cardTitle {
        font-size: 24px;
        font-weight: 700;
      }
      .cardInfo {
        padding-top: 10px;
        font-size: 18px;
        font-weight: 500;
        color: orange;
      }
      /* Hidding the entire so anything we put in will only show on hover */

      .cardHoverText {
        visibility: hidden;
      }
    }
  }
}
/* Hover affects */

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}
/* Using className + hover followed by child element allows you to change child elements when parent is hovered */

.card:hover .cardHoverText {
  visibility: visible;
  transition: 0.4s all ease;
  transition-delay: 0.1999s;
}

.card:hover .cardBottom {
  transition: 0.4s all ease;
  height: 65%;
  opacity: 1;
}

.card:hover .cardTop {
  height: 35%;
  opacity: 0.8;
  transition: 0.4s all ease;
}
.grid {
  position: relative;
  margin: 0 auto;
  padding: 1em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
  figure {
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    min-width: 320px;
    max-width: 480px;
    max-height: 360px;
    width: 48%;
    background: #3085a3;
    text-align: center;
    cursor: pointer;
    img {
      position: relative;
      display: block;
      min-height: 100%;
      max-width: 100%;
      opacity: 0.8;
    }
    figcaption {
      padding: 2em;
      color: #fff;
      text-transform: uppercase;
      font-size: 1.25em;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  }
}
.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/*---------------*/
/***** Sadie *****/
/*---------------*/

figure.effect-sadie figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(
    top,
    rgba(72, 76, 97, 0) 0%,
    rgba(72, 76, 97, 0.8) 75%
  );
  background: linear-gradient(
    to bottom,
    rgba(72, 76, 97, 0) 0%,
    rgba(72, 76, 97, 0.8) 75%
  );
  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-sadie h2 {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #484c61;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-sadie figcaption::before,
figure.effect-sadie p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-sadie:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
}

figure.effect-sadie:hover figcaption::before,
figure.effect-sadie:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
