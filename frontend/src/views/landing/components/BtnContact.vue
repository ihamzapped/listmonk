<template>
  <a :href="`tel:${phone}`" class="btn-accent">
    <span class="material-symbols-outlined mr-2"> call </span>
    <span> Contact Us </span>
  </a>
</template>

<script>
import Vue from 'vue';
import { phone } from '@/content';

export default Vue.extend({
  name: 'BtnConnect',

  data() {
    return { phone };
  },
});
</script>
