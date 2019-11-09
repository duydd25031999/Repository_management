<template>
    <v-layout row class="ma-0 pa-0">
        <v-text-field
            placeholder="Input Github Account"
        ></v-text-field>
        <v-btn text icon color="secondary">
            <v-icon>mdi-television</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
export default {
    computed: {
        showLoading() {
            return false;
        }
    }
}
</script>