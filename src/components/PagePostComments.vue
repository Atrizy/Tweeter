<template>
  <div>
    <input
      type="text"
      name="comment"
      placeholder="Enter comment here..."
      ref="comment"
    />
    <button @click="post_comment">Post comment</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";
export default {
  name: "page-post-comments",

  methods: {
    post_comment() {
      axios
        .request({
          url: "https://tweeterest.ga/api/comments",
          method: "POST",
          data: {
            loginToken: cookies.get("user").loginToken,
            tweetId: this.tweetId,
            content: this.$refs["comment"].value,
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
  data() {
    return {
      comments: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>