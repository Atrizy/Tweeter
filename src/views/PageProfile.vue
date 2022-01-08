<template>
  <div>
    <edit-profile v-if="can_edit"></edit-profile>
    <div
      class="user_profile"
      v-for="user in users"
      :key="user[$route.query.userId]"
    >
      <img :src="user.bannerUrl" alt="" />
      <img :src="user.imageUrl" alt="" />
      <h3>{{ user.username }}</h3>
      <p>{{ user.bio }}</p>
      <h4>{{ user.birthdate }}</h4>
    </div>
    <div>
      <button @click="get_profile_info">Load profile</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import EditProfile from "@/components/EditProfile.vue";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  components: {
    EditProfile,
  },
  name: "PageProfile",

  methods: {
    get_profile_info() {
      if (!this.$route.query.userId) {
        this.$route.query.userId = cookies.get("user").userId;
      }

      axios
        .request({
          url: "https://tweeterest.ga/api/users",
          method: "GET",
          params: {
            userId: this.$route.query.userId,
          },
        })
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          error;
        });
    },
  },
  data() {
    return {
      users: [],
      can_edit: (this.$route.query.userId == cookies.get("user").userId || !this.$route.query.userId),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>