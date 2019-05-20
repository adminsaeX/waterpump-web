<template>
    <div>
        <q-list>
            <q-collapsible icon="assignment" label="กรองข้อมูลรายงาน" v-model="seacrhCollapsiblePanel">
                <div>
                    <q-field
                        icon="find_in_page"
                        helper="ประเภทข้อมูลรายงาน"
                    >
                         <q-select
                            v-model="search.reportType"
                            :options="reportTypeOptions"
                        />
                    </q-field>

                    <q-field
                        icon="find_in_page"
                        helper="รายการปั้มน้ำ"
                    >
                         <q-select
                            v-model="search.SolarPump"
                            :options="SolarPumpOptions"
                        />
                    </q-field>

                    <div class="row gutter-lg">
                        <div class="col">
                            <q-field
                                icon="event"
                                helper="วันเริ่มต้น"
                            >
                                <q-datetime v-model="search.date_start" @change="checkDateStartData" type="date" />
                            </q-field>

                        </div>
                        <div class="col">
                            <q-field
                                icon="event"
                                helper="วันสิ้นสุด"
                            >
                                <q-datetime v-model="search.date_end" @change="checkDateEndData" type="date" />
                            </q-field>
                        </div>
                    </div>
                    <div align="right">
                        <q-btn
                            color="primary"
                            icon="autorenew"
                            outline
                            @click="loadReportData"
                        >
                            &nbsp;ประมวลผล
                        </q-btn>
                        &nbsp;
                        <q-btn
                            color="red"
                            icon="clear"
                            outline
                            @click="clearSearchData"
                        >
                            &nbsp;ล้าง
                        </q-btn>
                    </div>
                </div>
            </q-collapsible>
        </q-list>
        <br><hr><br>
        <div>
            <highcharts :options="chartOptions"></highcharts>
        </div>
    </div>
</template>
<script>
import * as convert from '../untilities/convertor'
export default {
    data () {
        return {
            search: initData(),
            seacrhCollapsiblePanel: true,
            reportTypeOptions: this.$store.state.reportType,
            SolarPumpOptions: this.$store.state.solarPump,
            chartOptions: {
                series: [
                    {
                        data: [1, 2, 3] 
                    },
                    {
                        data: [1, 2, 4]
                    }
                ],
                title: {
                    align: 'left',
                    text: 'Solar WaterPump - Overview'
                }
            }
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
        checkDateStartData () {
            if (this.search.date_start > this.search.date_end) {
                this.search.date_end = this.search.date_start
            }
        },
        checkDateEndData () {
            if (this.search.date_end < this.search.date_start) {
                this.search.date_start = this.search.date_end
            }
        },
        loadReportData () {
            var date = {
                date_start: convert.convertDateTime(this.search.date_start),
                date_end: convert.convertDateTime(this.search.date_end)
            }

            this.$store.dispatch('GetReportData', { search: this.search, date}).then((response) => {
                console.log('response', response);
                
                // this.chartOptions.series = []
                // for (var i in response) {
                //     this.chartOptions.series.push(response[i])
                // }
            })
        },
        clearSearchData () {
            this.search = initData()
        }
    },
}
const initData = () => {
    return {
        date_start: new Date(),
        date_end: new Date(),
        reportType: 'DC_Amp',
        SolarPump: 'SolarPumping@Solarpump01'
    }
}
</script>