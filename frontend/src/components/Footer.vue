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
        <div class="social">
          <span>
            <a href="https://www.facebook.com/raymckenzielegal" target="_blank"
              ><img
                src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/icon-fb.png"
                alt=""
            /></a>
          </span>
          <span>
            <a href="#" target="_blank"
              ><img
                src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/icon-insta.png"
                alt=""
            /></a>
          </span>
          <span>
            <a href="#" target="_blank"
              ><img
                src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/icon-wh.png"
                alt=""
            /></a>
          </span>
        </div>
      </div>
      <div>
        <h3 class="h3">Quick Contact Info</h3>
        <div class="">
          <a href="https://goo.gl/maps/9h9hRRGuKya8UjUY8" target="_blank">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span> 9841 Washingtonian Blvd., Suite 200 <br />Gaithersburg, Maryland 20878 </span>
          </a>
        </div>

        <div class="">
          <a href="tel:3013306790">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <span> (301) 330-6790 </span>
          </a>
        </div>

        <div class="">
          <a href="mailto:ray@mckenzie-legal.com">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span> ray@mckenzie-legal.com </span>
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
import { phone, mail, aboutFirm } from '@/content';

export default Vue.extend({
  name: 'Footer',

  components: {},

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

  .footer-info > div:nth-child(2) > div {
    margin-bottom: 12px;
  }

  .footer-info > div {
    flex-basis: 450px;
    padding: 20px;
  }

  .social > span {
    margin-right: 24px;
  }

  .copyright {
    margin-top: 40px;
    padding-top: 30px;
    text-align: center;
    border-top: 1px solid var(--border);
  }
}
</style>
