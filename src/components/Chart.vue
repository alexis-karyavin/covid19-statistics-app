<template>
  <div class="chart-container">
    <canvas ref="canva"></canvas>
  </div>
</template>
<script>
  import Chart from 'chart.js'
  export default {
    name: "Chart",
    props: ['options', 'data'],
    data() {
      return {
        chart: null
      }
    },
    methods: {
      createChart() {
        const recoveredData = {
          label: "Recovered",
          data: this.getData(this.data.recovered),
          lineTension: 0.1,
          fill: false,
          borderColor: "#bae755",
        };

        let confirmedData = {
          label: "Confirmed",
          data: this.getData(this.data.confirmed),
          lineTension: 0.1,
          fill: false,
          borderColor: "#000000",
        };

        let chartData = {
          labels: this.getDateArr(this.data.confirmed),
          datasets: [recoveredData, confirmedData]
        };

        let chartOptions = {
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 80,
            }
          }
        };
        this.chart = new Chart(this.$refs.canva, {
          type: 'line',
          data: chartData,
          options: chartOptions
        })
      },
      update() {
        const context = this.$refs.canva.getContext('2d');
        context.clearRect(0, 0, this.$refs.canva.width, this.$refs.canva.height);
        this.createChart();
      },
      getData(data) {
        let tmp = [];
        for (let i = data.length - 1; i > 0; i--) {
          if (i === 0) {
            break;
          }
          tmp.push(data[i].Cases - data[i - 1].Cases);
        }
        return tmp;
      },
      getDateArr(data) {
        let arr = [];
        arr = data.map(item => this.getDateFormatting(item.Date))
        return arr;
      },
      getDateFormatting(dateStr) {
        const tmp = new Date(dateStr);
        const dd = String(tmp.getDate()).padStart(2, '0');
        const mm = String(tmp.getMonth() + 1).padStart(2, '0'); //January is 0!
        return dd + '.' + mm;
      }
    }

  }
</script>

<style scoped>
  .chart-container {
    margin-top: 1rem;
  }
</style>
