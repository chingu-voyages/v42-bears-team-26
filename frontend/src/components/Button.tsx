import React from 'react'

type Props = {
  lable: string
  onClick: any
  className: string
}

function Button(props: Props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.lable}
    </button>
  )
}

export default Button
