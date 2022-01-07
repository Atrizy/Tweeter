<template>
  <div></div>
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
          data: {},
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

<style lang="scss" scoped>
</style>