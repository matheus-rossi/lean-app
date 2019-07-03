<template>
  <q-layout class="bg-grey-3">
    <div class="row justify-center" style="padding-top: 20vh;">
      <div class="col-4 bg-primary" style="height: 50vh;">
      </div>
      <div class="col-2 bg-white" style="height: 50vh;">
        <br>
        <div class="margin-min text-center">
          Lean App
        </div>
        <div>
          <q-input
            type="text"
            v-model="user"
            label="Usuário"
            class="margin-min">
          </q-input>
          <q-input
            type="password"
            v-on:keyup.enter="login"
            v-model="password"
            label="Senha"
            class="margin-min" >
          </q-input>
          <q-btn @click="login" color="primary" class="round margin-min">Entrar</q-btn>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      // localStorage.setItem('rep', this.password)
      // this.$store.dispatch('login', {
      //   user: this.user,
      //   password: this.password
      // }).then(() => {
      //   this.$router.push('/app')
      // }).catch((error) => {
      //   console.log(error)
      // })
      this.$router.push('/app')
    }
  }
}
</script>

<style>
  .margin-min {
    width: 80%;
    margin: 5% 10% 5% 10%;
  }
</style>
