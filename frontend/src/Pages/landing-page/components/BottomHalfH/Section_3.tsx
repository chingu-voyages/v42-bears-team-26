/*Designed by Sandra Ashipala https://github.com/sandramsc*/
//import React from 'react'

import HeaderText from '../shared/HeaderText'
import Menu from './Menu'
import { MenuType } from '../shared/types'

const menus: Array<MenuType> = [
  {
    title: 'MENU ITEM 1',
    sub_menu_1: 'Submenu 1',
    sub_menu_2: 'Submenu 2',
    sub_menu_3: 'Submenu 3',
    sub_menu_4: 'Submenu 4',
  },
  {
    title: 'MENU ITEM 2',
    sub_menu_1: 'Submenu 1',
    sub_menu_2: 'Submenu 2',
    sub_menu_3: 'Submenu 3',
    sub_menu_4: 'Submenu 4',
  },
  {
    title: 'MENU ITEM 3',
    sub_menu_1: 'Submenu 1',
    sub_menu_2: 'Submenu 2',
    sub_menu_3: 'Submenu 3',
    sub_menu_4: 'Submenu 4',
  },
  {
    title: 'MENU ITEM 4',
    sub_menu_1: 'Submenu 1',
    sub_menu_2: 'Submenu 2',
    sub_menu_3: 'Submenu 3',
    sub_menu_4: 'Submenu 4',
  },
  {
    title: 'MENU ITEM 5',
    sub_menu_1: 'Submenu 1',
    sub_menu_2: 'Submenu 2',
    sub_menu_3: 'Submenu 3',
    sub_menu_4: 'Submenu 4',
  },
]

function Section_3() {
  return (
    <div className="bg-primaryColor_beige">
      <section id="menus" className="justify-between gap-4 md:flex pt-4 mb-14">
        
        <div className="mt-5 ml-20 mr-20 justify-between gap-8 md:flex">
          <div className="relative basis-1/5 text-white">
            {/* FISRT-SECTION */}
            <HeaderText>HealthHero</HeaderText>
          </div>
          <span className="h-full w-0.5 bg-white"></span>
            <div className="text-white relative -mt-9 basis-3/5 items-center justify-between md:flex">
              {/* CENTER-SECTION */}
              {menus.map((menu: MenuType) => (
                <Menu
                  key={menu.title}
                  title={menu.title}
                  sub_menu_1={menu.sub_menu_1}
                  sub_menu_2={menu.sub_menu_2}
                  sub_menu_3={menu.sub_menu_3}
                  sub_menu_4={menu.sub_menu_4}
                />
              ))}
            </div>
            <span className="h-full w-0.5 bg-white"></span>
            <div className="text-white relative w-4/6 basis-1/5">
              {/* SECOND-SECTION */}
              <p className="font-bold">MENU ITEM 6</p>
              <p>
                Vel nesciunt quia molestiae tempore qui nobis harum tempore qui
                nobis harum.
              </p>
            </div>

        </div>
      </section>
    </div>
  )
}
export default Section_3
