<template>
  <footer>
    <ul>
      <li class="nav-link">
        <a class="underline" href="https://www.linkedin.com/in/curthouse/"
          >LinkedIn</a
        >
      </li>
      <li class="nav-link">
        <a class="underline" href="https://github.com/Neurum">Github</a>
      </li>
    </ul>
    <h3>&copy; Curt House. All rights reserved.</h3>
    <a href="/" class="logo">
      <span class="logo-text">CH</span>
    </a>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2rem;
}

h3 {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
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
  font-size: 1.2rem;
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
