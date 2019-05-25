<template>
    <q-layout>
        <template>
            <q-list>
                <q-collapsible icon="assignment" label="กรองข้อมูลรายงานข้อมูลไฟฟ้า" v-model="collapsible">
                    <div class="row  gutter-md">
                        <div class="col">
                            <q-input
                                v-model="sFullname"
                                type="text"
                                clearable
                                float-label="ค้นหาจากรายชื่อ"
                            />
                        </div>
                        <div class="col">
                            <q-input
                                v-model="sSubDistrict"
                                type="text"
                                clearable
                                float-label="ค้นหาจากตำบล"
                            />
                        </div>
                        <div class="col">
                            <q-input
                                v-model="sDistrict"
                                type="text"
                                clearable
                                float-label="ค้นหาจากอำเภอ"
                            />
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
                        <div class="col" align="right">
                            <q-btn
                                color="positive"
                                outline
                            >
                                <q-icon name="add" /> เพิ่มผู้ใช้
                            </q-btn>
                            &nbsp;
                            <q-btn
                                color="negative"
                                outline
                            >
                                <q-icon name="clear" /> ลบผู้ใช้
                            </q-btn>
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
            sFullname: '',
            sSubDistrict: '',
            sDistrict: '',
            filter: '',
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
        'sFullname': function () {
            this.searchDataTable(this.sFullname)
        },
        'sSubDistrict': function () {
            this.searchDataTable(this.sSubDistrict)
        },
        'sDistrict': function () {
            this.searchDataTable(this.sDistrict)
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
        },
        generateDataTable () {
            var data = this.tableData
            var subDistrict = ['บ้านพร้าว', 'หนองบัว', 'หนองภัยศูนย์', 'โพธิ์ชัย', 'หนองสวรรค์', 'หัวนา', 'บ้านขาม', 'นามะเฟือง']
            for (var i = 2; i< 939; i++) {
                var num = Math.floor((Math.random() * 999999) + 100000)
                data.push({
                    id: 'U-'+num,
                    fullname: 'NAME '+num,
                    address: '1000/'+Math.floor((Math.random() * 20) + 10),
                    subDistrict: subDistrict[Math.floor((Math.random() * 8) + 0)],
                    district: 'เมือง',
                    province: 'หนองบัวลำภู',
                    username: 'username'+i,
                    tel: '09' + Math.floor((Math.random() * 99999999) + 10000000),
                    status: 'ใช้งาน'
                })
            }
        }
    },
}
const initColumn = () => {
    return [
        {
            field: 'id',
            name: 'id',
            label: 'ไอดี',
            align: 'left',
            sortable: true
        },
        {
            field: 'fullname',
            name: 'fullname',
            label: 'ชื่อ - นามสกุล',
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
            field: 'tel',
            name: 'tel',
            label: 'เบอร์โทร.',
            align: 'left',
            sortable: true
        },
        {
            field: 'username',
            name: 'username',
            label: 'ชื่อผู้ใช้งาน',
            align: 'left',
            sortable: true
        },
        {
            field: 'status',
            name: 'status',
            label: 'สถานะ',
            align: 'left',
            sortable: true
        }
    ]
}
const initVisibleColumns = () => {
    return [
        'id',
        'fullname',
        'address',
        'subDistrict',
        'district',
        'province',
        'tel',
        'username',
        'status'
    ]
}
</script>