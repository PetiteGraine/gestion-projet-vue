<template>
    <table>
        <thead>
            <tr>
                <th class="table-col">Titre</th>
                <th class="table-col">Description</th>
                <th class="table-col">Date début</th>
                <th class="table-col">Deadline</th>
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
        projets: {
            type: Array,
            default: () => [
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
            ]
        }
    }
}
</script>