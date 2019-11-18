<template>
  <v-card class="mx-auto" tile style="height: 100vh; overflow: scroll;">
    <v-list avatar>
      <v-subheader>
        <v-text-field
          label="Search users"
          v-model="searchTerm"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(user, i) in filteredUsers"
          :key="i"
          @click="onUserSelect(user.id)"
        >
          <v-list-item-avatar>
            <v-img :src="user.avatar_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="user.login"></v-list-item-title>
            <v-list-item-subtitle>{{ user.type }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'UserList',

  data: () => ({
    searchTerm: '',
  }),

  computed: {
    filteredUsers: function() {
      return this.searchTerm
        ? this.users.filter((user: any) => user.login.includes(this.searchTerm))
        : this.users;
    },
    ...mapState(['users']),
  },
  },
});
</script>
