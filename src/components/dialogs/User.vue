<template>
  <div>
    <q-card>
      <q-card-section>
        <div class="text-h6">Informações do Usuário</div>
      </q-card-section>
      <q-card-section>
        Usuário: {{ userName }} <br>
        Tipo: {{ userType }} <br>
        Contato: {{ userEmail }}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('userData', ['userName', 'userType', 'userEmail'])
  }
}
</script>
<style>

</style>
