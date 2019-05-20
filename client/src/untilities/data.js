/* eslint-disable */
const reportType = [
    { id: 'DC_Amp', label: 'แรงดันไฟฟ้า' },
    { id: 'DC_Volt', label: 'กระแสไฟฟ้า' },
    { id: 'DC_Watt', label: 'กำลังไฟฟ้า' },
    { id: 'DC_kWattH', label: 'พลังงานไฟฟ้า' },
    { id: 'Flow_Rate', label: 'การไหลของน้ำ' }
]

export const getReportType = () => {
    return reportType
}
