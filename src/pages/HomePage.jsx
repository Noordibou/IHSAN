import React from 'react'
import HomeBackgroundImage from '../components/home/BackgroundImage'
import Mission from '@/components/home/Mission'
import Events from '@/components/opportunities/Events'
import ContactMe from '@/components/contact/Contact'

export default function HomePage() {
  return (
    <div className=" flex flex-col items-center">
      
        <HomeBackgroundImage />
        <Mission />
        <Events />
        <ContactMe />
    </div>
  )
}
