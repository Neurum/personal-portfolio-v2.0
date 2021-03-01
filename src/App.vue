<template>
  <div class="container">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #2f2f2f;
  color: lightgray;
  font-family: 'Muli', serif;
  font-weight: 700;
}

body::-webkit-scrollbar {
  width: 1.2rem;
}

body::-webkit-scrollbar-track {
  background: #2f2f2f;
}

body::-webkit-scrollbar-thumb {
  background: #cacaca;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding: 5.5rem;
}

.container {
  margin: 3rem 20rem;
  height: calc(100vh - 6rem);
}
</style>
