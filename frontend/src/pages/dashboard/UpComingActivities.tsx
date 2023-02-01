import React from 'react'
import '../../components/index.css'

const data = [
  {
    name: 'Restock medicine A',
    doc: 'Buy 5 packs of medicine A ',
    timeLeft: '2 days left',
  },

  {
    name: 'Blood test result',
    doc: 'Add my results to my medical document',
    timeLeft: '2 days left',
  },

  {
    name: 'Doctors appointment',
    doc: 'Go see the doctor',
    timeLeft: '1 days left',
  },
]
export default function index() {
  const color = ['linearColor_orange', 'linearColor_peacock']

  return (
    <div>
      {data.map((event) => (
        <div
          className="flex p-3 border border-radius-20 border-gray h-22 my-5"
          key={event.name}
        >
          <div
            className={`flex-initial bg-${
              color[Math.floor(Math.random() * 2) + 0]
            } rounded-full  w-24`}
          />
          <div className="flex-initial w-full p-5">
            {event.name}

            <div className="flex-initial  text-secondaryColor_slate ">
              {event.doc}
            </div>
          </div>
          <div className=" flex-none  p-2 border-white border-radius-10 h-full w- bg-secondaryColor_lace ">
            {event.timeLeft}
          </div>
        </div>
      ))}
    </div>
  )
}
