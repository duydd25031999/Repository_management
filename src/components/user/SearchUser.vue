<template>
    <v-layout row class="ma-0 pa-0">
        <v-text-field
            placeholder="Input Github Account"
            @change="getUser()"
            v-model="txtSearch"
        ></v-text-field>
        <v-btn :disabled="disableBtn" text icon @click="getUser()">
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
    computed: {
        /**@returns {Boolean} */
        disableBtn() {
            return this.$store.getters["loading/isLoading"]
        }
    },
    methods: {
        async getUser() {
            let text = this.txtSearch
            // let text = "freeCodeCamp"
            await this.$store.dispatch("user/getUser", text)
            this.$store.commit("repository/CLEAR_PAGE")
            await this.$store.dispatch("repository/getRepositoriesByPage")
        }
    }
}
</script>