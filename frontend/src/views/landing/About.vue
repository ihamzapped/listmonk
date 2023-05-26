<template>
  <div class="about-container">
    <div class="banner">
      <h1>About Us</h1>
    </div>

    <div class="content container is-fullhd">
      <div class="fluid-row">
        <img
          class="img-fluid"
          src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/about-img.png"
          alt=""
          srcset=""
        />
        <div>
          <h2>Welcome to The Law Office of Raymond T. McKenzie, Esq.</h2>
          <p>
            Mr. McKenzie’s law practice includes the representation of franchisors from across the
            country, as well as counseling franchisees and small and mid-size businesses located
            throughout Maryland, the District of Columbia and Virginia.Mr. McKenzie has litigated
            corporate and franchise law matters in the courts of Maryland and the District of
            Columbia, and been involved in numerous arbitrations before the American Arbitration
            Association. Mr. McKenzie is a member of The Maryland State Bar Association, The
            District of Columbia Bar, and The Bar Association of Montgomery County, Maryland. Mr.
            McKenzie is a member of the American Bar Association’s Forum on Franchising, and is a
            Chair Emeritus of the Maryland Franchise and Distribution Law Committee. Mr. McKenzie
            earned his Juris Doctor in 1998 from The George Washington University Law School,
            located in Washington, D.C.Mr. McKenzie earned his undergraduate degree in political
            science from the University of Rochester, located in Rochester, NY. Mr. McKenzie was
            born and raised in Philadelphia, PA, and is a graduate of Germantown Academy, located in
            Fort Washington, PA.
          </p>
          <BtnContact />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BtnContact from './components/BtnContact.vue';

export default Vue.extend({
  name: 'About',

  components: { BtnContact },

  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
$margin-y: 10vw;

.about-container {
  padding-bottom: $margin-y;

  .content {
    padding: 0 3vw;
    margin: 0 auto;
    margin-top: $margin-y;

    color: var(--text-light);

    .fluid-row > *:nth-child(1) {
      max-width: 500px;
      flex-basis: 375px;
    }

    .fluid-row {
      gap: 5vw;
    }
  }
}
</style>
