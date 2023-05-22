<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ name: 'home' }"> Home </b-navbar-item>
        <b-navbar-item href="#"> Practice Areas </b-navbar-item>
        <b-navbar-item :to="{ name: 'about' }"> About Us </b-navbar-item>
        <b-navbar-item href="#"> Contact Us </b-navbar-item>

        <b-navbar-item tag="div">
          <div>
            <router-link v-if="!isLoggedIn" class="button is-light" :to="{ name: 'login' }">
              Log in
            </router-link>
            <b-navbar-dropdown v-else label="Services">
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
    return {};
  },

  mounted() {
    console.log(this.$store.getters.isLoggedIn);
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    async logout() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
</script>
