import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {
  MdDashboard,
  MdAssessment,
  MdArticle,
  MdSettings,
  MdAssignmentInd,
  MdDateRange,
  MdLogout,
  MdMenu,
} from 'react-icons/md'

const navItems = [
  {
    title: 'dashboard',
    icon: <MdDashboard className="text-2xl" />,
    to: '/dashboard',
  },
  {
    title: 'Medication Tracking',
    icon: <MdAssessment className="text-2xl" />,
    to: '/medication',
  },
  {
    title: 'Calendar',
    icon: <MdDateRange className="text-2xl" />,
    to: '/calendar',
  },
  {
    title: 'Medical Results',
    icon: <MdArticle className="text-2xl" />,
    to: '/test-results',
  },
  {
    title: 'Profile',
    icon: <MdAssignmentInd className="text-2xl" />,
    to: '#',
  },
  {
    title: 'Settings',
    icon: <MdSettings className="text-2xl" />,
    to: '#',
  },
]

function Navigationbar() {
  const navigate = useNavigate()

  return (
    <>
      <nav className="bg-primaryColor_white pl-12 py-12 pr-10 lg:h-screen whitespace-nowrap lg:sticky lg:top-0">
        <div className="grid grid-cols-2 grid-rows-4 lg:flex lg:flex-wrap justify-between lg:flex-col">
          <section className="col-span-1 row-span-1 lg:mb-10">
            <h1 className="text-2xl">HealthHero</h1>
          </section>

          <input
            type="checkbox"
            id="checkbox_toggle"
            className="peer hidden"
          ></input>
          <label
            htmlFor="checkbox_toggle"
            className="lg:hidden flex text-3xl cursor-pointer col-span-1 row-span-1 justify-end"
          >
            <MdMenu />
          </label>

          <div
            className="lg:bg-transparent bg-primaryColor_white peer-checked:flex col-span-2 row-span-3 rounded border-2 border-gray lg:border-0 hidden lg:flex flex-col z-10 p-6 lg:p-0"
            id="checkbox_toggle"
          >
            <section className="flex flex-col">
              <ul className="flex flex-col">
                <li>
                  {navItems.map((item) => {
                    return (
                      <Link to={item.to}>
                        <div className="flex flex-row gap-3 mb-6">
                          {item.icon}
                          <h3>{item.title}</h3>
                        </div>
                      </Link>
                    )
                  })}
                </li>
              </ul>
            </section>
            <section className="mb-12 lg:block hidden">
              <div className="px-10 py-12 rounded-lg border-secondaryColor_black border-0 flex flex-col gap-6 items-center bg-gradient-to-r to-linearColor_orange from-linearColor_pink">
                <h1 className="font-bold">Got a Question</h1>
                <HashLink to="/#chat-with-us">
                  <Button
                    label="Ask"
                    className="py-2 px-4 rounded-full text-primaryColor_white w-[100px] bg-secondaryColor_black"
                  />
                </HashLink>
              </div>
            </section>
            <section className="flex flex-row gap-3">
              <MdLogout className="text-2xl cursor-pointer" />
              <h3 className="cursor-pointer" onClick={() => navigate('/')}>
                Logout
              </h3>
            </section>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigationbar
