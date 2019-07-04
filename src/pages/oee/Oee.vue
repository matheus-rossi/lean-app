<template>
  <div>
    <div class="row">
      <q-card class="q-ma-xs col">
        <q-card-section class="bg-primary text-center text-white q-pa-xs">
          <div class="text-h6">
            OEE - Overall Equipment Effiency
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-md-4 q-pa-sm">
              <div class="text-h6">Disponibilidade</div>
              <q-input
                type="number"
                label="Tempo Total Disponível"
                v-model.number="avaliableTime"
                :min="0"
              />
              <q-input
                type="number"
                label="Tempo Planejado"
                v-model.number="plannedTime"
                :min="0"
              />
              <q-input
                type="number"
                label="Tempo Parado"
                v-model.number="downTime"
                :min="0"
              />
            </div>
            <div class="col-md-4 q-pa-sm">
              <div class="text-h6">Performance</div>
              <q-input
                type="number"
                label="Tempo de Ciclo"
                v-model.number="processCycleTime"
                :min="0"
              />
              <q-input
                type="number"
                label="Quantidade total produzida"
                v-model.number="totalProduced"
                :min="0"
              />
            </div>
            <div class="col-md-4 q-pa-sm">
              <div class="text-h6">Qualidade</div>
              <q-input
                type="number"
                label="Qtd peças não conformes"
                v-model.number="defectiveParts"
                :min="0"
              />
            </div>
            <div class="col-12">
              <q-btn
                color="primary"
                @click="calculateOee"
                class="btn-right-drawer items-center col"
                label="Calcular"
              >
              </q-btn>
            </div>
            <div class="col q-pa-sm">
              <div class="text-h6">Resultado</div>
              <ProgressOee :oee="oee"></ProgressOee>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import ProgressOee from '../../components/graphs/ProgressOee.vue'

export default {
  data () {
    return {
      avaliableTime: 560,
      plannedTime: 40,
      downTime: 30,
      processCycleTime: 55,
      totalProduced: 8,
      defectiveParts: 2,
      oee: 0,
      showResult: false,
      buttonReset: false
    }
  },
  components: {
    ProgressOee
  },
  methods: {
    calculateOee () {
      if (this.avaliableTime === '' || this.plannedTime === '' || this.downTime === '' || this.processCycleTime === '' || this.totalProduced === '' || this.defectiveParts === '') {
        return alert('Dialog Here')
      }
      const scheduled = this.avaliableTime - this.plannedTime
      const avaliableRate = (scheduled - this.downTime) / scheduled
      const actualUptime = scheduled - this.downTime
      const performanceRate = this.totalProduced / (actualUptime / this.processCycleTime)
      const qualityRate = this.defectiveParts / this.totalProduced
      this.oee = Math.floor((avaliableRate * performanceRate * (1 - qualityRate)) * 100)
    },
    resetCalc () {
      this.avaliableTime = ''
      this.plannedTime = ''
      this.downTime = ''
      this.processCycleTime = ''
      this.totalProduced = ''
      this.defectiveParts = ''
      this.buttonReset = false
      this.showResult = false
    }
  }
}
</script>

<style>

</style>
