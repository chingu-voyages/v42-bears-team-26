import React from 'react'

import feature_img from '../imgs/feature_img.jpg'

function FeaturesSection() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 text-textColor justify-center align-start items-center gap-6 py-12 px-[6rem] col-span-1 row-span-4">
        <section className="bg-yellow-600 col-span-1 row-span-1 lg:col-span-1 lg:row-span-1">
          <img
            src={feature_img}
            alt="medical image"
            className="w-full object-fill"
          />
        </section>
        <section className="flex flex-col col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 px-10">
          <h1 className="mb-6 font-bold text-2xl">Features</h1>
          <section className="grid grid-cols-4 grid-rows-2 gap-6">
            <div className="col-span-2 row-span-1 flex flex-col">
              <div className="flex flex-row">
                <h2 className="font-semibold">Reliability</h2>
              </div>
              <p>
                Certe, inquam, pertinax non recusandae itaque earum rerum
                facilis est consec. Laudem et impetus quo aut in gravissimo
                bello animadversionis.
              </p>
            </div>
            <div className="col-span-2 row-span-1 flex flex-col">
              <div className="flex flex-row">
                <h2 className="font-semibold">Reliability</h2>
              </div>
              <p>
                Certe, inquam, pertinax non recusandae itaque earum rerum
                facilis est consec. Laudem et impetus quo aut in gravissimo
                bello animadversionis.
              </p>
            </div>
            <div className="col-span-2 row-span-2 flex flex-col">
              <div className="flex flex-row">
                <h2 className="font-semibold">Reliability</h2>
              </div>
              <p>
                Certe, inquam, pertinax non recusandae itaque earum rerum
                facilis est consec. Laudem et impetus quo aut in gravissimo
                bello animadversionis.
              </p>
            </div>
            <div className="col-span-2 row-span-2 flex flex-col">
              <div className="flex flex-row">
                <h2 className="font-semibold">Reliability</h2>
              </div>
              <p>
                Certe, inquam, pertinax non recusandae itaque earum rerum
                facilis est consec. Laudem et impetus quo aut in gravissimo
                bello animadversionis.
              </p>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}

export default FeaturesSection
