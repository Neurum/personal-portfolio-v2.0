<template>
  <div class="main-page">
    <div class="header">
      <h1 class="first-text">Personal Site</h1>
      <p class="second-text">
        This project is my second version of my personal portfolio site. My
        first site was only HTML and CSS. This site uses Vue and Vue Router.
      </p>
    </div>
    <div class="purpose">
      <h2 class="second-text">Project Purpose and Goal</h2>
      <p class="second-text">
        This site had two purposes. One purpose was to redesign my first
        portfolio site because it was created early in my learning. The site
        needed a redesign using additional technologies that I had learned. The
        second purpose was to gain a better understanding of Vue.js and Vue
        Router. This allowed me to create a single page application with
        multiple views thus making it faster.
      </p>
    </div>
    <div class="video">
      <video
        controls
        width="750"
        src="../assets/videos/personal-portfolio-video.mp4"
        type="video/mp4"
      ></video>
    </div>
    <div class="problems">
      <h2 class="second-text">Problems and Thought Process</h2>
      <p class="second-text">
        Learning Vue.js was new to me so creating this site using it as well as
        Vue Router posed many challenges. Learning how the router system worked
        as well as passing data throughout the application was new. I had to
        work through many issues with data not passing down properly, mainly due
        to small mistakes in syntax. I was able to get the data to populate
        properly so the project cards would show for each project.
      </p>
    </div>
    <div class="lessons">
      <h2 class="second-text">Lessons Learned</h2>
      <p class="second-text">
        I really enjoyed building this with Vue.js because it gave me a better
        understanding of the framework as well as learning more about site
        design and data state management. This was a great learning experience.
        I was intimidated by Vue at first but have gained a profound enjoyment
        from using it in building applications.
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
@media screen and (max-width: 900px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 800px) {
  video {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .header,
  .purpose,
  .problems,
  .lessons,
  .contact {
    text-align: center;
  }
  .second-text {
    width: 100%;
  }
}
</style>
