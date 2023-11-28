<template>
    <div id="container-login">
        <div id="container-login-image">
            <h1>TaskVue</h1>
            <h2>Page de connexion</h2>
            <img src="../assets/img/icon-web.png" alt="">
        </div>
        <div id="container-login-input">
            <form @submit.prevent="submitForm" :style="{ display: showLoginForm ? 'block' : 'none' }" id="login-form">
                <div class="colored-text">
                    <span class="grey-text">Bonjour ! Bienvenue sur </span>
                    <span class="purple-text">TaskVue</span> <br> <br>
                    <span class="purple-text">Connecte-toi </span>
                    <span class="grey-text">sur ton compte</span>
                </div>
                <br>
                <br>
                <input type="email" placeholder="Adresse mail" class="input-field" v-model="email" required> <br>
                <br>
                <input type="password" placeholder="Mot de passe" class="input-field" v-model="password" required> <br>
                <p id="register-link" @click="loginToggle">Crée un compte</p>
                <br>
                <br>
                <button type="submit" class="button">Se connecter</button>
            </form>

            <!-- Register Form -->
            <form @submit.prevent="submitForm" :style="{ display: showLoginForm ? 'none' : 'block' }" id="register-form">
                <div class="colored-text">
                    <span class="grey-text">Bonjour ! Bienvenue sur </span>
                    <span class="purple-text">TaskVue</span> <br> <br>
                    <span class="purple-text">Enregistre </span>
                    <span class="grey-text">ton compte</span>
                </div>
                <br>
                <br>
                <input type="email" placeholder="Adresse mail" class="input-field" v-model="email" required> <br>
                <br>
                <input type="password" placeholder="Mot de passe" class="input-field" v-model="password" required> <br>
                <p id="login-link" @click="loginToggle">Connecte-toi</p>
                <br>
                <br>
                <button type="submit" class="button">Crée un compte</button>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showLoginForm: true,
            email: '',
            password: '',
            users: [],
        };
    },
    methods: {
        submitForm() {
            if (this.showLoginForm) {
                this.login();
            } else {
                this.register();
            }
        },
        login() {
            const existingUser = this.users.find(u => u.email === this.email && u.password === this.password);

            if (existingUser) {
                existingUser.lastLogin = new Date();
                this.$router.push('/profileuser');
            } else {
                const newDataUser = this.data.find(u => u.email === this.email && u.password === this.password);

                if (newDataUser) {
                    this.users.push(newDataUser);
                    localStorage.setItem('users', JSON.stringify(this.users));
                } else {
                    console.error('Invalid credentials');
                    return;
                }
                this.$router.push('/profileuser');
            }
        },



        register() {
            if (this.users.some(u => u.email === this.email)) {
                console.error('Email already exists');
                return;
            }
            this.users.push({ email: this.email, password: this.password });
            localStorage.setItem('users', JSON.stringify(this.users));
            this.loginToggle();
        },
        loginToggle() {
            this.showLoginForm = !this.showLoginForm;
        },
    },
    created() {
        fetch('/data/users.json')
            .then(response => response.json())
            .then(data => {
                this.users = data;
            })
            .catch(error => console.error('Error loading users:', error));
    },
};
</script>

  