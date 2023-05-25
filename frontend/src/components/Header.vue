<template>
  <div class="nav-container" :class="[isBgGrey]">
    <b-navbar transparent class="landing-navbar container is-fullhd" :class="[isBgGrey]" centered>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <div class="ml-1">
            <img
              src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/logo-light.png"
              alt=""
            />
          </div>
        </b-navbar-item>
      </template>
      <template #end>
        <div class="mr-1">
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
        </div>
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
        { name: 'practices', text: 'Practice Areas' },
        { name: 'about', text: 'About Us' },
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
.show-bg {
  background-color: var(--bg-dark) !important;
}

.hide-bg {
  background-color: transparent !important;
}

.nav-container {
  width: 100%;
  // position: absolute;
}

.landing-navbar {
  height: 25vw;
  max-height: 150px;
  box-shadow: unset;
  width: 100%;

  .navbar-menu.is-active {
    background-color: var(--bg-dark) !important;
  }
  .navbar-dropdown {
    background-color: var(--bg-dark) !important;
    right: 0;
  }

  .navbar-brand {
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    color: white;
    transition: all 0.2s ease-in-out;
  }

  .navbar-link {
    color: white;
    background-color: var(--bg-dark) !important;
  }

  a.is-active {
    color: var(--accent) !important;
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: var(--accent) !important;
  }

  // a:hover,
  // a:focus-within {
  //   background-color: unset !important;
  // }

  a:hover {
    color: var(--accent) !important;
  }

  img {
    height: 10vw;
    max-height: 3rem !important;
  }
}
</style>
