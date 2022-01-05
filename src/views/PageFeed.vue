<template>
  <div></div>
</template>

<script>
export default {
  name: "PageFeed",

  methods: {
    get_tweets() {
      axios
        .request({})
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