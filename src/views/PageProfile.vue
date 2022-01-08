<template>
  <div>
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
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "PageProfile",

  methods: {
    get_profile_info() {
      axios
        .request({
          url: "https://tweeterest.ga/api/users",
          method: "GET",
          params: {
            userId: this.$route.query.userId
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
    };
  },
};
</script>

<style lang="scss" scoped>
</style>