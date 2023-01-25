import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
  icon: JSX.Element
  stars: number
  comment: string
  name: string
  location: string
}

const Testimonial = ({ icon, comment, stars, name, location }: Props) => {
  return (
    <div className="h-84 w-80 mt-5 rounded-md border-2 border-gray px-2 py-5 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray bg-rose-50 p-4">
          {icon}
        </div>
      </div>
      <p className="font-poppins">{comment}</p>
      <div className="mt-4 mb-4 flex justify-center">
        {Array(stars)
          .fill(undefined)
          .map(() => (
            <StarIcon className="h-6 w-6" />
          ))}
      </div>
      <div className="font-bold">
      <h4>{name}</h4>
      </div>
      <p>{location}</p>
    </div>
  )
}

export default Testimonial
