<template>
  <div>
    <button v-if="clicked === false" @click="like_tweet">Like</button>
    <button v-if="clicked === true" @click="unlike_tweet">Unlike</button>
    <p> {{ tweetId }} </p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "page-likes",

  methods: {
    like_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweet-likes",
          method: "POST",
          data: {
            loginToken: cookies.get("user").loginToken,
            tweetId: this.tweetId,
            userId: this.userId,
            username: this.username
          },
        })
        .then((response) => {
          if (this.clicked === false) {
            this.clicked = true;
          } else {
            this.clicked = false;
          }
          response;
        })
        .catch((error) => {
          error;
        });
    },

    unlike_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweet-likes",
          method: "DELETE",
          data: {
            loginToken: cookies.get("user").loginToken,
            tweetId: this.tweetId,
            userId: this.userId,
            username: this.username
          },
        })
        .then((response) => {
          if (this.clicked === false) {
            this.clicked = true;
          } else {
            this.clicked = false;
          }
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },
  props: {
    tweetId: Number,
    userId: Number,
    username: String,
  },
  data() {
    return {
      clicked: false,
    };
  },

  mounted() {
      axios
        .get("https://tweeterest.ga/api/tweet-likes")
        .then(response => (this.userId = response.data))
  }
};
</script>

<style lang="scss" scoped>
</style>