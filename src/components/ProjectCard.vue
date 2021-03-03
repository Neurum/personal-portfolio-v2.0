<template>
  <div class="card">
    <div class="top">
      <div class="img">
        <img :src="require(`../assets/images/${project.img}.png`)" />
      </div>

      <h2>{{ project.title }}</h2>
      <p>{{ project.desc }}</p>
    </div>
    <div class="buttonDiv">
      <button>
        <router-link class="underline" :to="project.page"
          >Learn More</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  background-color: #cacaca;
  text-decoration: none;
  border: none;
  font-size: 2rem;
}
button a {
  text-decoration: none;
  color: #2f2f2f;
  cursor: pointer;
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
  background-color: #2f2f2f;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

a.underline:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
h2 {
  font: inherit;
  font-size: 3rem;
  color: #cacaca;
}
p {
  font-size: 1.5rem;
  width: 80%;
  text-align: center;
  color: #cacaca;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  width: 30%;
  height: 550px;
  background-color: #2f2f2f;
}
.img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 100%;
  background-color: #cacaca;
}
img {
  height: 80%;
}
.buttonDiv {
  width: 40%;
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  height: 80%;
  width: 100%;
}
</style>
