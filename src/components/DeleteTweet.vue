<template>
  <div>
      <button @click="delete_tweet">Delete Tweet</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";
import cookies from "vue-cookies";

export default {
  name: "delete-tweet",

  methods: {
    delete_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweets",
          method: "DELETE",
          data: {
            loginToken: cookies.get("user").loginToken,
            tweetId: this.tweetId,
          },
        })
        .then((response) => {
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },
  props: {
    tweetId: Number,
  },
};
</script>

<style lang="scss" scoped>
</style>