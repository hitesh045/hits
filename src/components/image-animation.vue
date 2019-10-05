<template>
  <div>
    <section aria-label="works" class="no-top whitepage" id="projects">
      <div class="container-fluid">
        <div class="text">
          <h1 class="text-heading">Image Animation Test</h1>
        </div>
        <div class="row">
          <div
            class="col-md-4 col-xs-12 p-0 m-0"
            v-for="item in items"
            v-bind:key="item.name"
          >
            <div class="gallery-grid">
              <div class="hovereffect-color">
                <b-img
                  v-bind:src="item.image"
                  alt="img"
                  class="img-responsive"
                />

                <div class="overlay">
                  <div class="v-align wrap">
                    <span class="icon">
                      <a
                        class="big-youtube"
                        href="https://www.youtube.com/watch?v=fafEHMnFe3g"
                      >
                        <i class="fa fa-search"></i>
                      </a>

                      <a
                        href="http://shtheme.net/demosd/concreate/?projects=co-working-room-3"
                      >
                        <i class="fa fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: "img1",
          image:
            "http://shtheme.net/demosd/concreate/wp-content/uploads/2018/12/img1-2.jpg"
        },
        {
          name: "img1",
          image:
            "http://shtheme.net/demosd/concreate/wp-content/uploads/2018/12/img1-2.jpg"
        },
        {
          name: "img1",
          image:
            "http://shtheme.net/demosd/concreate/wp-content/uploads/2018/12/img1-2.jpg"
        },
        {
          name: "img1",
          image:
            "http://shtheme.net/demosd/concreate/wp-content/uploads/2018/12/img1-2.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.img-responsive {
  width: 100%;
}
.gallery-grid:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.gallery-grid .hovereffect-color .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
  opacity: 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.gallery-grid .hovereffect-color:hover .overlay {
  opacity: 1;
  bottom: 0;
}
.gallery-grid .hovereffect-color .overlay div {
  padding: 10%;
  height: 100%;
  font-size: 11pt;
  font-weight: 400;
  letter-spacing: 2px;
  color: #fff;
  background-color: rgba(221, 68, 37, 0.8);
}
.v-align {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.overlay div span {
  width: 100%;
  display: block;
  z-index: 1;
}
a:hover,
a:active {
  color: #dd4425;
  text-decoration: none;
  outline: 0;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.overlay div span.icon a:hover i {
  color: #fff;
  background: #111;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}
.text-heading {
  font-size: 3rem;
  // text-align: right;
  animation-name: bounce-right;
  animation-duration: 3.5s;
}
@keyframes bounce-right {
  0% {
    opacity: 0.2;
    transform: translateX(-200px);
  }
  50% {
    opacity: 0.7;
    transform: translateX(15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
