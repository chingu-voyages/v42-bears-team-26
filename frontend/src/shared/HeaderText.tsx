/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HeaderText = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-poppins text-3xl font-bold">
        {children}
    </h1>
  )
}

export default HeaderText