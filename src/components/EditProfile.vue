<template>
  <div>
    <div class="login_info">
      <input type="text" name="Login" placeholder="Email..." ref="email" />
      <input
        type="text"
        name="Username"
        placeholder="Username..."
        ref="username"
      />
      <input type="text" name="bio" placeholder="Bio" ref="bio" />
      <input type="text" name="dob" placeholder="DOB 2000-01-10" ref="dob" />
      <input
        type="text"
        name="pfp"
        placeholder="Profile picture link (OPTIONAL)"
        ref="pfp"
      />
      <input
        type="text"
        name="banimg"
        placeholder="Banner Picture link (OPTIONAL)"
        ref="banimg"
      />
    </div>
    <button @click="edit_profile">Save changes</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "edit-profile",

  methods: {
    edit_profile() {
      axios
        .request({
          url: "https://tweeterest.ga/api/users",
          method: "PATCH",
          data: {
            loginToken: cookies.get('user').loginToken,
            email: this.$refs["email"].value,
            username: this.$refs["username"].value,
            bio: this.$refs["bio"].value,
            birthdate: this.$refs["dob"].value,
            imageUrl: this.$refs["pfp"].value,
            bannerUrl: this.$refs["banimg"].value,              
          }
        })
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

<style lang="sass" scoped>
</style>