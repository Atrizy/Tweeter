<template>
  <div>
      <input type="password" name="password" placeholder="Password..." ref="password">
      <button @click="delete_profile">Delete profile</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "delete-profile",

  methods: {
    delete_profile() {
      axios
      .request({
          url: "https://tweeterest.ga/api/users",
          method: "DELETE",
          data: {
              loginToken: cookies.get("user").loginToken,
              password: this.$refs["password"].value
          }
      })
      .then((response) => {
          response
      })
      .catch((error) => {
          error
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>