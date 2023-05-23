<template>
  <div style="height: 100%">
    <TopBar />
    <Header />
    <main style="height: 100%">
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './components/Header.vue';
import TopBar from './components/TopBar.vue';

export default Vue.extend({
  name: 'Index',

  components: {
    Header,
    TopBar,
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
