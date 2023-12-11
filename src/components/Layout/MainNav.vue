<script>
export default {
  name: 'MainNav',
  props : {
    navItems : {
      type: Array,
      required : false,
      default: function () {
        return null
      }
    }
  }
}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/"
          :target = '_self'
          class="nav-link px-2 link-secondary">
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/gallery"
          :target = '_self'
          class="nav-link px-2 link-secondary">
            Gallery
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about"
          :target = '_self'
          class="nav-link px-2 link-secondary">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
