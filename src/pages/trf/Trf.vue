<template>
  <div id="app-container">
    <q-card class="q-ma-xs">
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h6" >TRF - Troca Rápida de Ferramenta</div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-xs">Insira as informações solicitadas abaixo:</div>
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model.number="sequence" class="q-pa-xs" type="number" :min="0" label="Sequência" />
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <q-input filled v-model="activity" class="q-pa-xs" type="text" label="Atividade" />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model.number="operationTime" type="number" :min="0" class="q-pa-xs" label="Tempo da Operação" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-select
              filled
              v-model="setupClass"
              class="q-pa-xs"
              :options="[
                  {label: 'Interno', value: '1'},
                  {label: 'Externo', value: '2'}
                ]"
              label="Tipo de setup"
            />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <q-select
              filled
              v-model="couldBeExternal"
              class="q-pa-xs"
              :options="[
                  {label: 'Sim', value: '1'},
                  {label: 'Não', value: '2'}
                ]"
              label="Pode ser Externo?"
            />
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
        </div>
      </q-card-section>
      <q-card-section>
        <ProgressTrf
          :gainMin = 'gainMin'
          :gainPercent = 'gainPercent'
          v-show="showTrf"
        >
        </ProgressTrf>
        <div class="q-pa-xs">
          <q-table
            title="Lista de Setup"
            :data="setupList"
            :columns="columns"
            :pagination.sync="pagination"
            :pagination-label="getPaginationLabel"
            :rows-per-page-options="[0,25,50,100]"
            row-key="sequence"
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
import ProgressTrf from '../../components/graphs/ProgressTrf.vue'

export default {
  components: {
    ProgressTrf
  },
  data () {
    return {
      sequence: '',
      activity: '',
      setupClass: '',
      idSetupClass: '',
      couldBeExternal: '',
      idCouldBeExternal: '',
      operationTime: '',
      setupList: [],
      importFile: '',
      gainMin: 0,
      gainPercent: 0,
      showTrf: false,
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'sequence',
          label: 'Sequência',
          field: 'sequence',
          align: 'left',
          sortable: true
        },
        {
          name: 'activity',
          label: 'Atividade',
          field: 'activity',
          sortable: true
        },
        {
          name: 'operationTime',
          label: 'Tempo',
          field: 'operationTime',
          sortable: true
        },
        {
          name: 'setupClass',
          label: 'Classificação',
          field: 'setupClass',
          sortable: true
        },
        {
          name: 'couldBeExternal',
          label: 'Pode ser externo?',
          field: 'couldBeExternal',
          sortable: true
        }
      ]
    }
  },
  methods: {
    addActivity () {
      if (this.sequence === null || this.activity === null || this.setupClass === '' || this.couldBeExternal === '' || this.operationTime === null) {
        return alert('Campos Obrigatórios Vazios')
      }
      const newOperation = {
        sequence: this.sequence,
        activity: this.activity,
        setupClass: this.setupClass.label,
        idSetupClass: this.setupClass.value,
        couldBeExternal: this.couldBeExternal.label,
        idCouldBeExternal: this.couldBeExternal.value,
        operationTime: this.operationTime
      }
      this.setupList.push(newOperation)
      this.calculateTrf()
    },
    onChangeXlsx (e) {
      const files = e.target.files, f = files[0]
      const reader = new FileReader()
      const vue = this
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const jsonXlsx = XLSX.utils.sheet_to_json(workbook.Sheets.Planilha1)
        vue.setupList = jsonXlsx
        vue.calculateTrf()
      }
      reader.readAsArrayBuffer(f)
    },
    getPaginationLabel (firstRowIndex, endRowIndex, totalRowsNumber) {
      return `${firstRowIndex}-${endRowIndex} de ${totalRowsNumber}`
    },
    calculateTrf () {
      const totalTime = this.setupList.reduce((prevElm, elm) => {
        return prevElm + elm.operationTime
      }, 0)
      const timeCouldBeExternalActivities = this.setupList.filter((elm) => {
        return elm.idCouldBeExternal === '1' && elm.idSetupClass === '1'
      }).reduce((prevElm, elm) => {
        return prevElm + elm.operationTime
      }, 0)
      this.gainPercent = Math.round((timeCouldBeExternalActivities / totalTime) * 100)
      this.gainMin = totalTime - timeCouldBeExternalActivities
      this.showTrf = true
    },
    cleanData () {
      this.sequence = ''
      this.activity = ''
      this.setupClass = ''
      this.idSetupClass = ''
      this.couldBeExternal = ''
      this.idCouldBeExternal = ''
      this.operationTime = ''
      this.setupList = []
      this.importFile = ''
      this.gainMin = 0
      this.gainPercent = 0
      this.showTrf = false
      document.getElementById('form').reset()
    }
  }
}
</script>
