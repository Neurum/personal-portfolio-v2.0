<template>
  <div class="projects-area">
    <ProjectCard />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard';
export default {
  components: {
    ProjectCard,
  },
};
</script>

<style scoped>
.projects-area {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  height: 90%;
}
</style>
