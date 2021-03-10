<template>
  <div class="skills-content">
    <Card />
  </div>
</template>

<script>
import Card from '../components/Card';

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.skills-content {
  height: calc(100% - 8.5rem);
}

@media screen and (max-width: 1200px) {
  .skills-content {
    height: calc(100% - 7.5rem);
  }
}
@media screen and (max-width: 600px) {
  .skills-content {
    height: 89%;
  }
}
</style>
