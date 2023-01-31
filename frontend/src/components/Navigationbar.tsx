import React from 'react'
import Button from './Button'
import {
  MdDashboard,
  MdAssessment,
  MdArticle,
  MdSettings,
  MdAssignmentInd,
  MdDateRange,
  MdLogout,
} from 'react-icons/md'

function Navigationbar() {
  return (
    <>
      <nav className="grid grid-cols-1 grid-rows-5 bg-primaryColor_white pl-12 py-12 w-96 justify-items-start h-screen">
        <section className="col-span-1 row-span-1">
          <h1 className='text-2xl'>HealthHero</h1>
        </section>
        <section className="col-span-1 row-span-4">
          <ul className="flex flex-col gap-6 whitespace-nowrap ">
            <li>
              <div className="flex flex-row gap-3">
                <MdDashboard className="text-2xl" />
                <h3>Dashboard</h3>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-3">
                <MdAssessment className="text-2xl" />
                <h3>Medication Tracking</h3>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-3">
                <MdDateRange className="text-2xl" />
                <h3>Calender</h3>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-3">
                <MdArticle className="text-2xl" />
                <h3>Medical Results</h3>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-3">
                <MdAssignmentInd className="text-2xl" />
                <h3>Profile</h3>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-3">
                <MdSettings className="text-2xl" />
                <h3>Settings</h3>
              </div>
            </li>
          </ul>
        </section>
        <section className="col-span-1 row-span-4 mb-12">
          <div className="px-10 py-12 rounded-lg border-secondaryColor_black border-0 flex flex-col gap-6 items-center bg-gradient-to-r to-linearColor_orange from-linearColor_pink">
            <h1 className="font-bold">Got a Question</h1>
            <Button
              label="Cancel"
              className="py-2 px-4 rounded-full text-primaryColor_white w-[100px] bg-secondaryColor_black"
            />
          </div>
        </section>
        <section className="col-span-1 row-span-5 flex flex-row gap-3">
          <MdLogout className="text-2xl" />
          <h3>Logout</h3>
        </section>
      </nav>
    </>
  )
}

export default Navigationbar
