<template>
  <div class="main-content">
    <div class="container">
      <div v-for="data in dataContent" v-bind:key="data.index">
        <div
          :data-aos="data.fadeDirection"
          data-aos-anchor-placement="top-center"
        >
          <div class="box" :class="data.productClass">
            <div class="content">
              <h2>
                {{ data.number }}
              </h2>
              <h3>{{ data.maintitle }}</h3>
              <p>{{ data.content }}</p>
              <a href="#">{{ data.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="box">
        <div class="content">
          <h2>
            02
          </h2>
          <h3>Service two</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h2>
            03
          </h2>
          <h3>Service three</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h2>
            04
          </h2>
          <h3>Service four</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#">Read More</a>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataContent: [
        {
          number: "01",
          maintitle: "Service One",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          buttonText: "Read More",
          productClass: "first-color",
          fadeDirection: "fade-up"
        },
        {
          number: "02",
          maintitle: "Service Two",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          buttonText: "Read More",
          productClass: "second-color",
          fadeDirection: "fade-right"
        },
        {
          number: "03",
          maintitle: "Service Three",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          buttonText: "Read More",
          productClass: "third-color",
          fadeDirection: "fade-down"
        },
        {
          number: "04",
          maintitle: "Service Four",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          buttonText: "Read More",
          productClass: "four-color",
          fadeDirection: "fade-left"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100vh;
  background-color: #060c21;
  .container {
    position: relative;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 0 40px;
    z-index: 1;
    .box {
      position: relative;
      height: 400px;
      background-color: #060c21;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;
      .content {
        position: relative;
        padding: 20px;
        h2 {
          position: absolute;
          right: 20px;
          top: 50px;
          right: 20px;
          margin: 0;
          padding: 0;
          font-size: 10em;
          color: rgba(255, 255, 255, 0.05);
          transition: 0.5s;
        }
        h3 {
          margin: 0 0 10px;
          padding: 0;
          font-size: 24px;
          font-weight: 500;
          color: #fff;
        }
        p {
          margin: 0;
          padding: 0;
          color: #fff;
          font-size: 16px;
        }
        a {
          position: relative;
          margin: 0;
          padding: 10px 20px;
          text-decoration: none;
          border: 1px solid #fff;
          color: #fff;
          display: inline-block;
          transition: 0.5s;
          transform: translateY(-40px);
          opacity: 0;
          visibility: hidden;
        }
      }
    }
    .box:before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: #fff;
      transform: skew(2deg, 2deg);
      z-index: -1;
    }
    // h2:nth-child(1) {
    //   color: #ff0057(255, 255, 255, 0.05);
    // }
    // .box:nth-child(1):before {
    //   background: linear-gradient(315deg, #ff0057, #e64a19);
    // }
    // .box:nth-child(2):before {
    //   background: linear-gradient(315deg, #89ff00, #00bcd4);
    // }
    // .box:nth-child(3):before {
    //   background: linear-gradient(315deg, #e91e63, #5d02ff);
    // }
    // .box:nth-child(4):before {
    //   background: linear-gradient(315deg, #ff0000, #ffc107);
    // }
    .box {
      &.first-color:before {
        background: linear-gradient(315deg, #ff0057, #e64a19);
      }
      &.second-color:before {
        background: linear-gradient(315deg, #89ff00, #00bcd4);
      }
      &.third-color:before {
        background: linear-gradient(315deg, #e91e63, #5d02ff);
      }
      &.four-color:before {
        background: linear-gradient(315deg, #ff0000, #ffc107);
      }
    }
    .box:hover .content h2 {
      top: -50px;
    }
    .box:hover .content a {
      // top: -50px;
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    .box .content a:hover {
      color: #000;
      background-color: #fff;
    }
  }
}
</style>
