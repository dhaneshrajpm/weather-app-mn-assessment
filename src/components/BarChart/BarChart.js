import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ temperature }) => {
  return (
    <>
      <h3>Temperature</h3>
      <Bar
        data={{
          labels: ['Temperature (°C)'],
          datasets: [
            {
              label: 'Temperature (°C)',
              data: [(temperature - 273.15).toFixed(2)],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        }}
      />
    </>
  )
}

export default BarChart