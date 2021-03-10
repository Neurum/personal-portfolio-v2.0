<template>
  <div class="card">
    <div class="top">
      <div class="img">
        <img :src="require(`../assets/images/${project.img}.png`)" />
      </div>
      <div class="text">
        <h2 class="first-text">{{ project.title }}</h2>
        <p class="second-text">{{ project.desc }}</p>
      </div>
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
button:focus {
  outline-style: none;
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
  border-radius: 5px;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.7);
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
.first-text {
  animation: fadein 2s;
}
.second-text {
  animation: fadeintwo 2s;
}
.text {
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 1600px) {
  img {
    height: 70%;
  }
  button {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 1450px) {
  img {
    height: 60%;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 1300px) {
  img {
    height: 50%;
  }
}
@media screen and (max-width: 1200px) {
  img {
    height: 80%;
  }
  h2 {
    width: 50%;
  }
  p {
    margin-right: 1rem;
  }
  .img {
    width: 30%;
    margin-right: 3rem;
  }
  .card {
    flex-direction: row;
    width: 100%;
    padding: 0;
    height: 35%;
  }
  .top {
    flex-direction: row;
    padding: 0;
  }
  .buttonDiv {
    width: 15%;
  }
  .text {
    flex-direction: row;
    width: 70%;
  }
}
@media screen and (max-width: 750px) {
  img {
    width: 70%;
  }
}
@media screen and (max-width: 600px) {
  .text {
    flex-direction: column;
    height: 50%;
  }
  h2 {
    font-size: 2rem;
    width: 70%;
  }
  img {
    width: 80%;
  }
  .img {
    width: 40%;
  }
  button {
    padding: 5px 10px;
  }
}
</style>
