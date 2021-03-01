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
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  width: 30%;
  height: 550px;
  background-color: #cacaca;
  color: #2f2f2f;
}
.img {
  display: flex;
  justify-content: center;
  height: 40%;
  width: 100%;
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
button {
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  background-color: #cacaca;
  border: 1px solid red;
  text-decoration: none;
}
</style>
