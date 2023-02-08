import React from 'react'
import { GrClose } from 'react-icons/gr'

const ModalTitle = ({ title }: { title: string }) => (
  <div className="text-lg font-medium">{title}</div>
)

export const Modal = ({
  title,
  onClose,
  Actions,
  children,
}: {
  title: string
  onClose: () => void
  Actions?: React.ReactNode
  children: React.ReactNode
}) => (
  <div className="h-screen w-screen absolute top-0 left-0 bg-secondaryColor_black/[0.6]">
    <div className=" bg-primaryColor_white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] p-10 rounded-[40px] border-2">
      <div className="flex items-center justify-between mb-8">
        <ModalTitle title={title} />
        <GrClose onClick={onClose} className="cursor-pointer" />
      </div>
      {children}
      <div className="flex justify-center gap-6 mt-10">{Actions}</div>
    </div>
  </div>
)
