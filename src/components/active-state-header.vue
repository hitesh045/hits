<template>
  <div>
    <!-- after hiding the app.js header, see the real effects-->
    <nav>
      <div class="nav-container col-12">
        <p>Work In Progress</p>
        <ul>
          <li><a id="s1" href="#1">Home</a></li>
          <li><a id="s2" href="#2">Section 2</a></li>
          <li><a id="s3" href="#3">Section 3</a></li>
          <li><a id="s4" href="#4">Section 4</a></li>
        </ul>
      </div>
    </nav>

    <section id="1" class="home"><h1>Home</h1></section>
    <section id="2"><h1>Section 2</h1></section>
    <section id="3"><h1>Section 3</h1></section>
    <section id="4"><h1>Section 4</h1></section>

    <footer>
      <h1>Thanks for Viewing!</h1>
      <h3>Any comments or suggestions are appreciated.</h3>
      <p>@supersarap</p>
      <p>troyslaten.net</p>
    </footer>
    <a id="toTop" href="#1"><div class="to-top"></div></a>
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
        document.documentElement.scrollTop == "0" ||
        document.body.scrollTop == "0"
      ) {
        document.getElementById("s1").style.color = "rgba(0,0,0,0.9)";
        if (
          document.documentElement.scrollTop > "350" ||
          document.body.scrollTop > "350"
        ) {
          document.getElementById("s2").style.color = "rgba(0,0,0,0.9)";
          document.getElementById("s1").style.color = "white";
          if (
            document.documentElement.scrollTop > "650" ||
            document.body.scrollTop > "650"
          ) {
            document.getElementById("s3").style.color = "rgba(0,0,0,0.9)";
            document.getElementById("s2").style.color = "white";
            document.getElementById("s1").style.color = "white";
            if (
              document.documentElement.scrollTop > "850" ||
              document.body.scrollTop > "850"
            ) {
              document.getElementById("s4").style.color = "rgba(0,0,0,0.9)";
              document.getElementById("s2").style.color = "white";
              document.getElementById("s1").style.color = "white";
              document.getElementById("s3").style.color = "white";
            } else {
              // document.getElementById("s1").style.color = "white";
              // document.getElementById("s2").style.color = "white";
              // document.getElementById("s3").style.color = "white";
              document.getElementById("s4").style.color = "white";
              document.getElementById("s5").style.color = "white";
            }
          } else {
            // document.getElementById("s1").style.color = "white";
            // document.getElementById("s2").style.color = "white";
            document.getElementById("s3").style.color = "white";
            document.getElementById("s4").style.color = "white";
            document.getElementById("s5").style.color = "white";
          }
        } else {
          // document.getElementById("s1").style.color = "white";
          document.getElementById("s2").style.color = "white";
          document.getElementById("s3").style.color = "white";
          document.getElementById("s4").style.color = "white";
          document.getElementById("s5").style.color = "white";
        }
      } else {
        document.getElementById("s1").style.color = "white";
        document.getElementById("s2").style.color = "white";
        document.getElementById("s3").style.color = "white";
        document.getElementById("s4").style.color = "white";
        document.getElementById("s5").style.color = "white";
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald);

* {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Oswald", sans-serif;
}

h1 {
  font-size: 4em;
  color: #16a085;
  letter-spacing: -2px;
}
nav {
  width: 100%;
  background-color: #1abc9c;
  position: fixed;
  top: 0;
}

.nav-container {
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}
.nav-container ul li {
  list-style: none;
  display: inline-block;
  margin: 0 10px;
}
.nav-container ul li a {
  padding: 8px 0;
  color: #ecf0f1;
  font-size: 1.3em;
  text-decoration: none;

  transition: all 0.3s ease;
}
.nav-container ul li a:hover {
  color: #16a085;
}
.active {
  border-bottom: 2px solid #ecf0f1;
}

section {
  width: 100%;
  padding: 50px;
  background-color: #ecf0f1;
  border-bottom: 1px solid #ccc;
  height: 300px;
  text-align: center;
}
section:nth-child(1) {
  margin-top: 100px;
}
.home {
  margin-top: 65px;
}
.col-12 {
  width: 1024px;
}

footer {
  height: 500px;
  width: 100%;
  padding: 50px;
  background-color: #bdc3c7;
  text-align: center;
}
footer h3 {
  color: #333;
  margin-bottom: 10px;
}
footer p {
  color: #ecf0f1;
}
footer a:hover {
  color: #333;
}

.to-top {
  padding: 20px;
  /*background-color: #bdc3c7;*/
  background-color: #bdc3c7;
  width: 60px;
  height: 60px;
  float: right;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 100px;
  margin-bottom: 25px;
  opacity: 0;

  transition: all 0.8s ease;
}
.to-top:hover {
  box-shadow: 0 0 10px #333;
}
.to-top:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 0;
  height: 0;
  position: relative;
  right: 4px;
  bottom: 2px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 20px solid #16a085;
}

.visible {
  opacity: 1;
}
</style>
