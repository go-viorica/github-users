<template>
  <div>
    <div v-if="user">
      <v-card class="mx-auto">
        <v-card-text>
          <v-row align="end" class="fill-height mx-1">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img :src="user.avatar_url"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">{{
                    user.login
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.type }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <div v-else>
      <v-subheader>Please select a user to see details</v-subheader>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'UserDetail',

  data: () => ({}),

  computed: {
    userId: function(): any {
      return this.$route.params.userId;
    },
    user: function(): {} {
      return this.users.find((user: any) => user.id == this.userId);
    },
    repositories: function(): {} {
      return this.mapUserIdToRepositories[this.userId];
    },
    ...mapState(['users', 'mapUserIdToRepositories']),
  },

  watch: {
    userId: async function(newUserId, oldUserId) {
      this.$store.dispatch('fetchUserRepositories', { userId: this.userId });
    },
  },
});
</script>
