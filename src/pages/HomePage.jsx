import React from 'react'
import HomeBackgroundImage from '../components/home/BackgroundImage'
import Mission from '@/components/home/Mission'

export default function HomePage() {
  return (
    <div className=" flex flex-col items-center">
      
        <HomeBackgroundImage />
        <Mission />
    </div>
  )
}
