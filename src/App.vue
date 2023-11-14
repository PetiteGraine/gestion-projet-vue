<template>
  <router-view />
</template>

<style lang="scss">
@import './assets/scss/base.scss';
@import './assets/scss/accueil.scss';
@import './assets/scss/login.scss';
@import './assets/scss/about.scss';

body {
  background-image: url("./assets/img/planes.png");
  background-size: 40%;
  font-weight: 300;

  @font-face {
    font-family: 'Raleway';
    src: url(./assets/Raleway/Raleway-VariableFont_wght.ttf);
  }

  font-family: "Raleway";
}

#container-login-image {
  background-image: url("./assets/img/light_purple_bg.jpg");
  background-size: cover;
}
</style>
