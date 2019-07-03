<template>
  <q-scroll-area class="fit">
    <q-list padding class="menu-list">
      <q-expansion-item
        expand-separator
        icon="settings"
        label="Eng de Produção"
      >
        <q-item clickable v-ripple to="/app/jicjit">
          <q-item-section>
            <q-item-label>JIC x JIT</q-item-label>
            <q-item-label caption>Análise Metodologia de Produção</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/app/oee">
          <q-item-section>
            <q-item-label>OEE</q-item-label>
            <q-item-label caption>Calculo de Eficiência</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/app/gbo">
          <q-item-section>
            <q-item-label>GBO</q-item-label>
            <q-item-label caption>Gráfico de Balanceamento Operacional</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="poll"
        label="Qualidade"
      >
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Análise de Pareto</q-item-label>
            <q-item-label caption>80 / 20</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Diagrama de Dispersão</q-item-label>
            <q-item-label caption>Relação Causa x Efeito</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Plano de Ação</q-item-label>
            <q-item-label caption>Plano de Ação 5W2H</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'leftDrawer',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
