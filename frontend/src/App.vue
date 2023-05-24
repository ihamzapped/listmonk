<template>
  <div id="app" style="height: 100%">
    <TopBar />
    <Header />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import Header from '@/components/Header.vue';
import TopBar from '@/components/TopBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    TopBar,
  },

  data() {
    return {
      // windowWidth: window.innerWidth,
    };
  },

  watch: {},

  methods: {},

  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },

    //  isMobile() {
    //    return this.windowWidth <= 768;
    //  },
  },

  mounted() {
    //  window.addEventListener('resize', () => {
    //    this.windowWidth = window.innerWidth;
    //  });
  },
});
</script>

<style lang="scss">
@import 'assets/style.scss';
@import 'assets/icons/fontello.css';
</style>
