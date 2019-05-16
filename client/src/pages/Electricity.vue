<template>
  <q-page class="flex">
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-6">
          <q-select
            outlined
            v-model="search.reportType"
            :options="options"
            :option-value="(options) => options.id"
            :option-label="(options) => options.label"
            hint="ประเภทรายงาน"
            style="width: 250px; padding-bottom: 32px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  ไม่พบรายการ
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import * as getData from '../untilities/data.js'
export default {
  name: 'PageIndex',
  data () {
    return {
      dialog: {
        openDatePicker: false
      },
      options: getData.getReportType(),
      search: initialData(),
      reportData: []
    }
  },
  watch: {
    'search.reportType': function () {
      this.loadReportType()
    }
  },
  methods: {
    loadReportType () {
      // var reportType = this.search.reportType.id
      // this.$store.dispatch('getElectricityReport', reportType).then((response) => {
      //   this.reportData = response
      // })
    }
  }
}
const initialData = () => {
  return {
    reportType: {
      id: 0
    },
    date: '2019/02/01'
  }
}
</script>
