import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { MedicationEntry } from '..'
import Button from '../../../components/Button'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// const intakeTime = ['breakfast', 'lunch', 'dinner', 'bedtime']

const FormFieldLabel = ({ label }: { label: string }) => (
  <label className="mb-2 block text-sm font-medium font-sans">{label}</label>
)
const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-5">{children}</div>
}

const FormTitle = ({ title }: { title: string }) => (
  <div className="text-lg font-medium">{title}</div>
)

const Input = ({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) => (
  <div>
    <input
      className="w-full py-2 px-3 focus:outline-none border-2 border-black  rounded-2xl"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </div>
)

const InputNum = ({
  value,
  onChange,
}: {
  value: number
  onChange: (value: number) => void
}) => (
  <div>
    <input
      className="w-full py-2 px-3 focus:outline-none border-2 border-black  rounded-2xl"
      type="number"
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      required
    />
  </div>
)

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
  const [frequencyAmount, setFrequencyAmount] = useState(3)
  const [frequencyUnit, setFrequencyUnit] =
    useState<MedicationEntry['frequency_unit']>('daily')
  const [dosageAmount, setDosageAmount] = useState(1)
  const [dosageUnit, setDosageUnit] =
    useState<MedicationEntry['dosage_unit']>('pill')
  const [isInUse, setIsInUse] = useState(true)
  const [reminderTime, setReminderTime] = useState('18:00:00+00:00')
  const [amount, setAmount] = useState(0)
  const [thresholdAmount, setThresholdAmount] = useState(0)
  const [isCurrent, setIsCurrent] = useState(true)
  const [additionalContent, setAdditionalContent] = useState('')

  const handleSubmit = () => {
    onOk({
      med_name: medicationName,
      frequency_amount: frequencyAmount,
      frequency_unit: frequencyUnit,
      dosage_amount: dosageAmount,
      dosage_unit: dosageUnit,
      is_inUse: isInUse,
      reminder_time: reminderTime,
      is_current: isCurrent,
      amount: amount,
      threshold_amount: thresholdAmount,
    })
  }

  setIsInUse(true)
  setReminderTime('18:00:00+00:00')
  setIsCurrent(true)

  return (
    <div className="h-screen w-screen absolute top-0 left-0 bg-secondaryColor_black/[0.6]">
      <div className=" bg-primaryColor_white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] p-10 rounded-[40px] border-2">
        <div className="flex items-center justify-between mb-8">
          <FormTitle title={title} />
          <GrClose onClick={onCancel} className="cursor-pointer" />
        </div>
        <FormSection>
          <FormFieldLabel label="Medication name" />
          <Input
            value={medicationName}
            onChange={(value) => setMedicationName(value)}
          />
        </FormSection>
        <FormSection>
          <FormFieldLabel label="Dosage (intake amount)" />
          <div className="mb-3">
            <div className="mb-2 inline-block mr-3">
              <Select
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onChange={(option) => {
                  console.log(option)
                  setDosageAmount(option as number)
                }}
              />
            </div>
            <div className="inline-block mr-3">
              <Select
                options={['pill', 'tablet', 'sachet', 'tablespoon', 'teaspoon']}
                onChange={(option) => {
                  setDosageUnit(option as MedicationEntry['dosage_unit'])
                }}
              />
            </div>
          </div>
        </FormSection>
        <FormSection>
          <FormFieldLabel label="Frequency" />
          <div className="mb-2 inline-block mr-3">
            <Select
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onChange={(option) => {
                console.log(option)
                setFrequencyAmount(option as number)
              }}
            />
          </div>

          <div className="inline-block">
            <Select
              options={['hourly', 'daily', 'weekly']}
              onChange={(option) => {
                setFrequencyUnit(option as MedicationEntry['frequency_unit'])
              }}
            />
          </div>
        </FormSection>
        <FormSection>
          <FormFieldLabel label="Select Weekdays" />
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
          <FormFieldLabel label="Set reminder" />
          <div className="mb-3">
            <div className="mb-2 inline-block mr-3">
              {/* {Array.from({length: frequency}, (item, index) => item = (index+ 1).toString()).map((item) => ( */}
              {['1', '2', '3'].map((item) => (
                <div className="flex w-[120px] items-center gap-2" key={item}>
                  <div> {item}. </div>
                  <input
                    type="time"
                    id="reminder"
                    name="reminder"
                    onChange={() => {
                      return undefined
                    }}
                    key={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </FormSection>
        <FormSection>
          <div className="mb-3">
            <div className="mb-2 inline-block mr-3">
              <FormFieldLabel label="Inventory amount" />
              <InputNum value={amount} onChange={(value) => setAmount(value)} />
              <FormFieldLabel label="Threshold amount" />
              <InputNum
                value={thresholdAmount}
                onChange={(value) => setThresholdAmount(value)}
              />
            </div>
          </div>
        </FormSection>
        <FormSection>
          <FormFieldLabel label="Additional notification content" />
          <Input
            value={additionalContent}
            onChange={(value) => setAdditionalContent(value)}
          />
        </FormSection>
        <div className="flex justify-center gap-6 mt-10">
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
        </div>
      </div>
    </div>
  )
}
