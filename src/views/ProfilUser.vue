<template>
  <div class="profile">
    <button class="button back-button"><router-link to="/">Retour</router-link></button>
    <ListeProjet :projets="projets"></ListeProjet>
    <button class="button center-button" @click="projetToggle">Crée un projet</button>
    <AjoutProjet @taskadded="ajouterProjet" :style="{ display: showProjetForm ? 'block' : 'none' }"></AjoutProjet>
  </div>
</template>

<script>
import ListeProjet from '../components/ListeProjet.vue';
import AjoutProjet from '../components/AjoutProjet.vue';

export default {
  name: 'ProfileUser',
  components: {
    ListeProjet,
    AjoutProjet
  },
  data() {
    return {
      projets: [
        {
          titre: 'ExempleTitre',
          description: 'ExempleDescription',
          date_debut: '15/11/2023',
          date_fin: '28/11/2023'
        },
        {
          titre: 'ExempleTitre',
          description: 'ExempleDescription',
          date_debut: '15/11/2023',
          date_fin: '28/11/2023'
        }
      ],
      showProjetForm: false
    };
  },
  methods: {
    ajouterProjet: function (nouveauProjet) {
      this.projets.push(nouveauProjet);
    },
    projetToggle() {
      this.showProjetForm = !this.showProjetForm;
    }
  }
}
</script>
