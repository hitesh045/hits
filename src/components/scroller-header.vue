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
      <div class="container">
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
    <header>
      <h1>Ode to a Large Tuna in the Market</h1>
      <h2>By Pablo Neruda</h2>
    </header>
    <article>
      <p>
        Here,<br />among the market vegetables,<br />this torpedo<br />from the
        ocean<br />depths,<br />a missile<br />that swam,<br />now<br />lying in
        front of me<br />dead.
      </p>
      <p id="newId">
        Surrounded<br />by the earth's green froth<br />—these lettuces,<br />bunches
        of carrots—<br />only you<br />lived through<br />the sea's truth,
        survived<br />the unknown, the<br />unfathomable<br />darkness, the
        depths<br />of the sea,<br />the great<br />abyss,<br /><em
          >le grand abîme</em
        >,<br />only you:<br />varnished<br />black-pitched<br />witness<br />to
        that deepest night.
      </p>
      <p>
        Only you:<br />dark bullet<br />barreled <br />from the depths,<br />carrying<br />only<br />your<br />one
        wound,<br />but resurgent,<br />always renewed,<br />locked into the
        current,<br />fins fletched<br />like wings<br />in the torrent,<br />in
        the coursing<br />of<br />the<br />underwater<br />dark,<br />like a
        grieving arrow,<br />sea-javelin, a nerveless<br />oiled harpoon.
      </p>
      <p>
        Dead<br />in front of me,<br />catafalqued king<br />of my own ocean;<br />once<br />sappy
        as a sprung fir<br />in the green turmoil,<br />once seed<br />to
        sea-quake,<br />tidal wave, now<br />simply<br />dead remains;<br />in
        the whole market<br />yours<br />was the only shape left<br />with
        purpose or direction<br />in this<br />jumbled ruin<br />of nature;<br />you
        are<br />a solitary man of war<br />among these frail vegetables,<br />your
        flanks and prow<br />black<br />and slippery<br />as if you were
        still<br />a well-oiled ship of the wind,<br />the only<br />true<br />machine<br />of
        the sea: unflawed,<br />undefiled,<br />navigating now<br />the waters
        of death.
      </p>
    </article>
    <footer>
      Extracted from
      <a
        href="https://www.poetryfoundation.org/poetrymagazine/poems/detail/49322"
        >Poetry Foundation</a
      >
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // window.onscroll = () => {
    //   const nav = document.querySelector("#navbar");
    //   if (this.scrollY > 30) {
    //     nav.className = "mainScroll";
    //   } else {
    //     console.log("hdhdh", this.$route.params);
    //     nav.className = "scroll";
    //   }
    // };

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
