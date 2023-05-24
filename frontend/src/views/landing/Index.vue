<template>
  <div class="landing-page" style="height: 100%">
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

<style lang="scss">
.landing-page {
  @import '@/assets/landing-styles.scss';
}
</style>
