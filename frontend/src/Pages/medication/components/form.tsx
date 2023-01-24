import React from 'react'
import { GrClose } from 'react-icons/gr'
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

const intakeTime = [
  'breakfast',
  'lunch',
  'dinner',
  'bedtime'
]

const FormFieldLabel = ({ label }: { label: string }) => (
  <label className="mb-2 block text-sm font-medium font-sans">{label}</label>
)
const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-5">{children}</div>
}

const FormTitle = ({ title }: { title: string }) => (
  <div className="text-lg font-medium">{title}</div>
)

const Input = () => (
  <div>
    <input
      className="w-full py-2 px-3 focus:outline-none border-2 border-black  rounded-2xl"
      type="text"
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

export const Form = ({ title, onOk }: { title: string; onOk: () => void }) => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0 bg-secondaryColor_black/[0.6]">
      <div className=" bg-primaryColor_white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] p-10 rounded-[40px] border-2">
        <div className="flex items-center justify-between mb-8">
          <FormTitle title={title} />
          <GrClose onClick={onOk} className="cursor-pointer" />
        </div>
        <FormSection>
          <FormFieldLabel label="Medication name" />
          <Input />
        </FormSection>
        <FormSection>
          <FormFieldLabel label="Dosage" />
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
              onChange={() => {
                return undefined
              }}
            />
          </div>

          <div className="inline-block">
            <Select
              options={['Hourly', 'Daily', 'Weekly']}
              onChange={() => {
                return undefined
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
          <Input />
        </FormSection>
        <div className="flex justify-center gap-6 mt-10">
          <Button
            label="Add"
            onClick={onOk}
            className="py-2 px-4 rounded-full bg-secondaryColor_black border-secondaryColor_black border-2 text-primaryColor_white w-[100px]"
          />
          <Button
            label="Cancel"
            onClick={onOk}
            className="py-2 px-4 rounded-full text-secondaryColor_black w-[100px] border-secondaryColor_black border-2 bg-primaryColor_white"
          />
        </div>
      </div>
    </div>
  )
}
