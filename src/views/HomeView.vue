<template>
  <div class="home">
    <nav>
      <div id="container-full-home">
        <div id="container-home">
          <img src="../assets/img/icon-web.png" width="80">
          <h1>Page d'accueil</h1>

        </div>
        <div id="container-profil-about-select">
          <div id="container-profil-select">
            <router-link to="/authuser">
              <h2>Profile</h2>
            </router-link>
          </div>
          <div id="container-about-select">
            <router-link to="/about">
              <h2>À propos de nous</h2>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style></style>