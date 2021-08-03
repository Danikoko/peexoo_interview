<template>
  <div>
    <b-navbar style="max-width: 1285px !important;" class="container py-0" toggleable="lg" variant="white">
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="top-nav-item" href="#">Business Manager</b-nav-item>
          <b-nav-item class="top-nav-item" href="#">MarketPlace</b-nav-item>
          <b-nav-item class="top-nav-item" href="#">XooCam</b-nav-item>

          <b-nav-item-dropdown class="top-nav-collapse" text="Join Peexoo" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-control .active {
  padding: 0px 26px;
  background: #f29f0526;
  border-radius: 20px;
  font-weight: bold;
}
.top-nav-item .nav-link {
  color: #4d4d4d !important;
}
.navbar {
  background-color: #fff;
  box-shadow: 0 4px 2px -2px #00000017;
}
.top-nav-collapse a {
  color: #E39400 !important;
}
</style>

<style scoped>
@media only screen and (min-width: 768px) {
  .top-nav-collapse {
    margin-left: 100px;
  }
}
</style>