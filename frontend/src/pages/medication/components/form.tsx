import React, { useState } from 'react'
import { MedicationEntry } from '..'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Modal } from '../../../components/Modal'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const intakeTime = ['breakfast', 'lunch', 'dinner', 'bedtime']

const FormFieldLabel = ({ label }: { label: string }) => (
  <label className="mb-2 block text-sm font-medium font-sans">{label}</label>
)
const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-5">{children}</div>
}

const Select = ({
  options,
  onChange,
}: {
  options: string[] | number[]
  onChange: (option: string | number) => void
}) => (
  <div>
    <select
      className="rounded-xl w-full py-2 px-3 border-black border-2 bg-white"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

const CheckBox = ({
  label,
  onSelect,
}: {
  label: string
  onSelect: (isChecked: boolean) => void
}) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => onSelect(e.target.checked)}
        className="form-check-input h-4 w-4 border-black border-[1px] rounded-sm bg-white checked:text-white checked:bg-blue-600 checked:border-blue-800 transition duration-200 mr-2 cursor-pointer"
      />
      <label>{label} </label>
    </>
  )
}

export const Form = ({
  title,
  onOk,
  onCancel,
}: {
  title: string
  onOk: (data: MedicationEntry) => void
  onCancel: () => void
}) => {
  const [medicationName, setMedicationName] = useState('')
  const [additionalContent, setAdditionalContent] = useState('')
  const [frequency, setFrequency] =
    useState<MedicationEntry['frequency']>('hourly')
  const [dosage, setDosage] = useState(1)

  const handleSubmit = () => {
    onOk({ name: medicationName, dosage, frequency })
  }

  return (
    <Modal
      title={title}
      onClose={onCancel}
      Actions={
        <>
          <Button
            label="Add"
            onClick={handleSubmit}
            className="py-2 px-4 rounded-full bg-secondaryColor_black border-secondaryColor_black border-2 text-primaryColor_white w-[100px]"
          />
          <Button
            label="Cancel"
            onClick={onCancel}
            className="py-2 px-4 rounded-full text-secondaryColor_black w-[100px] border-secondaryColor_black border-2 bg-primaryColor_white"
          />
        </>
      }
    >
      <FormSection>
        <FormFieldLabel label="Medication name" />
        <Input
          value={medicationName}
          onChange={(value) => setMedicationName(value)}
        />
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Dosage" />
        <div className="mb-3">
          <div className="mb-2 inline-block mr-3">
            <Select
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onChange={() => {
                return undefined
              }}
            />
          </div>
          <div className="inline-block mr-3">
            <Select
              options={['tablet', 'sachet', 'tablespoon', 'teaspoon']}
              onChange={() => {
                return undefined
              }}
            />
          </div>
          <div className="inline-block">
            <Select
              options={['before', 'after']}
              onChange={() => {
                return undefined
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center w-100">
          {intakeTime.map((time) => (
            <div className="flex w-[120px] items-center gap-2" key={time}>
              <CheckBox
                onSelect={(checked) => {
                  console.log({ intakeTime, checked })
                }}
                label={time}
              />
            </div>
          ))}
        </div>
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Frequency" />
        <div className="mb-2 inline-block mr-3">
          <Select
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={(option) => {
              console.log(option)
              setDosage(option as number)
            }}
          />
        </div>

        <div className="inline-block">
          <Select
            options={['hourly', 'daily', 'weekly']}
            onChange={(option) => {
              setFrequency(option as MedicationEntry['frequency'])
            }}
          />
        </div>
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Days" />
        <div className="flex flex-wrap gap-2 items-center w-100">
          {days.map((day) => (
            <div className="flex w-[120px] items-center gap-2" key={day}>
              <CheckBox
                onSelect={(checked) => {
                  console.log({ day, checked })
                }}
                label={day}
              />
            </div>
          ))}
        </div>
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Additional notification content" />
        <Input
          value={additionalContent}
          onChange={(value) => setAdditionalContent(value)}
        />
      </FormSection>
    </Modal>
  )
}
