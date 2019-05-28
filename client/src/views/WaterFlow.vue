<template>
    <div>
        <q-list>
            <q-collapsible icon="assignment" label="กรองข้อมูลรายงานข้อมูลน้ำ" v-model="seacrhCollapsiblePanel">
                <div>
                    <div class="row gutter-lg">
                        <div class="col">
                            <q-option-group
                                color="secondary"
                                type="radio"
                                inline
                                v-model="group"
                                :options="[
                                    { label: 'รายปี', value: 0 },
                                    { label: 'รายเดือน', value: 1 },
                                    { label: 'รายวัน', value: 2 }
                                ]"
                            />
                        </div>
                        <div class="col">
                            <q-field
                                v-if="group === 0"
                                icon="event"
                                helper="วันเริ่มต้น"
                            >
                                <q-select
                                    v-model="search.year"
                                    :options="optionYear"
                                />
                            </q-field>
                            <q-field
                                v-if="group === 1"
                                icon="event"
                                helper="วันเริ่มต้น"
                            >
                                <q-select
                                    v-model="search.month"
                                    :options="optionThMonth"
                                />
                            </q-field>
                            <q-field
                                v-if="group === 2"
                                icon="event"
                                helper="วันเริ่มต้น"
                            >
                                <q-datetime v-model="search.date" type="date" />
                            </q-field>
                        </div>
                    </div>

                    <div>
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
                            color="green"
                            icon="save"
                            outline
                        >
                            &nbsp;รายงาน PDF
                        </q-btn>
                        &nbsp;
                        <q-btn
                            color="green"
                            icon="save"
                            outline
                        >
                            &nbsp;ไฟล์ CSV
                        </q-btn>
                        &nbsp;
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
            <span>กราฟปริมาณน้ำ</span>
            <canvas id="chartWaterQuatity"></canvas>
        </div>
        <br>
        <div>
            <span>กราฟอัตราการไหล</span>
            <canvas id="chartWaterFlow"></canvas>
        </div>
        <br>
        <div>
            <template>
                <q-table
                    title="ตารางข้อมูลดิบ"
                    :data="tableData"
                    :columns="columns"
                    :filter="filter"
                    row-key="serialNo"
                    :pagination.sync="pagination"
                    :visible-columns="visibleColumns"
                />
            </template>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import * as convert from '../untilities/convertor'
import * as data from '../untilities/data'
import Chart from 'chart.js'
export default {
    data () {
        return {
            search: initData(),
            seacrhCollapsiblePanel: true,
            option: initChartOption(),
            group: 0,
            optionThMonth: data.getListMonthTh(),
            columns: initColumn(),
            tableData: [],
            visibleColumns: initVisibleColumns(),
            pagination: {
                sortBy: 'serialNo',
                descending: false,
                page: 1,
                rowsPerPage: 5
            }
        }
    },
    mounted() {
        this.createChart()
    },
    computed: {
        SolarPumpOptions () {
            return this.$store.state.solarPump
        },
        optionYear () {
            return this.$store.state.optionYear
        }
    },
    created() {
        this.generateDataTable()
    },
    methods: {
        generateDataTable () {
            var data = this.tableData
            var subDistrict = ['บ้านพร้าว', 'หนองบัว', 'หนองภัยศูนย์', 'โพธิ์ชัย', 'หนองสวรรค์', 'หัวนา', 'บ้านขาม', 'นามะเฟือง']
            for (var i = 2; i< 939; i++) {
                var num = Math.floor((Math.random() * 999999) + 100000)
                data.push({
                    dateTime: `2019/${Math.floor((Math.random() * 12) + 1)}/` + Math.floor((Math.random() * 20) + 10),
                    FlowRates: num,
                    quantityOfWater: 'SNIVT-' + num,
                })
            }
        },
        createChart () {
            var chartWaterQuatity = document.getElementById('chartWaterQuatity')
            new Chart(chartWaterQuatity, this.option)
           
            var chartWaterFlow = document.getElementById('chartWaterFlow')
            new Chart(chartWaterFlow, this.option)
        },
        loadReportData () {
            this.createChart()
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
        year: getThYear(new Date().getFullYear()),
        month: new Date().getMonth() + 1,
        date: new Date(),
        SolarPump: 'SolarPumping@Solarpump01'
    }
}
const getThYear = (year) => {
    return year + 543
}
const initVisibleColumns = () => {
    return [
        'dateTime',
        'FlowRates',
        'quantityOfWater'
    ]
}
const initColumn = () => {
    return [
        {
            field: 'dateTime',
            name: 'dateTime',
            label: 'วันเวลา',
            align: 'left',
            sortable: true
        },
        {
            field: 'FlowRates',
            name: 'FlowRates',
            label: 'อัตราการไฟล',
            align: 'left',
            sortable: true
        },
        {
            field: 'quantityOfWater',
            name: 'quantityOfWater',
            label: 'ปริมาณน้ำ',
            align: 'left',
            sortable: true
        }
    ]
}
</script>