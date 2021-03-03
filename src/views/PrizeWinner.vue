<template>
  <div class="header">
    <h1>Prize Winner</h1>
    <p>
      Prize Winner is an application that allows the user to input a raffle
      contestants name and their number of entries. Names and number of entries
      are displayed in the box on the right. Once all of the names are input,
      the Select Winner button is pressed and a random name is selected from the
      entries. It will appear behind the present and when hovered over, it spins
      to reveal the winner.
    </p>
  </div>
  <div class="purpose">
    <h2>Project Purpose and Goal</h2>
    <p>
      My wife is in direct sales and holds raffles for her customers. Often she
      would use simple pen and little pieces of paper to write out everyone's
      name and put them in a large bowl. This became tedious for her and she
      began to do fewer raffles. We looked at various raffle mobile and web
      applications but only found options where each person had 1 entry. If a
      person had 5 entries, she still had to enter the name 5 times. Again, this
      became tedious. Then I was inspired to make something different. I decided
      to create an application that would take the customers name and number of
      entries and input it into a list with 1 single entry. Then the app could
      choose from all the names in the list saving a lot of time. One entry for
      each customer and the application would put the name into the list
      multiple times based on the number of entries.
    </p>
  </div>
  <div class="video">
    Video demonstration goes here.
  </div>
  <div class="problems">
    <h2>Problems and Thought Process</h2>
    <p>Problems and thought processes will go here.</p>
  </div>
  <div class="lessons">
    <h2>Lessons Learned</h2>
    <p>Thoughts about what lessons I learned goes here.</p>
  </div>
  <div class="contact">
    <h2>Let's Build Something Special</h2>
    <p>
      Please reach out to me if you are looking for a developer to work with or
      hire, have any questions or just want to connect.
    </p>
    <router-link class="underline" :to="{ name: 'Contact' }"
      >Contact Me</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
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
}
.header {
  margin-bottom: 5rem;
}
.header p {
  width: 70%;
  line-height: 2.5rem;
}
.purpose {
  margin-bottom: 5rem;
}
</style>
