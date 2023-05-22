<template>
  <section class="mx-auto box login-container">
    <form @submit.prevent="login">
      <b-field label="E-mail" type="email" :message="{ 'Invalid Credentials': hasError }">
        <b-input v-model="mail" required type="email"></b-input>
      </b-field>

      <b-field
        label="Password"
        :type="{ 'is-danger': hasError }"
        :message="[{ 'Invalid Credentials': hasError }]"
      >
        <b-input v-model="password" type="password" maxlength="30" required></b-input>
      </b-field>

      <b-button :loading="loading" expanded native-type="submit" type="is-primary">Login</b-button>
    </form>
  </section>
</template>

<script>
import Vue from 'vue';
import { supabase } from '@/lib/supabase';

export default Vue.extend({
  name: 'Login',

  components: {},

  data() {
    return {
      hasError: false,
      mail: '',
      password: '',
      loading: false,
    };
  },

  methods: {
    async login() {
      try {
        this.loading = true;
        const { error } = await supabase.auth.signInWithPassword({
          email: this.mail,
          password: this.password,
        });
        if (error) {
          this.hasError = true;
          throw error;
        }
        this.$router.push({ name: 'services' });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  padding-bottom: 8rem;
}

.login-container {
  max-width: 360px;
  margin-top: 10%;
}
</style>
