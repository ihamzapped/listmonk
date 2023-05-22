<template>
  <section class="mx-auto box login-container">
    <form @submit.prevent="login">
      <b-field
        label="E-mail"
        required
        :type="{ 'is-danger': hasError }"
        :message="{ 'Invalid Email': hasError }"
      >
        <b-input v-model="mail"></b-input>
      </b-field>

      <b-field
        label="Password"
        required
        :type="{ 'is-danger': hasError }"
        :message="[{ 'Invalid Password': hasError }]"
      >
        <b-input v-model="password" type="password" maxlength="30"></b-input>
      </b-field>

      <b-button expanded native-type="submit" type="is-primary">Login</b-button>
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
    };
  },

  methods: {
    async login() {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: this.mail,
          password: this.password,
        });
        if (error) throw error;
        this.$router.push({ name: 'services' });
      } catch (error) {
        console.log(error);
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
