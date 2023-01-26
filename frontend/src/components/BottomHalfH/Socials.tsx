/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import React from 'react'

type Props = {
  icon_2: JSX.Element
  icon_3: JSX.Element
  icon_4: JSX.Element
  address: string
  phone: number
  email: string
}

const Socials = ({

  icon_2,
  icon_3,
  icon_4,
  address,
  phone,
  email
}: Props) => {
  return (
    <div className="mt-5 px-2 py-5 text-center">
      <div className="mt-4 mb-4 flex justify-center font-poppins">
        <div>{icon_2}<p>{address}</p></div>
        <div>{icon_3}<p>{phone}</p></div>
        <div>{icon_4}<p>{email}</p></div>
      </div>
    </div>
  )
}

export default Socials
