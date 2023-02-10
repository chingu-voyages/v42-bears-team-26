import React, { useEffect, useState } from 'react'
import { MedicationEntry } from '..'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Modal } from '../../../components/Modal'

const FormFieldLabel = ({ label }: { label: string }) => (
  <label className="mb-2 block text-sm font-medium font-sans">{label}</label>
)
const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-5">{children}</div>
}

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

// const CheckBox = ({
//   label,
//   onSelect,
// }: {
//   label: string
//   onSelect: (isChecked: boolean) => void
// }) => {
//   return (
//     <>
//       <input
//         type="checkbox"
//         onChange={(e) => onSelect(e.target.checked)}
//         className="form-check-input h-4 w-4 border-black border-[1px] rounded-sm bg-white checked:text-white checked:bg-blue-600 checked:border-blue-800 transition duration-200 mr-2 cursor-pointer"
//       />
//       <label>{label} </label>
//     </>
//   )
// }

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
  const [frequencyAmount, setFrequencyAmount] = useState(1)
  const [frequencyUnit, setFrequencyUnit] =
    useState<MedicationEntry['frequency_unit']>('daily')
  const [dosageAmount, setDosageAmount] = useState(1)
  const [dosageUnit, setDosageUnit] =
    useState<MedicationEntry['dosage_unit']>('pill')
  const [reminderTimes, setReminderTimes] = useState<string[]>(['08:00'])
  const [amount, setAmount] = useState(0)
  const [thresholdAmount, setThresholdAmount] = useState(0)
  const [additionalContent, setAdditionalContent] = useState('')

  const removeReminders = (start: number, count: number) => {
    const reminders = [...reminderTimes]
    reminders.splice(start, count)
    setReminderTimes(reminders)
  }

  const addReminders = (number: number) => {
    const newItems = Array(number).fill('08:00')
    setReminderTimes((rs) => [...rs, ...newItems])
  }

  useEffect(() => {
    if (frequencyAmount < reminderTimes.length) {
      removeReminders(frequencyAmount, reminderTimes.length)
    }

    if (frequencyAmount > reminderTimes.length) {
      addReminders(frequencyAmount - reminderTimes.length)
    }
  }, [frequencyAmount])

  const handleSubmit = () => {
    onOk({
      med_name: medicationName,
      frequency_amount: frequencyAmount,
      frequency_unit: frequencyUnit,
      dosage_amount: dosageAmount,
      dosage_unit: dosageUnit,
      is_inUse: false,
      reminder_times: reminderTimes,
      is_current: false,
      amount: amount,
      threshold_amount: thresholdAmount,
    })
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
        <FormFieldLabel label="Dosage (intake amount)" />
        <div className="mb-3">
          <div className="mb-2 inline-block mr-3">
            <Select
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onChange={(option) => {
                setDosageAmount(option as number)
              }}
            />
          </div>
          <div className="inline-block mr-3">
            <Select
              options={[
                'pill',
                'tablet',
                'capsule',
                'sachet',
                'tablespoon',
                'teaspoon',
              ]}
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
              setFrequencyAmount(option as number)
            }}
          />
        </div>

        <div className="inline-block">
          <Select
            options={['daily', 'hourly', 'weekly']}
            onChange={(option) => {
              setFrequencyUnit(option as MedicationEntry['frequency_unit'])
            }}
          />
        </div>
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Set reminder" />
        <div className="mb-3">
          <div className="mb-2 flex flex-wrap mr-3">
            {reminderTimes.map((reminder, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="timepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="time"
                    id="reminder"
                    className="w-full py-2 px-3 focus:outline-none border-2 border-black  rounded-2xl form-control block  text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 "
                    name="reminder"
                    value={reminder}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setReminderTimes((rs) => {
                        return rs.map((r, i) => {
                          if (i === index) return e.target.value
                          return r
                        })
                      })
                      return undefined
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FormSection>
      <FormSection>
        <div className="mb-3">
          <div className="mb-2 flex mr-3">
            <div>
              <FormFieldLabel label="Inventory amount" />
              <InputNum value={amount} onChange={(value) => setAmount(value)} />
            </div>
            <div>
              <FormFieldLabel label="Threshold amount" />
              <InputNum
                value={thresholdAmount}
                onChange={(value) => setThresholdAmount(value)}
              />
            </div>
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
    </Modal>
  )
}
