<template>
  <div>
    <div class="row">
    </div>
    <div class="row">
      <q-card class="q-ma-xs col">
        <q-card-section class="bg-primary text-center text-white q-pa-xs">
          <div class="text-h6">
            Análise JIC x JIT
          </div>
        </q-card-section>
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
          class="col"
        >
          <q-step
            :name="1"
            title="Informe os dados solicitados"
            icon="settings"
            :done="step > 1"
          >
          <q-card-section>
            <div class="row">
              <div class="q-pr-md q-pt-md col-6" v-for="pergunta in perguntas" :key="pergunta.id">
                {{ pergunta.texto }} - Resposta: {{ pergunta.valor }}
                <q-slider
                  v-model="pergunta.valor"
                  :min="0"
                  :max="10"
                  :step="1"
                  label
                  color="light-blue"
                />
              </div>
            </div>
          </q-card-section>
          </q-step>
          <q-step
            :name="2"
            title="Resultado"
            icon="poll"
            :done="step > 2"
          >
            <RadarGraph
              :infoLabels=infoLabels
              :infoData=infoData
              :adhesion=adhesion
            >
            </RadarGraph>
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="gerarDados()" color="primary" v-show="step === 1" label="Prox. Passo"/>
              <q-btn v-if="step > 1" color="primary" @click="$refs.stepper.previous()" label="Retornar" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-card>
    </div>
  </div>
</template>

<script>
import RadarGraph from '../../components/graphs/Radar.vue'

export default {
  data () {
    return {
      perguntas: [
        { texto: 'Produção em grandes lotes ?', valor: 0, id: 1 },
        { texto: 'Estoques elevados ?', valor: 0, id: 2 },
        { texto: 'Lead-times elevados ?', valor: 0, id: 3 },
        { texto: 'Layout funcional ?', valor: 0, id: 4 },
        { texto: 'Mão de obra flexível?', valor: 0, id: 5 },
        { texto: 'Nível de defeitos tolerados?', valor: 0, id: 6 },
        { texto: 'Produção é empurrada ?', valor: 0, id: 7 }
      ],
      step: 1,
      infoLabels: [],
      infoData: [],
      sumNotes: 0,
      adhesion: 0
    }
  },
  components: {
    RadarGraph
  },
  methods: {
    gerarDados () {
      this.$refs.stepper.next()
      this.infoLabels = this.perguntas.map((elm) => {
        return elm.texto
      })
      this.infoData = this.perguntas.map((elm) => {
        return elm.valor
      })
      this.sumNotes = this.perguntas.reduce((prevElm, elm, index) => {
        return prevElm + elm.valor
      }, 0)
      this.adhesion = Math.round(((this.sumNotes / 70) * 100))
    }
  }
}
</script>

<style>

</style>
