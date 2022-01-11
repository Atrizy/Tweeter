<template>
  <div>
    <input
      type="text"
      name="content"
      placeholder="Edit comment here..."
      ref="content"
    />
    <button @click="edit_comment">Edit Comment</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "edit-comment",

  methods: {
    edit_comment() {
      axios
        .request({
          url: "https://tweeterest.ga/api/comments",
          method: "PATCH",
          data: {
            loginToken: cookies.get("user").loginToken,
            commentId: this.commentId,
            content: this.$refs["content"].value,
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
    commentId: Number
  },
};
</script>

<style lang="scss" scoped>
</style>