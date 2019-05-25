/* eslint-disable */
const reportType = [
    { id: 'DC_Amp', label: 'แรงดันไฟฟ้า' },
    { id: 'DC_Volt', label: 'กระแสไฟฟ้า' },
    { id: 'DC_Watt', label: 'กำลังไฟฟ้า' },
    { id: 'DC_kWattH', label: 'พลังงานไฟฟ้า' }
]

const reportWaterFlowType = [
    { id: 'Flow_Rate', label: 'การไหลของน้ำ' },
    { id: 'Moisture', label: 'ความชื้น' },
    { id: 'Temperature', label: 'อุณหภูมิ' }
]

const monthList = [
    { value: 1, label: 'มกราคม' },
    { value: 2, label: 'กุมภาพันธ์' },
    { value: 3, label: 'มีนาคม' },
    { value: 4, label: 'เมษายน' },
    { value: 5, label: 'พฤษภาคม' },
    { value: 6, label: 'มิถุนายน' },
    { value: 7, label: 'กรกฎาคม' },
    { value: 8, label: 'สิงหาคม' },
    { value: 9, label: 'กันยายน' },
    { value: 10, label: 'ตุลาคม' },
    { value: 11, label: 'พฤศจิกายน' },
    { value: 12, label: 'ธันวาคม' }
]

export const getListMonthTh = () => {
    return monthList
}

export const getReportType = () => {
    return reportType
}

export const getReportWaterFlowType = () => {
    return reportWaterFlowType
}
