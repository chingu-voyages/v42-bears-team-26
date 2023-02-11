import React from 'react'
import UpComingActivities from './UpComingActivities'
import Widget from '../../components/widget'
import Legend from '../../components/LineChart/Legend'
import LineChart from '../../components/LineChart/LineChart'
import Reminder from '../../components/Reminder'

export function DashboardPage() {
  return (
    <div className="w-100">
      <Reminder />
      <Widget
        title="Upcoming activities/Appointments"
        content={<UpComingActivities />}
        options={<div className="text-linearColor_green">View All</div>}
      />

      <Widget
        title="Medication Time Schedule Statistics"
        content={
          <LineChart
            target={[55, 66, 77, 60, 44, 33]}
            achieved={[34, 45, 66, 44, 22, 55]}
          />
        }
        options={<Legend />}
      />
    </div>
  )
}
