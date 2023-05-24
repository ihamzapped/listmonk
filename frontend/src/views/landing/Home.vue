<template>
  <div>
    <section class="hero-area">
      <div class="container is-fullhd content two-cols">
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
      <div class="container is-fullhd content two-cols">
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
  </div>
</template>

<script>
import Vue from 'vue';
import BtnContact from './components/BtnContact.vue';

export default Vue.extend({
  name: 'Home',
  components: { BtnContact },
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
    margin-top: 150px;
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
</style>
