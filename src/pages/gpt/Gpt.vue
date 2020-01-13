<template>
  <div id="app-container">
    <q-card class="q-ma-xs">
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h6" >GPT - Gestão do Posto de Trabalho</div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-xs">Insira as informações solicitadas abaixo:</div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input filled v-model="code" class="q-pa-xs" label="Código" />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model.number="qtdOk" type="number" :min="0" class="q-pa-xs" label="Qtd peças OK" />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model.number="qtdNok" type="number" :min="0" class="q-pa-xs" label="Qtd peças NOK" />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model="timeBegin" mask="time" :rules="['time']" class="q-pa-xs" label="Hora Inicio">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="timeBegin" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model="timeEnd" mask="time" :rules="['time']" class="q-pa-xs" label="Hora Fim">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="timeEnd" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <br>
        <div class="button-obc">
          <q-btn color="primary" class="q-ma-xs" @click="addActivity">Adicionar Operação</q-btn>
          <q-btn color="primary" class="q-ma-xs" @click="cleanData">Limpar Dados</q-btn>
          <q-btn color="primary" class="q-ma-xs" @click="$refs.importFile.$el.click()">
            <form id="form">
              <q-input ref="importFile" type="file" @change="onChangeXlsx" style="display:none;"/>
            </form>
            Importar Dados
          </q-btn>
          <!-- <q-btn color="primary" class="q-ma-xs" @click="calculateGpt">Calcular TRF</q-btn> -->
        </div>
      </q-card-section>
      <q-card-section>
        <ProgressGpt
          :gainMin=gainMin
          :gainPercent=gainPercent
          v-show="showGpt"
        >
        </ProgressGpt>
        <div class="q-pa-xs">
          <q-table
            title="Lista de Apontamentos"
            :data="gptList"
            :columns="columns"
            :pagination.sync="pagination"
            :pagination-label="getPaginationLabel"
            :rows-per-page-options="[0,25,50,100]"
            row-key="activity"
            no-data-label="Sem Dados"
            rows-per-page-label="Linhas por Página"
            />
          </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import ProgressGpt from '../../components/graphs/ProgressGpt.vue'

export default {
  components: {
    ProgressGpt
  },
  data () {
    return {
      code: '',
      qtdOk: '',
      qtdNok: '',
      timeBegin: '',
      timeEnd: '',
      gptList: [],
      importFile: '',
      gainMin: 0,
      gainPercent: 0,
      showGpt: false,
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'code',
          label: 'Código',
          field: 'code',
          align: 'left',
          sortable: true
        },
        {
          name: 'qtdOk',
          label: 'Qtd OK',
          field: 'qtdOk',
          sortable: true
        },
        {
          name: 'qtdNok',
          label: 'Qtd NOK',
          field: 'qtdNok',
          sortable: true
        },
        {
          name: 'timeBegin',
          label: 'Hora Inicio',
          field: 'timeBegin',
          sortable: true
        },
        {
          name: 'timeEnd',
          label: 'Hora Fim',
          field: 'timeEnd',
          sortable: true
        }
      ]
    }
  },
  methods: {
    addActivity () {
      if (this.code === null || this.qtdOk === null || this.qtdNok === '' || this.timeBegin === '' || this.timeEnd === null) {
        return alert('Campos Obrigatórios Vazios')
      }
      let newInfo = {
        code: this.code,
        timeBegin: this.timeBegin,
        timeEnd: this.timeEnd,
        qtdOk: this.qtdOk,
        qtdNok: this.qtdNok
      }
      this.gptList.push(newInfo)
      this.calculateGpt()
    },
    onChangeXlsx (e) {
      const files = e.target.files, f = files[0]
      const reader = new FileReader()
      const vue = this
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const jsonXlsx = XLSX.utils.sheet_to_json(workbook.Sheets.Planilha1)
        vue.gptList = jsonXlsx
        vue.calculateGpt()
      }
      reader.readAsArrayBuffer(f)
    },
    getPaginationLabel (firstRowIndex, endRowIndex, totalRowsNumber) {
      return `${firstRowIndex}-${endRowIndex} de ${totalRowsNumber}`
    },
    calculateGpt () {
      this.showGpt = true
    },
    cleanData () {
      this.code = ''
      this.timeBegin = ''
      this.timeEnd = ''
      this.qtdOk = ''
      this.qtdNok = ''
      this.gptList = []
      this.importFile = ''
      this.gainMin = 0
      this.gainPercent = 0
      this.showGpt = false
      document.getElementById('form').reset()
    }
  }
}
</script>
