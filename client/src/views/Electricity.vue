<template>
    <div>
        <q-list>
            <q-collapsible icon="assignment" label="กรองข้อมูลรายงานข้อมูลไฟฟ้า" v-model="seacrhCollapsiblePanel">
                <div>
                    <div class="row gutter-lg">
                        <div class="col">
                            <q-field
                                icon="event"
                                helper="วันเริ่มต้น"
                            >
                                <q-datetime v-model="search.date_start" @change="validateDateStartData" type="date" />
                            </q-field>

                        </div>
                        <div class="col">
                            <q-field
                                icon="event"
                                helper="วันสิ้นสุด"
                            >
                                <q-datetime v-model="search.date_end" @change="validateDateEndData" type="date" />
                            </q-field>
                        </div>
                    </div>

                    <div v-if="isSearchDate">
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
            <canvas id="reportChart"></canvas>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import * as convert from '../untilities/convertor'
import Chart from 'chart.js'
export default {
    data () {
        return {
            isSearchDate: false,
            search: initData(),
            seacrhCollapsiblePanel: true,
            reportTypeOptions: this.$store.state.reportType,
            SolarPumpOptions: this.$store.state.solarPump,
            option: initChartOption()
        }
    },
    created() {
    },
    methods: {
        createChart () {
            var ctx = document.getElementById('reportChart')
            new Chart(ctx, this.option)
        },
        loadReportData () {
            var date = {
                date_start: convert.convertDateTime(this.search.date_start),
                date_end: convert.convertDateTime(this.search.date_end)
            }
            console.log('data', date)
            this.$store.dispatch('GetReportData', date).then(async (response) => {
                console.log(response);
                this.isSearchDate = true
                this.createChart()
            })
        },
        validateDateStartData () {
            if (this.search.date_start > this.search.date_end) {
                this.search.date_end = this.search.date_start
            }
        },
        validateDateEndData () {
            if (this.search.date_end < this.search.date_start) {
                this.search.date_start = this.search.date_end
            }
        },
        clearSearchData () {
            this.search = initData()
        }
    },
}
const initChartOption = () => {
    return {
        type: 'line',
        responsive: true,
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Page A',
                    data: [61, 122, 107, 73],
                    borderColor: '#6E7EF5',
                    fill: false
                },
                {
                    label: 'Page B',
                    data: [18, 170, 135, 92],
                    borderColor: '#B277DE',
                    fill: false
                },
                {
                    label: 'Page C',
                    data: [4, 111, 122, 55],
                    borderColor: '#48DD31',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true
        }
    }
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