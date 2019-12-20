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
        <q-card-section>
          <div class="row">
            <div class="q-pr-md q-pt-md col-md-6 col-sm-12 col-xs-12" v-for="pergunta in perguntas" :key="pergunta.id">
              {{ pergunta.texto }} - Resp: {{ pergunta.valor }}
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
          <div class="col-12">
            <q-btn
              color="primary"
              @click="adhesionCalc"
              class="btn-right-drawer items-center col"
              label="Calcular"
            >
            </q-btn>
          </div>
          <ProgressJicJit
            :infoLabels=infoLabels
            :infoData=infoData
            :adhesion=adhesion
            v-show="showResult"
          >
          </ProgressJicJit>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import ProgressJicJit from '../../components/graphs/ProgressJicJit.vue'

export default {
  data () {
    return {
      perguntas: [
        { texto: 'Produção JIC x JIT?', valor: 0, id: 1 },
        { texto: 'Estoques JIC x JIT?', valor: 0, id: 2 },
        { texto: 'Lead-times JIC x JIT?', valor: 0, id: 3 },
        { texto: 'Layout JIC x JIT?', valor: 0, id: 4 },
        { texto: 'Planejamento e Controle JIC x JIT?', valor: 0, id: 6 },
        { texto: 'Mão de obra JIC x JIT?', valor: 0, id: 7 },
        { texto: 'Nível de defeitos tolerados JIC x JIT?', valor: 0, id: 8 },
        { texto: 'Sistema de Produção JIC x JIT?', valor: 0, id: 9 }
      ],
      infoLabels: [],
      infoData: [],
      sumNotes: 0,
      adhesion: 0,
      showResult: false
    }
  },
  components: {
    ProgressJicJit
  },
  methods: {
    adhesionCalc () {
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
      this.showResultFunc()
    },
    showResultFunc () {
      this.showResult = true
    }
  }
}
</script>

<style>

</style>
