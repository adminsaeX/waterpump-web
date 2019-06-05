<template>
    <div>
        <GChart
            type="AreaChart"
            :data="chartData"
            :options="chartOptions"
        />
        <hr style="border-top: 1px dotted black">
        <div class="container">
            <img src="../assets/pi-diagram.png" alt="pi-diagram" width="100%">
            <div style="position: absolute; top: 32%; left: 7%;">การไฟฟ้า 220 VAC</div>
            <div style="position: absolute; top: 7%; left: 10%;">แผงเซลล์แสงอาทิตย์</div>
            <div style="position: absolute; top: 20%; left: 55%">อุณหภูมิ _____ °C</div>
            <div style="position: absolute; top: 24%; left: 55%">ความชื้น _____ %RH</div>
            <div style="position: absolute; top: 13%; left: 23%">แรงดันไฟฟ้า _____ V</div>
            <div style="position: absolute; top: 16%; left: 23%">กระแสไฟฟ้า _____ A</div>
            <div style="position: absolute; top: 19%; left: 23%">กำลังไฟฟ้า _____ KW</div>
            <div style="position: absolute; top: 22%; left: 23%">พลังงานไฟฟ้า _____ KWH</div>
            <div style="position: absolute; top: 35%; right: 23%;">ถังน้ำ</div>
            <div style="position: absolute; top: 27%; left: 35%;">ตู้ควบคุม</div>
            <div style="position: absolute; top: 41%; left: 48%;">อัตราการไหล _____ M<sup>3</sup>/h</div>
            <div style="position: absolute; top: 44%; left: 48%;">ปริมาณน้ำ _____ M<sup>3</sup></div>
            <div style="position: absolute; bottom: 23%; left: 53%;">Moto Hz _____ Hz</div>
            <div style="position: absolute; bottom: 20%; left: 53%;">Moto RPM _____ RPM</div>
            <div style="position: absolute; bottom: 17%; left: 53%;">Moto Status _____</div>
            <div style="position: absolute; bottom: 14%; left: 53%;">Alarm code _____</div>
        </div>
    </div>
</template>
<script>
import { GChart } from 'vue-google-charts'
export default {
    components: {
        GChart
    },
    data () {
        return {
            chartData: [],
            chartOptions: {
                chart: {
                    title: "PI - Diagrame",
                    subtitle: "Sales, Expenses, and Profit: 2014-2017"
                }
            }
        }
    },
    created() {
        this.generateDataTable()
    },
    methods: {
        generateDataTable () {
            this.tableData = []
            this.chartData = [["เวลา", "อัตราการไหล", "กำลังไฟฟ้า", "อุณหภูมิ"]]
            for (var i = 0; i< 24; i++) {
                this.chartData.push([
                    `${i}:00`, 
                    Math.floor((Math.random() * 9999) + 1000), 
                    Math.floor((Math.random() * 9999) + 1000), 
                    Math.floor((Math.random() * 9999) + 1000)])
            }
        }
    }
}
</script>
<style>
.container {
  position: relative;
  text-align: center;
  color: black;
  font-size: 10px;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 7%;
  left: 10%;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  top: 30%;
  right: 23%;
}

.centered {
  position: absolute;
  top: 28%;
  left: 39%;
  transform: translate(-50%, -50%);
}
</style>
