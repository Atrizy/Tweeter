<template>
  <div class="login" ref="login">
    <div class="logo">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5827/5827271.png"
        alt="Scarab"
      />
    </div>
    <div class="login_info">
      <input type="text" name="Login" placeholder="Email..." ref="email"/>
      <input type="password" name="Password" placeholder="Password..." ref="password" />
      <button class="login_button" @click="axios_request">Login!</button>
      <router-link to="/register">Register now!</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['X-Api-Key'] = 'G3QsyNUo9GBausjYx7y7RVO0ByWvoBcpmNxHmeaNjs2NN'

export default {
  name: "PageLogin",

  methods: {
    axios_request() {
      axios.request({
          url: "https://tweeterest.ga/api/login",
          method: 'POST',
            data: {
                "email": this.$refs['email'].value,
                "password": this.$refs['password'].value 
            }
      }).then((response) =>{
          response
      }).catch((error) =>{
          error
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