<template>
  <v-container class="fill-height" fluid>
    <v-layout row justify-space-between px-3 py-5>
      <v-flex xs3 pa-2> <user-list /> </v-flex
      ><v-flex xs9 pa-2>
        <user-detail />
      </v-flex>
    </v-layout>
    <v-row align="center" justify="center"> </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import UserList from './userList.vue';
import UserDetail from './userDetail.vue';

export default Vue.extend({
  name: 'UsersComponent',

  components: {
    'user-list': UserList,
    'user-detail': UserDetail,
  },

  data: () => ({}),

  mounted() {
    this.$store.dispatch('fetchAllUsers');
  },
});
</script>
