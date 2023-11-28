<template>
    <form id="container-form" @submit.prevent="add">
        <p>Projet</p>
        <select name="projet" class="input-field" v-model="projet" required>
            <option v-for="(p, index) in projets" :key="index" :value="p">{{ p.titre }}</option>
        </select>
        <p>Titre</p>
        <input type="text" class="input-field" v-model="titre" required>
        <p>Description</p>
        <input type="text" class="input-field" v-model="description" required> <br>
        <p>Date début</p>
        <input type="date" class="input-field" v-model="date_debut" required> <br>
        <p>Deadline</p>
        <input type="date" class="input-field" v-model="date_fin" required>
        <p>Tâche déjà terminée ?</p>
        <input type="checkbox" class="input-field" v-model="fini">
        <button type="submit" class="button orange" id="add-project">Ajouter la tache</button>
    </form>
</template>


<script>
export default {
    name: 'AjoutProjet',
    props: {
        projets: Array
    },
    data: function () {
        return {
            projet: '',
            titre: '',
            description: '',
            date_debut: '',
            date_fin: '',
            fini: false


        }
    },
    methods: {
        add: function () {
            this.$emit('taskadded', {
                projet: this.projet.titre,
                titre: this.titre,
                description: this.description,
                date_debut: this.date_debut,
                date_fin: this.date_fin,
                fini: this.fini
            });
            this.projet = '';
            this.titre = '';
            this.description = '';
            this.date_debut = '';
            this.date_fin = '';
            this.fini = false;
        },

    }
}
</script>