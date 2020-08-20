<template>
  <div>
    <div id="login">
      <form @submit.prevent="login">
        eposta :
        <input type="email" v-model="login_email" />
        <br />password:
        <input type="password" v-model="login_password" />

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
<hr /> 
  </div>
</template>



<script>
export default {
  data() {
    return {
      login_email: null,
      login_password: null,
      token: null
    };
  },
  methods: {
    login() {
      axios
        .post("http://firstproject.local/api/auth/login", {
          email: this.login_email,
          password: this.login_password
        })
        .then(response => {
          //this.$emit("token-received", response.data.access_token);
          this.$store.commit('setToken',response.data.access_token);
        })
        .catch(response => console.error(response.error));
    }
  }
};
</script>