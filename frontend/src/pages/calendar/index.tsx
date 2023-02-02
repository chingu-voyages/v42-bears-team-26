import React from 'react'
// import CustomPage from '../../pages/'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './index.css'
import UpComingEvent from './UpComingEvent'
const events = [{ title: 'Test result', start: new Date() }]
export function CalendarPage() {
  return (
    <div className="bg-primaryColor_white p-10 flex w-full bg-primar">
      <div className="p-10 flex-1">
        <FullCalendar
          initialView="dayGridMonth"
          weekends={false}
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
      <UpComingEvent />
    </div>
  )
}
