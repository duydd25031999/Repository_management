<template>
    <v-layout row class="ma-0 pa-0">
        <v-text-field
            placeholder="Input Github Account"
            v-model="txtSearch"
        ></v-text-field>
        <v-btn text icon @click="getUser()">
            <v-icon>mdi-television</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
        /**@type {String} */
        txtSearch: ""
    }),
    computed: {},
    methods: {
        async getUser() {
            await this.$store.dispatch("user/getUser", this.txtSearch)
            this.$store.commit("repository/CLEAR_PAGE")
            await this.$store.dispatch("repository/getRepositoriesByPage")
        }
    }
}
</script>