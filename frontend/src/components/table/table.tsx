import React from 'react'
import './index.css'
import Thead from './thead'
import Tbody from './tbody'
export default function Table(props: {
  thead: string[]
  tbody: {
    name: string
    description: string
    date: string
  }[]
}) {
  return (
    <div className="overflow-x-scroll  border border-white rounded-lg ">
      <table className="table-fixed w-full">
        <Thead data={props.thead} />
        <tbody className="divide-y divide-gray-200">
          <Tbody data={props.tbody} />
        </tbody>
      </table>
    </div>
  )
}
