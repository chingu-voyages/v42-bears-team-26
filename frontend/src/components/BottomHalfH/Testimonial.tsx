/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import React from 'react';

type Props = {
  icon: JSX.Element
  icon_2: JSX.Element
  icon_3: JSX.Element
  icon_4: JSX.Element
  icon_5: JSX.Element
  icon_6: JSX.Element
  comment: string
  name: string
  location: string
}

const Testimonial = ({
  icon,
  comment,
  name,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  location,
}: Props) => {
  return (
    <div className="h-84 w-80 mt-5 rounded-md border-2 border-gray px-2 py-5 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray bg-rose-50 p-4">
          {icon}
        </div>
      </div>
      <p className="font-poppins">{comment}</p>
      <div className="mt-4 mb-4 flex justify-center">
        <div>{icon_2}</div>
        <div>{icon_3}</div>
        <div>{icon_4}</div>
        <div>{icon_5}</div>
        <div>{icon_6}</div>
      </div>
      <div className="font-bold">
        <h4>{name}</h4>
      </div>
      <p>{location}</p>
    </div>
  )
}

export default Testimonial;
