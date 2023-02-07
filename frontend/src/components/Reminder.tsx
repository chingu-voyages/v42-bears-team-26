import React from 'react'
import Button from './Button'

const reminderList = [
  {
    medicineName: 'Medicine A',
    time: '2:30',
    taken: false,
  },
  {
    medicineName: 'Medicine B',
    time: '3:30',
    taken: false,
  },
  {
    medicineName: 'Medicine C',
    time: '5:30',
    taken: false,
  },
]

function Reminder() {
  console.log(reminderList)

  return (
    <>
      <div className="bg-secondaryColor_aegean text-primaryColor_white flex flex-col gap-6 py-6 rounded mx-10">
        <section className="flex flex-col items-center">
          <span>Daily</span>
          <h1 className="font-bold text-2xl">Reminder</h1>
        </section>

        <section className="flex flex-row justify-center gap-10">
          {reminderList.map((item) => {
            return (
              <div className="flex flex-col items-center gap-4">
                <h2>
                  {item.medicineName} at {item.time}
                </h2>
                <Button
                  label="Taken"
                  onClick={() => alert(item.taken)}
                  className="py-2 px-4 rounded-full text-primaryColor_white w-[100px] bg-secondaryColor_denim"
                />
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default Reminder
