<template>
  <div class="about">
    <h1 class="cccc">This is an about page</h1>
    <div
      data-quickedit-entity-id="paragraph/10"
      class="paragraph blockquote blockquote--default"
      data-quickedit-entity-instance-id="0"
    >
      <div class="container">
        <blockquote class="bg-light text-center blockquote-inner">
          <div
            data-quickedit-field-id="paragraph/10/field_text/en/default"
            class="field field--hidden blockquote__field-text"
          >
            <p>
              Let’s innovate together! Launch products, shape data, and connect
              customers using our broad suite of APIs. Join our community and
              get started today on your path to the next level of business
              success.
            </p>
          </div>

          <footer class="blockquote-footer mt-4">
            <cite class="blockquote__source"
              >Hitesh Chaudhari, Wohlig Technology, Mumbai</cite
            >
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
blockquote {
  font-size: 1.5rem;
  padding: 3.75rem 7.75rem;
}
.blockquote-inner {
  position: relative;
}
.blockquote-inner::before,
.blockquote-inner::after {
  content: " ";
  display: block;
  position: absolute;
  // background-color: red;
  height: 64px;
  width: 71px;
  // z-index: 999;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  // left: 15px;
  // top: 15px;
}
.blockquote-inner::before {
  left: 31px;
  top: 22px;
  background-image: url("../assets/blockquote-1.png");
}
.blockquote-inner::after {
  bottom: 24px;
  right: 27px;
  background-image: url("../assets/blockquote-2.png");
}
</style>
