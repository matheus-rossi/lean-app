<template>
  <div class="row justify-center">
    <div class="col-md-3 col-sm-12 q-pa-md">
      <div class="row justify-center">
        <q-circular-progress
          show-value
          :value="gainPercent"
          size="10em"
          :thickness="0.22"
          color="teal"
          track-color="grey-3"
          class="q-ma-md"
        > {{ gainPercent }}%
        </q-circular-progress>
      </div>
    </div>
    <div class="col-md-3 col-sm-12 q-pa-md">
      <div class="row items-center" style="height:100%">
        <p class="text-h4 vertical-middle">
          {{ gainMin }}Min
        </p>
      </div>
    </div>
      <div class="col-md-6 col-sm-12 q-pa-md">
        <q-list class="bg-teal-2">
          <q-item>
            <q-item-section>A partir das informações registradas na lista de setup, e coletadas via check-list, estes são os ganhos possíveis com a aplicação da TRF.</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Análise feita levando em consideração, a externalização das atividades possíveis.</q-item-section>
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
