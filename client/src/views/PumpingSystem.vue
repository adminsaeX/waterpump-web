<template>
    <q-layout>
        <template>
            <q-list>
                <q-collapsible icon="assignment" label="กรองข้อมูลรายงานข้อมูลไฟฟ้า" v-model="collapsible">
                    <div class="row  gutter-md">
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
                                <q-icon name="add" /> เพิ่มอุปกรณ์
                            </q-btn>
                            &nbsp;
                            <q-btn
                                color="negative"
                                outline
                            >
                                <q-icon name="clear" /> ลบอุปกรณ์
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
                    dateSetup: `2019/${Math.floor((Math.random() * 12) + 1)}/` + Math.floor((Math.random() * 20) + 10),
                    serialNoPump: 'SNP-'+num,
                    serialNoInverter: 'SNIVT-' + num,
                    admin: 'admin'+i,
                    adminTel: '09' + Math.floor((Math.random() * 99999999) + 10000000)
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
            label: 'Serial No.',
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
            field: 'dateSetup',
            name: 'dateSetup',
            label: 'วันที่ติดตั้ง',
            align: 'left',
            sortable: true
        },
        {
            field: 'serialNoPump',
            name: 'serialNoPump',
            label: 'Serial No. Pump',
            align: 'left',
            sortable: true
        },
        {
            field: 'serialNoInverter',
            name: 'serialNoInverter',
            label: 'Serial No. Inverter',
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
            field: 'adminTel',
            name: 'adminTel',
            label: 'เบอร์โทร.ผู้ดูแล',
            align: 'left',
            sortable: true
        }
    ]
}
// const initData = () => {
//     return [
//         {
//             serialNo: 'SN0001',
//             address: '1000/1',
//             subDistrict: 'บ้านพร้าว',
//             district: 'เมือง',
//             province: 'หนองบัวลำภู',
//             dateSetup: '2019/05/23',
//             serialNoPump: 'SNP0001',
//             serialNoInverter: 'SNIVT0001',
//             admin: 'admin001',
//             adminTel: '0900000001'
//         }
//     ]
// }
const initVisibleColumns = () => {
    return [
        'serialNo',
        'address',
        'subDistrict',
        'district',
        'province',
        'dateSetup',
        'serialNoPump',
        'serialNoInverter',
        'admin',
        'adminTel'
    ]
}
</script>