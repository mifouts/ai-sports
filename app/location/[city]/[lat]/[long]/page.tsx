import React from 'react'

type Props = {
  params: {
    city: string,
    lat: string,
    long: string,
  }
}

function SportsPage({ params: { city, lat, long }}: Props) {
  return (
    <div>Welcome to the sports page: {city} {lat} {long}</div>
  )
}

export default SportsPage