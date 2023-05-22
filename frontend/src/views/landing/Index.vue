<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './components/Header.vue';

export default Vue.extend({
  name: 'Index',

  components: {
    Header,
  },

  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  padding-bottom: 8rem;
}
</style>
