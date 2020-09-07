<template>
  <div id="app-container">
    <q-card class="q-ma-xs">
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h6" >IT - Instruções de Trabalho</div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-xs">Insira as informações solicitadas abaixo:</div>
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model="itCode" class="q-pa-xs" label="Instrução Trabalho" />
            <div class="q-pa-xs">
              <q-btn color="primary" class="full-width q-ma-xs" label="Abrir IT" @click="openPdf(itCode)"/>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <q-input filled v-model="productCode" class="q-pa-xs" type="text" label="Código do Produto" />
            <div class="q-pa-xs">
              <q-btn color="primary" class="full-width q-ma-xs" label="Abrir Projeto" @click="openPdf(productCode)" />
            </div>
          </div>
        </div>
        <div>
          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card>
              <q-bar class="bg-primary text-white">
                <q-space />
                <q-btn dense flat icon="close" v-close-popup> 
                  Fechar
                </q-btn>
              </q-bar>  
              <iframe 
                :src="this.link"  
                type="application/pdf" 
                class="iframe-height full-width"
                framborder='0'
              >
              </iframe>         
            </q-card>
          </q-dialog>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itCode: 'itModel',
      productCode: 'project',
      dialog: false,
      maximizedToggle: '',
      link: ''
    }
  },
  methods: {
    openPdf(item) {
      const baselink = 'https://leanapp.com.br/'
      this.link = baselink.concat(item).concat('.pdf')
      this.dialog = true
    }
  }
}
</script>

<style>
.iframe-height{
  height: 92.5vh;
}

</style>
