import React, { useState } from 'react'
import Button from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'

const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-5">{children}</div>
}

export const RegisterModal = ({
  show,
  onRegister,
  onClose,
}: {
  show: boolean
  onRegister: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void
  onClose: () => void
}) => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClose = () => {
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastName('')
    onClose()
  }

  if (!show) return null

  return (
    <Modal
      title="Register"
      onClose={handleClose}
      Actions={
        <>
          <Button
            label="Create"
            onClick={() => onRegister(firstName, lastName, email, password)}
            className="py-2 px-4 rounded-full bg-secondaryColor_black border-secondaryColor_black border-2 text-primaryColor_white w-[100px]"
          />
          <Button
            label="Cancel"
            onClick={handleClose}
            className="py-2 px-4 rounded-full text-secondaryColor_black w-[100px] border-secondaryColor_black border-2 bg-primaryColor_white"
          />
        </>
      }
    >
      <FormSection>
        <FormSection>
          <Input
            value={firstName}
            onChange={(fn) => setFirstname(fn)}
            placeholder="First name"
          />
        </FormSection>
        <FormSection>
          <Input
            value={lastName}
            onChange={(ln) => setLastName(ln)}
            placeholder="Last name"
          />
        </FormSection>
        <Input
          value={email}
          onChange={(e) => setEmail(e)}
          placeholder="Email"
        />
      </FormSection>
      <FormSection>
        <Input
          value={password}
          onChange={(p) => setPassword(p)}
          placeholder="Password"
        />
      </FormSection>
    </Modal>
  )
}
