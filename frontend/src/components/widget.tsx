import React, { ReactNode } from 'react'
import '../components/index.css'
export default function index(props: {
  content: ReactNode
  title: string
  options?: ReactNode | string
}) {
  return (
    <div className="bg-white p-8 my-10 border border-white border-radius-20 mx-2">
      <div className="flex my-3 text-xl font-semibold">
        <div className="flex-1">{props.title}</div>
        <div className="flex-initial">{props.options}</div>
      </div>

      {props.content}
    </div>
  )
}
