<template>
  <q-layout view="lHh Lpr lFf" id="app">
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Solar Pump - WebApplication
        </q-toolbar-title>

        <div>Develop by&nbsp;<q-chip icon="check_circle" size="10px">Quasar v{{ $q.version }}</q-chip></div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list separator bordered>
        <q-list-header>รายงาน</q-list-header>
        <q-item clickable to="/Home">
          <q-item-side icon="home"></q-item-side>
          <q-item-main>
            <q-item-tile label>ภาพรวม</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/Electricity">
          <q-item-side icon="flash_on"></q-item-side>
          <q-item-main>
            <q-item-tile label>ไฟฟ้า</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/WaterFlow">
          <q-item-side icon="waves"></q-item-side>
          <q-item-main>
            <q-item-tile label>น้ำ</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

      </q-list>

      <q-list separator bordered>
        <q-list-header>ทั่วไป</q-list-header>
        <q-item clickable to="/ManageUsers">
          <q-item-side icon="assignment_ind"></q-item-side>
          <q-item-main>
            <q-item-tile label>จัดการผู้ใช้</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/Setting">
          <q-item-side icon="build"></q-item-side>
          <q-item-main>
            <q-item-tile label>ตั้งค่า</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view class="margin-view" />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Sarabun');
  #app {
    font-family: 'Sarabun', sans-serif;
  }
  .margin-view {
    margin: 1% 1% 0 1%;
  }
</style>
