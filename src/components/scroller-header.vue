<template>
  <div onscroll="myfunction()">
    <!-- <nav id="navbar" class="mainScroll">
      <span>Hello, It's me</span>
      <button>Pickles!</button>
    </nav> -->
    <div class="background pb-5 ">
      <nav
        class="navbar navbar-expand-lg navbar-togglable navbar-dark fixed-top "
        id="mainnav"
      >
        <div class="container ">
          <a class="navbar-brand" href="#" id="navh">Navbar</a>

          <div class="d-flex flex-row mr-auto ">
            <div class=" m-2 header-icon">
              <a href="#" class="text-white border-left"> </a>
            </div>
            <div class=" m-2 header-icon">
              <a href="#" class=" ">
                <i class="fab fa-github text-white"></i>
              </a>
            </div>
            <div class=" m-2 header-icon">
              <a href="#" class="text-white">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class=" m-2 header-icon">
              <a href="#" class="text-white">
                <i class="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>

          <!--
          <ul class="navbar-nav mr-auto  ">
            <li class="nav-item ">
              <a href="#" class="nav-link ">
                <i class="fab fa-github text-white"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fab fa-instagram text-white"></i>
              </a>
            </li>
          </ul> -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse " id="navbarCollapse">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarWelcome"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarWelcome">
                  <a class="dropdown-item  active " href="#">
                    one
                  </a>
                  <a class="dropdown-item " href="#">
                    two
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarLandings"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Landings
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarLandings">
                  <a class="dropdown-item " href="#">
                    one
                  </a>
                  <a class="dropdown-item " href="#">
                    two
                  </a>
                  <a class="dropdown-item " href="#">
                    three
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarPages"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarComponents"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Components
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarComponents">
                  <a class="dropdown-item " href="#">
                    Theme
                  </a>
                  <a class="dropdown-item " href="#">
                    Bootstrap
                  </a>
                </div>
              </li>
              <li class="nav-item ">
                <a href="documentation.html" class="nav-link text-white">
                  Documentation
                </a>
              </li>
              <!-- <li class="nav-item ">
              <a href="#" class="text-white nav-link border-right mt-3">
              </a>
            </li> -->

              <li class="nav-item">
                <a href="#" target="_blank" class="nav-link text-white">
                  Purchase now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- ---------------------- -->
      <div class="container bg-image">
        <div class="row justify-content-center ">
          <div class="col-md-8">
            <div class="text-center text-white">
              <div class="pt-5">
                <p class="pt-5">BY SIMPLEQADE</p>
              </div>
              <div class="pt-3">
                <p class="display-4 d-block text-waight-bold">
                  Landing pages for any occasion
                </p>
              </div>
              <p class="pt-3">
                Incline is set of landing and support pages aimed at helping
                companies promote new products and business launches.
              </p>
              <div class="pt-3">
                <button class="btn btn-outline-warning text-white">
                  <div class="small">PURCHASE NOW</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop > "150" ||
        document.body.scrollTop > "150"
      ) {
        document.getElementById("mainnav").style.background = "rgba(0,0,0,0.9)";
        document.getElementById("navh").style.display = "none";
        document.getElementById("mainnav").style.paddingTop = "0px";
        document.getElementById("mainnav").style.transition = "background 0.5s";
        document.getElementById("mainnav").style.transition = "all 0.5s";
      } else {
        document.getElementById("navh").style.display = "block";
        document.getElementById("mainnav").style.background = "";
        document.getElementById("mainnav").style.paddingTop = "5px";
        document.getElementById("mainnav").style.transition = "background 0.5s";
        document.getElementById("mainnav").style.transition = "all 0.5s";
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.bg-image {
  background: url("../assets/main-desktop.jpg") rgba(0, 0, 0, 0.61);
}
html {
  position: relative;
  top: 0;
  left: 0;
  max-width: 100vw;
  min-height: 200vh;
  margin: 0px;
  padding: 0px;
  border: 0px;
}
body {
  padding: 1.7vmin;
  font-size: 16px;
  font-family: sans, sans-serif;
  color: #333;
}

a {
  color: inherit;
  font-style: italic;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 3em;
  width: 100%;
  background-color: #eee;
  box-sizing: border-box;
  padding: 12px 18px;
  box-shadow: 0px 4px 7px #777;
  transition: background-color 0.4s ease-out;
}

nav span {
  font-weight: 600;
  letter-spacing: 0.085em;
}

nav button {
  position: absolute;
  top: 0;
  transform: translateY(50%);
  right: 0;
  min-height: 1.5em;
  min-width: 80px;
  background-color: #eee;
  color: #222;
  border: 0px;
  border-radius: 2px;
  margin-right: 18px;
  text-transform: uppercase;
}

nav.scroll {
  background-color: #a1572f;
  color: #eef;
}
nav.mainScroll {
  background-color: #eee;
  color: #222;
}
body > header {
  margin-top: 4.7em;
}
</style>
