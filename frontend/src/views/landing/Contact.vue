<template>
  <div class="contact-container">
    <div class="banner">
      <h1>Contact Us</h1>
    </div>

    <div class="content container is-fullhd">
      <div class="fluid-row">
        <ContactForm labels />
        <img
          class="img-fluid"
          src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/about-img.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ContactForm from './components/ContactForm.vue';

export default Vue.extend({
  name: 'About',

  components: { ContactForm },

  data() {
    return {};
  },
});
</script>

<style lang="scss">
$margin-y: 10vw;

.contact-container {
  padding-bottom: $margin-y;

  .content {
    padding: 0 3vw;
    margin: 0 auto;
    margin-top: $margin-y;

    form {
      // color: black;
      color: var(--text-light);
      label {
        color: black;
        font-weight: bold;
      }
    }

    .fluid-row > *:nth-child(2) {
      max-width: 500px;
      flex-basis: 375px;
    }

    .fluid-row {
      gap: 5vw;
    }
  }
}
</style>
