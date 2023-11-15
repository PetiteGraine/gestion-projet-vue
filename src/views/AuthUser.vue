<template>
    <div id="container-login">
        <div id="container-login-image">
            <h1>TaskVue</h1>
            <h2>Page de connexion</h2>
            <img src="../assets/img/icon-web.png" alt="">
        </div>
        <div id="container-login-input">
            <form id="login-form">
                <div class="colored-text">
                    <span class="grey-text">Bonjour ! Bienvenue sur </span>
                    <span class="purple-text">TaskVue</span> <br> <br>
                    <span class="purple-text">Connecte-toi </span>
                    <span class="grey-text">sur ton compte</span>
                </div>
                <br>
                <br>
                <input type="text" placeholder="Adresse mail"> <br>
                <br>
                <input type="password" placeholder="Mot de passe"> <br>
                <br>
                <br>
                <button type="submit" class="button"><router-link to="/ProfileUser">Se connecter</router-link></button>
            </form>
        </div>
    </div>
</template>
  
<style></style>
  