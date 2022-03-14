<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    aria-label="Fifth navbar example"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample05"
        aria-controls="navbarsExample05"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExample05">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" id="home" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="about"
              aria-current="page"
              to="/about"
              >About</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/login"
              >Login</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/bookings"
              >Bookings</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="contact"
              aria-current="page"
              to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  width: 100%;
  /* background-color: transparent !important; */
  /* border-color: #e7e7e7; */
  /* padding: 2px; */
}

.nav-link {
  font-size: 20px;
}
.navbar-collapse {
  justify-content: center;
}

.justify-content-end {
  justify-content: end !important;
}
</style>
