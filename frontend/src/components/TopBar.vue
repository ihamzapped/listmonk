<template>
  <div class="top-bar">
    <nav
      class="container is-fullhd is-flex is-justify-content-space-between is-align-items-center py-2 px-4"
    >
      <div class="tele">
        <a :href="`tel:${phone}`">
          <span class="material-symbols-outlined"> call </span>

          <span> (301) 330-6790 </span>
        </a>
        <span class="mx-2">|</span>
        <a :href="`mailto:${mail}`">
          <span class="material-symbols-outlined"> mail </span>

          <span> {{ mail }} </span>
        </a>
      </div>
      <Socials class="socials" />
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';
import Socials from '@/components/Socials.vue';
import { phone, mail } from '@/content';

export default Vue.extend({
  name: 'Header',

  data() {
    return {
      phone,
      mail,
    };
  },

  components: { Socials },
});
</script>

<style>
.socials > a {
  width: 17px;
}
</style>

<style scoped lang="scss">
.tele > a > .material-symbols-outlined {
  color: var(--accent);
  margin-right: 6px;
  top: 1px;
  position: relative;
}
.tele > a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.top-bar {
  background-color: var(--bg-light);
  position: sticky;
  top: 0;
  z-index: 999;

  a {
    color: rgb(255 255 255 / 79%) !important;
    font-size: 12px;
  }
}
</style>
