<template>
  <div class="intro-container">
    <div class="intro-text">
      <h1 class="first-text">Hey, I'm Curt</h1>
      <h2 class="second-text">
        I'm a full stack web developer that enjoys creating new and wonderful
        things.
      </h2>
    </div>
    <div class="intro-img ">
      <img
        class="raisedbox"
        src="../assets/images/portrait-img.jpg"
        alt="portrait photo"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 8rem;
  padding-bottom: 15rem;
}

h2 {
  font-size: 3rem;
}

.intro-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 90%;
}

.intro-text {
  display: flex;
  flex-direction: column;

  width: 50%;
  text-align: left;
}

.raisedbox {
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.7);
}

.intro-img img {
  height: 300px;
}

.first-text {
  animation-name: fadein;
  animation-duration: 2s;
}

.second-text {
  animation-name: fadeintwo;
  animation-duration: 2s;
}

@media screen and (max-width: 800px) {
  .intro-container {
    flex-direction: column;
    justify-content: space-evenly;
    height: 89%;
  }
  .intro-text {
    width: 85%;
    align-items: center;
  }
  h1 {
    font-size: 4rem;
    padding-bottom: 8rem;
  }
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  .intro-img img {
    height: 250px;
  }
}
</style>
