<template>
  <div class="row justify-center">
    <div class="col-md-6 col-sm-12 q-pa-md">
      <div class="row justify-center">
        <q-circular-progress
          show-value
          :value="adhesion"
          size="10em"
          :thickness="0.22"
          color="blue"
          track-color="light-blue-1"
          class="q-ma-md"
        > {{ adhesion }}%
        </q-circular-progress>
      </div>
    </div>
    <div class="col-md-6 col-sm-12 q-pa-md">
      <q-list bordered separator>
        <q-item :active="step1" active-class="bg-light-blue-1 text-grey-9">
          <q-item-section>De 0 até 30% <br> Sistema de produção voltado ao Just in Case</q-item-section>
        </q-item>
        <q-item :active="step2" active-class="bg-light-blue-1 text-grey-9">
          <q-item-section>Acima de 30 até 60% <br> Sistema de produção voltado ao Just in Case com iniciativas Just in Time</q-item-section>
        </q-item>
        <q-item :active="step3" active-class="bg-light-blue-1 text-grey-9">
          <q-item-section>Acima de 60% até 90% <br> Sistema de produção voltado ao Just in Time, porém com traços Just in Case existentes</q-item-section>
        </q-item>
        <q-item :active="step4" active-class="bg-light-blue-1 text-grey-9">
          <q-item-section>Maior que 90% <br> Sistema de produção voltado ao Just in Time</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>

export default {
  name: 'radarGraph',
  props: [
    'infoLabels',
    'infoData',
    'adhesion'
  ],
  data () {
    return {
      step1: false,
      step2: false,
      step3: false,
      step4: false
    }
  },
  watch: {
    adhesion: function (val) {
      if (this.adhesion <= 30) {
        this.step1 = true
        this.step2 = this.step3 = this.step4 = false
      } else if (this.adhesion <= 60) {
        this.step2 = true
        this.step1 = this.step3 = this.step4 = false
      } else if (this.adhesion <= 90) {
        this.step3 = true
        this.step1 = this.step2 = this.step4 = false
      } else {
        this.step4 = true
        this.step1 = this.step2 = this.step3 = false
      }
    }
  }
}
</script>
<style>
</style>
