<template>
  <div class="container">
    <h1>Solve all the tasks!</h1>
    <img alt="Vue logo" class="logo" src="@/assets/home.jpg" width="500" height="500" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

img {
  height: 50vh;
  width: auto;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 3rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  img {
    height: auto;
    width: 50%;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem;
  }
}
</style>
