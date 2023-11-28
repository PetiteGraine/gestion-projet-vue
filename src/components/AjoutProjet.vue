<template>
    <form id="container-form" @submit.prevent="add">
        <p>Titre</p>
        <input type="text" class="input-field" v-model="titre" required>
        <p>Description</p>
        <input type="text" class="input-field" v-model="description" required> <br>
        <p>Date début</p>
        <input type="text" class="input-field" v-model="date_debut" required> <br>
        <p>Deadline</p>
        <input type="text" class="input-field" v-model="date_fin" required>
        <button type="submit" class="button" id="add-project">Ajouter le projet</button>
    </form>
</template>

<script>
export default {
    name: 'AjoutProjet',
    data: function () {
        return {
            titre: '',
            description: '',
            date_debut: '',
            date_fin: '',

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
        },

    }
}
</script>