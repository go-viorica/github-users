<template>
  <v-card class="mx-auto" tile style="height: 100vh; overflow: scroll;">
    <v-list avatar>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(user, i) in users"
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
  }),

  computed: {
    ...mapState(['users']),
  },
  },
});
</script>
