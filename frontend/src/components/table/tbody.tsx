import React, { ReactNode } from 'react'

type TableFieldProps = {
  value?: string | ReactNode
}

export const TableField = (props: TableFieldProps) => (
  <td className="px-6 py-4 text-sm font-medium text-secondaryColor_slate whitespace-nowrap border border-none">
    {props.value}
  </td>
)

export const TableRow = (props: {
  color: string
  children: React.ReactNode
}) => {
  return <tr className={props.color}>{props.children}</tr>
}

export const TableBody = (props: { children: React.ReactNode }) => {
  return <tbody className="divide-y divide-gray-200">{props.children}</tbody>
}
