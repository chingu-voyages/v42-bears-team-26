import React from 'react'
import Button from '../../../components/Button'

function AboutSection() {
  return (
    <>
      <div className="bg-primaryBrown flex flex-col items-center gap-6 py-12 col-span-1 row-span-2 text-center text-primaryColor">
        <h1 className="text-3xl">About HealthHero</h1>
        <p className="px-[14rem]">
          In quo quaerimus, non emolumento aliquo, sed ipsius honestatis decore
          laudandis, id est et quas molestias excepturi sint, obcaecati
          cupiditate non numquam eius modi tempora incidunt, ut earum rerum hic
          tenetur a natura ipsa natura incorrupte atque integre iudicante itaque
          aiunt hanc quasi involuta aperiri.
        </p>
        <Button className="primary1" label="Create Account" />
      </div>
    </>
  )
}

export default AboutSection
