<template>
    <form id="container-form">
        <p>Titre</p>
        <input type="text" v-model="titre">
        <p>Description</p>
        <input type="text" v-model="description"> <br>
        <p>Date début</p>
        <input type="text" v-model="date_debut"> <br>
        <p>Deadline</p>
        <input type="text" v-model="date_fin">
    </form>
    <button @click.prevent="add" class="button" id="add-project">Ajouter le projet</button>
</template>

<script>
export default {
    name: 'AjoutProjet',
    data: function () {
        return {
            titre: '',
            description: '',
            date_debut: '',
            date_fin: ''
        }
    },
    methods: {
        add: function () {
            this.$emit('taskadded', {
                titre: this.titre,
                description: this.description,
                date_debut: this.date_debut,
                date_fin: this.date_fin
            });
            this.titre = '';
            this.description = '';
            this.date_debut = '';
            this.date_fin = '';
        }
    }
}
</script>