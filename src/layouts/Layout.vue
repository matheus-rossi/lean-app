<template>
  <q-layout view="hHh lpR lFr">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>

          </q-avatar>
          Lean App
        </q-toolbar-title>

        <q-btn dense flat round icon="timer" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile">
      <LeftDrawer></LeftDrawer>
    </q-drawer>

    <q-drawer v-model="right" side="right" overlay behavior="mobile">
      <RightDrawer></RightDrawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import LeftDrawer from '../components/drawer/LeftDrawer.vue'
import RightDrawer from '../components/drawer/RightDrawer.vue'

export default {
  name: 'MyLayout',
  data () {
    return {
      left: true,
      right: false
    }
  },
  components: {
    LeftDrawer,
    RightDrawer
  }
}
</script>

<style>
</style>
