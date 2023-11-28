<template>
  <div class="profile">
    <button class="button back-button "><router-link to="/">Retour</router-link></button>
    <button class="title-table">Liste des projets</button>
    <ListeProjet :projets="projets"></ListeProjet>
    <button class="button center-button green" @click="projetToggle">Crée un projet</button>
    <AjoutProjet @taskadded="ajouterProjet" :style="{ display: showProjetForm ? 'block' : 'none' }"></AjoutProjet>
    <button class="title-table" style="margin-top: 20px;">Liste des taches</button>
    <ListeTache :taches="taches"></ListeTache>
    <button class="button center-button green" @click="taskToggle">Crée une Tache</button>
    <AjoutTache @taskadded="ajouterTache" :projets="projets" :style="{ display: showTasksForm ? 'block' : 'none' }">
    </AjoutTache>
  </div>
</template>

<script>
import ListeProjet from '../components/ListeProjet.vue';
import AjoutProjet from '../components/AjoutProjet.vue';
import ListeTache from '../components/ListeTache.vue';
import AjoutTache from '../components/AjoutTache.vue';

export default {
  name: 'ProfileUser',
  components: {
    ListeProjet,
    AjoutProjet,
    ListeTache,
    AjoutTache
  },
  data() {
    return {
      projets: [
        {
          titre: 'Projet1',
          description: 'Description1',
          date_debut: '2023-11-15',
          date_fin: '2023-11-28'
        },
        {
          titre: 'Projet2',
          description: 'Description2',
          date_debut: '2023-12-12',
          date_fin: '2024-01-4'
        }
      ],
      showProjetForm: false,
      taches: [
        {
          projet: 'Projet1',
          titre: 'Tache1',
          description: 'DescriptionTache',
          etat: 'en cours',
          date_debut: '15/11/2023',
          date_fin: '22/11/2023'
        },
        {
          projet: 'Projet1',
          titre: 'Tache2',
          description: 'DescriptionTache',
          etat: 'en cours',
          date_debut: '2023-11-15',
          date_fin: '2023-11-28'
        },
        {
          projet: 'Projet2',
          titre: 'Tache1',
          description: 'DescriptionTache',
          etat: 'en cours',
          date_debut: '2023-12-12',
          date_fin: '2023-12-17'
        }
      ],
      showTasksForm: false
    };
  },
  methods: {
    ajouterProjet: function (nouveauProjet) {
      this.projets.push(nouveauProjet);
    },
    projetToggle() {
      this.showProjetForm = !this.showProjetForm;
    },
    ajouterTache: function (nouvelleTache) {
      this.taches.push(nouvelleTache);
    },
    taskToggle() {
      this.showTasksForm = !this.showTasksForm;
    }
  }
}
</script>
