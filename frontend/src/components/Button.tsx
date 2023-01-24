import React from 'react'

type Props = {
  label: string
  className: string
  onClick?: () => void
}

function Button(props: Props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.label}
    </button>
  )
}

export default Button
