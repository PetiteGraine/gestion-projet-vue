<template>
    <table>
        <thead>
            <tr>
                <th class="table-col-tasks">Projet</th>
                <th class="table-col-tasks">Titre</th>
                <th class="table-col-tasks">Description</th>
                <th class="table-col-tasks">Date début</th>
                <th class="table-col-tasks">Deadline</th>
                <th class="table-col-tasks">État</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tache, index) in taches" :key="index">
                <td>{{ tache.projet }}</td>
                <td>{{ tache.titre }}</td>
                <td>{{ tache.description }}</td>
                <td>{{ tache.date_debut }}</td>
                <td>{{ tache.date_fin }}</td>
                <td>
                    <img v-if="tache.fini" src="../assets/img/check_on.png" height="20">
                    <img v-if="!tache.fini" src="../assets/img/check_off.png" height="20">
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'ListeTache',
    props: {
        taches: []
    }
}
</script>