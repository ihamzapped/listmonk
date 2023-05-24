<template>
  <div class="top-bar">
    <nav
      class="container is-fullhd is-flex is-justify-content-space-between is-align-items-center py-2 px-4"
    >
      <!-- Left side -->
      <div class="">
        <a href="tel:+(301) 330-6790">(301) 330-6790</a>
        <span class="mx-2">|</span>
        <a href="mailto:mail@example.com">mail@example.com</a>
      </div>

      <!-- Right side -->
      <div class="">
        <b-icon class="" icon="email-bounce"> </b-icon>
        <b-icon class="" icon="facebook"> </b-icon>
        <b-icon class="" icon="whatsapp"> </b-icon>
        <b-icon class="" icon="instagram"> </b-icon>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.top-bar {
  background-color: var(--bg-light);
  position: sticky;
  top: 0;
  z-index: 999;

  a {
    color: rgb(255 255 255 / 79%) !important;
    font-size: 12px;
  }
}
</style>
