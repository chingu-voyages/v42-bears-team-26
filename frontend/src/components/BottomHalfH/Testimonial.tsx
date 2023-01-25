/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import React from 'react'

type Props = {
icon: JSX.Element;
icon_2: JSX.Element;
comment: string;
name: string;
location: string;
}

const Testimonial = ({icon, comment, name, icon_2, location}: Props) => {
  return (
   <div className="mt-5 rounded-md border-2 border-gray px-5 py-16 text-center">
    <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray bg-yellow-200 p-4">
            {icon}
        </div>
    </div>
    <p className="font-popins">{comment}</p>
    <div>{icon_2}</div>
    <h4>{name}</h4>
    <p>{location}</p>
   </div>
  )
}

export default Testimonial;