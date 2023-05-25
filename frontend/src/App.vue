<template>
  <div id="app" style="height: 100%">
    <TopBar />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Header from '@/components/Header.vue';
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    TopBar,
    Footer,
  },

  data() {
    return {};
  },

  watch: {},

  methods: {},

  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },

  mounted() {},
});
</script>

<style lang="scss">
@import 'assets/style.scss';
@import 'assets/icons/fontello.css';
</style>
