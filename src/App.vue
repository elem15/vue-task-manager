<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
        <RouterLink to="/new-task">New task</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer-link">
      <span>made by elem15</span><a href="https://github.com/elem15"><img src="./assets/github.svg" alt="github"
          width="40"></a>
    </div>
    <div class="footer-link">
      <span>especially for &nbsp;</span><a href="https://quick-deal.ru"><img
          src="https://quick-deal.ru/favicon-landing.ico" alt="quick-deal" width="40"></a>
    </div>
  </footer>
</template>

<style scoped>
header {
  max-height: 100vh;
}

footer {
  position: fixed;
  bottom: 0;
  width: 90vw;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer-link {
  display: flex;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1.3rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: nowrap;
  }

  nav {
    font-size: 1.5rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
