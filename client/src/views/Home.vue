<template>
  <q-layout>
    <template>
      <div class="row gutter-xs">
        <div class="col-lg-8 col-sm-12 col-xs-12">
          <q-card>
            <q-card-title>แผนที่เครื่องสูบน้ำ</q-card-title>
            <q-card-separator/>
            <q-card-main>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-lg-4 col-sm-12 col-xs-12">
          <q-card>
            <q-card-title>รายการแจ้งเตือนล่าสุด</q-card-title>
            <q-card-separator/>
            <q-card-main>
              <q-list highlight v-for="(item, index) in 3" v-bind:key="index">
                <q-item>
                  <q-item-side icon="notification_important" color="secondary" />
                  <q-item-main :label="`การแจ้งเตือน ${index + 1}`" />
                </q-item>
              </q-list>
            </q-card-main>
          </q-card>
          <br>
          <q-card v-if="isAdmin">
            <q-card-title>รายชื่อผู้ใช้งานออนไลน์</q-card-title>
            <q-card-separator/>
            <q-card-main>
             <q-list highlight v-for="(item, index) in 3" v-bind:key="index">
                <q-item>
                  <q-item-side icon="account_circle" color="secondary" />
                  <q-item-main :label="`ผู้ใช้ ${index + 1}`" />
                </q-item>
              </q-list>
            </q-card-main>
          </q-card>
          <br>
          <q-card v-if="isGuest || isUser">
            <q-card-title>รายละเอียดอุปกรณ์</q-card-title>
            <q-card-separator/>
            <q-card-main>
             <q-list highlight v-for="(item, index) in 3" v-bind:key="index">
                <q-item>
                  <q-item-side icon="phonelink_setup" color="secondary" />
                  <q-item-main :label="`ชื่อกลุ่ม ${index + 1}`" />
                  <q-item-main :label="`สถานที่ตั้ง ${index + 1}`" />
                  <q-item-main :label="`ผู้ดูแล ${index + 1}`" />
                  <q-item-main :label="`เบอร์โทร ${index + 1}`" />
                </q-item>
              </q-list>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-lg-4 col-sm-12 col-xs-12">
          <q-card>
            <q-card-title>พลังงานไฟฟ้า</q-card-title>
            <q-card-separator/>
            <q-card-main>
              <div align="center">
                <h4>202.8 KWh.</h4>
              </div>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-lg-4 col-sm-12 col-xs-12">
          <q-card>
            <q-card-title>ปริมาณน้ำ</q-card-title>
            <q-card-separator/>
            <q-card-main>
              <div align="center">
                <h4>5,8312.94 ลิตร</h4>
              </div>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-lg-4 col-sm-12 col-xs-12">
          <q-card>
            <q-card-title>ค่าเฉลี่ยอุณหภูมิ และความชื้น</q-card-title>
            <q-card-separator/>
            <q-card-main>
              <div class="row" align="center">
                <div class="col">
                  <h4>202.8 °C</h4>
                </div>
                <div class="col">
                  <h4>100 %RH</h4>
                </div>
              </div>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </template>
  </q-layout>
</template>

<style>
</style>

<script>
export default {
  computed: {
    isAdmin () { return this.$store.getters.isAdmin },
    isUser () { return this.$store.getters.isUser },
    isGuest () { return this.$store.getters.isGuest },
    Auth () { return this.$store.state.auth },
    isAuth () { return this.$store.getters.isAuthenticated }
  }
}
</script>
<style>
  .mapouter {
    position: relative;
    text-align: right;
    height: 575px;
    width: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;
  }
</style>