<template>
  <div class="landing-page">
    <main style="height: 100%">
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',

  data() {
    return {};
  },
});
</script>

<style lang="scss">
.landing-page {
  // @import '@/assets/landing-styles.scss';

  height: 100%;
  position: relative;
}
</style>
