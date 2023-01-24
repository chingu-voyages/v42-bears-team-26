import React from 'react'
import Button from '../../../components/Button'
import hero_img from '../imgs/hero_img.jpg'

function HeroSection() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero_img})` }}
        className="bg-cover text-primaryColor flex flex-col items-center gap-12 py-[15rem] col-span-1 row-span-2 text-center"
      >
        <h1 className="text-4xl font-bold">
          Take the havoc out of Health Monitoring
        </h1>
        <p className="text-1xl px-12 font-thin">
          Easy access, one source truth for consolidated health data, insight
          tool for health management & sharing with doctors and carers
        </p>
        <Button
          className="primary1"
          lable="Patient"
          onClick={() => alert('ya3')}
        />
      </div>
    </>
  )
}

export default HeroSection
