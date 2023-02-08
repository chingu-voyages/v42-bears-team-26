import React from 'react'

export const Input = ({
  value,
  placeholder,
  onChange,
}: {
  value: string
  placeholder?: string
  onChange: (value: string) => void
}) => (
  <div>
    <input
      className="w-full py-2 px-3 focus:outline-none border-2 border-black  rounded-2xl"
      type="text"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      required
      placeholder={placeholder}
    />
  </div>
)
