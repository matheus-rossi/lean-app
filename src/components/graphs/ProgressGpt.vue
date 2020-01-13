<template>
  <div class="row">
    <div class="col-md-3 col-sm-12 col-xs-12 q-pa-xs">

      <q-card flat bordered class="col" >
        <q-card-section>
          <div class="text-h6">Ganho em Percentual</div>
          <q-separator inset />
          <p class="text-h6">
            {{ gainPercent }} %
          </p>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-3 col-sm-12 col-xs-12 q-pa-xs">
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Ganho em Tempo</div>
          <q-separator inset />
          <p class="text-h6">
            {{ gainMin }}Min
          </p>
        </q-card-section>
      </q-card>

    </div>
    <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xs">
      <q-list class="bg-light-blue-1" bordered style="height:100%">
        <q-item>
          <q-item-section>A partir das informações registradas na lista de apontamento, e coletadas via check-list, estes são os ganhos possíveis com a aplicação da GPT.</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Análise feita levando em consideração, a eliminação de atividades que não agregam valor.</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>

export default {
  name: 'progressTrf',
  props: [
    'gainMin',
    'gainPercent'
  ],
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
