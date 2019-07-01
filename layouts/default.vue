<template>
  <div>
    <section class="container-fluid px-0">
      <b-navbar toggleble="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">s4m0r1.net<span class="beta-badge">ß</span></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collaps id="nac-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/about">About</b-nav-item>
            <b-nav-item href="/product">Product</b-nav-item>
          </b-navbar-nav>
        </b-collaps>
      </b-navbar>
    </section>
    <!-- ここまでヘッダー -->
      <nuxt class="nuxt_body" />
    <!-- ここからフッター -->
    <footer>
          <center class="site_title"><p>s4m0r1.net</p></center>
          <center class="copy_light"><small>© 2019 さもり</small></center>
          <a class="version_link" href="/release">Ver:0.4.2</a>
    </footer>
  </div>
</template>

<script>
export default {
    props: ['default'],
    layout: 'default'
}
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #000000;
}
.site_title {
  position: absolute;
  color: aliceblue;
  bottom: 1%;
  width: 100%;
  margin: auto auto 1% auto;

}
.copy_light {
  position: absolute;
  color: rgb(255, 255, 255);
  bottom: 1%;
  width: 100%;
}
.version_link {
  color: rgb(255, 255, 255);
  position: absolute;
  width: 100%;
  bottom: 1%;
  text-align: right;
}
</style>