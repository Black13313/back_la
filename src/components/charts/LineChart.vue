<script setup lang="ts">
import {Bar, Line} from 'vue-chartjs'
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend} from 'chart.js'

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)

const users = [
  {month: 'Jan', allUser: 100, newUser: 30, closeUser: 5},
  {month: 'Feb', allUser: 130, newUser: 50, closeUser: 7},
  {month: 'Mar', allUser: 180, newUser: 48, closeUser: 0},
  {month: 'Apr', allUser: 228, newUser: 23, closeUser: 15},
]
const colors = {
  allUser: '#2a89e5',
  newUser: '#84e52a',
  closeUser: '#b2b2b2',
}

const extrackData = (data: any[]) => {
  const dataToShow = []
  const labels = Object.keys(data[0]).splice(1, 3)

  for (let i of labels) {
    dataToShow.push({
      label: i,
      backgroundColor: colors[i],
      data: data.map((x: any) => x[i]),
    })
  }

  return dataToShow
}

const chartData = {
  labels: users.map((u: any) => u.month),
  datasets: extrackData(users)
}

const chartOptions = {
  responsive: true
}
</script>

<template>
  <Line :data="chartData"
       :options="chartOptions"/>
</template>

<style scoped>

</style>