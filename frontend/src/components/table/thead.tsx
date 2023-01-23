import React from 'react'

export default function Thead(props: { data: string[] }) {
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
