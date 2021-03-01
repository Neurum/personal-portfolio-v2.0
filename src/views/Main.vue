<template>
  <div class="intro-container">
    <div class="intro-text">
      <h1>Hey, I'm Curt</h1>
      <h2>
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
  box-shadow: 6px 6px 15px black;
}

.intro-img img {
  height: 300px;
}
</style>
