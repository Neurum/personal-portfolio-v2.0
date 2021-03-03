<template>
  <div class="main-page">
    <div class="header">
      <h1 class="first-text">Personal Site</h1>
      <p class="second-text">
        Personal Site Description Here
      </p>
    </div>
    <div class="purpose">
      <h2 class="second-text">Project Purpose and Goal</h2>
      <p class="second-text">
        Personal Site Purpose and Goal
      </p>
    </div>
    <div class="video">
      <video controls width="750" src="" type="video/mp4"></video>
    </div>
    <div class="problems">
      <h2 class="second-text">Problems and Thought Process</h2>
      <p class="second-text">
        Personal Site Problems and thought process here.
      </p>
      <p class="second-text">
        Additional paragraph if needed.
      </p>
    </div>
    <div class="lessons">
      <h2 class="second-text">Lessons Learned</h2>
      <p class="second-text">
        Personal Site lessons learned
      </p>
    </div>
    <div class="contact">
      <h2 class="second-text">Let's Build Something Special</h2>
      <p class="second-text">
        Please reach out to me
        <router-link class="underline" :to="{ name: 'Contact' }"
          >HERE</router-link
        >
        if you are looking for a developer to work with or hire, have any
        questions or just want to connect.
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 6rem;
  letter-spacing: 0.1rem;
  padding: 8rem 0;
}
h2 {
  font-size: 3rem;
  padding-bottom: 5rem;
}
p {
  font-size: 1.75rem;
  letter-spacing: 0.05rem;
  line-height: 2.5rem;
  margin-bottom: 5rem;
  width: 70%;
}
.header {
  margin-bottom: 10rem;
}
.purpose {
  margin-bottom: 7rem;
}
.video {
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
}
video {
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.5);
}
a {
  color: inherit;
  text-decoration: none;
  font-size: 1.75rem;
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
.first-text {
  animation: fadein 2s;
}
.second-text {
  animation: fadeintwo 2s;
}
</style>
