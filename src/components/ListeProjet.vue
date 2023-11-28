<template>
    <table>
        <thead>
            <tr>
                <th class="table-col-projects">Titre</th>
                <th class="table-col-projects">Description</th>
                <th class="table-col-projects">Date début</th>
                <th class="table-col-projects">Deadline</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(projet, index) in projets" :key="index">
                <td>{{ projet.titre }}</td>
                <td>{{ projet.description }}</td>
                <td>{{ projet.date_debut }}</td>
                <td>{{ projet.date_fin }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'ListeProjet',
    props: {
        projets: []
    }
}
</script>