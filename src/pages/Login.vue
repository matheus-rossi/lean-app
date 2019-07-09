<template>
  <q-layout class="bg-grey-3">
    <div class="row justify-center" style="padding-top: 25vh">
      <div class="row items-center justify-center col-lg-2 col-md-3 col-sm-8 col-xs-8 bg-primary text-center text-white">
        <div class="text-h6 q-ma-lg">
          LeanApp
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-8 col-xs-8 bg-white">
        <br>
        <br>
        <div>
          <q-input
            type="text"
            v-model="user"
            label="Usuário"
            class="q-ma-md">
          </q-input>
          <q-input
            type="password"
            v-on:keyup.enter="login"
            v-model="password"
            label="Senha"
            class="q-ma-md" >
          </q-input>
          <br>
          <div class="row justify-center">
            <q-btn @click="login" color="primary" class="round q-ma-md">Entrar</q-btn>
          </div>
          <br>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { Notify } from 'quasar'

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
      // A desenvolver - Redirecionamento login

      // localStorage.setItem('rep', this.password)
      // this.$store.dispatch('login', {
      //   user: this.user,
      //   password: this.password
      // }).then(() => {
      //   this.$router.push('/app')
      // }).catch((error) => {
      //   console.log(error)
      // })
      if (this.user === 'matheus' && this.password === 'rossi') {
        this.$router.push('/app')
      } else {
        Notify.create('Senha ou usuário incorretos!')
      }
    }
  }
}
</script>

<style>
</style>
