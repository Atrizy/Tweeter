<template>
  <div>
      <button @click="delete_comment">Delete Comment</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";
import cookies from "vue-cookies";

export default {
  name: "delete-comment",

  methods: {
    delete_comment() {
      axios
        .request({
          url: "https://tweeterest.ga/api/comments",
          method: "DELETE",
          data: {
            loginToken: cookies.get("user").loginToken,
            commentId: this.commentId,
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
    commentId: Number,
  },
};
</script>

<style lang="scss" scoped>
</style>