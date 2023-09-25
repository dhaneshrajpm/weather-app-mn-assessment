import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

const Speedometer = ({ humidity }) => {
  return (
    <>
      <h3>Humidity</h3>
      <ReactSpeedometer
        width={200}
        height={150}
        minValue={0}
        maxValue={100}
        value={humidity}
        needleColor="steelblue"
        startColor="lightgreen"
        endColor="red"
        segments={10}
      />
    </>
  )
}

export default Speedometer