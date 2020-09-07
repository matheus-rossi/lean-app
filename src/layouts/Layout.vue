<template>
  <q-layout view="hHh lpR lFr">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Lean App - 0.1
        </q-toolbar-title>

        <q-btn dense flat round icon="timer" @click="taktTimePopUp = !taktTimePopUp" />
        <q-btn dense flat round icon="perm_identity" @click="showUser = !showUser"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile">
      <LeftDrawer></LeftDrawer>
    </q-drawer>

    <q-dialog v-model="taktTimePopUp" seamless position="bottom">
      <TaktTime></TaktTime>
    </q-dialog>

    <q-dialog v-model="showUser">
      <UserDialog></UserDialog>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import LeftDrawer from '../components/drawer/LeftDrawer.vue'
import TaktTime from '../components/popUp/taktTIme.vue'
import UserDialog from '../components/dialogs/User.vue'

export default {
  name: 'MyLayout',
  data () {
    return {
      left: false,
      taktTimePopUp: false,
      showUser: false
    }
  },
  components: {
    LeftDrawer,
    TaktTime,
    UserDialog
  }
}
</script>

<style>
</style>
