<template>
  <q-layout view="lHh Lpr lFf" id="app">
    <q-layout-header>
      <q-toolbar
        v-if="hiddenOnScreen"
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
          ชื่อโครงการ - ไม่ระบุ
        </q-toolbar-title>

        <div>
          <q-chip small icon="check_circle" size="8px">Quasar v{{ $q.version }}</q-chip>&nbsp;
          <q-btn flat dense icon="exit_to_app" title="Sign out" @click="logoutAction"></q-btn>
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-if="hiddenOnScreen"
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list separator bordered align="center">
        <q-list-header>
          <span style="font-size: 18px;">Solar Pump System</span>
        </q-list-header>
        <q-item>
          <q-item-side>
            <q-item-tile avatar>
              <img src="../assets/logo.png">
            </q-item-tile>
          </q-item-side>

          <q-item-main>
            <div class="row">
              <div class="col">
                <span style="font-size: 20px;">{{ Auth.username }}</span><br>
                <span><b style="color: secondary; font-size: 10px;">ONLINE&nbsp;&nbsp;<q-icon color="secondary" name="check_circle" /></b></span>
              </div>
              <div class="col" align="center">
                <q-btn
                  title="ตั้งค่าบัญชีผู้ใช้"
                  to="/AccountSetting"
                >
                  <q-icon name="settings" /><span></span>
                </q-btn>
              </div>
            </div>
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

        <q-item clickable to="/PumpingSystem" v-if="isAdmin || isUser">
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
            <q-item-tile label>
              รายการแจ้งเตือน
              <q-chip color="warning" detail small icon="alarm">
                <span>4</span>
              </q-chip>
            </q-item-tile>
          </q-item-main>
        </q-item>

        <q-item clickable to="/ManageUsers" v-if="isAdmin">
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

         <q-item clickable to="/SystemNotification" v-if="isAdmin">
          <q-item-side icon="notification_important"></q-item-side>
          <q-item-main>
            <q-item-tile label>
              ระบบแจ้งเตือน
              <q-chip color="warning" detail small icon="alarm">
                <span>10</span>
              </q-chip>
            </q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/Overview" v-if="isAdmin || isUser">
          <q-item-side icon="insert_chart"></q-item-side>
          <q-item-main>
            <q-item-tile label>รายงานสรุปผล</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/Feedback" v-if="isGuest">
          <q-item-side icon="feedback"></q-item-side>
          <q-item-main>
            <q-item-tile label>แจ้งปัญหาการใช้งาน</q-item-tile>
            <!-- <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile> -->
          </q-item-main>
        </q-item>

        <q-item clickable to="/ProjectManage" v-if="isAdmin">
          <q-item-side icon="insert_chart"></q-item-side>
          <q-item-main>
            <q-item-tile label>กลับหน้าระบบจัดการโครงการ</q-item-tile>
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
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      hiddenOnScreen: true
    }
  },
  computed: {
    isAdmin () { return this.$store.getters.isAdmin },
    isUser () { return this.$store.getters.isUser },
    isGuest () { return this.$store.getters.isGuest },
    Auth () { return this.$store.state.auth },
    isAuth () { return this.$store.getters.isAuthenticated }
  },
  mounted() {
    var path = window.location.hash
    this.checkLocationPath(path)
  },
  watch: {
    '$route': function () {
      var path = window.location.hash
      this.checkLocationPath(path)
    },
    'isAuth': function () {
      this.checkAuth()
    }
  },
  methods: {
    checkLocationPath (path) {
      if (String(path).match(/Login*/) || String(path).match(/Register*/)) {
        this.hiddenOnScreen = false
      } else {
        this.checkAuth()
        this.hiddenOnScreen = true
      }
    },
    checkAuth () {
      if (!this.isAuth) {
        this.$router.push('/Login')
      }
    },
    logoutAction () {
      this.$store.dispatch('logout')
    }
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
  hr {
    border: 1px dotted #87C5D0;
  }
</style>
