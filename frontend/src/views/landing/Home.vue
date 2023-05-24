<template>
  <div>
    <Hero />
  </div>
</template>

<script>
import Vue from 'vue';
import Hero from './components/Hero.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Hero,
  },

  data() {
    return {};
  },
});
</script>
