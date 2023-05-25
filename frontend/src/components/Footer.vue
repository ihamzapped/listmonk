<template>
  <footer>
    <div class="container is-widescreen footer-info">
      <div>
        <img
          class="img-fluid logo"
          src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/logo-light.png"
          alt=""
        />
        <p>{{ aboutFirm }}</p>
        <Socials />
      </div>
      <div>
        <h3 class="h3">Quick Contact Info</h3>

        <div class="tele">
          <a href="https://goo.gl/maps/9h9hRRGuKya8UjUY8" target="_blank">
            <i class="material-symbols-outlined"> distance </i>
            <span> 9841 Washingtonian Blvd., Suite 200 <br />Gaithersburg, Maryland 20878 </span>
          </a>
          <a :href="`tel:${phone}`">
            <i class="material-symbols-outlined"> call </i>

            <span> (301) 330-6790 </span>
          </a>
          <a :href="`mailto:${mail}`">
            <i class="material-symbols-outlined"> mail </i>

            <span> {{ mail }} </span>
          </a>
        </div>
      </div>
    </div>
    <div class="container is-widescreen copyright">
      @ Copyright Raymond T. Mackenzie 2023 All rights reserved<br />Website by
      <a href="https://metadvanced.com/" target="_blank">Metadvanced</a>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue';
import Socials from '@/components/Socials.vue';
import { phone, mail, aboutFirm } from '@/content';

export default Vue.extend({
  name: 'Footer',

  components: { Socials },

  data() {
    return {
      phone,
      mail,
      aboutFirm,
    };
  },
});
</script>

<style scoped lang="scss">
footer,
a {
  color: var(--text-dark);
}

footer {
  background-color: var(--bg-light);
  padding: 4rem 2vw;

  p {
    font-size: clamp(12px, 4vw, 14px);
  }

  a:hover {
    color: var(--accent) !important;
  }

  .tele > a > span {
    margin-left: 8px;
  }

  .tele > a i {
    color: var(--accent);
  }

  .tele > a {
    display: flex;
    align-items: center;
  }

  .tele > a {
    margin-bottom: 12px;
  }

  .h3 {
    border-left: 1px solid var(--accent);
    color: white;
    padding-left: 20px;
    margin-bottom: 28px;
  }

  .footer-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    p {
      margin: 30px 0;
    }
  }

  .footer-info > div {
    flex-basis: 450px;
    padding: 20px;
  }

  .copyright {
    margin-top: 40px;
    padding-top: 30px;
    text-align: center;
    border-top: 1px solid var(--border);
  }
}
</style>
