<template>
  <div>
    <q-card>
      <q-card-section>
        <div class="text-h6">Informações do Usuário</div>
      </q-card-section>
      <q-card-section>
        Usuário: {{ userName }} <br>
        Tipo: {{ userType }}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
    userName () {
      return this.$store.getters['userData/userName']
    },
    userType () {
      return this.$store.getters['userData/userType']
    }
  }
}
</script>
<style>

</style>
