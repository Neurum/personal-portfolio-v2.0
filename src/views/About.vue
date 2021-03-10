<template>
  <div class="about-section">
    <div class="intro-img ">
      <img
        class="raisedbox"
        src="../assets/images/portrait-img.jpg"
        alt="portrait photo"
      />
    </div>
    <div class="about-text">
      <h1 class="first-text">About me</h1>
      <p class="second-text">
        Focused and driven web developer with a passion for creating exceptional
        websites and applications
      </p>
      <p class="second-text">
        I have always enjoyed a challenge and have always risen to the occasion.
        My path to web development was not what would be called easy or
        traditional. My career path has ranged from various different
        professions, all of which have contributed to my desire to work hard.
        Solving problems is part of my DNA and is where I excel.
      </p>
      <p class="second-text">
        As a web developer I have found that my skills that I have acquired
        throughout life are able to be put to their best use. My attention to
        detail, problem-solving nature, and strong work ethic have created a
        passion in me that makes each day exciting.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 8.5rem);
  padding-bottom: 3rem;
}
.about-text {
  width: 70%;
}
h1 {
  margin: 7rem 0;
  font-size: 4rem;
}
p {
  font-size: 1.75rem;
  letter-spacing: 0.05rem;
  line-height: 2.5rem;
  margin-bottom: 5rem;
}
.raisedbox {
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.7);
}
.intro-img img {
  height: 300px;
}
.first-text {
  animation: fadein 2s;
}
.second-text {
  animation: fadeintwo 2s;
}
@media screen and (max-width: 1400px) {
  .about-text {
    margin-left: 10rem;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 1200px) {
  .about-text {
    margin-right: 9rem;
  }
}
@media screen and (max-width: 800px) {
  .about-section {
    flex-direction: column;
    justify-content: space-evenly;
    height: 89%;
    padding-bottom: 0;
  }
  .about-text {
    width: 100%;
    text-align: center;
  }

  .intro-img img {
    height: 250px;
  }
  h1 {
    margin: 0;
    margin-bottom: 5rem;
  }
  p {
    margin-bottom: 3rem;
    line-height: 2rem;
  }
}
</style>
