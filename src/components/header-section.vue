<template>
  <div class="header-section">
    <b-navbar toggleable="lg" type="dark" variant="info" sticky>
      <!-- Mobile-View Start -->
      <div class="d-flex pr-3 d-block d-sm-none d-none d-sm-block d-md-none">
        <b-navbar-brand
          to="/"
          class="mx-auto header-logo d-flex justify-content-between"
        >
          <b-img v-bind:src="Logo" alt="Heroes Deldinero" class="heroesLogo" />
        </b-navbar-brand>
        <div
          class="my-auto menuicon bt-menu"
          v-on:click="toggleMenu()"
          v-bind:class="{ closer: closed }"
        >
          <!-- <div class="m-auto hamlogo1"></div> -->
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar3"></span>
        </div>
        <!-- <div
          class="menu-circle visible-xs"
          ng-class="{'closer': showMenu == true}"
          ng-click="toggleMenu();"
        ></div> -->
      </div>
      <!-- Mobile-View End -->
      <!-- Desktop-View Start -->
      <div class="container">
        <b-collapse id="nav-collapse" class="header-info" is-nav>
          <b-navbar-nav class="section-link">
            <b-nav-item to="/service" class="registro-link mr-4" active
              >Service</b-nav-item
            >
            <b-nav-item to="/about" class="about-link mr-4"
              >About US</b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-brand to="/" class="mx-auto header-logo">
            <b-img v-bind:src="Logo" alt="Logo" class="heroesLogo" />
          </b-navbar-brand>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="login-link-section">
            <b-nav-form class="login-box">
              <b-nav-item to="/" class="login-link mr-4">login</b-nav-item>
            </b-nav-form>
            <div
              class="my-auto menuicon bt-menu"
              v-on:click="toggleMenu()"
              v-bind:class="{ closer: closed }"
            >
              <!-- <div class="m-auto hamlogo1"></div> -->
              <span class="bar bar1"></span>
              <span class="bar bar2"></span>
              <span class="bar bar3"></span>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <section
      class="sidebar-main-section"
      v-bind:class="{ 'close-menu': closed }"
    >
      <menu-section
        class="sidenav"
        :closed="closed"
        @changeClosed="closed = !closed"
      ></menu-section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      closed: false,
      // show: 1,
      number: 1
    };
  },
  methods: {
    toggleMenu: function() {
      this.closed = !this.closed;
    }
  }
};
</script>
<style lang="scss">
.header-section {
  .sticky-top {
    position: -webkit-fixed;
    position: fixed;
    width: 100%;
    // border-bottom: 1px solid $border-bottom-color;
  }
  .header-box {
    //height: 4rem;
    z-index: 6;
    padding: 0rem;

    .header-info {
      .header-logo {
        border-bottom: 2px solid transparent;
        .heroesLogo {
          width: 75%;
        }
      }
      .router-link-exact-active {
        // border-bottom: 1px solid $header-blue;
      }
      .section-link {
        .registro-link {
          // margin-bottom: -1px;
          border-bottom: 1px solid transparent;
          // .nav-link {
          //   color: white;
          //   font-size: 0.7rem;
          //   padding: 1.7rem 0;
          // }
          // .nav-link:hover {
          //   color: blue;
          // }
          // .router-link-exact-active {
          //   margin-bottom: -1px;
          //   border-bottom: 1px solid blue;
          //   color: blue;
          // }
        }
        .about-link {
          // margin-bottom: -1px;
          border-bottom: 1px solid transparent;
          .nav-link {
            color: white;
            font-size: 0.7rem;
            padding: 1.7rem 0;
          }
          .nav-link:hover {
            color: blue;
          }
          .router-link-exact-active {
            margin-bottom: -1px;
            border-bottom: 1px solid blue;
            color: blue;
          }
        }
      }
      .login-link-section {
        .login-box {
          .login-link {
            // margin-bottom: -1px;
            border-bottom: 1px solid transparent;

            // margin-top: 1px;
            .nav-link {
              color: white;
              font-size: 0.7rem;
              padding: 1.7rem 0;
              margin-right: 1rem;
            }
            .nav-link:hover {
              color: blue;
            }
            .router-link-exact-active {
              margin-bottom: -1px;
              border-bottom: 1px solid blue;
              color: blue;
            }
          }
        }
      }
    }
  }
  .menuicon {
    height: 30px;
    width: 30px;
    cursor: pointer;
    padding: 10px 0;
  }
  .hamlogo1 {
    height: 10px;
    width: 18px;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .menuicon:hover {
    .hamlogo1 {
      // color: #64686a;
      border-bottom: 2px solid blue;
      border-top: 2px solid blue;
      cursor: pointer;
    }
  }
  .menuicon:hover {
    .bar {
      // color: #64686a;
      background-color: blue;
      // border-top: 2px solid blue;
      cursor: pointer;
    }
  }
  .bar {
    background: linear-gradient(to right, black 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }
  .bar:nth-child(1):after {
    transition-delay: 0.1s;
    background-position: left bottom;
  }
  .bar:nth-child(2):after {
    transition-delay: 0.2s;
    background-position: left bottom;
  }
  .bar:nth-child(3):after {
    transition-delay: 0.3s;
    background-position: left bottom;
  }
  .bar:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #a6abab;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 1;
    transition: 0.3s;
  }
}
.sidebar-main-section {
  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: -2;
    top: 78px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    transition: all ease 300ms;
  }
  &.close-menu {
    &:before {
      opacity: 1;
      transition: all ease 300ms;
      z-index: 2;
    }
    .sidenav {
      transform: translateX(0%);
      transition: all ease 300ms;
    }
  }
  .sidenav {
    height: 100%;
    width: 46%;
    top: 75px;
    position: fixed;
    transform: translateX(100%);
    transition: all ease 300ms;
    z-index: 8;
    right: 0;
    // background-color: blue;
    background-color: #17a2b8;
    overflow-x: hidden;
  }
}
//mobile-responsive
@media only screen and (max-width: 600px) {
  .navbar-dark .navbar-brand {
    padding: 1rem;
  }
  .heroesLogo {
    width: 70%;
  }
  .header-section .menuicon {
    padding: 16px 0;
  }
  .navbar-dark .navbar-toggler {
    color: transparent;
    border-color: transparent;
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: transparent !important;
  }
}
.bar {
  display: block;
  height: 2px;
  width: 24px;
  background-color: white;
  margin: 5px auto;
  -webkit-transition: all 700ms ease;
  -o-transition: all 700ms ease;
  transition: all 700ms ease;
}
.closer {
  .bar1 {
    transform: rotate(45deg) translate(4px, 6px);
  }
  .bar2 {
    opacity: 0;
  }
  .bar3 {
    transform: rotate(-45deg) translate(4px, -6px);
  }
}
.bt-menu {
  min-width: 115px;
  height: 70px;
  border-right: 1px solid #e6eaea;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.bt-menu:hover {
  color: #64686a;
}
</style>
