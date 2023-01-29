import React from 'react'
import Button from './Button'
import { MdDashboard, MdAssessment, MdArticle, MdSettings, MdAssignmentInd, MdDateRange, MdLogout } from 'react-icons/md'

function Navigationbar() {
  return (
  <>
  <nav className='grid grid-cols-1 grid-rows-5 bg-primaryColor_white pl-12 py-12 w-96 mr-10 justify-items-start h-screen'>
    <section className='col-span-1 row-span-1 text-2xl'>HealthHero</section>
    <section className='col-span-1 row-span-4'>
      <ul className='flex flex-col gap-6'>
        <li>
          <div className='flex flex-row gap-3'>
            <MdDashboard className="text-2xl" />
            <h3>Dashboard</h3>
          </div>
        </li>
        <li>
          <div className='flex flex-row gap-3'>
            <MdAssessment className="text-2xl" />
            <h3>Medication Tracking</h3>
          </div>
        </li>
        <li>
          <div className='flex flex-row gap-3'>
            <MdDateRange className="text-2xl" />
            <h3>Calender</h3>
          </div>
        </li>
        <li>
          <div className='flex flex-row gap-3'>
            <MdArticle className="text-2xl" />
            <h3>Medical Results</h3>
          </div>
        </li>
        <li>
          <div className='flex flex-row gap-3'>
            <MdAssignmentInd className="text-2xl" />
            <h3>Profile</h3>
          </div>
        </li>
        <li>
          <div className='flex flex-row gap-3'>
            <MdSettings className="text-2xl" />
            <h3>Settings</h3>
          </div>
        </li>
      </ul>
    </section>
    <section className='col-span-1 row-span-4 mb-12'>
      <div className='p-4 rounded border-secondaryColor_black border-2'>
        <h1>Got a Question</h1>
        <Button
            label="Cancel"
            className="py-2 px-4 rounded-full text-secondaryColor_black w-[100px] border-secondaryColor_black border-2 bg-primaryColor_white"
          />
      </div>
    </section>
    <section className='col-span-1 row-span-5 flex flex-row gap-3'>
      <MdLogout className="text-2xl" />
      <h3>Logout</h3>
    </section>
  </nav>
  </>
  )
}

export default Navigationbar
