<template>
  <div class="before-after-section">
    <div class="container">
      <div class="row">
        <header class="col-md-6 col-md-offset-3">
          <div class="text-center">
            <h2>Before After Triangle</h2>
            <div class="delimiter"><div></div></div>
            <p class="section-entry">
              The comments of some of our customers 100% satisfied with the
              tinished Projects ma and high quality and on time
            </p>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.before-after-section {
  margin: 200px 300px;
}
.h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #313131;
  margin: 0;
}
.delimiter {
  position: relative;
  display: block;
  margin: 25px auto 20px;
  width: 1px;
  height: 2px;
}
.delimiter:before,
.delimiter:after {
  content: "";
  position: absolute;
  top: 0;
  width: 70px;
  height: 2px;
  background-color: #dda01f;
}
.delimiter:before {
  left: 15px;
}
.delimiter:after {
  right: 15px;
}
.delimiter div {
  position: relative;
}
.delimiter div:before,
.delimiter div:after {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -5px;
  width: 10px;
  height: 10px;
  border: 1px solid #dda01f;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.delimiter div:before {
  left: -7px;
}
.delimiter div:after {
  right: -7px;
}
</style>
