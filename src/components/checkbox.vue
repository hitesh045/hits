<template>
  <div class="container">
    <div class="checkbox-content">
      <input id="toggle" type="checkbox" />
      <label for="toggle"></label>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
body {
  align-items: center;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
}

label {
  background: white;
  border-radius: 12px;
  box-shadow: 0px 50px 20px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  height: 50px;
  margin-top: 50px;
  padding: 8px;
  position: relative;
  transform: scale(2);
  transition: transform 300ms ease, box-shadow 300ms ease;
  width: 116px;
}

input {
  display: none;
}

label:after {
  animation: move-left 400ms;
  background: #e2e2e2
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 24 24'%3E%3Cpath stroke='#E2E2E2' fill='#E2E2E2' stroke-linecap='round' d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'/%3E%3C/svg%3E")
    no-repeat center;
  border-radius: 12px;
  content: "";
  height: 50px;
  left: 8px;
  outline: none;
  position: absolute;
  transition: background 100ms linear;
  width: 50px;
}

label:active {
  box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.8);
}

input:checked + label:after {
  animation: move-right 400ms;
  background: #6eb54e
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 24 24'%3E%3Cpath stroke='white' fill='white' stroke-linecap='round' d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'/%3E%3C/svg%3E")
    no-repeat center;
  left: 72px;
}

/* Animation */

@keyframes move-right {
  0% {
    left: 8px;
  }
  75% {
    left: 78px;
  }
  100% {
    left: 72px;
  }
}

@keyframes move-left {
  0% {
    left: 72px;
  }
  75% {
    left: 2px;
  }
  100% {
    left: 8px;
  }
}
</style>
