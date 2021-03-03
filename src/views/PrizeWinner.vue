<template>
  <div class="main-page">
    <div class="header">
      <h1>Prize Winner</h1>
      <p>
        Prize Winner is an application that allows the user to input a raffle
        contestants name and their number of entries. Names and number of
        entries are displayed in the box on the right. Once all of the names are
        input, the Select Winner button is pressed and a random name is selected
        from the entries. It will appear behind the present and when hovered
        over, it spins to reveal the winner.
      </p>
    </div>
    <div class="purpose">
      <h2>Project Purpose and Goal</h2>
      <p>
        My wife is in direct sales and holds raffles for her customers. Often
        she would use simple pen and little pieces of paper to write out
        everyone's name and put them in a large bowl. This became tedious for
        her and she began to do fewer raffles. We looked at various raffle
        mobile and web applications but only found options where each person had
        1 entry. If a person had 5 entries, she still had to enter the name 5
        times. Again, this became tedious. Then I was inspired to make something
        different. I decided to create an application that would take the
        customers name and number of entries and input it into a list with 1
        single entry. Then the app could choose from all the names in the list
        saving a lot of time. One entry for each customer and the application
        would put the name into the list multiple times based on the number of
        entries.
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
      <h2>Problems and Thought Process</h2>
      <p>
        I built this early in my learning and found this to be a challenge.
        Initially I found it difficult to create an algorithm that would take
        the name and put it into an array based on the number of entries. I
        eventually learned how to do this and the rest fell into place. Each
        entry will place the name into the array the number of times based on
        the number of entries. Once all names are entered into the array, a
        random number is generated based on the length of the array (number of
        names) and that number selects the name based on the number.
      </p>
      <p>
        Next problem I ran into was how to put the name into the site on the
        spinning card I created. After a little research I discovered how to do
        this and was able to place the name behind the present so when hovered,
        it is revealed. Also, placing the names and number of entries into the
        display box proved a bit challenging with spacing and column placement.
      </p>
    </div>
    <div class="lessons">
      <h2>Lessons Learned</h2>
      <p>
        This project helped me gain a greater understanding of arrays and how to
        manipulate arrays in an algorithm. I learned how to keep the names in
        the array present while being able to input additional names.
      </p>
    </div>
    <div class="contact">
      <h2>Let's Build Something Special</h2>
      <p>
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

<script>
export default {};
</script>

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
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
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
</style>
