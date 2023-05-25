<template>
  <div class="practice-areas-cont">
    <div class="banner">
      <h1>Practice Areas</h1>
    </div>

    <div class="content container is-fullhd">
      <h3>
        The Law Office of Raymond T. McKenzie, Esq. assists small and medium-sized businesses and
        individuals in the following areas:
      </h3>

      <div v-for="(area, i) in practiceAreas" :key="i" class="rows">
        <div class="fluid-row">
          <div>
            <h2>{{ area.title }}</h2>
            <p>{{ area.text }}</p>
          </div>
          <img class="img-fluid" :src="area.imgUrl" alt="" srcset="" />
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { practiceAreas } from '@/content';

export default Vue.extend({
  name: 'PracticeAreas',

  components: {},

  data() {
    return { practiceAreas };
  },
});
</script>

<style scoped lang="scss">
$margin: 20px;

.practice-areas-cont {
  margin-bottom: 10vw;
  .banner {
    height: 25vw;
    max-height: 200px;
    background-image: url('https://www.mckenzie-legal.com/dev/wp-content/uploads/2022/08/banner.png');
    padding: auto 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    color: var(--text-light);

    h3 {
      text-align: center;
      color: var(--accent);
      margin: 8vw auto;
      max-width: 1046px;
      padding: 0 10px;
    }

    .rows {
      margin: auto $margin;
    }

    .rows:not(:last-child) .divider {
      border-bottom: 2px solid black;
      height: 1px;
      margin: 64px auto;
    }

    .fluid-row > *:nth-child(2) {
      max-width: 450px;
      flex-basis: 300px;
      min-width: 300px;
    }
    .fluid-row > *:nth-child(1) {
      max-width: none;
    }

    .fluid-row > * {
      align-self: flex-start;
      margin: 2vw 0;
    }

    .fluid-row {
      gap: 3vw;
    }
  }
}
</style>
