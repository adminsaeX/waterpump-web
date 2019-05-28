<template>
  <q-layout view="lHh Lpr lFf" id="app">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
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
          Project - Untitle
        </q-toolbar-title>

        <div>Develop by&nbsp;<q-chip icon="check_circle" size="10px">Quasar v{{ $q.version }}</q-chip></div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list separator bordered align="center">
        <q-list-header>
          <span style="font-size: 18px;">Solar Water Pumping</span>
        </q-list-header>
        <q-item>
          <q-item-side>
            <q-item-tile avatar>
              <img src="../assets/logo.png">
            </q-item-tile>
          </q-item-side>
          <q-item-main>
            <span style="font-size: 20px;">Username</span><br>
            <span>Status: <b style="color: green; font-size: 12px;">ONLINE&nbsp;&nbsp;<q-icon color="green" name="check_circle" /></b></span>
          </q-item-main>
        </q-item>
      </q-list>

      <q-list separator bordered>
        <q-item clickable to="/Home">
          <q-item-side icon="home"></q-item-side>
          <q-item-main>
            <q-item-tile label>หน้าหลัก</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item clickable to="/PumpingSystem">
          <q-item-side icon="swap_vertical_circle"></q-item-side>
          <q-item-main>
            <q-item-tile label>ระบบสูบน้ำ 2.5 กิโลวัตต์</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item clickable to="/PIDiagrame">
          <q-item-side icon="timeline"></q-item-side>
          <q-item-main>
            <q-item-tile label>PI - diagrame</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item clickable to="/Notification">
          <q-item-side icon="notification_important"></q-item-side>
          <q-item-main>
            <q-item-tile label>รายการแจ้งเตือน</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item clickable to="/ManageUsers">
          <q-item-side icon="assignment_ind"></q-item-side>
          <q-item-main>
            <q-item-tile label>ระบบจัดการผู้ใช้งาน</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/WaterFlow">
          <q-item-side icon="opacity"></q-item-side>
          <q-item-main>
            <q-item-tile label>ปริมาณน้ำ</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/Electricity">
          <q-item-side icon="offline_bolt"></q-item-side>
          <q-item-main>
            <q-item-tile label>พลังงานไฟฟ้า</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/TempAndHumidity">
          <q-item-side icon="filter_hdr"></q-item-side>
          <q-item-main>
            <q-item-tile label>อุณหภูมิและความชื้น</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/Overview">
          <q-item-side icon="insert_chart"></q-item-side>
          <q-item-main>
            <q-item-tile label>รายงานสรุปผล</q-item-tile>
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
  q-toolbar {
    background-color: #87C5D0;
  }
</style>
