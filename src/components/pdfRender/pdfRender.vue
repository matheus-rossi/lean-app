<template>
  <div>
    <q-card>
      <q-bar class="bg-primary text-white">
        <span>Página </span>
        <br>
        <q-input 
          v-model.number="page"
          type="number"
          dark
          style="max-width: 50px"
        >
        </q-input>
        / {{numPages}}
        <q-btn 
          @click="changeRotation" 
          icon="rotate_right"
          dense 
          flat
        >
        </q-btn>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup> 
          Fechar
        </q-btn>
      </q-bar>
      <div style="width: 50%">
        <pdf 
          ref="pdf" 
          :src="this.pdfLink" 
          :page="page" 
          :rotate="rotate" 
          @progress="loadedRatio = $event" 
          @num-pages="numPages = $event" 
          @link-clicked="page = $event">
        </pdf>
      </div>  
    </q-card>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
 
export default {
  props: [
    'pdfLink'
  ],
  components: {
    pdf
  },
  data () {
    return {
      show: true,
      src:'',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
    }
  },
  methods: {
    changeRotation () {
      this.rotate += 90
    }
  }
}
</script>