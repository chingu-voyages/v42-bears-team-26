import React from 'react'

export const Table = (props: { children: React.ReactNode }) => (
  <div className="overflow-x-scroll border border-white rounded-lg ">
    <table className="table-fixed w-full">{props.children}</table>
  </div>
)
