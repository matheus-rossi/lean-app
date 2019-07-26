<template>
  <div id="app-container">
    <q-card class="q-ma-xs">
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h6" >GBO - Gráfico de Balanceamento Operacional</div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-xs">Insira as informações solicitadas abaixo:</div>
        <div class="row">
          <div class="col-6">
            <q-input v-model.number="takt" class="q-pa-xs" type="number" :min="0" label="Takt Time" />
          </div>
          <div class="col-6">
            <q-input v-model.number="cycle" class="q-pa-xs" type="number" :min="0" :max="100" label="Tempo de Ciclo" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <q-input class="q-pa-xs" v-model="processId" type="text" label="Centro de Trabalho"/>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-input v-model="processName" type="text" class="q-pa-xs" label="Descrição da Etapa" />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <q-input v-model.number="lowRepCycle" type="number" :min="0" class="q-pa-xs" label="Tempo da Operação" />
          </div>
        </div>
        <br>
        <div class="button-obc">
          <q-btn color="primary" class="q-ma-xs" @click="addOperator">Adicionar Operação</q-btn>
          <q-btn color="primary" class="q-ma-xs" @click="cleanData">Limpar Dados</q-btn>
        </div>
      </q-card-section>
      <q-card-section>
        <div id="chart"></div>
        <div class="q-pa-xs">
          <q-table
            title="Folha de Processo"
            :data="obc"
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
import obcMethods from '../../helpers/obc/obcCalculation.js'

export default {
  name: 'obc',
  data () {
    return {
      show: false,
      takt: 90,
      cycle: 80,
      processId: 'Pintura',
      processName: 'Preparação',
      lowRepCycle: 65,
      obc: [
        { takt: 90, cycle: 80, processId: 'Corte / Dobra', processName: 'Corte', lowRepCycle: 43 },
        { takt: 90, cycle: 80, processId: 'Corte / Dobra', processName: 'Dobra', lowRepCycle: 35 },
        { takt: 90, cycle: 80, processId: 'Montagem', processName: 'Montagem 1', lowRepCycle: 55 },
        { takt: 90, cycle: 80, processId: 'Montagem', processName: 'Montagem 1', lowRepCycle: 47 },
        { takt: 90, cycle: 80, processId: 'Solda', processName: 'Solda 1', lowRepCycle: 47 },
        { takt: 90, cycle: 80, processId: 'Solda', processName: 'Solda 2', lowRepCycle: 47 },
        { takt: 90, cycle: 80, processId: 'Inspeção', processName: 'Inspeção', lowRepCycle: 47 }
      ],
      chartData: [],
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'centroTrabalho',
          label: 'Centro Trabalho',
          field: 'processId',
          align: 'left',
          sortable: true
        },
        {
          name: 'operacao',
          label: 'Operação',
          field: 'processName',
          sortable: true
        },
        {
          name: 'tempo',
          label: 'Tempo (min)',
          field: 'lowRepCycle',
          sortable: true
        }
      ]
    }
  },
  mounted () {
    this.chartData = this.obcCalculation(this.obc)
    this.chart()
    this.show = true
  },
  methods: {
    addOperator () {
      if (this.takt === null || this.cycle === null || this.processName === '' || this.processId === '' || this.lowRepCycle === null) {
        return alert('Campos Obrigatórios Vazios')
      }
      let newObc = {
        takt: this.takt,
        cycle: this.cycle,
        processName: this.processName,
        processId: this.processId,
        lowRepCycle: this.lowRepCycle
      }
      this.obc.push(newObc)
      this.chartData = this.obcCalculation(this.obc)
      this.chart()
      this.show = true
    },
    getPaginationLabel (firstRowIndex, endRowIndex, totalRowsNumber) {
      return `${firstRowIndex}-${endRowIndex} de ${totalRowsNumber}`
    },
    obcCalculation (obc) {
      return obcMethods.obcCalc(obc)
    },
    cleanData () {
      this.processId = ''
      this.processName = ''
      this.lowRepCycle = ''
      this.takt = null
      this.cycle = null
      this.obc = []
      this.chartData = []
      this.show = false
    },
    chart () {
      setTimeout(() => {
        c3.generate({
          data: {
            bindto: '#chart',
            x: 'x',
            columns: [
              this.chartData.finalFirstCol,
              this.chartData.finalSecondCol,
              this.chartData.finalThirdCol,
              this.chartData.finalFourthCol
            ],
            type: 'bar',
            types: {
              'Takt': 'line',
              'Ciclo': 'line'
            },
            axes: {
              'takt': 'y2'
            }
          },
          axis: {
            x: {
              type: 'category'
            }
          }
        })
      }, 50)
    }
  }
}
</script>

<style>
@import url("../../../node_modules/c3/c3.css");
</style>
