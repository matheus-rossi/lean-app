<template>
  <div class="row">
    <q-card class="q-ma-xs col">
      <q-card-section class="bg-primary text-white text-center">
        <div>Programação de Fábrica</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-select
              filled
              v-model="company"
              class="q-pa-xs"
              :options="[
                  {label: 'Matriz', value: '16'},
                  {label: 'Filial 1', value: '04'},
                  {label: 'Filial 2', value: '06'}
                ]"
              label="Filial"
            />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model="initialDate" class="q-pa-xs" label="Data">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy">
                    <q-date v-model="initialDate" :locale="myLocale">
                      <div class="items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 self-end">
            <q-btn color="primary" class="q-ma-xs" @click="search">Buscar</q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-section v-show="true">
        <q-calendar
          v-model="selectedDate"
          view="week-agenda"
          events="events"
          locale="pt-br"
        >
          <template #day-body="{ timestamp }">
            <template v-for="(agenda) in getAgenda(timestamp)">
              <div
                :key="timestamp.date + agenda.time"
                :label="agenda.time"
                class="justify-start q-ma-sm bg-secondary"
              >
                <div class="col-12 q-px-sm">
                  <strong>{{ agenda.time }}</strong>
                </div>
                <div v-if="agenda.desc" class="col-12 q-px-sm" style="font-size: 10px;">
                  PV: {{ agenda.desc }}
                </div>
              </div>
            </template>
          </template>

        </q-calendar>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  data () {
    return {
      selectedDate: '',
      initialDate: '',
      company: '',
      myLocale: {
        days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
        daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        firstDayOfWeek: 1
      },
      agenda: {
        // value represents day of the week
        1: [
          {
            time: '08:00',
            desc: 'Meeting with CEO'
          },
          {
            time: '08:30',
            desc: 'Meeting with HR'
          },
          {
            time: '10:00',
            desc: 'Meeting with Karen'
          }
        ],
        2: [
          {
            time: '11:30',
            desc: 'Meeting with Alisha'
          },
          {
            time: '17:00',
            desc: 'Meeting with Sarah'
          }
        ]
      }
    }
  },
  methods: {
    search () {
      alert('ji')
    },
    getAgenda (day) {
      return this.agenda[parseInt(day.weekday, 10)]
    }
  },
  watch: {
    initialDate (val) {
      let tempDate = date.formatDate(val, 'YYYY-MM-DD')
      this.selectedDate = tempDate
    }
  }
}
</script>

<style>

</style>

