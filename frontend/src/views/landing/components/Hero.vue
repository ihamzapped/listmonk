<template>
  <section class="hero-area is-fullheight-with-navbar">
    <div class="container is-fullhd content">
      <div>
        <h2>Welcome to</h2>
        <h1>The Law Office of <br />Raymond T. McKenzie, Esq.</h1>
        <p>
          The Law Office of Raymond T. McKenzie, Esq. is a business law firm located in Montgomery
          County, Maryland, that has one fundamental mission: to provide our corporate and franchise
          clients with excellent legal advice, in a trustworthy manner, while establishing
          long-lasting client relationships.
        </p>
        <a href="tel:3013306790" class="button bg-accent"> Contact Us</a>
      </div>
      <div>
        <img
          src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/bn_img.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-area {
  background-image: url('https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/banner.png');
  background-repeat: no-repeat;
  min-height: 900px;
  display: inline-flex;
  width: 100%;
  align-items: center;
  padding: 0 2vw;
  max-height: 100%;

  .content {
    margin-top: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .content > div > img {
    max-width: 45vw;
    margin: 0 auto;
    display: block;
  }
  .content > div {
    width: auto;
    min-width: 320px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    padding: 20px;
  }

  h2 {
    color: var(--accent);
    font-size: 30px;
  }

  h1 {
    margin-top: 0;
    font-size: 40px;
    color: white;
  }
}
</style>
