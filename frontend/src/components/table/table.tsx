import React, { ReactNode } from 'react'
import './index.css'
import { GoEye } from 'react-icons/go'
import { FiDownloadCloud } from 'react-icons/fi'
import moment from 'moment'

function TabhleHead(props: { data: string[] }) {
  return (
    <thead className="bg-white border-b">
      <tr>
        {props.data.map((name) => (
          <th
            scope="col"
            className="px-6 py-3 text-md font-bold text-left text-black-500 uppercase bg-white"
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

type TdProps = {
  lable?: string
  icon?: ReactNode
}
function Tablebody(props: {
  data: { name: string; description: string; date: string }[]
}) {
  const Td = (props: TdProps) => (
    <td className="px-6 py-4 text-sm font-medium text-secondaryColor_slate whitespace-nowrap border border-none">
      {props.lable}
      {props.icon}
    </td>
  )

  return (
    <>
      {props.data.map((item, i) => (
        <tr className={i % 2 === 0 ? 'bg-secondaryColor_lace' : 'bg-white'}>
          <Td lable={item.name} />
          <Td lable={item.description} />
          <Td lable={moment(item.date).format('YYYY/MM/DD')} />
          <Td
            icon={
              <>
                <span className="flex">
                  <GoEye className="mr-3 text-linearColor_orange text-xl" />
                  <FiDownloadCloud className="text-xl text-sencodaryColor_slate" />
                </span>
              </>
            }
          />
        </tr>
      ))}
    </>
  )
}
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
        <TabhleHead data={props.thead} />
        <tbody className="divide-y divide-gray-200">
          <Tablebody data={props.tbody} />
        </tbody>
      </table>
    </div>
  )
}
