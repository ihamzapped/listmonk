<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data() {
    return {
      activeItem: {},
      activeGroup: {},
      // windowWidth: window.innerWidth,
    };
  },

  watch: {
    $route(to) {
      // Set the current route name to true for active+expanded keys in the
      // menu to pick up.
      this.activeItem = { [to.name]: true };
      if (to.meta.group) {
        this.activeGroup = { [to.meta.group]: true };
      } else {
        // Reset activeGroup to collapse menu items on navigating
        // to non group items from sidebar
        this.activeGroup = {};
      }
    },
  },

  methods: {
    toggleGroup(group, state) {
      this.activeGroup = state ? { [group]: true } : {};
    },

    reloadApp() {
      this.$api.reloadApp().then(() => {
        this.$utils.toast('Reloading app ...');

        // Poll until there's a 200 response, waiting for the app
        // to restart and come back up.
        const pollId = setInterval(() => {
          this.$api.getHealth().then(() => {
            clearInterval(pollId);
            document.location.reload();
          });
        }, 500);
      });
    },

  },

  computed: {
    ...mapState(['serverConfig']),

    version() {
      return process.env.VUE_APP_VERSION;
    },

  //  isMobile() {
  //    return this.windowWidth <= 768;
  //  },
  },

  mounted() {
    // Lists is required across different views. On app load, fetch the lists
    // and have them in the store.
    this.$api.getLists({ minimal: true });

  //  window.addEventListener('resize', () => {
  //    this.windowWidth = window.innerWidth;
  //  });
  },
});
</script>

<style lang="scss">
@import "assets/style.scss";
@import "assets/icons/fontello.css";
</style>
