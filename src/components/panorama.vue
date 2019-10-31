<template>
  <div>
    <!-- First Panorama-->
    <!-- For this 3D technique script tag is required -->
    <a-scene>
      <a-assets>
        <img
          id="panorama"
          src="https://c1.staticflickr.com/5/4302/35137573294_1287bfd0ae_k.jpg"
          crossorigin
        />
      </a-assets>
      <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
    </a-scene>
    <!-- First Panorama End-->
    <!-- Second Panorama-->

    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://farm5.staticflickr.com/4051/4524005292_5c0c99cffa_o.jpg"
        />
      </a-assets>
      <a-sky src="#sky" rotation="0 -90 0"></a-sky>
    </a-scene>
    <!-- Second Panorama End-->
  </div>
</template>
<style lang="scss" scoped></style>
