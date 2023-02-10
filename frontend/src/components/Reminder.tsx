import React, { useState, useEffect } from 'react'
import Button from './Button'
import axios from 'axios'
import { BACKEND_URL } from '../constants'
import { useAppContext } from '../contexts/main'

export type ReminderList = {
  med_id: number
  reminder_id: number
  med_name: string
  reminder_time: string
  today_tracker: {
    date: string
    is_taken: string
  }
}

const Reminder = () => {
  const { authToken } = useAppContext()
  const [reminderList, setReminderList] = useState<ReminderList[]>([])
  const getTodayReminders = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/reminder`, {
        headers: { Authorization: authToken },
      })
      console.log(result.data.res)
      setReminderList(result.data.res)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTakenStatus = async (values: {
    reminder_id: number
    date: string
    is_taken: string
  }) => {
    await axios.put(`${BACKEND_URL}/reminder`, values)
  }

  const [toggle, setToggle] = useState(false)
  const handleClick = async (item: ReminderList) => {
    if (item.today_tracker.is_taken == 'FALSE') {
      item.today_tracker['is_taken'] = 'TRUE'
    } else {
      item.today_tracker['is_taken'] = 'FALSE'
    }
    console.log(item)
    await updateTakenStatus({
      reminder_id: item.reminder_id,
      date: item.today_tracker.date,
      is_taken: item.today_tracker.is_taken,
    })
    await setToggle(!toggle)
  }

  useEffect(() => {
    getTodayReminders()
  }, [toggle])

  return (
    <>
      <div className="bg-secondaryColor_aegean text-primaryColor_white flex flex-col gap-6 py-6 rounded mx-10">
        <section className="flex flex-col items-center">
          <span>Daily</span>
          <h1 className="font-bold text-2xl">Reminder</h1>
        </section>

        <section className="flex flex-row flex-wrap justify-center gap-10">
          {reminderList.map((item) => {
            return (
              <div className="flex flex-col items-center gap-4">
                <h2>
                  {item.med_name} at {item.reminder_time.slice(0, 5)}
                </h2>
                <Button
                  label="Taken"
                  onClick={() => handleClick(item)}
                  className={
                    item.today_tracker.is_taken == 'FALSE'
                      ? 'secondary1'
                      : 'py-2 px-4 rounded-full text-primaryColor_white w-[100px] bg-secondaryColor_denim'
                  }
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
