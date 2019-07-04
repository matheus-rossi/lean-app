<template>
  <div class="row justify-center">
    <div class="col-md-6 col-sm-12 q-pa-md">
      <div class="row justify-center">
        <q-circular-progress
          show-value
          :value="oee"
          size="10em"
          :thickness="0.22"
          color="teal"
          track-color="grey-3"
          class="q-ma-md"
        > {{ oee }}%
        </q-circular-progress>
      </div>
    </div>
    <div class="col-md-6 col-sm-12 q-pa-md">
      <q-list bordered separator>
        <q-item :active="step1" active-class="bg-teal-2 text-grey-9">
          <q-item-section>De 0 até 30% <br> Sistema de produção com performance baixa</q-item-section>
        </q-item>
        <q-item :active="step2" active-class="bg-teal-2 text-grey-9">
          <q-item-section>Acima de 30 até 60% <br> Sistema de produção com performance normal</q-item-section>
        </q-item>
        <q-item :active="step3" active-class="bg-teal-2 text-grey-9">
          <q-item-section>Acima de 60% até 90% <br> Sistema de produção com performance alta</q-item-section>
        </q-item>
        <q-item :active="step4" active-class="bg-teal-2 text-grey-9">
          <q-item-section>Maior que 90% <br> Sistema de produção com performance excelente</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>

export default {
  name: 'oeeGraph',
  props: [
    'oee'
  ],
  data () {
    return {
      step1: false,
      step2: false,
      step3: false,
      step4: false
    }
  },
  methods: {
    defineOee () {
      if (this.oee <= 30) {
        this.step1 = true
      } else if (this.oee <= 60) {
        this.step2 = true
      } else if (this.oee <= 90) {
        this.step3 = true
      } else {
        this.step4 = true
      }
    }
  },
  mounted () {
    this.defineOee()
  }
}
</script>
<style>
</style>
