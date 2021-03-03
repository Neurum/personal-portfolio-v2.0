<template>
  <div class="projects-area">
    <ProjectCard
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard';
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          name: 'prizePicker',
          title: 'Prize Winner Picker',
          img: 'prize-picker-site',
          desc:
            'Site to input raffle contestants and randomly select a winner from a list.',
          page: '/prize-winner',
        },
        {
          name: 'weatherApp',
          title: 'Weather App',
          img: 'weather-app',
          desc:
            'Put in your city and state to see current weather and 7 day forecast.',
          page: '/weather-app',
        },
        {
          name: 'personalSite',
          title: 'Personal Site',
          img: 'portfolio-project-img',
          desc: 'My personal portfolio site.',
          page: '/personal-site',
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-area {
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
  height: 90%;
}
</style>
