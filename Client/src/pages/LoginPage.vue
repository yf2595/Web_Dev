<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group id="input-group-Username" label-cols-sm="3" label="Username:" label-for="Username">
        <b-form-input id="Username" v-model="$v.form.username.$model" type="text" :state="validateState('username')">
        </b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-Password" label-cols-sm="3" label="Password:" label-for="Password">
        <b-form-input id="Password" type="password" autocomplete="on" v-model="$v.form.password.$model"
          :state="validateState('password')"></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="secondary"  class="button">Login
      </b-button> 

      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {

        const response = await this.axios.post(
          //"http://localhost:3000/auth/Login",
          this.$root.store.server_domain +"/auth/Login",

          {
            username: this.form.username,
            password: this.form.password
          }
        );
        this.$root.store.login(this.form.username);
        this.$router.push("/").catch(()=>{});;
        sessionStorage.setItem("lastSearch", '');
        // localStorage.lastSeaarch = '';
      } catch (err) {
        this.$root.toast("Login failed", "Username or password is incorrect", "danger");
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        this.$root.toast("Login failed", "please make sure you fiiled all the fields correctly", "danger");
        return;
      }
      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
.button {
  display: inline-block;
  padding: 10px 50px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #92817a;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

.button:hover {
  background-color: #854d27
  }

.button:active {
  background-color: #854d27;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
</style>
