<template>
  <div>
    <button @click="edit_profile"></button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "edit-profile",

  methods: {
    edit_profile() {
      axios
        .request({
          url: "https://tweeterest.ga/api/users",
          method: "PATCH",
          params: {},
        })
        .then((response) => {
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style lang="sass" scoped>
</style>