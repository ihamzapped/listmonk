<template>
  <div>
    <section class="hero-area">
      <div class="container is-fullhd content fluid-row">
        <div>
          <h2>Welcome to</h2>
          <h1>The Law Office of <br />Raymond T. McKenzie, Esq.</h1>
          <p>
            The Law Office of Raymond T. McKenzie, Esq. is a business law firm located in Montgomery
            County, Maryland, that has one fundamental mission: to provide our corporate and
            franchise clients with excellent legal advice, in a trustworthy manner, while
            establishing long-lasting client relationships.
          </p>
          <BtnContact />
        </div>
        <div>
          <img
            src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/bn_img.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </section>

    <section class="about-area">
      <div class="container is-fullhd fluid-row">
        <div>
          <img
            src="https://www.mckenzie-legal.com/dev/wp-content/uploads/2022/08/abt.jpg"
            class="img-fluid"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h2>The Law Office of Raymond T. McKenzie, Esq.</h2>
          <p>
            It is no secret that the public’s perception of attorneys is one of greed and
            dishonesty.The founding principle of the Law Office of Raymond T. McKenzie, Esq. is the
            belief that the most important traits that a lawyer possesses are integrity and honesty.
            It is these core principles that dictate the quality advice, attention to detail and
            trusting relationship that we provide to our clients at all times.
          </p>
          <BtnContact />
        </div>
      </div>
    </section>

    <section class="practice-area">
      <h3>What we do</h3>
      <h2>Our Practice Areas</h2>
      <div class="container is-fullhd fluid-row prac-container">
        <div v-for="(el, i) in practices" :key="i" class="practice">
          <div style="width: 40%">
            <img class="mb-4" :src="el.imgUrl" alt="" srcset="" />
          </div>
          <div>
            <h4>
              {{ el.title }}
            </h4>
            <p>{{ el.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import BtnContact from './components/BtnContact.vue';
import { practices } from './content';

export default Vue.extend({
  name: 'Home',
  components: { BtnContact },

  data() {
    return {
      practices,
    };
  },
});
</script>

<style scoped lang="scss">
$p-sides: 2vw;

.hero-area img,
.about-area img {
  margin: 0 auto;
  display: block;
}

.hero-area {
  background-image: url('https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  display: flex;
  width: 100%;
  align-items: center;
  max-height: 100%;
  padding: 0 $p-sides;

  .content {
    margin-top: 160px;
  }

  h2 {
    color: var(--accent);
  }

  h1,
  h2 {
    font-size: clamp(28px, 8vw, 48px);
  }

  h1 {
    margin-top: 0;
    margin-bottom: 40px;
    color: white;
  }
}

.about-area {
  padding: 130px $p-sides;

  p {
    color: var(--text-light);
    margin: 48px 0;
  }
}

.practice-area {
  background-color: var(--bg-light);
  padding: 64px $p-sides;

  h2,
  h3 {
    text-align: center;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    color: var(--accent);
    font-size: 28px;
  }

  .prac-container {
    margin-top: 48px;
  }

  .practice {
    min-width: 300px;
    max-width: 500px;
    flex-basis: 20%;
    height: auto;
    background-color: var(--bg-lighter);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;

    p {
      color: var(--text-dark);
      margin-top: 16px;
    }

    h4 {
      font-size: 26px;
      line-height: 1.1;
    }
  }

  .practice div:first-child {
    margin-right: 25px;
    min-width: 60px;
    max-width: 60px;
  }

  .practice div:nth-child(2) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
  }

  .practice:hover {
    background-color: var(--hover-accent);
  }
}
</style>
