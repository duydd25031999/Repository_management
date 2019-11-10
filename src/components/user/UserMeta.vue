<template>
    <v-layout v-if="hasUser" row class="user-meta">
        <v-flex xs6>{{ username }}</v-flex>
        <v-flex xs3>total : {{ totalRepo }}</v-flex>
        <v-flex xs3>seen : {{ seenRepo }}</v-flex>
    </v-layout>
</template>

<script>
export default {
    data: () => ({}),
    computed: {
        /**@returns {Boolean} */
        hasUser(){
            return this.$store.getters["user/hasUser"]
        },
        /**@returns {String} */
        username() {
            return this.$store.getters["user/username"]
        },
        /**@returns {Number} */
        totalRepo() {
            return this.$store.getters["repository/totalRepo"]
        },
        /**@returns {Number} */
        seenRepo() {
            return this.$store.getters["repository/noRepo"]
        }
    }
}
</script>

<style scoped>
.user-meta {
    padding: 10px;
    box-shadow: 0 8px 6px -6px black;
    background-color: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>>