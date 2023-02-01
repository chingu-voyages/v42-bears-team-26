import React from 'react'
import { MdNotifications } from 'react-icons/md'

type TitleBarProps = {
  title: string
  message: string
}

export const TitleBar = (props: TitleBarProps) => {
  return (
    <div className=" w-full  divide-y divide-gray ">
      <div className="w-full flex  bg-white p-10">
        <input
          type="search"
          className="flex-1 mr-20 w-full h-20 px-5 border border-none rounded-lg bg-secondaryColor_lace"
          id="Search"
          placeholder="Search"
        />
        <MdNotifications className="text-5xl" />
      </div>
      <div className="mb-8 bg-white py-3 px-10">
        <h1 className="flex-1 py-1 text-3xl font-bold text-secondaryColor_black">
          {props.title}
        </h1>
        <span className="text-gray">{props.message}</span>
      </div>
    </div>
  )
}
