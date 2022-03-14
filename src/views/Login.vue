<template>
  <form @submit.prevent="login" class="login-form">
    <h3 class="form-heading">Login Here!</h3>
    <div class="input-container">
      <i class="fa fa-envelope icon"></i>
      <input
        class="input-field"
        v-modal="email"
        type="text"
        placeholder="Email"
        name="email"
      />
    </div>

    <div class="input-container">
      <i class="fa fa-key icon"></i>
      <input
        class="input-field"
        v-model="password"
        type="password"
        placeholder="Password"
        name="psw"
      />
    </div>

    <button type="submit" class="btn">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://generic-blog-api.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "SingleBooking" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn {
  background-color: dodgerblue;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  margin-inline: auto;
  max-width: 600px;
  border: 1px solid;
}
</style>
