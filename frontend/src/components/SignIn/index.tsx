import React, { useState } from 'react'
import Button from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'

const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-5">{children}</div>
}

export const SignInModal = ({
  show,
  onSignIn,
  onClose,
}: {
  show: boolean
  onSignIn: (email: string, password: string) => void
  onClose: () => void
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClose = () => {
    setEmail('')
    setPassword('')
    onClose()
  }

  if (!show) return null

  return (
    <Modal
      title="Log in"
      onClose={handleClose}
      Actions={
        <>
          <Button
            label="Sign in"
            onClick={() => onSignIn(email, password)}
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
