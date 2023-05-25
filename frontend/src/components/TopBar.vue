<template>
  <div class="top-bar">
    <nav
      class="container is-fullhd is-flex is-justify-content-space-between is-align-items-center py-2 px-4"
    >
      <div class="tele">
        <a :href="`tel:${phone}`" class="divider-vert pr-3">
          <span class="material-symbols-outlined"> call </span>

          <span class="hidden-mobile"> (301) 330-6790 </span>
        </a>
        <a :href="`mailto:${mail}`" class="pl-3">
          <span class="material-symbols-outlined"> mail </span>

          <span class="hidden-mobile"> {{ mail }} </span>
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
  width: 20px;
}
</style>

<style scoped lang="scss">
.divider-vert {
  border-right: 1px solid currentColor;
}

.tele > a > .material-symbols-outlined {
  color: var(--accent);
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
  z-index: 10;

  a {
    color: rgb(255 255 255 / 79%) !important;
    font-size: 12px;
  }
}
</style>
