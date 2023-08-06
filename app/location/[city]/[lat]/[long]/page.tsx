"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CalloutCard from '@/components/CalloutCard';

type Props = {
  params: {
    city: string,
    lat: string,
    long: string,
    
  }
}



function SportsPage({ params: { city, lat, long }}: Props) {
  return (
    <div>
      {/* <InformationPanel /> */}
      <div>
        <div className='p-5'>
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
            Last Updated at: {''}
            {new Date().toLocaleString()}
            </p>
          </div>
        </div>


        <div>
          <CalloutCard 
          message='This is where GPT summary will be'/>
        </div>
        <div className="container">
         
        </div>
      </div>
    </div>
  )
}

export default SportsPage


// api key GET https://newsapi.org/v2/top-headlines?q=sports&country=us&apiKey=c39291df01d444dd91ce27ae5428f113