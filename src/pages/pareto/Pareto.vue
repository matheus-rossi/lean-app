<template>
  <div class="row">
    <q-card class="q-ma-xs col">
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h6">Análise de Pareto</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-md-6 col-xs-12 q-pa-sm">
            <q-input class="margin-min" v-model="problem" type="text" ref="inputone" label="Descrição da Ocorrência"/>
          </div>
          <div class="col-md-2 col-xs-12 q-pa-sm">
            <div class="wid-qtd">
              <q-input class="margin-min" v-model.number="qtd" type="number" label="Quantidade" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <q-btn color="primary" class="btn-right-drawer items-center col" @click="addProblem">Adicionar</q-btn>
          <q-btn color="primary" class="btn-right-drawer items-center col" @click="cleanData" v-show="showChart">Limpar</q-btn>
        </div>
      </q-card-section>
      <q-card-section v-show="showChart">
        <div id="chart" class="graph"></div>
        <div class="q-pa-xs">
          <q-table
            title="Folha de Dados"
            :data="paretoAr"
            :columns="columns"
            :pagination.sync="pagination"
            :pagination-label="getPaginationLabel"
            :rows-per-page-options="[0,25,50,100]"
            no-data-label="Sem Dados"
            rows-per-page-label="Linhas por Página"
            />
          </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import c3 from 'c3'
import _ from 'lodash'

export default {
  name: 'pareto',
  data () {
    return {
      problem: '',
      qtd: null,
      paretoAr: [],
      paretoArChart: [],
      showChart: false,
      columns: [
        {
          name: 'descricao',
          label: 'Descrição Ocorrência',
          field: 'problem',
          align: 'left',
          sortable: true
        },
        {
          name: 'operacao',
          label: 'Quantidade',
          field: 'qtd',
          sortable: true
        }
      ],
      pagination: {
        rowsPerPage: 0
      }
    }
  },
  mounted () {
    this.paretoAr = [
      { problem: 'Problema 1', qtd: 50 },
      { problem: 'Problema 2', qtd: 450 },
      { problem: 'Problema 3', qtd: 150 },
      { problem: 'Problema 4', qtd: 300 },
      { problem: 'Problema 5', qtd: 100 },
      { problem: 'Problema 6', qtd: 75 },
      { problem: 'Problema 7', qtd: 600 }
    ]
    this.paretoAr = this.paretoAr.sort(this.compare)
    this.paretoArChart = this.paretoCalculation(this.paretoAr)
    this.chartData()
    this.showChart = true
  },
  methods: {
    cleanData () {
      this.paretoAr = []
      this.paretoArray = []
      this.showChart = false
    },
    getPaginationLabel (firstRowIndex, endRowIndex, totalRowsNumber) {
      return `${firstRowIndex}-${endRowIndex} de ${totalRowsNumber}`
    },
    addProblem () {
      if (this.problem === '' || this.qtd === null) {
        return alert('Missing fields to complete!')
      }
      this.showChart = true
      let data = this.paretoAr
      let index = data.map(function (d) { return d['problem'] }).indexOf(this.problem)
      if (index === -1) {
        let newPareto = {
          problem: this.problem,
          qtd: this.qtd
        }
        this.paretoAr.push(newPareto)
        this.paretoAr = this.paretoAr.sort(this.compare)
        this.paretoArChart = this.paretoCalculation(this.paretoAr)
        this.chartData()
        this.problem = null
        this.qtd = null
        this.$refs.inputone.focus()
      } else {
        alert('Descrição já informada!')
      }
    },
    compare (a, b) {
      if (a.qtd > b.qtd) {
        return -1
      }
      if (a.qtd < b.qtd) {
        return 1
      }
      return 0
    },
    chartData () {
      setTimeout(() => {
        return c3.generate({
          data: {
            bindto: '#chart',
            x: 'x',
            columns: [
              this.paretoArChart.finalPatternX,
              this.paretoArChart.finalPatternQtd,
              this.paretoArChart.finalPatternAcc
            ],
            type: 'bar',
            types: {
              '% Acumulado': 'spline'
            },
            axes: {
              '% Acumulado': 'y2'
            }
          },
          axis: {
            x: {
              type: 'category',
              tick: {
                rotate: 90,
                multiline: false
              }
            },
            y2: {
              show: true,
              min: 10,
              max: 100
            }
          },
          grid: {
            y: {
              lines: [
                { value: 80, text: '80% das Ocorrências', axis: 'y2' }
              ]
            }
          }
        })
      }, 50)
    },
    paretoCalculation (paretoAr) {
      const paretoArray = paretoAr.sort(this.compare)
      const patternX = [
        ['x']
      ]
      const patternQtd = [
        ['Quantidade']
      ]
      const patternAcc = [
        ['% Acumulado']
      ]
      const patternXFinal = paretoArray.map(item => item.problem)
      const patternQtdFinal = paretoArray.map(item => item.qtd)
      const totalPercent = patternQtdFinal.reduce((acc, curr) => acc + curr)
      const itemPercent = patternQtdFinal.map(item => Math.round((item / totalPercent) * 100))
      const patternAccAlmost = itemPercent.reduce(function (r, c, i) { r.push((r[i - 1] || 0) + c); return r }, [])
      const finalPatternAcc = _.flattenDeep(patternAcc.concat(patternAccAlmost))
      const finalPatternX = _.flattenDeep(patternX.concat(patternXFinal))
      const finalPatternQtd = _.flattenDeep(patternQtd.concat(patternQtdFinal))
      return {
        finalPatternX,
        finalPatternQtd,
        finalPatternAcc
      }
    }
  }
}
</script>

<style>
@import url("../../../node_modules/c3/c3.css");

</style>
