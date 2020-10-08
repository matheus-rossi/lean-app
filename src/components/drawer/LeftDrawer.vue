<template>
  <q-scroll-area class="fit">
    <q-list padding class="menu-list">
      <q-item clickable
        v-ripple
        exact
        to="/app">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
          <q-item-label caption>Página Inicial</q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item
        expand-separator
        icon="settings"
        label="Eng de Produção">
        <q-item clickable v-ripple to="/app/obc">
          <q-item-section>
            <q-item-label>GBO</q-item-label>
            <q-item-label caption>Gráfico de Balanceamento Operacional</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/app/trf">
          <q-item-section>
            <q-item-label>TRF</q-item-label>
            <q-item-label caption>Troca Rápida de Ferramenta</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/app/gpt">
          <q-item-section>
            <q-item-label>GPT</q-item-label>
            <q-item-label caption>Gestão do Posto de Trabalho</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/app/oee">
          <q-item-section>
            <q-item-label>OEE</q-item-label>
            <q-item-label caption>Calculo de Eficiência</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="poll"
        label="Qualidade">
        <q-item clickable v-ripple to="/app/pareto">
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
      <q-expansion-item
        expand-separator
        icon="business"
        label="ERP">
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>CMS</q-item-label>
            <q-item-label caption>Capacity Management System</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="attach_money"
        label="Financeiro">
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>ROI</q-item-label>
            <q-item-label caption>Retorno sobre o investimento</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="post_add"
        label="Instruções Trabalho">
        <q-item clickable v-ripple to="/app/it">
          <q-item-section>
            <q-item-label>IT</q-item-label>
            <q-item-label caption>Instruções de Trabalho</q-item-label>
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
