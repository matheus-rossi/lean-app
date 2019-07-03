<template>
  <div class="row">
    <div class="col">
      <q-circular-progress
        show-value
        :value="adhesion"
        size="10em"
        :thickness="0.22"
        color="teal"
        track-color="grey-3"
        class="q-ma-md"
      > {{ adhesion }}%
      </q-circular-progress>
    </div>
    <div class="col">
      <q-list bordered separator>
        <q-item :active="step1" active-class="bg-teal-2 text-grey-9">
          <q-item-section>De 0 até 30% --> Sistema de produção voltado ao Just in Case</q-item-section>
        </q-item>
        <q-item :active="step2" active-class="bg-teal-2 text-grey-9">
          <q-item-section>Acima de 30 até 60% --> Sistema de produção voltado ao Just in Case com iniciativas Just in Time</q-item-section>
        </q-item>
        <q-item :active="step3" active-class="bg-teal-2 text-grey-9">
          <q-item-section>Acima de 60% até 90% --> Sistema de produção voltado ao Just in Time, porém com traços Just in Case existentes</q-item-section>
        </q-item>
        <q-item :active="step4" active-class="bg-teal-2 text-grey-9">
          <q-item-section>Maior que 90% --> Sistema de produção voltado ao Just in Time</q-item-section>
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
  methods: {
    defineAdhesion () {
      if (this.adhesion <= 30) {
        this.step1 = true
      } else if (this.adhesion <= 60) {
        this.step2 = true
      } else if (this.adhesion <= 90) {
        this.step3 = true
      } else {
        this.step4 = true
      }
    }
  },
  mounted () {
    this.defineAdhesion()
  }
}
</script>
<style>
</style>
