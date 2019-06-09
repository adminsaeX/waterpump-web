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
                                @click="openedPumpModal = true" 
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
            >
               <q-tr slot="body" slot-scope="props" :props="props">
                   <q-td align="center">
                       <q-checkbox v-model="serialNoSelected" :val="props.row.serialNo" />
                   </q-td>
                    <q-td><u style="cursor: pointer" @click="$router.push(`/PIDiagrame/${props.row.serialNo}`)" target="_blank" rel="noopener noreferrer">{{ (props.row.serialNo) }}</u></q-td>
                    <q-td>{{ props.row.address }}</q-td>
                    <q-td>{{ (props.row.subDistrict) }}</q-td>
                    <q-td>{{ (props.row.district) }}</q-td>
                    <q-td>{{ (props.row.province) }}</q-td>
                    <q-td>{{ (props.row.dateSetup) }}</q-td>
                    <q-td>{{ (props.row.serialNoPump) }}</q-td>
                    <q-td>{{ (props.row.serialNoInverter) }}</q-td>
                    <q-td>{{ (props.row.admin) }}</q-td>
                    <q-td>{{ (props.row.adminTel) }}</q-td>
                </q-tr>
            </q-table>
        </template>
        <template>
            <q-modal v-model="openedPumpModal" no-backdrop-dismiss no-esc-dismiss :content-css="{minWidth: '80vw', minHeight: '80vh'}">
                <div footer-style="{fontSize: '24px', fontWeight: 'bold'}">
                    <q-toolbar slot="header">
                        <q-toolbar-title>
                            เพิ่มอุปกรณ์
                        </q-toolbar-title>
                        <q-btn
                            color="negative"
                            round
                            icon="clear"
                            dense
                            @click="openedPumpModal = false"
                        />
                    </q-toolbar>
                    <div class="layout-padding">
                        <span>ลงทะเบียนอุปกรณ์</span><br>
                        <q-field
                            label="Device Id"
                        >
                            <q-input
                                v-model="form"
                                placeholder="Device Id"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="Project Id"
                        >
                            <q-input
                                v-model="form"
                                placeholder="Project Id"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="Device Description"
                        >
                            <q-input
                                v-model="form"
                                placeholder="Device Description"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="Device Credentials"
                        >
                            <q-input
                                v-model="form"
                                placeholder="Device Credentials"
                                type="text"
                            />
                        </q-field>
                        <br>
                        <div class="row">
                            <div class="col-6"></div>
                            <div class="col-6">
                                <q-btn color="green" icon="autorenew">&nbsp;Generate Random Credentials</q-btn>
                            </div>
                        </div>
                        <br>
                        <q-field
                            label="Serial Number Inverter"
                        >
                            <q-input
                                v-model="form"
                                placeholder="Serial Number Inverter"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="Serial Number Pump"
                        >
                            <q-input
                                v-model="form"
                                placeholder="Serial Number Pump"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="สถานที่ติดตั้ง ชื่อกลุ่ม"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ชื่อกลุ่ม"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="ที่อยู่"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ที่อยู่"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="ตำบล"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ตำบล"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="อำเภอ"
                        >
                            <q-input
                                v-model="form"
                                placeholder="อำเภอ"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="จังหวัด"
                        >
                            <q-input
                                v-model="form"
                                placeholder="จังหวัด"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="รหัสไปรษณีย์"
                        >
                            <q-input
                                v-model="form"
                                placeholder="รหัสไปรษณีย์"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="ประเทศ"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ประเทศ"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="พิกัด UTM"
                        >
                            <q-input
                                v-model="form"
                                type="text"
                            />
                            <q-input
                                v-model="form"
                                type="text"
                            />
                        </q-field>

                        <br><hr><br>
                        <span>ผู้ดูแล</span><br>
                        <q-field
                            label="ชื่อ - นามสกุล"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ชื่อ - นามสกุล"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="ที่อยู่"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ที่อยู่"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="ตำบล"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ตำบล"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="อำเภอ"
                        >
                            <q-input
                                v-model="form"
                                placeholder="อำเภอ"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="จังหวัด"
                        >
                            <q-input
                                v-model="form"
                                placeholder="จังหวัด"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="รหัสไปรษณีย์"
                        >
                            <q-input
                                v-model="form"
                                placeholder="รหัสไปรษณีย์"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="ประเทศ"
                        >
                            <q-input
                                v-model="form"
                                placeholder="ประเทศ"
                                type="text"
                            />
                        </q-field>
                        <br>
                        <div class="row gutter-xs">
                            <div class="col-8">
                                <q-btn color="green" icon="add" @click="openedPumpModal = false">&nbsp;เพิ่มอุปกรณ์</q-btn>
                            </div>
                            <div class="col-4 text-right">
                                <q-btn color="red" icon="close" @click="openedPumpModal = false">&nbsp;ยกเลิก</q-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </q-modal>
        </template>
    </q-layout>
</template>
<script>
/* eslint-disable */
export default {
    data () {
        return {
            openedPumpModal: false,
            form: [],
            serialNoSelected: [],
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
            label: 'เลือก',
            align: 'left',
            sortable: true
        },
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