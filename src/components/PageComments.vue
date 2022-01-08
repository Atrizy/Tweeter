<template>
  <div>
      <button @click="get_comments">Get comments</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";
export default {
  name: "page-comments",

  methods: {
    get_comments() {
      axios
        .request({
          url: "https://tweeterest.ga/api/comments",
          method: "GET",
          data: {},
        })
        .then((response) => {
            response.data
        })
        .catch((error) => {
            error
        });
    },
  },
  data() {
    return {
      comments: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>