<template>
  <div class="main-page">
    <div class="header">
      <h1 class="first-text">Weather App</h1>
      <p class="second-text">
        This is an application where a user can input their city and state and
        see the current weather conditions as well as the 7 day forcast.
      </p>
    </div>
    <div class="purpose">
      <h2 class="second-text">Project Purpose and Goal</h2>
      <p class="second-text">
        I built this app because I was looking for a project that used APIs and
        most of the weather apps I saw only had the current weather and I wanted
        to do one with forecast information as well. Also, this would create a
        more difficult project to help facilitate my understanding of consuming
        APIs.
      </p>
    </div>
    <div class="video">
      <video
        controls
        muted
        width="750"
        src="../assets/videos/weather-app-video.mp4"
        type="video/mp4"
      ></video>
    </div>
    <div class="problems">
      <h2 class="second-text">Problems and Thought Process</h2>
      <p class="second-text">
        I ran into several roadblocks with this project. First, I couldn't find
        a weather API that would have current data as well as forecast data in
        one API call. Eventually I found one but it required a coordinate input
        instead of city and state. Now I have another problem, how do I get
        coordinates from a city and state input. I searched and found a
        different API for forward geocoding. This API allowed a city and state
        input and returned a set of coordinates. I then had to put that
        information into the weather API call so it would return the proper
        data. Working with 2 separate APIs proved a bit challenging.
      </p>
      <p class="second-text">
        Now I had to find out how to get that data to show up as well as change
        the background based on the weather conditions returned. This challenged
        my analytical thinking and I was able to make it work. So not only does
        this app call 2 APIs it consumes the weather data and updates the main
        background as a reflection of current data, but it also updates the
        forecast cards with its own separate data and separate styling based on
        that data as well.
      </p>
    </div>
    <div class="lessons">
      <h2 class="second-text">Lessons Learned</h2>
      <p class="second-text">
        I learned a lot from this project. I learned how to consume API data
        from 2 different sources and make them work together to get the data I
        needed to populate the application. I also learned how to put that data
        into it's own respective cards while having separate styling for each
        card.
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
