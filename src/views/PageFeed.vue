<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PageFeed",

  methods: {
    get_tweets() {
      axios
        .request({
            url: "https://tweeterest.ga/api/tweets",
            method: 'GET',
        })
        .then((response) => {
            response.data
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