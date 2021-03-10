<template>
  <div class="main-page">
    <div class="header">
      <h1 class="first-text">Prize Winner</h1>
      <p class="second-text">
        Prize Winner is an application that allows the user to input a raffle
        contestants name and their number of entries. Names and number of
        entries are displayed in the box on the right. Once all of the names are
        input, the Select Winner button is pressed and a random name is selected
        from the entries. It will appear behind the present and when hovered
        over, it spins to reveal the winner.
      </p>
    </div>
    <div class="purpose">
      <h2 class="second-text">Project Purpose and Goal</h2>
      <p class="second-text">
        My wife is in direct sales and holds raffles for her customers. Often
        she would use simple pen and little pieces of paper to write out
        everyone's name and put them in a large bowl. This became tedious for
        her and she began to do fewer raffles. We looked at various raffle
        mobile and web applications but only found options where each person had
        one entry. Then I was inspired to make something different. I decided to
        create an application that would take the customers name and number of
        entries and input it into a list with multiple names with one single
        entry. Then the app could choose from all the names in the list saving a
        lot of time. One entry for each customer and the application would put
        the name into the list multiple times based on the number of entries.
      </p>
    </div>
    <div class="video">
      <video
        controls
        width="750"
        src="../assets/videos/prize-winner-video.mp4"
        type="video/mp4"
      ></video>
    </div>
    <div class="problems">
      <h2 class="second-text">Problems and Thought Process</h2>
      <p class="second-text">
        I built this early in my learning and found this to be a challenge.
        Initially I found it difficult to create an algorithm that would take
        the name and put it into an array based on the number of entries. I
        eventually learned how to do this and the rest fell into place. Each
        entry will place the name into the array the number of times based on
        the number of entries. Once all names are entered into the array, a
        random number is generated based on the length of the array (number of
        names) and that number selects the name based on the number.
      </p>
      <p class="second-text">
        Next problem I ran into was how to put the name into the site on the
        spinning card I created. After a little research I discovered how to do
        this and was able to place the name behind the present so when hovered,
        it is revealed. Also, placing the names and number of entries into the
        display box proved a bit challenging with spacing and column placement.
      </p>
    </div>
    <div class="lessons">
      <h2 class="second-text">Lessons Learned</h2>
      <p class="second-text">
        This project helped me gain a greater understanding of arrays and how to
        manipulate arrays in an algorithm. I learned how to keep the names in
        the array present while being able to input additional names.
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
