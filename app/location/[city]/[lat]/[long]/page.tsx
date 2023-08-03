import React, { useEffect, useState } from 'react'
import axios from 'axios';

type Props = {
  params: {
    city: string,
    lat: string,
    long: string,
  }
}


function SportsPage({ params: { city, lat, long }}: Props) {
  const [news, setNews] = useState("")

  useEffect (() => {
    getNews()
  },[])

  const getNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?q=sports&country=us&apiKey=c39291df01d444dd91ce27ae5428f113"
    );
    setNews(response.data)
  }
  return (
    <div>Welcome to the sports page: {city} {lat} {long}</div>
  )
}

export default SportsPage


// api key GET https://newsapi.org/v2/top-headlines?q=sports&country=us&apiKey=c39291df01d444dd91ce27ae5428f113