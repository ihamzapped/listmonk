<template>
  <form @submit.prevent="schedule" class="contact-form">
    <div v-for="(el, i) in fields" :key="i" :class="[el.span ? 'full-width' : '']">
      <label v-if="labels">{{ el.label }}: </label>
      <textarea
        v-if="el.type == 'textarea'"
        v-model="el.model"
        :placeholder="placeholders ? el.label : undefined"
        required
        cols="40"
        rows="10"
      ></textarea>
      <input
        v-else
        v-model="el.model"
        :placeholder="placeholders ? el.label : undefined"
        :type="el.type || 'text'"
        required
        maxlength="30"
      />
    </div>
    <button type="submit" class="btn-accent full-width mt-2">Submit</button>
  </form>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactForm',

  props: { labels: Boolean, placeholders: Boolean },

  data() {
    return {
      fields: {
        fname: { label: 'First Name', model: '' },
        lname: { label: 'Last Name', model: '' },
        email: { label: 'Email', type: 'email', model: '' },
        phone: { label: 'Phone', type: 'phone', model: '' },
        msg: {
          label: 'Message',
          type: 'textarea',
          model: '',
          span: true,
        },
      },
    };
  },

  methods: {
    schedule() {
      console.log(this.fields);
    },
  },
});
</script>

<style scoped lang="scss">
.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .full-width {
    grid-column: 1 / 3; /* Span across two columns */
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
  }

  textarea {
    resize: vertical;
    height: auto;
    padding: 10px;
  }

  textarea,
  input {
    display: block;
    width: 100%;
    background-color: transparent;
    border: 1px solid currentColor;
    border-radius: 2px;
    color: currentColor;
  }

  ::placeholder {
    color: currentColor;
    opacity: 1; /* Firefox */
  }

  input {
    padding: 0 8px 0 8px;
    min-height: 47px;
  }
}

@media (max-width: 767px) {
  .contact-form {
    display: block;

    > div {
      margin-bottom: 20px;
    }
  }
}
</style>
