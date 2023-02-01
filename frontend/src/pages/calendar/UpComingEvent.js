import React from 'react'
const events = [
  { name: 'Today', doc: 'Medicine at 2:30 pm ' },
  { name: 'Today', doc: 'Medicine at 2:30 pm ' },
  { name: 'Today', doc: 'Medicine at 2:30 pm ' },
  { name: 'Today', doc: 'Medicine at 2:30 pm ' },
  { name: 'Today', doc: 'Medicine at 2:30 pm ' },
]
export default function UpComingEvent() {
  return (
    <div className="flex-0 w-96 mx-5">
      <div className="bg-secondaryColor_lace w-full py-8 px-4 flex border rounded-lg border-none">
        <span className="text-2xl flex-1">Upcoming Schedule</span>
        <span className="text-linearColor_green">View all</span>
      </div>
      <div className="divide-y  px-5 bg-white border border-none rounded-lg">
        {events.map((event) => (
          <div className=" bg-white flex py-5 px-4">
            <div className="flex-1">
              <div className="text-xl font-semibold	">{event.name}</div>
              <div>{event.doc}</div>
            </div>
            <div className="text-gray underline-offset-1">
              <span> Remove</span> <span>Edit </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
