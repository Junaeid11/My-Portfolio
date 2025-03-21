import MyEducation from '@/components/modules/Home/Education'
import Feature from '@/components/modules/Home/FeatureProject'
import HeroBanner from '@/components/modules/Home/HeroSection'
import TechStack from '@/components/shared/Skillbar'



import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <TechStack />
      <MyEducation />
      <Feature />

    </div>
  )
}

export default Home
