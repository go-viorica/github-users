<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>GitHub Users</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <users />
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersComponent from './components/users/users.vue';

export default Vue.extend({
  name: 'App',

  components: {
    users: UsersComponent,
  },

  data: () => ({
    //
  }),
});
</script>
