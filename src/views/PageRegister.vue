<template>
  <div>
    <div class="logo">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5827/5827271.png"
        alt="Scarab"
      />
    </div>
    <div class="login_info">
      <input type="text" name="Login" placeholder="Email..." ref="email" />
      <input
        type="text"
        name="Username"
        placeholder="Username..."
        ref="username"
      />
      <input
        type="password"
        name="Password"
        placeholder="Password..."
        ref="password"
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
      <button class="register_button" @click="axios_request">
        Complete Registration!
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN";

export default {
  name: "PageRegister",

  methods: {
    axios_request() {
      axios
        .request({
          url: "https://tweeterest.ga/api/users",
          method: "POST",
          data: {
            email: this.$refs["email"].value,
            username: this.$refs["username"].value,
            password: this.$refs["password"].value,
            bio: this.$refs["bio"].value,
            birthdate: this.$refs["dob"].value,
            imageUrl: this.$refs["pfp"].value,
            bannerUrl: this.$refs["banimg"].value,
          },
        })
        .then((response) => {
          cookies.set("user", response.data);
          this.$router.push("/feed");
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
.logo {
  display: grid;
  align-items: center;
  justify-items: center;
  padding-top: 25px;
  width: 100%;
}

.login_info {
  display: grid;
  grid-template-rows: auto;
  gap: 5px;
  padding-top: 25vh;
  align-items: center;
  justify-items: center;
}
</style>
