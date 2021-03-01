<template>
  <nav class="nav-container">
    <a href="/" class="logo">
      <span class="logo-text">CH</span>
    </a>
    <ul>
      <li class="nav-link"><router-link to="/">Home</router-link></li>
      <li class="nav-link">
        <router-link :to="{ name: Skills }">Skills</router-link>
      </li>
      <li class="nav-link">
        <router-link :to="{ name: Projects }">Projects</router-link>
      </li>
      <li class="nav-link">
        <router-link :to="{ name: About }">About</router-link>
      </li>
      <li class="nav-link">
        <router-link :to="{ name: Contact }">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

a.underline {
  position: relative;
}

a.underline:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #cacaca;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

a.underline:hover:before {
  visibility: visible;
  transform: scaleX(1);
}

li {
  list-style: none;
  padding-left: 4rem;
  font-size: 2rem;
}

.logo {
  width: 50px;
  height: 50px;
  border: 5px solid #cacaca;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;
  flex-shrink: 0;
}

.logo:hover {
  opacity: 1;
  transform: rotate(-90deg);
  transition: transform 0.4s ease-in-out;
}

.logo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: transform 0.4s ease-in-out;
  font-size: 1.3rem;
}

.logo:hover .logo-text {
  transform: translate(-50%, -50%) rotate(90deg);
  transition: transform 0.4s ease-in-out;
}
</style>
