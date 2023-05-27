<template>
  <section class="container is-fullhd login-container px-4">
    <form @submit.prevent="login" class="mx-auto box">
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
.login-container {
  height: 100%;
  width: 100%;
  margin-top: 20%;

  form {
    width: 100%;
    max-width: 360px;
  }
}
</style>
