<template>
    <q-layout>
        <template>
            <q-list>
                <q-collapsible icon="assignment" label="กรองข้อมูลรายงานข้อมูลไฟฟ้า" v-model="collapsible">
                    <div class="row  gutter-md">
                        <div class="col">
                            <q-field
                                icon="event"
                                helper="วันเริ่มต้น"
                            >
                                <q-datetime v-model="date_start" type="date" />
                            </q-field>
                        </div>
                        <div class="col">
                            <q-field
                                icon="event"
                                helper="วันสิ้นสุด"
                            >
                                <q-datetime v-model="date_end" type="date" />
                            </q-field>
                        </div>
                    </div>
                    <br>
                    <div class="row gutter-md">
                        <div class="col">
                            <span>
                                <q-select
                                    align="center"
                                    width="50%"
                                    prefix="จำนวนรายการ"
                                    v-model="paginationPage"
                                    :options="selectOptions"
                                    suffix="รายการต่อหน้า"
                                />
                            </span>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </q-collapsible>
            </q-list>
        </template>
        <br>
        <template>
            <q-table
                title="Table Title"
                :data="tableData"
                :columns="columns"
                :filter="filter"
                row-key="serialNo"
                :pagination.sync="pagination"
                :visible-columns="visibleColumns"
            />
        </template>
    </q-layout>
</template>
<script>
/* eslint-disable */
export default {
    data () {
        return {
            filter: '',
            date_start: new Date(),
            date_end: new Date(),
            collapsible: true,
            columns: initColumn(),
            tableData: [],
            dataTemp: [],
            paginationPage: 10,
            visibleColumns: initVisibleColumns(),
            pagination: {
                sortBy: 'serialNo',
                descending: false,
                page: 1,
                rowsPerPage: 10
            },
            selectOptions: [
                {
                    label: '5',
                    value: 5
                },
                {
                    label: '10',
                    value: 10
                },
                {
                    label: '15',
                    value: 15
                },
                {
                    label: '20',
                    value: 20
                },
                {
                    label: '50',
                    value: 50
                },
                {
                    label: '100',
                    value: 100
                },
                {
                    label: 'ทั้งหมด',
                    value: -1
                }
            ]
        }
    },
    watch: {
        'date_start': function () {
            this.searchDataTable(this.date_start)
        },
        'date_end': function () {
            this.searchDataTable(this.date_end)
        },
        'paginationPage': function () {
            this.pagination.rowsPerPage = this.paginationPage
        }
    },
    created() {
        this.generateDataTable()
    },
    methods: {
        searchDataTable (keyword) {
            this.filter = keyword
            // console.log(keyword);
            // if (keyword != '') {
            //     this.dataTemp = this.tableData
            //     this.tableData = this.tableData.filter(data => String(data[`${mode}`]) == String(keyword))
            // } else {
            //     this.generateDataTable()
            // }
        },
        generateDataTable () {
            var data = this.tableData
            var subDistrict = ['บ้านพร้าว', 'หนองบัว', 'หนองภัยศูนย์', 'โพธิ์ชัย', 'หนองสวรรค์', 'หัวนา', 'บ้านขาม', 'นามะเฟือง']
            for (var i = 2; i< 939; i++) {
                var num = Math.floor((Math.random() * 999999) + 100000)
                data.push({
                    serialNo: 'SN-'+num,
                    address: '1000/'+Math.floor((Math.random() * 20) + 10),
                    subDistrict: subDistrict[Math.floor((Math.random() * 8) + 0)],
                    district: 'เมือง',
                    province: 'หนองบัวลำภู',
                    admin: 'admin'+i,
                    dateNoti: `2019/${Math.floor((Math.random() * 12) + 1)}/` + Math.floor((Math.random() * 20) + 10),
                    notiNote: 'note code ' + Math.floor((Math.random() * 99999999) + 10000000)
                })
            }
        }
    },
}
const initColumn = () => {
    return [
        {
            field: 'serialNo',
            name: 'serialNo',
            label: 'Serial',
            align: 'left',
            sortable: true
        },
        {
            field: 'address',
            name: 'address',
            label: 'ที่อยู่',
            align: 'left',
            sortable: true
        },
        {
            field: 'subDistrict',
            name: 'subDistrict',
            label: 'ตำบล',
            align: 'left',
            sortable: true
        },
        {
            field: 'district',
            name: 'district',
            label: 'อำเภอ',
            align: 'left',
            sortable: true
        },
        {
            field: 'province',
            name: 'province',
            label: 'จังหวัด',
            align: 'left',
            sortable: true
        },
        {
            field: 'admin',
            name: 'admin',
            label: 'ผู้ดูแล',
            align: 'left',
            sortable: true
        },
        {
            field: 'dateNoti',
            name: 'dateNoti',
            label: 'วันที่แจ้งเตือน',
            align: 'left',
            sortable: true
        },
        {
            field: 'notiNote',
            name: 'notiNote',
            label: 'รายละเอียดแจ้งเตือน',
            align: 'left',
            sortable: true
        }
    ]
}
const initVisibleColumns = () => {
    return [
        'serialNo',
        'address',
        'subDistrict',
        'district',
        'province',
        'admin',
        'dateNoti',
        'notiNote',
    ]
}
</script>