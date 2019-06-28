<template>
  <div>
    <q-card class="my-card" square>
      <q-card-section class="bg-primary text-white">
        <div class="text-center text-subtitle1" >TAKT TIME</div>
      </q-card-section>
      <q-input
        v-model.number="demand"
        label="Demanda (Qtd)"
        type="number"
      >
      </q-input>
      <q-input
        v-model.number="avaliableTime"
        label="Tempo Disponível (Min)"
        type="number"
      >
      </q-input>
      <q-btn
        color="primary"
        class="btn-right-drawer"
        label="Calcular"
        @click="taktCalc"
      />
      <q-btn
        color="secondary"
        class="btn-right-drawer"
        label="Limpar"
        @click="taktCalc"
      />
      <q-input
        v-model="taktResult"
        label="Takt Calculado (Qtd/Min)">
      </q-input>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'rightDrawer',
  data () {
    return {
      demand: '',
      avaliableTime: '',
      taktResult: ''
    }
  },
  methods: {
    taktCalc: function () {
      this.taktResult = (this.avaliableTime / this.demand).toFixed(2)
    }
  }
}
</script>

<style>
  .my-card{
    padding: 5%
  }
  .btn-right-drawer{
    margin-top: 1em;
    margin-right: 0.5em;
  }
</style>
