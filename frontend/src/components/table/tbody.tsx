import React, { ReactNode } from 'react'

import { GoEye } from 'react-icons/go'
import { FiDownloadCloud } from 'react-icons/fi'
import moment from 'moment'

type TdProps = {
  lable?: string
  icon?: ReactNode
}
export default function Tbody(props: {
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
