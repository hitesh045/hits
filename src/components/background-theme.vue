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
        <div class="inline-buttons">
          <div class="row-base">
            <a
              href="#"
              class="col-base btn-lead btn-red btn wow fadeInLeft"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <span class="text">Get started</span>
              <span class="flip-front">Get started</span>
              <span class="flip-back">Start now!</span>
            </a>
            <a
              href="#"
              class="col-base btn-lead btn-b-white btn wow fadeInRight"
              style="visibility: visible; animation-name: fadeInRight;"
            >
              <span class="text">Purchase now</span>
              <span class="flip-front">Purchase now</span>
              <span class="flip-back">Yeaah!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
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
.get-start .inline-buttons {
  margin-top: 50px;
}
.row-base {
  margin-top: -30px;
}
.btn {
  position: relative;
  display: inline-block;
  border: 0;
  background: none;
  border-radius: 0;
  padding: 20px 50px 0;
  height: 50px;
  font-size: 14px;
  line-height: 1;
  color: #313131;
  background-color: #fa4951;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.btn-lead {
  font-size: 16px;
  padding-top: 17px;
}
.col-base {
  margin-top: 30px;
}
.btn-red .flip-front {
  background-color: #fa4951;
}
.inline-buttons .btn {
  margin-left: 25px;
}
</style>
