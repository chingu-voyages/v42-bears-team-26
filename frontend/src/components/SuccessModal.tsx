import React from 'react'
import { Modal } from './Modal'

export const SuccessModal = ({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) => (
  <Modal title="" onClose={onClose}>
    <div className="text-center text-2xl font-semibold text-green-500 mb-4">
      {message}
    </div>
    <div className="text-center">
      Your account has been created. <br /> You can now log in.
    </div>
  </Modal>
)
