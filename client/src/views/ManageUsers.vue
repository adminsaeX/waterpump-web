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
                                @click="openedUserModal = true"
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
                row-key="id"
                :pagination.sync="pagination"
                :visible-columns="visibleColumns"
            >
                <q-tr slot="body" slot-scope="props" :props="props">
                    <q-td align="center">
                        <q-checkbox v-model="idSelected" :val="props.row.id" />
                    </q-td>
                    <q-td>{{ props.row.id }}</q-td>
                    <q-td>{{ (props.row.fullname) }}</q-td>
                    <q-td>{{ (props.row.address) }}</q-td>
                    <q-td>{{ (props.row.subDistrict) }}</q-td>
                    <q-td>{{ (props.row.district) }}</q-td>
                    <q-td>{{ (props.row.province) }}</q-td>
                    <q-td>{{ (props.row.username) }}</q-td>
                    <q-td>{{ (props.row.tel) }}</q-td>
                    <q-td>{{ (props.row.status) }}</q-td>
                </q-tr>
            </q-table>
        </template>
        <template>
            <q-modal v-model="openedUserModal" no-backdrop-dismiss no-esc-dismiss :content-css="{minWidth: '80vw', minHeight: '80vh'}">
                <div footer-style="{fontSize: '24px', fontWeight: 'bold'}">
                    <q-toolbar slot="header">
                        <q-toolbar-title>
                            ลงทะเบียนผู้ใช้งาน
                        </q-toolbar-title>
                        <q-btn
                            color="negative"
                            round
                            icon="clear"
                            dense
                            @click="openedUserModal = false"
                        />
                    </q-toolbar>
                    <div class="layout-padding">
                        <q-field
                            label="Username"
                        >
                            <q-input
                                v-model="form.username"
                                placeholder="Username"
                                type="text"
                            />
                        </q-field>
                        <q-field
                            label="Password"
                        >
                            <q-input
                                v-model="form.password"
                                placeholder="Password"
                                type="password"
                            />
                        </q-field>
                        <q-field
                            label="Re-Password"
                        >
                            <q-input
                                name="lastname"
                                v-model="form.password"
                                placeholder="Re-Password"
                                type="password"
                            />
                        </q-field>
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
                            label="เบอร์โทร."
                        >
                            <q-input
                                v-model="form"
                                placeholder="เบอร์โทร."
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
                            label="ระดับสิทธิผู้ใช้"
                        >
                            <q-select
                                v-model="form"
                                placeholder="ระดับสิทธิผู้ใช้"
                                :options="optionsUserRule"
                            />
                        </q-field>
                        <h5>เมนู</h5>
                        <div class="row gutter-xs">
                            <div class="col-8">
                                <q-btn color="green" icon="add" @click="openedUserModal = false">&nbsp;เพิ่มผู้ใช้งาน</q-btn>
                            </div>
                            <div class="col-4 text-right">
                                <q-btn color="red" icon="close" @click="openedUserModal = false">&nbsp;ยกเลิก</q-btn>
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
            form: [],
            openedUserModal: false,
            idSelected: [],
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
            optionsUserRule: [
                { value: 0, label: 'ผู้ใช้' },
                { value: 1, label: 'ผู้ดูแล' },
                { value: 2, label: 'ช่าง' },
            ],
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
    }
}
const initColumn = () => {
    return [
        {
            name: 'id',
            label: 'เลือก',
            align: 'left',
            sortable: true
        },
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
        'selected',
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