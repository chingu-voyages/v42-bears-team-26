/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import React from 'react'

type Props = {
  icon_2: JSX.Element
}

const StarRating = ({ icon_2 }: Props) => {
  return (
    <div className="flex justify-center text-center">
      <div>{icon_2}</div>
    </div>
  )
}

export default StarRating
