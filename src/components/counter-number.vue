<template>
  <div class="counter-data-section">
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-xs-12"
          v-for="data in dataContent"
          v-bind:key="data.index"
        >
          <div class="counter-number">
            <div class="block-18 text-left">
              <strong class="number" id="s1">
                <!--****** Vue number scroll pulgin is work only refresh page ****-->
                <!-- <vns :start="0" :end="data.number" :times="30" :speed="150" /> -->
                <span
                  class="numscroller"
                  data-min="1"
                  data-max="1000"
                  data-delay="5"
                  data-increment="10"
                  >1000</span
                >

                <!-- <animated-number
                  :value="value"
                  :formatValue="formatToPrice"
                  :round="no"
                  :duration="3000"
                /> -->
                <!-- <div id="counter">
                  <div
                    class="counter-value"
                    id="counter-value"
                    data-count="300"
                  >
                    0
                  </div>
                  <div
                    class="counter-value"
                    id="counter-value"
                    data-count="400"
                  >
                    100
                  </div>
                  <div
                    class="counter-value"
                    id="counter-value"
                    data-count="1500"
                  >
                    200
                  </div>
                </div> -->
              </strong>
              <strong>{{ data.name }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="jquery.min.js"></script>
<script src="jquery.numscroller-1.0.js"></script>
<script>
import vns from "vue-number-scroll";
// import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    vns
    // AnimatedNumber
  },
  data() {
    return {
      value: 1000,
      methods: {
        // formatToPrice(value) {
        //   return `R$ ${value.toFixed(2)}`;
        // }
      },
      // mounted() {
      //   var a = 0;
      //   window.onscroll = () => {
      //     var oTop =
      //       document.getElementById("counter").offset().top -
      //       window.innerHeight;

      //     if (a == 0 && window.scrollTop() > oTop) {
      //       document.getElementById("counter-value").each(function() {
      //         var $this = this,
      //           countTo = $this.attr("data-count");
      //         ({
      //           countNum: $this.text()
      //         }.animate(
      //           {
      //             countNum: countTo
      //           },

      //           {
      //             duration: 2000,
      //             easing: "swing",
      //             step: function() {
      //               $this.text(Math.floor(this.countNum));
      //             },
      //             complete: function() {
      //               $this.text(this.countNum);
      //               //alert('finished');
      //             }
      //           }
      //         ));
      //       });
      //       a = 1;
      //     }
      //   };
      // },
      // mounted() {
      //   window.onscroll = () => {
      //     if (
      //       document.documentElement.scrollTop == "0" ||
      //       document.body.scrollTop == "0"
      //     ) {
      //       document.getElementById("s1").style.opacity = "1";
      //     } else {
      //       document.getElementById("s1").style.opacity = "0";
      //     }
      //   };
      // },
      mounted() {
        window.onscroll = () => {
          $(".counter-count").each(function() {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text()
                },
                {
                  duration: 5000,
                  easing: "swing",
                  step: function(now) {
                    $(this).text(Math.ceil(now));
                  }
                }
              );
          });
        };
      },
      dataContent: [
        {
          name: "Projects Completed",
          number: "1000"
        },
        {
          name: "Lead Project",
          number: "879"
        },
        {
          name: "Awwards Received",
          number: "670"
        },
        {
          name: "Years of Experienced",
          number: "35"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.counter-data-section {
  padding: 15% 0;
  background: url(../assets/subscribe-bg.jpg) 50% no-repeat fixed;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .counter-number {
    background-color: white;
    .block-18 {
      padding: 20px;
      .number {
        font-weight: 600;
        font-size: 40px;
        color: #000000;
        display: block;
        position: relative;
      }
      .number:after {
        content: "";
        width: 20px;
        height: 20px;
      }
    }
  }
}
.counter-data-section:before {
  content: "";
  background: rgba(6, 12, 34, 0.6);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
</style>
