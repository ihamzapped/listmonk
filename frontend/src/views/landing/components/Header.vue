<template>
  <div class="nav-container">
    <b-navbar class="landing-navbar container is-fullhd relative" centered>
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

.nav-container {
  background-color: $headerBg;
}

.landing-navbar {
  height: 30vw;
  background-color: $headerBg;
  max-height: 150px;
  box-shadow: unset;

  .navbar-menu,
  .navbar-dropdown {
    background-color: $headerBg;
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

  a:focus-within,
  .navbar-link {
    color: white;
    background-color: unset;
  }

  a.is-active {
    color: $active;
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: $active;
  }

  a:hover {
    color: $active;
    background-color: unset;
  }

  img {
    height: 10vw;
    max-height: 3rem;
  }
}
</style>
