<template>
  <div class="nav-container" :class="[isBgGrey]">
    <b-navbar
      ref="landingNav"
      class="landing-navbar container is-fullhd relative"
      :class="[isBgGrey]"
      centered
    >
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <img
            src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/logo-light.png"
            alt=""
          />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item
          v-for="(route, i) in routes"
          :key="i"
          :active="isActive(route.name)"
          tag="router-link"
          :to="{ name: route.name }"
        >
          {{ route.text }}
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div>
            <router-link v-if="!isLoggedIn" class="button is-light" :to="{ name: 'login' }">
              Log in
            </router-link>
            <b-navbar-dropdown v-else label="Services" class="has-text-white">
              <b-navbar-item tag="router-link" :to="{ name: 'services' }">
                All Services
              </b-navbar-item>
              <b-navbar-item @click="logout"> Logout </b-navbar-item>
            </b-navbar-dropdown>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { supabase } from '@/lib/supabase';

export default Vue.extend({
  name: 'Header',

  components: {},

  data() {
    return {
      routes: [
        { name: 'home', text: 'Home' },
        { name: '', text: 'Practice Areas' },
        { name: 'about', text: 'About' },
        { name: '', text: 'Contact Us' },
      ],
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },

    isHome() {
      return this.$route.name === 'home';
    },

    isMobile() {
      return window.innerWidth < 1024;
    },

    isBgGrey() {
      return this.isHome && !this.isMobile ? 'hide-bg' : 'show-bg';
    },
  },

  methods: {
    isActive(name) {
      return this.$route.name === name;
    },

    async logout() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        if (this.$route.name !== 'home') this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
</script>

<style lang="scss">
$active: #b69c74;
$headerBg: #121926;

.show-bg {
  background-color: $headerBg;
}

.hide-bg {
  background-color: transparent;
}

.landing-navbar {
  height: 30vw;
  max-height: 150px;
  box-shadow: unset;
  position: absolute;
  width: 100%;

  .navbar-menu.is-active {
    background-color: $headerBg;
  }
  .navbar-dropdown {
    background-color: $headerBg;
    right: 0;
  }

  .navbar-brand {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .navbar-end {
    padding-right: 10px;
  }

  a {
    color: white;
  }

  .navbar-link {
    color: white;
    background-color: $headerBg !important;
  }

  a.is-active {
    color: $active;
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: $active;
  }

  a:hover,
  a:focus-within {
    background-color: unset;
  }

  a:hover {
    color: $active;
  }

  img {
    height: 10vw;
    max-height: 3rem;
  }
}
</style>
