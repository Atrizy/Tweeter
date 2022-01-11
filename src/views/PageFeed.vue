<template>
  <div class="tweet_box">
    <div class="profile">
      <router-link to="/profile">Profile</router-link>
    </div>
    <div class="create_tweet">
      <input
        type="text"
        name="tweet_box"
        placeholder="Type tweet here..."
        ref="tweet_post"
      />
      <button @click="submit_tweet">Submit Tweet!</button>
    </div>
    <div class="load_tweets">
      <button @click="get_tweets">Reload Tweets</button>
    </div>
    <div class="tweets" v-for="tweet in tweets" :key="tweet['tweetId']">
      <img :src="tweet.userImageUrl" alt="userpfp" class="pfp" />
      <delete-tweet :tweetId="tweet.tweetId"></delete-tweet>
      <h5 @click="go_to_profile(tweet.userId)">{{ tweet.username }}</h5>
      <p>{{ tweet.content }}</p>
      <h6>{{ tweet.createdAt }}</h6>
      <page-likes :tweetId="tweet.tweetId"></page-likes>
      <page-post-comments :tweetId="tweet.tweetId"></page-post-comments>
      <page-comments :tweetId="tweet.tweetId"></page-comments>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";
import PageComments from "@/components/PageComments.vue";
import PagePostComments from "@/components/PagePostComments.vue";
import DeleteTweet from "@/components/DeleteTweet.vue";
import PageLikes from "@/components/PageLikes.vue";

export default {
  name: "PageFeed",

  components: {
    PageComments,
    PagePostComments,
    DeleteTweet,
    PageLikes,
  },

  methods: {
    go_to_profile(userId) {
      this.$router.push({
        path: "/profile",
        query: { userId: userId },
      });
    },

    get_tweets() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweets",
          method: "GET",
          data: {},
        })
        .then((response) => {
          this.tweets = response.data;
        })
        .catch((error) => {
          error;
        });
    },

    submit_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweets",
          method: "POST",
          data: {
            loginToken: cookies.get("user").loginToken,
            content: this.$refs["tweet_post"].value,
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
      tweets: [],
    };
  },

  mounted() {
    axios
      .get("https://tweeterest.ga/api/tweets")
      .then((response) => (this.tweets = response.data));
  },
};
</script>

<style lang="scss" scoped>
.create_tweet {
  display: grid;
  align-items: center;
  place-items: center;
  margin-left: 25%;
  width: 50%;
  height: 25%;
}

.tweets {
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  place-items: center;
  width: 100%;
}

.pfp {
  height: 35px;
  width: 35px;
  border-radius: 4px;

  h5 {
    margin: 0;
  }
}
</style>