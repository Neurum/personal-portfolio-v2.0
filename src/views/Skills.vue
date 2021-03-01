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
  height: calc(100% - 8rem);
}
</style>
