import React from 'react'
import Button from '../../../components/Button'
import hero_img from '../../../../assets/hero_img.jpg'

function HeroSection() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero_img})` }}
        className="bg-cover text-primaryColor_white flex flex-col items-center gap-12 py-[15rem] col-span-1 row-span-2 text-center"
      >
        <h1 className="text-5xl font-bold">
          Take the havoc out of Health Monitoring
        </h1>
        <p className="text-xl px-12 text-primaryColor_white font-light max-w-3xl">
          Easy access, one source truth for consolidated health data, insight
          tool for health management & sharing with doctors and carers
        </p>
        <Button className="primary1" label="Patient" />
      </div>
    </>
  )
}

export default HeroSection
