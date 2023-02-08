import React from 'react'
import { Modal } from './Modal'

export const ErrorModal = ({
  error,
  onClose,
}: {
  error: string
  onClose: () => void
}) => (
  <Modal title="" onClose={onClose}>
    <div className="text-center text-2xl font-semibold text-red-500 mb-4">
      An Error occurred 😔
    </div>
    <div className="text-center">{error}</div>
  </Modal>
)
