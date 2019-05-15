<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
          WaterPump WebApplication
        </q-toolbar-title>

        <div>Develop by </div><q-chip icon="check_circle" size="10px">Quasar v{{ $q.version }}</q-chip>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list separator bordered>
        <q-item-label header>รายงาน</q-item-label>

        <q-item clickable to="/Dashboard">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ภาพรวม</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/Voltage">
          <q-item-section avatar>
            <q-icon name="flash_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>แรงดันไฟฟ้า</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/Electricity">
          <q-item-section avatar>
            <q-icon name="flash_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>กระแสไฟฟ้า</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/ElectricPower">
          <q-item-section avatar>
            <q-icon name="flash_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>กำลังไฟฟ้า</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/ElectricalEnergy">
          <q-item-section avatar>
            <q-icon name="flash_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>พลังงานไฟฟ้า</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/WaterFlow">
          <q-item-section avatar>
            <q-icon name="timeline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>การไหลของน้ำ</q-item-label>
            <!-- <q-item-label caption>Overview report</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-list>

      <q-list separator bordered>
        <q-item-label header>ทั่วไป</q-item-label>
        <q-item clickable to="/ManageUsers">
          <q-item-section avatar>
            <q-icon name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label>จัดการผู้ใช้</q-item-label>
            <!-- <q-item-label caption>Overview report</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable to="/Setting">
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ตั้งค่า</q-item-label>
            <!-- <q-item-label caption>Overview report</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
