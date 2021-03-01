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
      <button>Learn More</button>
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
  height: 70%;
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
