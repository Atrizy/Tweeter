<template>
  <div>
    <div
      class="comments"
      v-for="comment in comments"
      :key="comment['commentId']">
          <h5> {{ comment.username }} </h5>
          <p> {{ comment.content }} </p>
          <delete-comment :commentId="comment.commentId"></delete-comment>
          <h6> {{ comment.createdAt }} </h6>     
      </div>
    <button @click="get_comments">Get comments</button>
  </div>
</template>

<script>
import axios from "axios";
import DeleteComment from './DeleteComment.vue';
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";
export default {
  name: "page-comments",

    components: {
        DeleteComment,
    },

  methods: {
    get_comments() {
      axios
        .request({
          url: "https://tweeterest.ga/api/comments",
          method: "GET",
          params: {
            tweetId: this.tweetId,
          },
        })
        .then((response) => {
          this.comments = response.data;
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
  props: {
      tweetId: Number
  },
};
</script>

<style lang="scss" scoped>
</style>