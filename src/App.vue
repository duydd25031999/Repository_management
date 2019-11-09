<template>
  <v-app>
    <AppHeader/>
    <v-content class="app-content">
      <UserMeta/>
      <RepositoriesList/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppHeader from './components/common/AppHeader';
import UserMeta from './components/user/UserMeta'
import RepositoriesList from './components/repository/RepositoriesList'

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppHeader,
    UserMeta,
    RepositoriesList
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app-content {
  margin: 0 auto;
  width: 1000px;
  max-width: 1100px;
  min-width: 950px;
}
</style>
