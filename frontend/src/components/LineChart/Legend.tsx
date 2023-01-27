import React from 'react'
export default function Legend() {
  return (
    <div className="flex">
      <div className="flex ml-3">
        <div className="flex-initial bg-linearColor_orange rounded-full m-2 w-4 h-4" />
        <div className="text-linearColor_orange">Target</div>
      </div>
      <div className="flex ml-5">
        <div className="flex-initial bg-linearColor_peacock rounded-full m-2  w-4 h-4" />
        <div className="text-linearColor_peacock">Achieved</div>
      </div>
    </div>
  )
}
